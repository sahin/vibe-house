import { trpc } from "@/lib/trpc";
import { cn } from "@/lib/utils";
import { ChevronLeft, ChevronRight, Plus, Pencil, Trash2 } from "lucide-react";
import { useMemo, useState } from "react";
import { AccommodationBookingForm } from "@/components/AccommodationBookingForm";
import { BookingStatusBadge } from "@/components/OccupancyBadge";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

const COLORS = [
  "bg-amber-200 border-amber-300 text-amber-900",
  "bg-emerald-200 border-emerald-300 text-emerald-900",
  "bg-blue-200 border-blue-300 text-blue-900",
  "bg-purple-200 border-purple-300 text-purple-900",
  "bg-rose-200 border-rose-300 text-rose-900",
  "bg-teal-200 border-teal-300 text-teal-900",
];

function getColor(index: number) {
  return COLORS[index % COLORS.length];
}

function toDateStr(d: Date | string | null | undefined): string {
  if (d === null || d === undefined) return "";
  if (d instanceof Date) {
    if (isNaN(d.getTime()) || d.getFullYear() < 2000) return "";
    return d.toISOString().split("T")[0];
  }
  if (typeof d === "string") {
    if (!d || d.length < 10) return "";
    return d.split("T")[0];
  }
  return "";
}

function addDays(date: Date, days: number): Date {
  const result = new Date(date);
  result.setDate(result.getDate() + days);
  return result;
}

function formatDateStr(date: Date): string {
  const y = date.getFullYear();
  const m = String(date.getMonth() + 1).padStart(2, "0");
  const d = String(date.getDate()).padStart(2, "0");
  return `${y}-${m}-${d}`;
}

function formatDateDisplay(d: Date | string | null | undefined): string {
  if (!d) return "";
  const str = typeof d === "string" ? d.split("T")[0] : d instanceof Date ? d.toISOString().split("T")[0] : "";
  if (!str) return "";
  const [y, m, day] = str.split("-").map(Number);
  return new Date(y, m - 1, day).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" });
}

const DAYS_TO_SHOW = 30;

type StatusFilter = "all" | "active" | "upcoming" | "completed" | "cancelled";

const STATUS_FILTERS: { value: StatusFilter; label: string }[] = [
  { value: "all", label: "All" },
  { value: "active", label: "Active" },
  { value: "upcoming", label: "Upcoming" },
  { value: "completed", label: "Completed" },
  { value: "cancelled", label: "Cancelled" },
];

function sortBookings(bookings: any[]): any[] {
  const statusOrder: Record<string, number> = { active: 0, upcoming: 1, completed: 2, cancelled: 3 };

  return [...bookings].sort((a, b) => {
    const aOrder = statusOrder[a.status] ?? 4;
    const bOrder = statusOrder[b.status] ?? 4;
    if (aOrder !== bOrder) return aOrder - bOrder;

    const aCheckOut = toDateStr(a.checkOut) || "9999-12-31";
    const bCheckOut = toDateStr(b.checkOut) || "9999-12-31";
    const aCheckIn = toDateStr(a.checkIn) || "";
    const bCheckIn = toDateStr(b.checkIn) || "";

    if (a.status === "active") {
      // Finishing first (earliest checkOut first; ongoing last)
      return aCheckOut.localeCompare(bCheckOut);
    }
    if (a.status === "upcoming") {
      // Closest first (earliest checkIn first)
      return aCheckIn.localeCompare(bCheckIn);
    }
    if (a.status === "completed") {
      // Newest to oldest (latest checkOut first)
      return bCheckOut.localeCompare(aCheckOut);
    }
    // Cancelled — newest first
    return bCheckIn.localeCompare(aCheckIn);
  });
}

