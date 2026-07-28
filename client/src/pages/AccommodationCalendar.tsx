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
  if (!d) return "";
  if (typeof d === "string") return d.split("T")[0];
  return d.toISOString().split("T")[0];
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
  const [offset, setOffset] = useState(0); // offset in days from today
  const [showForm, setShowForm] = useState(false);
  const [editingBooking, setEditingBooking] = useState<any>(null);

  const { data: roomsData } = trpc.accommodation.rooms.list.useQuery();
  const { data: bookingsData, refetch } = trpc.accommodation.bookings.list.useQuery({ filter: "all" });
  const rooms = roomsData ?? [];
  const allBookings = bookingsData ?? [];

  const today = new Date();
  const todayStr = formatDateStr(today);

  // Generate the array of dates to display
  const dates = useMemo(() => {
    const startDate = addDays(today, offset);
    return Array.from({ length: DAYS_TO_SHOW }, (_, i) => addDays(startDate, i));
  }, [offset]);

  const dateStrs = useMemo(() => dates.map(formatDateStr), [dates]);

  // Header label showing date range
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

  // Get bookings for a specific room that overlap with the visible range
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
        <div className="min-w-[900px]">
          {/* Day headers */}
          <div className="flex border-b border-stone-200">
            <div className="w-32 shrink-0 px-3 py-2 text-xs font-medium text-stone-500 uppercase tracking-wider border-r border-stone-100">
              Room
            </div>
            <div className="flex flex-1">
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
                      "flex-1 min-w-[36px] px-1 py-2 text-center border-r border-stone-50 last:border-r-0",
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
            </div>
          </div>

          {/* Room rows */}
          {rooms.map((room, roomIdx) => {
            const roomBookings = getBookingsForRoom(room.id);
            return (
              <div key={room.id} className="flex border-b border-stone-100 last:border-b-0 min-h-[48px]">
                <div className="w-32 shrink-0 px-3 py-3 border-r border-stone-100 flex items-center">
                  <span className="text-xs font-medium text-stone-700 truncate">{room.name}</span>
                </div>
                <div className="flex-1 relative">
                  {roomBookings.map((booking, bIdx) => {
                    const checkInStr = toDateStr(booking.checkIn);
                    const checkOutStr = toDateStr(booking.checkOut) || "9999-12-31";

                    // Find the column indices for start and end
                    let startCol = dateStrs.findIndex(d => d >= checkInStr);
                    if (startCol === -1) startCol = DAYS_TO_SHOW; // starts after visible range
                    // Clamp to 0 if booking starts before visible range
                    if (checkInStr < dateStrs[0]) startCol = 0;

                    let endCol = dateStrs.findIndex(d => d >= checkOutStr);
                    if (endCol === -1) endCol = DAYS_TO_SHOW - 1; // ends after visible range
                    else endCol = Math.max(startCol, endCol); // ensure end >= start

                    // Skip if completely outside range
                    if (startCol >= DAYS_TO_SHOW) return null;

                    const totalCols = DAYS_TO_SHOW;
                    const left = `${(startCol / totalCols) * 100}%`;
                    const width = `${(Math.max(1, endCol - startCol + 1) / totalCols) * 100}%`;

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
              </div>
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
