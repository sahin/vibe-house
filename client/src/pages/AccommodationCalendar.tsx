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

export default function AccommodationCalendar() {
  const [currentMonth, setCurrentMonth] = useState(() => {
    const now = new Date();
    return { year: now.getFullYear(), month: now.getMonth() };
  });
  const [showForm, setShowForm] = useState(false);
  const [editingBooking, setEditingBooking] = useState<any>(null);

  const { data: roomsData } = trpc.accommodation.rooms.list.useQuery();
  const { data: bookingsData, refetch } = trpc.accommodation.bookings.list.useQuery({ filter: "all" });
  const rooms = roomsData ?? [];
  const allBookings = bookingsData ?? [];

  const today = new Date();
  const todayStr = today.toISOString().split("T")[0];

  const daysInMonth = new Date(currentMonth.year, currentMonth.month + 1, 0).getDate();

  // Determine start day for display
  const startDay = useMemo(() => {
    if (currentMonth.year === today.getFullYear() && currentMonth.month === today.getMonth()) {
      return Math.max(1, today.getDate() - 4);
    }
    return 1;
  }, [currentMonth, today]);

  const days = Array.from({ length: daysInMonth - startDay + 1 }, (_, i) => startDay + i);

  const monthLabel = new Date(currentMonth.year, currentMonth.month).toLocaleDateString("en-US", {
    month: "long",
    year: "numeric",
  });

  const prevMonth = () => {
    setCurrentMonth(prev => {
      const d = new Date(prev.year, prev.month - 1);
      return { year: d.getFullYear(), month: d.getMonth() };
    });
  };

  const nextMonth = () => {
    setCurrentMonth(prev => {
      const d = new Date(prev.year, prev.month + 1);
      return { year: d.getFullYear(), month: d.getMonth() };
    });
  };

  // Get bookings for a specific room that overlap with the visible range
  const getBookingsForRoom = (roomId: number) => {
    const visibleStart = `${currentMonth.year}-${String(currentMonth.month + 1).padStart(2, "0")}-${String(startDay).padStart(2, "0")}`;
    const visibleEnd = `${currentMonth.year}-${String(currentMonth.month + 1).padStart(2, "0")}-${String(daysInMonth).padStart(2, "0")}`;

    return allBookings.filter(b => {
      if (b.roomId !== roomId) return false;
      if (b.status === "cancelled") return false;
      const checkOut = b.checkOut ?? "9999-12-31";
      // Booking overlaps if checkIn <= visibleEnd AND checkOut >= visibleStart
      return b.checkIn <= visibleEnd && checkOut >= visibleStart;
    });
  };

  return (
    <div className="p-6">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          <button onClick={prevMonth} className="p-1.5 rounded-md hover:bg-stone-100 transition-colors">
            <ChevronLeft className="h-5 w-5 text-stone-600" />
          </button>
          <h1 className="text-xl font-bold text-stone-900" style={{ fontFamily: "'DM Serif Display', serif" }}>
            {monthLabel}
          </h1>
          <button onClick={nextMonth} className="p-1.5 rounded-md hover:bg-stone-100 transition-colors">
            <ChevronRight className="h-5 w-5 text-stone-600" />
          </button>
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
              {days.map(day => {
                const dateStr = `${currentMonth.year}-${String(currentMonth.month + 1).padStart(2, "0")}-${String(day).padStart(2, "0")}`;
                const isToday = dateStr === todayStr;
                const dayOfWeek = new Date(currentMonth.year, currentMonth.month, day).toLocaleDateString("en-US", { weekday: "short" });
                return (
                  <div
                    key={day}
                    className={cn(
                      "flex-1 min-w-[36px] px-1 py-2 text-center border-r border-stone-50 last:border-r-0",
                      isToday && "bg-amber-50"
                    )}
                  >
                    <div className={cn("text-[10px] text-stone-400", isToday && "text-amber-600 font-semibold")}>{dayOfWeek}</div>
                    <div className={cn("text-xs font-medium text-stone-600", isToday && "text-amber-700 font-bold")}>{day}</div>
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
                    // Calculate position
                    const checkInDay = Math.max(startDay, parseInt(booking.checkIn.split("-")[2]));
                    const checkOutDay = booking.checkOut
                      ? Math.min(daysInMonth, parseInt(booking.checkOut.split("-")[2]))
                      : daysInMonth;

                    // Handle cross-month bookings
                    const bookingMonth = parseInt(booking.checkIn.split("-")[1]) - 1;
                    const bookingYear = parseInt(booking.checkIn.split("-")[0]);
                    const checkOutMonth = booking.checkOut ? parseInt(booking.checkOut.split("-")[1]) - 1 : 99;
                    const checkOutYear = booking.checkOut ? parseInt(booking.checkOut.split("-")[0]) : 9999;

                    let startCol = checkInDay - startDay;
                    let endCol = checkOutDay - startDay;

                    // If booking starts before visible range
                    if (bookingYear < currentMonth.year || (bookingYear === currentMonth.year && bookingMonth < currentMonth.month)) {
                      startCol = 0;
                    }
                    // If booking ends after visible range
                    if (checkOutYear > currentMonth.year || (checkOutYear === currentMonth.year && checkOutMonth > currentMonth.month)) {
                      endCol = days.length - 1;
                    }

                    const totalCols = days.length;
                    const left = `${(startCol / totalCols) * 100}%`;
                    const width = `${((endCol - startCol + 1) / totalCols) * 100}%`;

                    return (
                      <button
                        key={booking.id}
                        onClick={() => { setEditingBooking(booking); setShowForm(true); }}
                        className={cn(
                          "absolute top-2 h-7 rounded-md border px-2 text-[11px] font-medium truncate cursor-pointer hover:opacity-80 transition-opacity",
                          getColor(bIdx + roomIdx)
                        )}
                        style={{ left, width, minWidth: "24px" }}
                        title={`${booking.guestName} (${booking.checkIn} → ${booking.checkOut || "ongoing"})`}
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
