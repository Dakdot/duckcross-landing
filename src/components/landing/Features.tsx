"use client";

import Link from "next/link";
import clsx from "clsx";
import { BadgeCheck, ArrowUpRight } from "lucide-react";
import type { LucideIcon } from "lucide-react";

export type FeatureItem = {
  title: string;
  description?: string | React.ReactNode;
  icon?: LucideIcon;
  href?: string;
  target?: "_self" | "_blank";
  rel?: string;
  badge?: string;
};

export interface FeaturesProps {
  kicker?: string;
  title?: string | React.ReactNode;
  subtitle?: string | React.ReactNode;
  items: FeatureItem[];
  columns?: 2 | 3 | 4;
  align?: "left" | "center";
  compact?: boolean;
  className?: string;
  containerClassName?: string;
  cardClassName?: string;
}

/**
 * Features section with an icon + text grid.
 * - Pass `items` with title, description, icon, and optional links.
 * - Control layout with `columns`, `align`, and `compact`.
 */
export default function Features({
  kicker,
  title,
  subtitle,
  items,
  columns = 3,
  align = "left",
  compact = false,
  className,
  containerClassName,
  cardClassName,
}: FeaturesProps) {
  const gridCols =
    columns === 4
      ? "grid-cols-1 sm:grid-cols-2 lg:grid-cols-4"
      : columns === 2
      ? "grid-cols-1 sm:grid-cols-2"
      : "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3";

  const headerAlign =
    align === "center"
      ? "text-center items-center"
      : "text-left items-start";

  return (
    <section
      className={clsx(
        "relative w-full bg-white",
        // space
        compact ? "py-12" : "py-16 sm:py-20",
        className
      )}
    >
      <div
        className={clsx(
          "container mx-auto px-4",
          "max-w-6xl",
          containerClassName
        )}
      >
        {(kicker || title || subtitle) && (
          <div
            className={clsx(
              "mx-auto mb-10 flex flex-col",
              headerAlign,
              align === "center" ? "max-w-3xl" : "max-w-4xl"
            )}
          >
            {kicker ? (
              <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-zinc-600">
                {kicker}
              </p>
            ) : null}
            {title ? (
              typeof title === "string" ? (
                <h2 className="text-2xl font-bold tracking-tight text-zinc-900 sm:text-3xl">
                  {title}
                </h2>
              ) : (
                title
              )
            ) : null}
            {subtitle ? (
              <div className="mt-3 text-base text-zinc-700 sm:text-lg">
                {typeof subtitle === "string" ? <p>{subtitle}</p> : subtitle}
              </div>
            ) : null}
          </div>
        )}

        <div className={clsx("grid gap-4 sm:gap-6", gridCols)}>
          {items.map((item, idx) => {
            const Icon = item.icon ?? BadgeCheck;
            const Card = (
              <div
                className={clsx(
                  "group relative h-full rounded-lg border border-black/10 bg-white/70 backdrop-blur transition-colors",
                  "hover:bg-white",
                  compact ? "p-4" : "p-6",
                  cardClassName
                )}
              >
                <div className="flex items-start gap-4">
                  <div
                    className={clsx(
                      "shrink-0 rounded-md p-2",
                      "bg-amber-100 text-amber-800",
                      "ring-1 ring-inset ring-amber-200"
                    )}
                    aria-hidden="true"
                  >
                    <Icon className="h-5 w-5" strokeWidth={1.75} />
                  </div>
                  <div className="min-w-0">
                    <div className="flex items-center gap-2">
                      <h3 className="text-base font-semibold text-zinc-900">
                        {item.title}
                      </h3>
                      {item.badge ? (
                        <span className="inline-flex items-center rounded-md bg-zinc-900/5 px-2 py-0.5 text-xs font-medium text-zinc-700 ring-1 ring-inset ring-zinc-900/10">
                          {item.badge}
                        </span>
                      ) : null}
                    </div>
                    {item.description ? (
                      <div className="mt-1 text-sm leading-6 text-zinc-700">
                        {typeof item.description === "string" ? (
                          <p>{item.description}</p>
                        ) : (
                          item.description
                        )}
                      </div>
                    ) : null}
                  </div>
                </div>

                {item.href ? (
                  <div className="pointer-events-none absolute inset-0 rounded-lg ring-0 transition-shadow group-hover:ring-1 group-hover:ring-zinc-900/10" />
                ) : null}

                {item.href ? (
                  <div className="mt-3 flex">
                    <span className="inline-flex items-center text-sm font-medium text-zinc-800 group-hover:text-zinc-900">
                      Learn more
                      <ArrowUpRight
                        className="ml-1 h-4 w-4 opacity-70"
                        strokeWidth={1.75}
                      />
                    </span>
                  </div>
                ) : null}
              </div>
            );

            return item.href ? (
              <Link
                key={idx}
                href={item.href}
                target={item.target}
                rel={item.rel}
                className="focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-400/70 rounded-lg"
                aria-label={`Learn more about ${item.title}`}
              >
                {Card}
              </Link>
            ) : (
              <div key={idx}>{Card}</div>
            );
          })}
        </div>
      </div>

      {/* Subtle background accent */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 -bottom-10 h-32 bg-[radial-gradient(ellipse_at_bottom,rgba(253,180,21,0.12),transparent_60%)]"
      />
    </section>
  );
}
