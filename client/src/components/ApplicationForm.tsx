import { Button } from "@/components/ui/button";
import { trpc } from "@/lib/trpc";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { ArrowRight, Check, Loader2 } from "lucide-react";

const T = {
  l: "font-display font-normal leading-[1.1] text-[clamp(2.2rem,6vw,4.5rem)]",
  m: "leading-relaxed text-[clamp(1.15rem,2.5vw,1.5rem)]",
};

const FOUNDER_TYPES = [
  { value: "exited_founder", label: "Exited Founder" },
  { value: "pef_member", label: "PEF Member" },
  { value: "superfounders_member", label: "Superfounders Member" },
  { value: "technical_founder", label: "Technical Founder" },
  { value: "other", label: "Other" },
] as const;

const COMMUNITIES = [
  // Priority: Superfounders, PEF, PEF Ultra first
  {
    value: "superfounders",
    label: "Superfounders",
    logo: "https://files.manuscdn.com/user_upload_by_module/session_file/120748616/CvOtEyWvhfOqMkxx.webp",
  },
  {
    value: "pef",
    label: "PEF",
    logo: "https://files.manuscdn.com/user_upload_by_module/session_file/120748616/IuxALCzabHWIRIIl.png",
  },
  {
    value: "pef_ultra",
    label: "PEF Ultra",
    logo: null,
  },
  // Then by popularity
  {
    value: "yc",
    label: "Y Combinator",
    logo: "https://files.manuscdn.com/user_upload_by_module/session_file/120748616/NZpHzoYXrIPsAbrX.png",
  },
  {
    value: "500_startups",
    label: "500 Startups",
    logo: "https://files.manuscdn.com/user_upload_by_module/session_file/120748616/JWOQDaLFzLrREeZK.png",
  },
  {
    value: "antler",
    label: "Antler",
    logo: "https://files.manuscdn.com/user_upload_by_module/session_file/120748616/qxmzJRmdbiEJSvnY.png",
  },
  {
    value: "founders_institute",
    label: "Founders Institute",
    logo: "https://files.manuscdn.com/user_upload_by_module/session_file/120748616/lUJjYQvUvEqWmmrN.png",
  },
  {
    value: "startx",
    label: "StartX",
    logo: "https://files.manuscdn.com/user_upload_by_module/session_file/120748616/KQhGvtcVDVSDbDVW.jpg",
  },
  {
    value: "inception",
    label: "Inception",
    logo: "https://files.manuscdn.com/user_upload_by_module/session_file/120748616/sZmWVqedhklzawXB.png",
  },
  {
    value: "betaworks",
    label: "Betaworks",
    logo: "https://files.manuscdn.com/user_upload_by_module/session_file/120748616/rNiIclyTLOUCYFwf.png",
  },
  {
    value: "other",
    label: "Other",
    logo: null,
  },
] as const;

type FounderType = (typeof FOUNDER_TYPES)[number]["value"];

