import { useState, useEffect } from "react";

const SESSION_KEY = "sfvh_accom_auth";
const CORRECT_PASSWORD = import.meta.env.VITE_ACCOMMODATION_PASSWORD as string;

export default function AccommodationPasswordGate({ children }: { children: React.ReactNode }) {
  const [unlocked, setUnlocked] = useState(false);
  const [input, setInput] = useState("");
  const [error, setError] = useState(false);
  const [shake, setShake] = useState(false);

  useEffect(() => {
    if (sessionStorage.getItem(SESSION_KEY) === "1") {
      setUnlocked(true);
    }
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (input === CORRECT_PASSWORD) {
      sessionStorage.setItem(SESSION_KEY, "1");
      setUnlocked(true);
    } else {
      setError(true);
      setShake(true);
      setInput("");
      setTimeout(() => setShake(false), 600);
    }
  };

  if (unlocked) return <>{children}</>;

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#faf8f5]">
      <div
        className={`w-full max-w-sm px-8 py-10 bg-white border border-stone-200 rounded-2xl shadow-lg ${shake ? "animate-shake" : ""}`}
        style={shake ? { animation: "shake 0.5s cubic-bezier(.36,.07,.19,.97) both" } : {}}
      >
        {/* Logo / Title */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-amber-50 mb-4">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-amber-700" stroke="currentColor" strokeWidth="1.8">
              <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
              <polyline points="9 22 9 12 15 12 15 22" />
            </svg>
          </div>
          <h1
            className="text-2xl font-bold text-stone-900 tracking-tight"
            style={{ fontFamily: "'DM Serif Display', serif" }}
          >
            SF Vibe House
          </h1>
          <p className="text-sm text-stone-500 mt-1">Accommodation Dashboard</p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="accom-password" className="block text-xs font-medium text-stone-500 mb-1.5 uppercase tracking-wider">
              Password
            </label>
            <input
              id="accom-password"
              type="password"
              value={input}
              onChange={e => { setInput(e.target.value); setError(false); }}
              placeholder="Enter password"
              autoFocus
              autoComplete="current-password"
              className={`w-full px-4 py-2.5 rounded-lg border text-sm bg-white text-stone-900 placeholder:text-stone-400 outline-none transition-colors focus:ring-2 focus:ring-amber-200 ${
                error ? "border-red-400 focus:ring-red-200" : "border-stone-200 focus:border-amber-400"
              }`}
            />
            {error && (
              <p className="mt-1.5 text-xs text-red-600">Incorrect password. Please try again.</p>
            )}
          </div>
          <button
            type="submit"
            className="w-full py-2.5 px-4 rounded-lg bg-[#1a1208] text-white text-sm font-medium transition-all duration-150 hover:opacity-90 active:scale-[0.98]"
          >
            Unlock
          </button>
        </form>

        <p className="text-center text-xs text-stone-400 mt-6">
          1650 Portola Dr · San Francisco, CA
        </p>
      </div>

      <style>{`
        @keyframes shake {
          10%, 90% { transform: translateX(-2px); }
          20%, 80% { transform: translateX(4px); }
          30%, 50%, 70% { transform: translateX(-6px); }
          40%, 60% { transform: translateX(6px); }
        }
      `}</style>
    </div>
  );
}
