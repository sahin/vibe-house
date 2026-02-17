import { Button } from "@/components/ui/button";
import { trpc } from "@/lib/trpc";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useRef } from "react";
import { ArrowRight, Check, Loader2, AlertTriangle } from "lucide-react";

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

/* ── Floating Label Input ── */
function FloatingInput({
  id,
  label,
  value,
  onChange,
  error,
  type = "text",
  required = false,
  inputRef,
}: {
  id: string;
  label: string;
  value: string;
  onChange: (val: string) => void;
  error?: string;
  type?: string;
  required?: boolean;
  inputRef?: React.RefObject<HTMLInputElement | null>;
}) {
  const [focused, setFocused] = useState(false);
  const isActive = focused || value.length > 0;

  return (
    <div>
      <div className="relative">
        <input
          ref={inputRef}
          id={id}
          type={type}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          className={`peer w-full bg-transparent border-b outline-none transition-all duration-300 pt-7 pb-3 font-body text-[clamp(1.15rem,2.5vw,1.5rem)] text-foreground ${
            error
              ? "border-red-500"
              : focused
                ? "border-foreground/40"
                : "border-foreground/15"
          }`}
          placeholder=""
          autoComplete="off"
        />
        <label
          htmlFor={id}
          className={`absolute left-0 transition-all duration-200 pointer-events-none ${
            isActive
              ? "top-1 text-xs tracking-[0.08em] uppercase"
              : "top-5 text-[clamp(1.15rem,2.5vw,1.5rem)]"
          } ${
            error
              ? "text-red-500"
              : isActive
                ? "text-foreground/50"
                : "text-foreground/25"
          }`}
        >
          {label}{required ? " *" : ""}
        </label>
      </div>
      <AnimatePresence>
        {error && (
          <motion.p
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="text-red-500 text-sm mt-2"
          >
            {error}
          </motion.p>
        )}
      </AnimatePresence>
    </div>
  );
}

/* ── Floating Label Textarea ── */
function FloatingTextarea({
  id,
  label,
  value,
  onChange,
  inputRef,
}: {
  id: string;
  label: string;
  value: string;
  onChange: (val: string) => void;
  inputRef?: React.RefObject<HTMLTextAreaElement | null>;
}) {
  const [focused, setFocused] = useState(false);
  const isActive = focused || value.length > 0;

  return (
    <div className="relative">
      <textarea
        ref={inputRef}
        id={id}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        rows={3}
        className={`peer w-full bg-transparent border-b outline-none transition-all duration-300 pt-7 pb-3 font-body text-[clamp(1.15rem,2.5vw,1.5rem)] text-foreground resize-none ${
          focused ? "border-foreground/40" : "border-foreground/15"
        }`}
        placeholder=""
      />
      <label
        htmlFor={id}
        className={`absolute left-0 transition-all duration-200 pointer-events-none ${
          isActive
            ? "top-1 text-xs tracking-[0.08em] uppercase text-foreground/50"
            : "top-5 text-[clamp(1.15rem,2.5vw,1.5rem)] text-foreground/25"
        }`}
      >
        {label}
      </label>
    </div>
  );
}

