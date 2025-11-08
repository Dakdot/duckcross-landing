"use client";

import { useState } from "react";
import Link from "next/link";
import clsx from "clsx";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

type Variant = "link" | "email";

export interface CtaBandProps {
  title: string;
  subtitle?: string | React.ReactNode;

  // Link/button CTA props (for variant="link")
  ctaLabel?: string;
  ctaHref?: string;
  ctaTarget?: "_self" | "_blank";
  onCtaClick?: () => void;

  // Email capture props (for variant="email")
  variant?: Variant;
  buttonLabel?: string;
  placeholder?: string;
  onEmailSubmit?: (email: string) => Promise<void> | void;
  successMessage?: string;
  errorMessage?: string;
  legal?: React.ReactNode;

  // Styling
  className?: string;
  containerClassName?: string;
  contentClassName?: string;
  inputClassName?: string;
  buttonClassName?: string;

  // Layout
  compact?: boolean;
}

/**
 * CtaBand
 * A reusable call-to-action band for landing pages.
 * - variant="link": renders a single CTA button linking to a URL
 * - variant="email": renders an inline email capture with submit handler
 */
export default function CtaBand({
  title,
  subtitle,
  // link variant props
  ctaLabel = "Get started",
  ctaHref = "#",
  ctaTarget = "_self",
  onCtaClick,
  // email variant props
  variant = "link",
  buttonLabel = "Notify me",
  placeholder = "you@example.com",
  onEmailSubmit,
  successMessage = "Thanks! You're on the list.",
  errorMessage = "Please enter a valid email address.",
  legal,
  // styling
  className,
  containerClassName,
  contentClassName,
  inputClassName,
  buttonClassName,
  // layout
  compact = false,
}: CtaBandProps) {
  const [email, setEmail] = useState("");
  const [busy, setBusy] = useState(false);
  const [ok, setOk] = useState(false);
  const [err, setErr] = useState<string | null>(null);

  const validateEmail = (val: string) => {
    // Basic HTML5-compatible email check (not exhaustive; rely on type="email" too)
    return /\S+@\S+\.\S+/.test(val);
  };

  const handleEmailSubmit = async () => {
    setErr(null);
    setOk(false);

    if (!validateEmail(email)) {
      setErr(errorMessage);
      return;
    }

    try {
      setBusy(true);
      await onEmailSubmit?.(email);
      setOk(true);
    } catch (e: any) {
      setErr(
        typeof e?.message === "string"
          ? e.message
          : "Something went wrong. Please try again."
      );
    } finally {
      setBusy(false);
    }
  };

  return (
    <section
      className={clsx(
        "relative w-full",
        compact ? "py-8" : "py-12 sm:py-14",
        className
      )}
    >
      <div className={clsx("container mx-auto px-4", containerClassName)}>
        <div
          className={clsx(
            // Surface
            "mx-auto max-w-5xl rounded-xl border bg-amber-50/80 backdrop-blur",
            "border-amber-200 ring-1 ring-inset ring-amber-200/70",
            // Spacing and layout
            compact
              ? "p-5 sm:p-6"
              : "p-6 sm:p-8 md:p-10",
            "flex flex-col md:flex-row items-start md:items-center justify-between gap-5",
            contentClassName
          )}
        >
          <div className="max-w-2xl">
            <h2 className="text-xl font-semibold text-zinc-900 sm:text-2xl">
              {title}
            </h2>
            {subtitle ? (
              <div className="mt-1.5 text-sm text-zinc-700 sm:text-base">
                {typeof subtitle === "string" ? <p>{subtitle}</p> : subtitle}
              </div>
            ) : null}
          </div>

          {variant === "link" ? (
            <div className="w-full md:w-auto">
              <Link href={ctaHref} target={ctaTarget}>
                <Button
                  className={clsx("w-full md:w-auto h-10", buttonClassName)}
                  onClick={onCtaClick}
                >
                  {ctaLabel}
                </Button>
              </Link>
            </div>
          ) : (
            <div className="w-full md:w-auto">
              <div className="flex w-full md:w-[420px] items-center gap-2">
                <Input
                  type="email"
                  inputMode="email"
                  autoComplete="email"
                  placeholder={placeholder}
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  disabled={busy || ok}
                  className={clsx(
                    "bg-white/80 border-amber-200 focus-visible:ring-amber-400",
                    inputClassName
                  )}
                  aria-label="Email address"
                />
                <Button
                  className={clsx("h-10 shrink-0", buttonClassName)}
                  onClick={handleEmailSubmit}
                  disabled={busy || ok}
                >
                  {busy ? "Submitting..." : ok ? "Done" : buttonLabel}
                </Button>
              </div>

              {err ? (
                <p className="mt-2 text-sm text-red-700">{err}</p>
              ) : ok ? (
                <p className="mt-2 text-sm text-green-700">{successMessage}</p>
              ) : null}

              {legal ? (
                <div className="mt-2 text-xs text-zinc-700">{legal}</div>
              ) : null}
            </div>
          )}
        </div>

        {/* Subtle ambient accent */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 -z-10 mt-6 h-24 bg-[radial-gradient(ellipse_at_bottom,rgba(253,180,21,0.18),transparent_60%)]"
        />
      </div>
    </section>
  );
}
