import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { trpc } from "@/lib/trpc";
import { useEffect, useState } from "react";
import { toast } from "sonner";

type BookingStatus = "active" | "upcoming" | "completed" | "cancelled";

interface BookingFormData {
  id?: number;
  roomId: number;
  guestName: string;
  guestEmail: string;
  checkIn: string;
  checkOut: string;
  notes: string;
  status: BookingStatus;
}

interface BookingFormProps {
  open: boolean;
  onClose: () => void;
  onSuccess: () => void;
  initialData?: Partial<BookingFormData> & { id?: number };
  rooms: Array<{ id: number; name: string }>;
}

const defaultForm: BookingFormData = {
  roomId: 0,
  guestName: "",
  guestEmail: "",
  checkIn: "",
  checkOut: "",
  notes: "",
  status: "upcoming",
};

export function AccommodationBookingForm({ open, onClose, onSuccess, initialData, rooms }: BookingFormProps) {
  const [form, setForm] = useState<BookingFormData>(defaultForm);
  const isEditing = !!initialData?.id;

  useEffect(() => {
    if (open) {
      setForm({
        ...defaultForm,
        ...initialData,
        checkIn: initialData?.checkIn ?? "",
        checkOut: initialData?.checkOut ?? "",
        guestEmail: initialData?.guestEmail ?? "",
        notes: initialData?.notes ?? "",
        roomId: initialData?.roomId ?? (rooms[0]?.id ?? 0),
      });
    }
  }, [open, initialData]);

  const createMutation = trpc.accommodation.bookings.create.useMutation({
    onSuccess: () => { toast.success("Booking created"); onSuccess(); onClose(); },
    onError: (e) => toast.error(e.message),
  });

  const updateMutation = trpc.accommodation.bookings.update.useMutation({
    onSuccess: () => { toast.success("Booking updated"); onSuccess(); onClose(); },
    onError: (e) => toast.error(e.message),
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.guestName.trim()) { toast.error("Guest name is required"); return; }
    if (!form.checkIn) { toast.error("Check-in date is required"); return; }
    if (!form.roomId) { toast.error("Please select a room"); return; }

    const payload = {
      roomId: form.roomId,
      guestName: form.guestName.trim(),
      guestEmail: form.guestEmail.trim() || null,
      checkIn: form.checkIn,
      checkOut: form.checkOut || null,
      notes: form.notes.trim() || null,
      status: form.status,
    };

    if (isEditing && initialData?.id) {
      updateMutation.mutate({ id: initialData.id, ...payload });
    } else {
      createMutation.mutate(payload);
    }
  };

  const isPending = createMutation.isPending || updateMutation.isPending;

  return (
    <Dialog open={open} onOpenChange={(v) => { if (!v) onClose(); }}>
      <DialogContent className="sm:max-w-lg">
        <DialogHeader>
          <DialogTitle className="text-lg font-semibold" style={{ fontFamily: "'DM Serif Display', serif" }}>
            {isEditing ? "Edit Booking" : "New Booking"}
          </DialogTitle>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-4 py-2">
          <div className="grid grid-cols-2 gap-4">
            <div className="col-span-2 space-y-1.5">
              <Label>Guest Name *</Label>
              <Input
                value={form.guestName}
                onChange={e => setForm(f => ({ ...f, guestName: e.target.value }))}
                placeholder="Full name"
              />
            </div>

            <div className="col-span-2 space-y-1.5">
              <Label>Email</Label>
              <Input
                type="email"
                value={form.guestEmail}
                onChange={e => setForm(f => ({ ...f, guestEmail: e.target.value }))}
                placeholder="guest@example.com"
              />
            </div>

            <div className="col-span-2 space-y-1.5">
              <Label>Room *</Label>
              <Select
                value={form.roomId ? String(form.roomId) : ""}
                onValueChange={v => setForm(f => ({ ...f, roomId: parseInt(v) }))}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select a room" />
                </SelectTrigger>
                <SelectContent>
                  {rooms.map(r => (
                    <SelectItem key={r.id} value={String(r.id)}>{r.name}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-1.5">
              <Label>Check-in *</Label>
              <Input
                type="date"
                value={form.checkIn}
                onChange={e => setForm(f => ({ ...f, checkIn: e.target.value }))}
              />
            </div>

            <div className="space-y-1.5">
              <Label>Check-out</Label>
              <Input
                type="date"
                value={form.checkOut}
                onChange={e => setForm(f => ({ ...f, checkOut: e.target.value }))}
              />
            </div>

            <div className="col-span-2 space-y-1.5">
              <Label>Status</Label>
              <Select
                value={form.status}
                onValueChange={v => setForm(f => ({ ...f, status: v as BookingStatus }))}
              >
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="active">Active</SelectItem>
                  <SelectItem value="upcoming">Upcoming</SelectItem>
                  <SelectItem value="completed">Completed</SelectItem>
                  <SelectItem value="cancelled">Cancelled</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="col-span-2 space-y-1.5">
              <Label>Notes</Label>
              <Textarea
                value={form.notes}
                onChange={e => setForm(f => ({ ...f, notes: e.target.value }))}
                placeholder="Any additional notes..."
                rows={3}
                className="resize-none"
              />
            </div>
          </div>

          <DialogFooter className="pt-2">
            <Button type="button" variant="outline" onClick={onClose} disabled={isPending}>
              Cancel
            </Button>
            <Button type="submit" disabled={isPending}>
              {isPending ? "Saving…" : isEditing ? "Save Changes" : "Create Booking"}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
