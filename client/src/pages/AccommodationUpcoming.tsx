import { trpc } from "@/lib/trpc";
import { BookingStatusBadge } from "@/components/OccupancyBadge";

export default function AccommodationUpcoming() {
  const { data: roomsData } = trpc.accommodation.rooms.list.useQuery();
  const { data: bookingsData } = trpc.accommodation.bookings.list.useQuery({ filter: "all" });

  const rooms = roomsData ?? [];
  const allBookings = bookingsData ?? [];
  const today = new Date().toISOString().split("T")[0];

  // Upcoming: checkIn >= today, not cancelled
  const upcomingBookings = allBookings
    .filter(b => b.status !== "cancelled" && b.checkIn >= today)
    .sort((a, b) => a.checkIn.localeCompare(b.checkIn));

  // Currently active (in house now): checkIn <= today AND (checkOut >= today OR null)
  const activeBookings = allBookings
    .filter(b => b.status !== "cancelled" && b.checkIn <= today && (b.checkOut === null || b.checkOut >= today))
    .sort((a, b) => a.checkIn.localeCompare(b.checkIn));

  const getRoomName = (roomId: number) => rooms.find(r => r.id === roomId)?.name ?? "Unknown";

  const formatDate = (dateStr: string) => {
    const [y, m, d] = dateStr.split("-").map(Number);
    return new Date(y, m - 1, d).toLocaleDateString("en-US", { weekday: "short", month: "short", day: "numeric", year: "numeric" });
  };

  return (
    <div className="p-6">
      <h1 className="text-xl font-bold text-stone-900 mb-6" style={{ fontFamily: "'DM Serif Display', serif" }}>
        Upcoming & In House
      </h1>

      {/* Currently in house */}
      {activeBookings.length > 0 && (
        <div className="mb-8">
          <h2 className="text-sm font-semibold text-stone-600 uppercase tracking-wider mb-3">In House Now</h2>
          <div className="space-y-2">
            {activeBookings.map(b => (
              <div key={b.id} className="bg-white border border-emerald-200 rounded-xl p-4 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-emerald-100 flex items-center justify-center text-xs font-bold text-emerald-700">
                    {b.guestName.split(" ").map(n => n[0]).join("").toUpperCase().slice(0, 2)}
                  </div>
                  <div>
                    <p className="text-sm font-medium text-stone-800">{b.guestName}</p>
                    <p className="text-xs text-stone-500">{getRoomName(b.roomId)} · {formatDate(b.checkIn)} → {b.checkOut ? formatDate(b.checkOut) : "ongoing"}</p>
                  </div>
                </div>
                <BookingStatusBadge status="active" />
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Upcoming arrivals */}
      <div>
        <h2 className="text-sm font-semibold text-stone-600 uppercase tracking-wider mb-3">Upcoming Arrivals</h2>
        {upcomingBookings.length === 0 ? (
          <p className="text-sm text-stone-400 italic">No upcoming bookings.</p>
        ) : (
          <div className="space-y-2">
            {upcomingBookings.map(b => (
              <div key={b.id} className="bg-white border border-stone-200 rounded-xl p-4 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-amber-100 flex items-center justify-center text-xs font-bold text-amber-700">
                    {b.guestName.split(" ").map(n => n[0]).join("").toUpperCase().slice(0, 2)}
                  </div>
                  <div>
                    <p className="text-sm font-medium text-stone-800">{b.guestName}</p>
                    <p className="text-xs text-stone-500">{getRoomName(b.roomId)} · arrives {formatDate(b.checkIn)}{b.checkOut ? ` → ${formatDate(b.checkOut)}` : ""}</p>
                  </div>
                </div>
                <BookingStatusBadge status="upcoming" />
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
