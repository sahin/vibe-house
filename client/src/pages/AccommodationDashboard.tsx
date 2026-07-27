import { trpc } from "@/lib/trpc";
import { OccupancyBadge } from "@/components/OccupancyBadge";
import { Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { AccommodationBookingForm } from "@/components/AccommodationBookingForm";

export default function AccommodationDashboard() {
  const { data: roomsData } = trpc.accommodation.rooms.list.useQuery();
  const { data: bookingsData, refetch } = trpc.accommodation.bookings.list.useQuery({ filter: "all" });
  const [showForm, setShowForm] = useState(false);
  const [editingBooking, setEditingBooking] = useState<any>(null);

  const rooms = roomsData ?? [];
  const allBookings = bookingsData ?? [];
  const today = new Date().toISOString().split("T")[0];

  const getRoomStatus = (roomId: number) => {
    // Current guest: checkIn <= today AND (checkOut >= today OR no checkOut), not cancelled
    const current = allBookings.find(b =>
      b.roomId === roomId &&
      b.status !== "cancelled" &&
      b.checkIn <= today &&
      (b.checkOut === null || b.checkOut >= today)
    );

    // Upcoming: checkIn > today, not cancelled
    const upcoming = allBookings
      .filter(b => b.roomId === roomId && b.status !== "cancelled" && b.checkIn > today)
      .sort((a, b) => a.checkIn.localeCompare(b.checkIn));

    return { current, upcoming };
  };

  const formatDate = (dateStr: string) => {
    const [y, m, d] = dateStr.split("-").map(Number);
    return new Date(y, m - 1, d).toLocaleDateString("en-US", { month: "short", day: "numeric" });
  };

  return (
    <div className="p-6">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-xl font-bold text-stone-900" style={{ fontFamily: "'DM Serif Display', serif" }}>
          Room Overview
        </h1>
        <Button onClick={() => { setEditingBooking(null); setShowForm(true); }} size="sm" className="gap-1.5">
          <Plus className="h-4 w-4" /> New Booking
        </Button>
      </div>

      {/* Room Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {rooms.map(room => {
          const { current, upcoming } = getRoomStatus(room.id);
          const occupancy = current ? "occupied" : upcoming.length > 0 ? "upcoming" : "vacant";

          return (
            <div key={room.id} className="bg-white border border-stone-200 rounded-xl p-5 shadow-sm hover:shadow-md transition-shadow">
              {/* Room header */}
              <div className="flex items-start justify-between mb-3">
                <div>
                  <h3 className="text-sm font-semibold text-stone-900">{room.name}</h3>
                  <p className="text-xs text-stone-400 mt-0.5">{room.floor}{room.notes ? ` · ${room.notes}` : ""}</p>
                </div>
                <OccupancyBadge status={occupancy} />
              </div>

              {/* Current guest */}
              {current && (
                <div className="mt-3 p-3 bg-emerald-50/50 rounded-lg border border-emerald-100">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-emerald-200 flex items-center justify-center text-xs font-bold text-emerald-800">
                      {current.guestName.split(" ").map(n => n[0]).join("").toUpperCase().slice(0, 2)}
                    </div>
                    <div>
                      <p className="text-sm font-medium text-stone-800">{current.guestName}</p>
                      <p className="text-[11px] text-stone-500">
                        {formatDate(current.checkIn)} → {current.checkOut ? formatDate(current.checkOut) : "ongoing"}
                      </p>
                    </div>
                  </div>
                </div>
              )}

              {/* Upcoming guests */}
              {upcoming.length > 0 && (
                <div className="mt-3 space-y-1.5">
                  {upcoming.slice(0, 2).map(b => (
                    <div key={b.id} className="text-xs text-stone-500 flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                      <span className="font-medium text-stone-600">{b.guestName}</span>
                      <span>arrives {formatDate(b.checkIn)}</span>
                    </div>
                  ))}
                  {upcoming.length > 2 && (
                    <p className="text-[11px] text-stone-400">+{upcoming.length - 2} more</p>
                  )}
                </div>
              )}

              {/* Vacant state */}
              {!current && upcoming.length === 0 && (
                <div className="mt-3 text-xs text-stone-400 italic">No bookings</div>
              )}
            </div>
          );
        })}
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
