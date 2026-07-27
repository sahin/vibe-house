import { Calendar, CalendarDays, Clock, History, LayoutDashboard } from "lucide-react";
import { useLocation } from "wouter";
import { cn } from "@/lib/utils";

const menuItems = [
  { icon: Calendar, label: "Calendar", path: "/accommodation" },
  { icon: LayoutDashboard, label: "Dashboard", path: "/accommodation/dashboard" },
  { icon: CalendarDays, label: "Bookings", path: "/accommodation/bookings" },
  { icon: Clock, label: "Upcoming", path: "/accommodation/upcoming" },
  { icon: History, label: "History", path: "/accommodation/history" },
];

export default function AccommodationLayout({ children }: { children: React.ReactNode }) {
  const [location, setLocation] = useLocation();

  return (
    <div className="min-h-screen flex flex-col bg-[#faf8f5]">
      {/* Top nav */}
      <header className="sticky top-0 z-40 bg-[#1a1208] border-b border-white/10 shadow-sm">
        <div className="flex items-center h-14 px-4 gap-6">
          {/* Brand */}
          <button
            onClick={() => setLocation("/accommodation")}
            className="flex flex-col leading-none shrink-0 mr-2"
          >
            <span className="text-sm font-bold text-white tracking-tight" style={{ fontFamily: "'DM Serif Display', serif" }}>
              SF Vibe House
            </span>
            <span className="text-[10px] font-medium text-white/40 uppercase tracking-widest">
              Accommodation
            </span>
          </button>

          {/* Divider */}
          <div className="h-5 w-px bg-white/10 shrink-0" />

          {/* Nav links */}
          <nav className="flex items-center gap-1 flex-1 overflow-x-auto no-scrollbar">
            {menuItems.map(({ icon: Icon, label, path }) => {
              const isActive = path === "/accommodation"
                ? (location === "/accommodation" || location === "/accommodation/calendar")
                : location.startsWith(path);
              return (
                <button
                  key={path}
                  onClick={() => setLocation(path)}
                  className={cn(
                    "flex items-center gap-1.5 px-3 py-1.5 rounded-md text-sm font-medium transition-all duration-150 whitespace-nowrap",
                    isActive
                      ? "bg-white/10 text-white"
                      : "text-white/50 hover:text-white/80 hover:bg-white/5"
                  )}
                >
                  <Icon className="h-3.5 w-3.5 shrink-0" />
                  {label}
                </button>
              );
            })}
          </nav>

          {/* Back to main site */}
          <button
            onClick={() => setLocation("/")}
            className="text-white/40 hover:text-white/80 text-xs font-medium transition-colors whitespace-nowrap"
          >
            ← Main Site
          </button>
        </div>
      </header>

      {/* Page content */}
      <main className="flex-1 overflow-auto">
        {children}
      </main>

      {/* Address footer */}
      <footer className="border-t border-stone-200 px-6 py-3 text-xs text-stone-400 text-center">
        1650 Portola Dr · San Francisco, CA 94127
      </footer>
    </div>
  );
}
