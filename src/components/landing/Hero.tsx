"use client";

import Link from "next/link";
import clsx from "clsx";
import { Button } from "@/components/ui/button";

export interface HeroProps {
  title: string;
  subtitle?: string | React.ReactNode;
  /**
   * Primary call-to-action button label.
   */
  ctaLabel: string;
  /**
   * Href for the primary CTA.
   */
  ctaHref: string;
  /**
   * Target for the primary CTA.
   */
  ctaTarget?: "_self" | "_blank";
  /**
   * Additional classes for the root wrapper.
   */
  className?: string;
  /**
   * Additional classes for the inner container.
   */
  containerClassName?: string;
  /**
   * Optional small kicker text above the title.
   */
  kicker?: string;
  /**
   * Optional element rendered below the CTA (e.g., trust badges).
   */
  belowCta?: React.ReactNode;
}

/**
 * Hero section with a headline, supporting subtext, and a primary CTA.
 * Designed for landing pages.
 */
export default function Hero({
  title,
  subtitle,
  ctaLabel,
  ctaHref,
  ctaTarget = "_self",
  className,
  containerClassName,
  kicker,
  belowCta,
}: HeroProps) {
  return (
    <section
      className={clsx(
        // Layout
        "relative w-full",
        // Spacing
        "py-16 sm:py-20 md:py-24",
        // Background subtle gradient
        "bg-gradient-to-b from-white via-white to-zinc-50",
        className
      )}
    >
      <div
        className={clsx(
          "container mx-auto px-4",
          "max-w-3xl",
          "text-center",
          containerClassName
        )}
      >
        {kicker ? (
          <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-zinc-600">
            {kicker}
          </p>
        ) : null}

        <h1 className="text-4xl font-bold tracking-tight text-zinc-900 sm:text-5xl">
          {title}
        </h1>

        {subtitle ? (
          <div className="mx-auto mt-4 max-w-2xl text-base text-zinc-700 sm:text-lg">
            {typeof subtitle === "string" ? <p>{subtitle}</p> : subtitle}
          </div>
        ) : null}

        <div className="mt-8 flex items-center justify-center">
          <Link href={ctaHref} target={ctaTarget} aria-label={ctaLabel}>
            <Button className="h-11 px-6 text-base bg-[#fdb415] hover:bg-[#fdb415]/60 text-white hover:scale-105">
              {ctaLabel}
            </Button>
          </Link>
        </div>

        {belowCta ? <div className="mt-6">{belowCta}</div> : null}
      </div>

      {/* Decorative background accent (subtle) */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 -z-10 -top-10 h-48 bg-[radial-gradient(ellipse_at_top,rgba(253,180,21,0.15),transparent_60%)]"
      />
    </section>
  );
}