export default function AccommodationCalendar() {
  const [offset, setOffset] = useState(0);
  const [showForm, setShowForm] = useState(false);
  const [editingBooking, setEditingBooking] = useState<any>(null);
  const [statusFilter, setStatusFilter] = useState<StatusFilter>("all");

  const { data: roomsData } = trpc.accommodation.rooms.list.useQuery();
  const { data: bookingsData, refetch } = trpc.accommodation.bookings.list.useQuery({ filter: "all" });
  const rooms = roomsData ?? [];
  const allBookings = bookingsData ?? [];

  const today = new Date();
  const todayStr = formatDateStr(today);

  const dates = useMemo(() => {
    const startDate = addDays(today, offset);
    return Array.from({ length: DAYS_TO_SHOW }, (_, i) => addDays(startDate, i));
  }, [offset]);

  const dateStrs = useMemo(() => dates.map(formatDateStr), [dates]);

  const rangeLabel = useMemo(() => {
    const start = dates[0];
    const end = dates[dates.length - 1];
    const startLabel = start.toLocaleDateString("en-US", { month: "short", day: "numeric" });
    const endLabel = end.toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" });
    return `${startLabel} — ${endLabel}`;
  }, [dates]);

  const prevPeriod = () => setOffset(prev => prev - 15);
  const nextPeriod = () => setOffset(prev => prev + 15);
  const goToToday = () => setOffset(0);

  const getBookingsForRoom = (roomId: number) => {
    const visibleStart = dateStrs[0];
    const visibleEnd = dateStrs[dateStrs.length - 1];

    return allBookings.filter(b => {
      if (b.roomId !== roomId) return false;
      if (b.status === "cancelled") return false;
      const checkInStr = toDateStr(b.checkIn);
      const checkOutStr = toDateStr(b.checkOut) || "9999-12-31";
      return checkInStr <= visibleEnd && checkOutStr >= visibleStart;
    });
  };

  const getRoomName = (roomId: number) => rooms.find(r => r.id === roomId)?.name ?? "Unknown";

  const deleteMutation = trpc.accommodation.bookings.delete.useMutation({
    onSuccess: () => { toast.success("Booking deleted"); refetch(); },
    onError: (e) => toast.error(e.message),
  });

  const handleDelete = (id: number, name: string) => {
    if (confirm(`Delete booking for ${name}?`)) {
      deleteMutation.mutate({ id });
    }
  };

  // CSS Grid template: fixed room label + equal day columns
  const gridTemplate = `128px repeat(${DAYS_TO_SHOW}, minmax(36px, 1fr))`;
  const minTableWidth = 128 + DAYS_TO_SHOW * 36;

  return (
    <div className="p-6">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          <button onClick={prevPeriod} className="p-1.5 rounded-md hover:bg-stone-100 transition-colors">
            <ChevronLeft className="h-5 w-5 text-stone-600" />
          </button>
          <h1 className="text-xl font-bold text-stone-900" style={{ fontFamily: "'DM Serif Display', serif" }}>
            {rangeLabel}
          </h1>
          <button onClick={nextPeriod} className="p-1.5 rounded-md hover:bg-stone-100 transition-colors">
            <ChevronRight className="h-5 w-5 text-stone-600" />
          </button>
          {offset !== 0 && (
            <button onClick={goToToday} className="ml-2 px-3 py-1 text-xs rounded-md bg-stone-100 hover:bg-stone-200 text-stone-600 transition-colors">
              Today
            </button>
          )}
        </div>
        <Button onClick={() => { setEditingBooking(null); setShowForm(true); }} size="sm" className="gap-1.5">
          <Plus className="h-4 w-4" /> New Booking
        </Button>
      </div>

      {/* Calendar Grid */}
      <div className="overflow-x-auto border border-stone-200 rounded-xl bg-white">
        <div style={{ display: "grid", gridTemplateColumns: gridTemplate, minWidth: `${minTableWidth}px` }}>
          {/* Header row */}
          <div className="px-3 py-2 text-xs font-medium text-stone-500 uppercase tracking-wider border-b border-stone-200 border-r border-r-stone-100 flex items-end">
            Room
          </div>
          {dates.map((date, idx) => {
            const dateStr = dateStrs[idx];
            const isToday = dateStr === todayStr;
            const dayOfWeek = date.toLocaleDateString("en-US", { weekday: "short" });
            const dayNum = date.getDate();
            const isFirstOfMonth = dayNum === 1;
            return (
              <div
                key={dateStr}
                className={cn(
                  "px-1 py-2 text-center border-b border-stone-200",
                  isToday && "bg-amber-50"
                )}
              >
                <div className={cn("text-[10px] text-stone-400", isToday && "text-amber-600 font-semibold")}>{dayOfWeek}</div>
                <div className={cn("text-xs font-medium text-stone-600", isToday && "text-amber-700 font-bold")}>
                  {isFirstOfMonth ? date.toLocaleDateString("en-US", { month: "short", day: "numeric" }) : dayNum}
                </div>
              </div>
            );
          })}

          {/* Room rows */}
          {rooms.map((room, roomIdx) => {
            const roomBookings = getBookingsForRoom(room.id);
            return (
              <>
                <div
                  key={`label-${room.id}`}
                  className="px-3 py-3 border-b border-stone-100 border-r border-r-stone-100 flex items-center min-h-[48px]"
                >
                  <span className="text-xs font-medium text-stone-700 truncate">{room.name}</span>
                </div>
                <div
                  key={`bars-${room.id}`}
                  className="relative border-b border-stone-100 min-h-[48px]"
                  style={{ gridColumn: `2 / -1` }}
                >
                  {roomBookings.map((booking, bIdx) => {
                    const checkInStr = toDateStr(booking.checkIn);
                    const checkOutStr = toDateStr(booking.checkOut) || "9999-12-31";

                    const firstVisible = dateStrs[0];
                    const lastVisible = dateStrs[dateStrs.length - 1];

                    let startCol: number;
                    if (checkInStr <= firstVisible) {
                      startCol = 0;
                    } else {
                      startCol = dateStrs.indexOf(checkInStr);
                      if (startCol === -1) {
                        startCol = dateStrs.findIndex(d => d >= checkInStr);
                        if (startCol === -1) return null;
                      }
                    }

                    let endCol: number;
                    if (checkOutStr > lastVisible) {
                      endCol = DAYS_TO_SHOW - 1;
                    } else {
                      const idx = dateStrs.indexOf(checkOutStr);
                      if (idx === -1) {
                        const closestIdx = dateStrs.findIndex(d => d >= checkOutStr);
                        endCol = closestIdx === -1 ? DAYS_TO_SHOW - 1 : Math.max(startCol, closestIdx);
                      } else {
                        endCol = idx;
                      }
                    }

                    if (startCol >= DAYS_TO_SHOW || endCol < startCol) return null;

                    const left = `${(startCol / DAYS_TO_SHOW) * 100}%`;
                    const width = `${((endCol - startCol + 1) / DAYS_TO_SHOW) * 100}%`;

                    return (
                      <button
                        key={booking.id}
                        onClick={() => { setEditingBooking(booking); setShowForm(true); }}
                        className={cn(
                          "absolute top-2 h-7 rounded-md border px-2 text-[11px] font-medium truncate cursor-pointer hover:opacity-80 transition-opacity",
                          getColor(bIdx + roomIdx)
                        )}
                        style={{ left, width, minWidth: "24px" }}
                        title={`${booking.guestName} (${checkInStr} → ${checkOutStr === "9999-12-31" ? "ongoing" : checkOutStr})`}
                      >
                        {booking.guestName}
                      </button>
                    );
                  })}
                </div>
              </>
            );
          })}
        </div>
      </div>

      {/* ===== All Bookings List (below calendar) ===== */}
      <div className="mt-8">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-bold text-stone-900" style={{ fontFamily: "'DM Serif Display', serif" }}>
            All Bookings
          </h2>
          <div className="flex items-center gap-1 bg-stone-100 rounded-lg p-1">
            {STATUS_FILTERS.map(f => (
              <button
                key={f.value}
                onClick={() => setStatusFilter(f.value)}
                className={cn(
                  "px-3 py-1.5 text-xs font-medium rounded-md transition-all",
                  statusFilter === f.value
                    ? "bg-white text-stone-900 shadow-sm"
                    : "text-stone-500 hover:text-stone-700"
                )}
              >
                {f.label}
              </button>
            ))}
          </div>
        </div>
        <div className="bg-white border border-stone-200 rounded-xl overflow-hidden shadow-sm">
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-stone-100 bg-stone-50/50">
                  <th className="text-left px-4 py-3 text-xs font-medium text-stone-500 uppercase tracking-wider">Guest</th>
                  <th className="text-left px-4 py-3 text-xs font-medium text-stone-500 uppercase tracking-wider">Room</th>
                  <th className="text-left px-4 py-3 text-xs font-medium text-stone-500 uppercase tracking-wider">Check-in</th>
                  <th className="text-left px-4 py-3 text-xs font-medium text-stone-500 uppercase tracking-wider">Check-out</th>
                  <th className="text-left px-4 py-3 text-xs font-medium text-stone-500 uppercase tracking-wider">Status</th>
                  <th className="text-right px-4 py-3 text-xs font-medium text-stone-500 uppercase tracking-wider">Actions</th>
                </tr>
              </thead>
              <tbody>
                {sortBookings(statusFilter === "all" ? allBookings : allBookings.filter(b => b.status === statusFilter)).length === 0 && (
                  <tr>
                    <td colSpan={6} className="px-4 py-8 text-center text-stone-400 text-sm">
                      {statusFilter === "all" ? "No bookings yet. Create your first booking above." : `No ${statusFilter} bookings.`}
                    </td>
                  </tr>
                )}
                {sortBookings(statusFilter === "all" ? allBookings : allBookings.filter(b => b.status === statusFilter)).map(booking => (
                  <tr
                    key={booking.id}
                    className={cn(
                      "border-b border-stone-50 hover:bg-stone-50/50 transition-colors",
                      booking.status === "cancelled" && "opacity-60"
                    )}
                  >
                    <td className="px-4 py-3">
                      <div className={cn(booking.status === "cancelled" && "line-through")}>
                        <p className="font-medium text-stone-800">{booking.guestName}</p>
                        {booking.guestEmail && <p className="text-xs text-stone-400">{booking.guestEmail}</p>}
                      </div>
                    </td>
                    <td className="px-4 py-3 text-stone-600">{getRoomName(booking.roomId)}</td>
                    <td className="px-4 py-3 text-stone-600">{formatDateDisplay(booking.checkIn)}</td>
                    <td className="px-4 py-3 text-stone-600">{booking.checkOut ? formatDateDisplay(booking.checkOut) : "—"}</td>
                    <td className="px-4 py-3"><BookingStatusBadge status={booking.status} /></td>
                    <td className="px-4 py-3 text-right">
                      <div className="flex items-center justify-end gap-1">
                        <button
                          onClick={() => { setEditingBooking(booking); setShowForm(true); }}
                          className="p-1.5 rounded-md hover:bg-stone-100 text-stone-500 hover:text-stone-700 transition-colors"
                        >
                          <Pencil className="h-3.5 w-3.5" />
                        </button>
                        <button
                          onClick={() => handleDelete(booking.id, booking.guestName)}
                          className="p-1.5 rounded-md hover:bg-red-50 text-stone-400 hover:text-red-600 transition-colors"
                        >
                          <Trash2 className="h-3.5 w-3.5" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Booking Form */}
      <AccommodationBookingForm
        open={showForm}
        onClose={() => { setShowForm(false); setEditingBooking(null); }}
        onSuccess={() => refetch()}
        initialData={editingBooking}
        rooms={rooms.map(r => ({ id: r.id, name: r.name }))}
      />
    </div>
  );
}