export default function ApplicationForm() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [linkedinUrl, setLinkedinUrl] = useState("");
  const [founderType, setFounderType] = useState<FounderType | "">("");
  const [communities, setCommunities] = useState<string[]>([]);
  const [additionalNotes, setAdditionalNotes] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [serverError, setServerError] = useState(false);
  const [fieldErrors, setFieldErrors] = useState<Record<string, string>>({});

  // Refs for focusing on validation errors
  const fullNameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const phoneRef = useRef<HTMLInputElement>(null);
  const linkedinRef = useRef<HTMLInputElement>(null);
  const founderTypeRef = useRef<HTMLDivElement>(null);

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
      setServerError(false);
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
      } else {
        setServerError(true);
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

    // Focus the first field with an error
    if (Object.keys(errors).length > 0) {
      const firstErrorKey = Object.keys(errors)[0];
      const refMap: Record<string, React.RefObject<HTMLElement | null>> = {
        fullName: fullNameRef,
        email: emailRef,
        phone: phoneRef,
        linkedinUrl: linkedinRef,
        founderType: founderTypeRef,
      };
      const targetRef = refMap[firstErrorKey];
      if (targetRef?.current) {
        targetRef.current.scrollIntoView({ behavior: "smooth", block: "center" });
        if ("focus" in targetRef.current) {
          setTimeout(() => targetRef.current?.focus(), 300);
        }
      }
    }

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

  if (serverError) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="py-20"
      >
        <div className="flex items-center gap-4 mb-8">
          <div className="w-14 h-14 rounded-full bg-red-100 flex items-center justify-center">
            <AlertTriangle className="w-7 h-7 text-red-600" />
          </div>
        </div>
        <h3 className={`${T.l} mb-6`}>Something went wrong.</h3>
        <p className={`${T.m} text-foreground/55 mb-8`}>
          We couldn't submit your application right now. Please use the backup form instead.
        </p>
        <a
          href="https://airtable.com/appqVucbI0ROcWtt5/pagqasZj50JPqUSfk/form"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-foreground text-background hover:bg-foreground/90 rounded-full px-8 py-4 font-body text-[clamp(1rem,2vw,1.15rem)] transition-colors duration-300"
        >
          Fill out the backup form <ArrowRight className="w-5 h-5" />
        </a>
      </motion.div>
    );
  }

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
      <div className="space-y-6">
        {/* Full Name */}
        <FloatingInput
          id="fullName"
          label="Your full name"
          value={fullName}
          onChange={(val) => {
            setFullName(val);
            setFieldErrors((prev) => ({ ...prev, fullName: "" }));
          }}
          error={fieldErrors.fullName}
          required
          inputRef={fullNameRef}
        />

        {/* Email */}
        <FloatingInput
          id="email"
          label="you@example.com"
          value={email}
          onChange={(val) => {
            setEmail(val);
            setFieldErrors((prev) => ({ ...prev, email: "" }));
          }}
          error={fieldErrors.email}
          type="email"
          required
          inputRef={emailRef}
        />

        {/* Phone */}
        <FloatingInput
          id="phone"
          label="Phone number"
          value={phone}
          onChange={(val) => setPhone(val)}
          type="tel"
          inputRef={phoneRef}
        />

        {/* LinkedIn */}
        <FloatingInput
          id="linkedinUrl"
          label="https://linkedin.com/in/yourname"
          value={linkedinUrl}
          onChange={(val) => {
            setLinkedinUrl(val);
            setFieldErrors((prev) => ({ ...prev, linkedinUrl: "" }));
          }}
          error={fieldErrors.linkedinUrl}
          type="url"
          inputRef={linkedinRef}
        />

        {/* Founder Type */}
        <div ref={founderTypeRef}>
          <label className={`block text-sm tracking-[0.08em] uppercase mb-3 ${fieldErrors.founderType ? "text-red-500" : "text-foreground/40"}`}>
            Which best describes you? *
          </label>
          <div className="flex flex-wrap gap-3 py-2">
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
                    : fieldErrors.founderType
                      ? "border-red-500/40 text-foreground/60 hover:border-red-500/60 hover:text-foreground/80"
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
                className="text-red-500 text-sm mt-2"
              >
                {fieldErrors.founderType}
              </motion.p>
            )}
          </AnimatePresence>
        </div>

        {/* Your Communities */}
        <div>
          <label className="block text-foreground/40 text-sm tracking-[0.08em] uppercase mb-2">
            Which exited founders' communities are you part of?
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
        <FloatingTextarea
          id="additionalNotes"
          label="Anything else? Tell us what you're building..."
          value={additionalNotes}
          onChange={(val) => setAdditionalNotes(val)}
        />
      </div>

      {/* Submit */}
      <div className="mt-14">
        {submitMutation.error && !(submitMutation.error.data as any)?.zodError && (
          <p className="text-red-500 text-sm mb-4">
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
