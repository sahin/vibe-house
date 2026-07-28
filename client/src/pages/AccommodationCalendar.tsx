import { trpc } from "@/lib/trpc";
import { cn } from "@/lib/utils";
import { ChevronLeft, ChevronRight, Plus } from "lucide-react";
import { useMemo, useState } from "react";
import { AccommodationBookingForm } from "@/components/AccommodationBookingForm";
import { Button } from "@/components/ui/button";

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
    // Guard against invalid dates (e.g., new Date(null) → epoch 1970)
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

const DAYS_TO_SHOW = 30;

export default function AccommodationCalendar() {
  const [offset, setOffset] = useState(0);
  const [showForm, setShowForm] = useState(false);
  const [editingBooking, setEditingBooking] = useState<any>(null);

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

  // CSS Grid template: fixed room label + equal day columns
  const gridTemplate = `128px repeat(${DAYS_TO_SHOW}, minmax(36px, 1fr))`;
  const minTableWidth = 128 + DAYS_TO_SHOW * 36; // 1208px minimum

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

      {/* Calendar Grid — CSS Grid ensures header and body columns are always aligned */}
      <div className="overflow-x-auto border border-stone-200 rounded-xl bg-white">
        <div style={{ display: "grid", gridTemplateColumns: gridTemplate, minWidth: `${minTableWidth}px` }}>
          {/* ===== Header row ===== */}
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

          {/* ===== Room rows ===== */}
          {rooms.map((room, roomIdx) => {
            const roomBookings = getBookingsForRoom(room.id);
            return (
              <>
                {/* Room label */}
                <div
                  key={`label-${room.id}`}
                  className="px-3 py-3 border-b border-stone-100 border-r border-r-stone-100 flex items-center min-h-[48px]"
                >
                  <span className="text-xs font-medium text-stone-700 truncate">{room.name}</span>
                </div>
                {/* Booking bar area — spans all day columns */}
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

                    // Start column
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

                    // End column — indefinite bookings always extend to right edge
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
