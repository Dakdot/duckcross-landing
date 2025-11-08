"use client";

import Link from "next/link";
import clsx from "clsx";
import type { LucideIcon } from "lucide-react";
import { Instagram, Twitter, Mail, Globe } from "lucide-react";

export type FooterLink = {
  label: string;
  href: string;
  target?: "_self" | "_blank";
  rel?: string;
  ariaLabel?: string;
};

export type FooterMenu = {
  heading?: string;
  links: FooterLink[];
};

export type SocialLink = {
  label: string;
  href: string;
  icon?: LucideIcon;
  target?: "_self" | "_blank";
  rel?: string;
  ariaLabel?: string;
};

export type FooterBrand = {
  name?: string;
  logoSrc?: string;
  logoAlt?: string;
  href?: string;
  description?: string | React.ReactNode;
};

export interface FooterProps {
  brand?: FooterBrand;
  menus?: FooterMenu[];
  socials?: SocialLink[];
  legalLinks?: FooterLink[];
  copyrightName?: string;
  year?: number;
  finePrint?: React.ReactNode;

  className?: string;
  containerClassName?: string;
  topClassName?: string;
  bottomClassName?: string;
  border?: boolean;
  compact?: boolean;
}

/**
 * Footer
 * A flexible, accessible site footer for landing pages and marketing sites.
 *
 * - Pass `brand` for logo/name/description.
 * - Provide `menus` as columns of links.
 * - Provide `socials` for icon buttons.
 * - `legalLinks` renders inline links next to the copyright.
 */
export default function Footer({
  brand = {
    name: "DuckCross",
    logoSrc: "/icon.png",
    logoAlt: "DuckCross",
    href: "/",
    description:
      "A new platform focused on simplifying and extending your journeys with public transit.",
  },
  menus = [
    {
      heading: "Company",
      links: [
        { label: "Privacy Policy", href: "/privacy-policy" },
        { label: "Unsubscribe", href: "/unsubscribe" },
      ],
    },
    {
      heading: "Connect",
      links: [
        {
          label: "Instagram",
          href: "https://www.instagram.com/duckcrossapp",
          target: "_blank",
          rel: "noopener noreferrer",
        },
      ],
    },
  ],
  socials = [
    {
      label: "Instagram",
      href: "https://www.instagram.com/duckcrossapp",
      icon: Instagram,
      target: "_blank",
      rel: "noopener noreferrer",
    },
  ],
  legalLinks = [],
  copyrightName,
  year,
  finePrint,
  className,
  containerClassName,
  topClassName,
  bottomClassName,
  border = true,
  compact = false,
}: FooterProps) {
  const displayYear = year ?? new Date().getFullYear();
  const copyrightOwner = copyrightName ?? brand?.name ?? "DuckCross";

  return (
    <footer
      className={clsx(
        "w-full bg-white/70 backdrop-blur",
        border && "border-t border-black/10",
        className
      )}
    >
      {/* Top section */}
      <div
        className={clsx(
          "container mx-auto px-4",
          compact ? "py-8" : "py-12 sm:py-16",
          containerClassName
        )}
      >
        <div
          className={clsx(
            "grid gap-8 sm:gap-10",
            // Brand column + up to 3 menus on large screens
            "grid-cols-1 sm:grid-cols-2 lg:grid-cols-12",
            topClassName
          )}
        >
          {/* Brand / About */}
          <div className="lg:col-span-5">
            <div className="flex items-center gap-2">
              {brand?.logoSrc ? (
                <img
                  src={brand.logoSrc}
                  alt={brand.logoAlt ?? brand.name ?? "Logo"}
                  width={28}
                  height={28}
                  className="select-none"
                  draggable={false}
                />
              ) : null}
              {brand?.name ? (
                <Link
                  href={brand?.href ?? "/"}
                  aria-label={brand?.name}
                  className="text-sm font-semibold text-zinc-800 hover:text-black"
                >
                  {brand.name}
                </Link>
              ) : null}
            </div>
            {brand?.description ? (
              <div className="mt-3 max-w-prose text-sm text-zinc-700">
                {typeof brand.description === "string" ? (
                  <p>{brand.description}</p>
                ) : (
                  brand.description
                )}
              </div>
            ) : null}

            {socials?.length ? (
              <div className="mt-4 flex flex-wrap items-center gap-2">
                {socials.map((s, i) => {
                  const Icon = s.icon ?? Globe;
                  return (
                    <Link
                      key={`${s.href}-${i}`}
                      href={s.href}
                      target={s.target}
                      rel={s.rel}
                      aria-label={s.ariaLabel ?? s.label}
                      className={clsx(
                        "inline-flex items-center justify-center rounded-md",
                        "h-9 w-9",
                        "bg-white/70 border border-black/10",
                        "text-zinc-700 hover:text-zinc-900 hover:bg-white"
                      )}
                    >
                      <Icon className="h-4 w-4" strokeWidth={1.75} />
                    </Link>
                  );
                })}
              </div>
            ) : null}
          </div>

          {/* Menus */}
          <div className="lg:col-span-7 grid grid-cols-2 md:grid-cols-3 gap-8">
            {menus
              ?.filter((m) => m.links?.length)
              .map((menu, idx) => (
                <nav key={idx} aria-label={menu.heading ?? `Menu ${idx + 1}`}>
                  {menu.heading ? (
                    <h3 className="text-sm font-semibold text-zinc-900">
                      {menu.heading}
                    </h3>
                  ) : null}
                  <ul className="mt-3 space-y-2">
                    {menu.links.map((l, i) => (
                      <li key={`${l.href}-${i}`}>
                        <Link
                          href={l.href}
                          target={l.target}
                          rel={l.rel}
                          aria-label={l.ariaLabel ?? l.label}
                          className="text-sm text-zinc-700 hover:text-zinc-900"
                        >
                          {l.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </nav>
              ))}
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div
        className={clsx(
          "bg-white/60",
          border && "border-t border-black/5",
          bottomClassName
        )}
      >
        <div className="container mx-auto px-4 py-4 flex flex-col md:flex-row items-start md:items-center justify-between gap-3">
          <p className="text-xs text-zinc-700">
            © {displayYear} {copyrightOwner}. All rights reserved.
          </p>

          <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
            {legalLinks?.map((l, i) => (
              <Link
                key={`${l.href}-${i}`}
                href={l.href}
                target={l.target}
                rel={l.rel}
                aria-label={l.ariaLabel ?? l.label}
                className="text-xs text-zinc-700 hover:text-zinc-900"
              >
                {l.label}
              </Link>
            ))}
            {finePrint ? (
              <span className="text-xs text-zinc-700">{finePrint}</span>
            ) : null}
          </div>
        </div>
      </div>
    </footer>
  );
}
