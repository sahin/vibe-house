import { cn } from "@/lib/utils";

type OccupancyStatus = "vacant" | "occupied" | "upcoming";
type BookingStatus = "active" | "upcoming" | "completed" | "cancelled";

const occupancyConfig: Record<OccupancyStatus, { label: string; dot: string; badge: string }> = {
  occupied: {
    label: "Occupied",
    dot: "bg-emerald-500",
    badge: "bg-emerald-50 text-emerald-700 border-emerald-200",
  },
  upcoming: {
    label: "Upcoming",
    dot: "bg-amber-500",
    badge: "bg-amber-50 text-amber-700 border-amber-200",
  },
  vacant: {
    label: "Vacant",
    dot: "bg-slate-300",
    badge: "bg-slate-50 text-slate-500 border-slate-200",
  },
};

const statusConfig: Record<BookingStatus, { label: string; badge: string }> = {
  active: { label: "Active", badge: "bg-emerald-50 text-emerald-700 border-emerald-200" },
  upcoming: { label: "Upcoming", badge: "bg-amber-50 text-amber-700 border-amber-200" },
  completed: { label: "Completed", badge: "bg-slate-50 text-slate-500 border-slate-200" },
  cancelled: { label: "Cancelled", badge: "bg-red-50 text-red-600 border-red-200" },
};

export function OccupancyBadge({ status }: { status: OccupancyStatus }) {
  const config = occupancyConfig[status];
  return (
    <span className={cn("inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium border", config.badge)}>
      <span className={cn("w-1.5 h-1.5 rounded-full", config.dot)} />
      {config.label}
    </span>
  );
}

export function BookingStatusBadge({ status }: { status: BookingStatus }) {
  const config = statusConfig[status];
  return (
    <span className={cn("inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium border", config.badge)}>
      {config.label}
    </span>
  );
}
