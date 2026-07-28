import { trpc } from "@/lib/trpc";
import { BookingStatusBadge } from "@/components/OccupancyBadge";
import { cn } from "@/lib/utils";

function toDateStr(d: Date | string | null | undefined): string {
  if (!d) return "";
  if (typeof d === "string") return d.split("T")[0];
  return d.toISOString().split("T")[0];
}

function formatDate(d: Date | string | null | undefined): string {
  const str = toDateStr(d);
  if (!str) return "";
  const [y, m, day] = str.split("-").map(Number);
  return new Date(y, m - 1, day).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" });
}

export default function AccommodationHistory() {
  const { data: roomsData } = trpc.accommodation.rooms.list.useQuery();
  const { data: bookingsData } = trpc.accommodation.bookings.list.useQuery({ filter: "all" });

  const rooms = roomsData ?? [];
  const allBookings = bookingsData ?? [];
  const today = new Date().toISOString().split("T")[0];

  // History: checkOut < today (past stays), ordered by checkOut desc
  const historyBookings = allBookings
    .filter(b => b.checkOut && toDateStr(b.checkOut) < today)
    .sort((a, b) => toDateStr(b.checkOut).localeCompare(toDateStr(a.checkOut)));

  const getRoomName = (roomId: number) => rooms.find(r => r.id === roomId)?.name ?? "Unknown";

  // Group by month
  const grouped = historyBookings.reduce<Record<string, typeof historyBookings>>((acc, b) => {
    const str = toDateStr(b.checkOut);
    const [y, m] = str.split("-");
    const key = `${y}-${m}`;
    if (!acc[key]) acc[key] = [];
    acc[key].push(b);
    return acc;
  }, {});

  const monthLabel = (key: string) => {
    const [y, m] = key.split("-").map(Number);
    return new Date(y, m - 1).toLocaleDateString("en-US", { month: "long", year: "numeric" });
  };

  return (
    <div className="p-6">
      <h1 className="text-xl font-bold text-stone-900 mb-6" style={{ fontFamily: "'DM Serif Display', serif" }}>
        Stay History
      </h1>

      {Object.keys(grouped).length === 0 ? (
        <p className="text-sm text-stone-400 italic">No past stays yet.</p>
      ) : (
        <div className="space-y-8">
          {Object.entries(grouped).map(([key, bookings]) => (
            <div key={key}>
              <h2 className="text-sm font-semibold text-stone-600 uppercase tracking-wider mb-3">
                {monthLabel(key)}
              </h2>
              <div className="bg-white border border-stone-200 rounded-xl overflow-hidden">
                {bookings.map((b, idx) => (
                  <div
                    key={b.id}
                    className={cn(
                      "px-4 py-3 flex items-center justify-between",
                      idx < bookings.length - 1 && "border-b border-stone-100"
                    )}
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-stone-100 flex items-center justify-center text-xs font-bold text-stone-500">
                        {b.guestName.split(" ").map(n => n[0]).join("").toUpperCase().slice(0, 2)}
                      </div>
                      <div>
                        <p className={cn("text-sm font-medium text-stone-800", b.status === "cancelled" && "line-through text-stone-400")}>
                          {b.guestName}
                        </p>
                        <p className="text-xs text-stone-500">
                          {getRoomName(b.roomId)} · {formatDate(b.checkIn)} → {formatDate(b.checkOut)}
                        </p>
                      </div>
                    </div>
                    <BookingStatusBadge status={b.status} />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
