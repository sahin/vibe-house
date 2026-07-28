import { trpc } from "@/lib/trpc";
import { BookingStatusBadge } from "@/components/OccupancyBadge";
import { Plus, Pencil, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { AccommodationBookingForm } from "@/components/AccommodationBookingForm";
import { toast } from "sonner";
import { cn } from "@/lib/utils";

export default function AccommodationBookings() {
  const { data: roomsData } = trpc.accommodation.rooms.list.useQuery();
  const { data: bookingsData, refetch } = trpc.accommodation.bookings.list.useQuery({ filter: "all" });
  const [showForm, setShowForm] = useState(false);
  const [editingBooking, setEditingBooking] = useState<any>(null);

  const rooms = roomsData ?? [];
  const allBookings = bookingsData ?? [];

  const deleteMutation = trpc.accommodation.bookings.delete.useMutation({
    onSuccess: () => { toast.success("Booking deleted"); refetch(); },
    onError: (e) => toast.error(e.message),
  });

  const getRoomName = (roomId: number) => rooms.find(r => r.id === roomId)?.name ?? "Unknown";

  const formatDate = (d: Date | string | null | undefined): string => {
    if (!d) return "";
    const str = typeof d === "string" ? d.split("T")[0] : d.toISOString().split("T")[0];
    const [y, m, day] = str.split("-").map(Number);
    return new Date(y, m - 1, day).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" });
  };

  const handleDelete = (id: number, name: string) => {
    if (confirm(`Delete booking for ${name}?`)) {
      deleteMutation.mutate({ id });
    }
  };

  return (
    <div className="p-6">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-xl font-bold text-stone-900" style={{ fontFamily: "'DM Serif Display', serif" }}>
          All Bookings
        </h1>
        <Button onClick={() => { setEditingBooking(null); setShowForm(true); }} size="sm" className="gap-1.5">
          <Plus className="h-4 w-4" /> New Booking
        </Button>
      </div>

      {/* Bookings Table */}
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
              {allBookings.length === 0 && (
                <tr>
                  <td colSpan={6} className="px-4 py-8 text-center text-stone-400 text-sm">
                    No bookings yet. Create your first booking above.
                  </td>
                </tr>
              )}
              {allBookings.map(booking => (
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
                  <td className="px-4 py-3 text-stone-600">{formatDate(booking.checkIn)}</td>
                  <td className="px-4 py-3 text-stone-600">{booking.checkOut ? formatDate(booking.checkOut) : "—"}</td>
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