export default function ApplicationForm() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [linkedinUrl, setLinkedinUrl] = useState("");
  const [founderType, setFounderType] = useState<FounderType | "">("");
  const [communities, setCommunities] = useState<string[]>([]);
  const [additionalNotes, setAdditionalNotes] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [fieldErrors, setFieldErrors] = useState<Record<string, string>>({});

  const toggleCommunity = (value: string) => {
    setCommunities((prev) =>
      prev.includes(value)
        ? prev.filter((c) => c !== value)
        : [...prev, value]
    );
  };

  const submitMutation = trpc.application.submit.useMutation({
    onSuccess: () => {
      setSubmitted(true);
    },
    onError: (error) => {
      if ((error.data as any)?.zodError) {
        const zodErrors = (error.data as any).zodError.fieldErrors;
        const mapped: Record<string, string> = {};
        for (const [key, msgs] of Object.entries(zodErrors)) {
          if (Array.isArray(msgs) && msgs.length > 0) {
            mapped[key] = msgs[0] as string;
          }
        }
        setFieldErrors(mapped);
      }
    },
  });

  const validate = (): boolean => {
    const errors: Record<string, string> = {};
    if (!fullName.trim()) errors.fullName = "Full name is required";
    if (!email.trim()) errors.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))
      errors.email = "Enter a valid email";
    if (linkedinUrl && !/^https?:\/\/.+/.test(linkedinUrl))
      errors.linkedinUrl = "Must be a valid URL";
    if (!founderType) errors.founderType = "Please select one";
    setFieldErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    submitMutation.mutate({
      fullName: fullName.trim(),
      email: email.trim(),
      phone: phone.trim() || undefined,
      linkedinUrl: linkedinUrl.trim() || undefined,
      founderType: founderType as FounderType,
      communities: communities.length > 0 ? communities : undefined,
      additionalNotes: additionalNotes.trim() || undefined,
    });
  };

  const inputBase =
    "w-full bg-transparent border-b border-foreground/15 focus:border-foreground/40 outline-none transition-colors duration-300 py-4 font-body text-[clamp(1.15rem,2.5vw,1.5rem)] text-foreground placeholder:text-foreground/25";

  if (submitted) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="py-20"
      >
        <div className="flex items-center gap-4 mb-8">
          <div className="w-14 h-14 rounded-full bg-foreground flex items-center justify-center">
            <Check className="w-7 h-7 text-background" />
          </div>
        </div>
        <h3 className={`${T.l} mb-6`}>You're on the list.</h3>
        <p className={`${T.m} text-foreground/55`}>
          We'll reach out before the next event.
        </p>
      </motion.div>
    );
  }

  return (
    <motion.form
      onSubmit={handleSubmit}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="pt-10"
    >
      <div className="space-y-2">
        {/* Full Name */}
        <div>
          <label className="block text-foreground/40 text-sm tracking-[0.08em] uppercase mb-2">
            Full Name *
          </label>
          <input
            type="text"
            value={fullName}
            onChange={(e) => {
              setFullName(e.target.value);
              setFieldErrors((prev) => ({ ...prev, fullName: "" }));
            }}
            placeholder="Your full name"
            className={inputBase}
          />
          <AnimatePresence>
            {fieldErrors.fullName && (
              <motion.p
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                className="text-red-600/80 text-sm mt-2"
              >
                {fieldErrors.fullName}
              </motion.p>
            )}
          </AnimatePresence>
        </div>

        {/* Email */}
        <div>
          <label className="block text-foreground/40 text-sm tracking-[0.08em] uppercase mb-2">
            Email *
          </label>
          <input
            type="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              setFieldErrors((prev) => ({ ...prev, email: "" }));
            }}
            placeholder="you@example.com"
            className={inputBase}
          />
          <AnimatePresence>
            {fieldErrors.email && (
              <motion.p
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                className="text-red-600/80 text-sm mt-2"
              >
                {fieldErrors.email}
              </motion.p>
            )}
          </AnimatePresence>
        </div>

        {/* Phone */}
        <div>
          <label className="block text-foreground/40 text-sm tracking-[0.08em] uppercase mb-2">
            Phone
          </label>
          <input
            type="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="+1 (555) 000-0000"
            className={inputBase}
          />
        </div>

        {/* LinkedIn */}
        <div>
          <label className="block text-foreground/40 text-sm tracking-[0.08em] uppercase mb-2">
            LinkedIn URL
          </label>
          <input
            type="url"
            value={linkedinUrl}
            onChange={(e) => {
              setLinkedinUrl(e.target.value);
              setFieldErrors((prev) => ({ ...prev, linkedinUrl: "" }));
            }}
            placeholder="https://linkedin.com/in/yourname"
            className={inputBase}
          />
          <AnimatePresence>
            {fieldErrors.linkedinUrl && (
              <motion.p
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                className="text-red-600/80 text-sm mt-2"
              >
                {fieldErrors.linkedinUrl}
              </motion.p>
            )}
          </AnimatePresence>
        </div>

        {/* Founder Type */}
        <div>
          <label className="block text-foreground/40 text-sm tracking-[0.08em] uppercase mb-2">
            Which exited founders' communities are you part of? *
          </label>
          <div className="flex flex-wrap gap-3 py-4">
            {FOUNDER_TYPES.map((type) => (
              <button
                key={type.value}
                type="button"
                onClick={() => {
                  setFounderType(type.value);
                  setFieldErrors((prev) => ({ ...prev, founderType: "" }));
                }}
                className={`px-5 py-3 rounded-full border transition-all duration-300 text-[clamp(0.9rem,2vw,1.1rem)] ${
                  founderType === type.value
                    ? "bg-foreground text-background border-foreground"
                    : "border-foreground/15 text-foreground/60 hover:border-foreground/30 hover:text-foreground/80"
                }`}
              >
                {type.label}
              </button>
            ))}
          </div>
          <AnimatePresence>
            {fieldErrors.founderType && (
              <motion.p
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                className="text-red-600/80 text-sm mt-1"
              >
                {fieldErrors.founderType}
              </motion.p>
            )}
          </AnimatePresence>
        </div>

        {/* Your Communities */}
        <div>
          <label className="block text-foreground/40 text-sm tracking-[0.08em] uppercase mb-2">
            Your Communities
          </label>
          <p className="text-foreground/30 text-sm mb-4">
            Select all that apply
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 py-2">
            {COMMUNITIES.map((community) => {
              const isSelected = communities.includes(community.value);
              return (
                <button
                  key={community.value}
                  type="button"
                  onClick={() => toggleCommunity(community.value)}
                  className={`relative flex flex-col items-center justify-center gap-2 px-4 py-5 rounded-xl border transition-all duration-300 ${
                    isSelected
                      ? "bg-foreground/5 border-foreground/30 ring-1 ring-foreground/20"
                      : "border-foreground/10 hover:border-foreground/20 hover:bg-foreground/[0.02]"
                  }`}
                >
                  {isSelected && (
                    <div className="absolute top-2 right-2 w-5 h-5 rounded-full bg-foreground flex items-center justify-center">
                      <Check className="w-3 h-3 text-background" />
                    </div>
                  )}
                  {community.logo ? (
                    <img
                      src={community.logo}
                      alt={community.label}
                      className="h-8 w-auto max-w-[100px] object-contain"
                    />
                  ) : (
                    <span className="text-sm font-semibold text-foreground/70 tracking-wide">
                      {community.label}
                    </span>
                  )}
                  <span
                    className={`text-xs tracking-wide ${
                      isSelected
                        ? "text-foreground/70"
                        : "text-foreground/40"
                    }`}
                  >
                    {community.label}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Additional Notes */}
        <div>
          <label className="block text-foreground/40 text-sm tracking-[0.08em] uppercase mb-2">
            Anything else?
          </label>
          <textarea
            value={additionalNotes}
            onChange={(e) => setAdditionalNotes(e.target.value)}
            placeholder="Optional — tell us what you're building, what excites you, etc."
            rows={3}
            className={`${inputBase} resize-none`}
          />
        </div>
      </div>

      {/* Submit */}
      <div className="mt-14">
        {submitMutation.error && !(submitMutation.error.data as any)?.zodError && (
          <p className="text-red-600/80 text-sm mb-4">
            Something went wrong. Please try again.
          </p>
        )}
        <Button
          type="submit"
          size="lg"
          disabled={submitMutation.isPending}
          className={`bg-foreground text-background hover:bg-foreground/90 ${T.m} rounded-full px-10 py-7`}
        >
          {submitMutation.isPending ? (
            <>
              <Loader2 className="mr-2 w-5 h-5 animate-spin" />
              Submitting...
            </>
          ) : (
            <>
              Count me in <ArrowRight className="ml-2 w-5 h-5" />
            </>
          )}
        </Button>
      </div>
    </motion.form>
  );
}
