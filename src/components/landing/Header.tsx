"use client";

import Link from "next/link";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import clsx from "clsx";

export type NavLink = {
  label: string;
  href: string;
  target?: "_blank" | "_self";
  rel?: string;
};

export type HeaderBrand = {
  name?: string;
  logoSrc?: string;
  logoAlt?: string;
};

export interface HeaderProps {
  brand?: HeaderBrand;
  links?: NavLink[];
  cta?: {
    label: string;
    href: string;
    target?: "_blank" | "_self";
    rel?: string;
  };
  className?: string;
  containerClassName?: string;
  transparent?: boolean;
  sticky?: boolean;
}

export default function Header({
  brand = { name: "DuckCross", logoSrc: "/icon.png", logoAlt: "DuckCross" },
  links = [],
  cta,
  className,
  containerClassName,
  transparent = false,
  sticky = true,
}: HeaderProps) {
  const [open, setOpen] = useState(false);

  const headerClasses = clsx(
    "w-full border-b",
    transparent
      ? "bg-transparent border-black/5"
      : "bg-white/70 backdrop-blur border-black/10",
    sticky && "sticky top-0 z-50",
    className
  );

  const navLinkClasses =
    "text-sm text-zinc-700 hover:text-black transition-colors px-2 py-1 rounded-md hover:bg-zinc-100/60";

  return (
    <header className={headerClasses}>
      <div
        className={clsx(
          "container mx-auto flex items-center justify-between px-4 py-3",
          containerClassName
        )}
      >
        {/* Brand */}
        <Link href="/" className="flex items-center gap-2 group">
          {brand.logoSrc ? (
            // Using <img> avoids forcing next/image config here and works well for static public assets.
            <img
              src={brand.logoSrc}
              alt={brand.logoAlt ?? brand.name ?? "Logo"}
              width={28}
              height={28}
              className="select-none"
              draggable={false}
            />
          ) : null}
          {brand.name ? (
            <span className="text-sm font-semibold text-zinc-800 group-hover:text-black">
              {brand.name}
            </span>
          ) : null}
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-1">
          {links?.map((l) => (
            <Link
              key={`${l.href}-${l.label}`}
              href={l.href}
              target={l.target}
              rel={l.rel}
              className={navLinkClasses}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden md:flex items-center">
          {cta ? (
            <Link href={cta.href} target={cta.target} rel={cta.rel}>
              <Button className="h-9">{cta.label}</Button>
            </Link>
          ) : null}
        </div>

        {/* Mobile menu button */}
        <button
          aria-label="Toggle menu"
          className="md:hidden inline-flex items-center justify-center rounded-md p-2 text-zinc-700 hover:bg-zinc-100/70"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* Mobile drawer */}
      <div
        className={clsx(
          "md:hidden border-t border-black/10 overflow-hidden transition-[max-height,opacity] duration-300 ease-out",
          open ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        )}
        aria-hidden={!open}
      >
        <div className="px-4 py-3 space-y-2 bg-white/80 backdrop-blur">
          <div className="flex flex-col gap-1">
            {links?.map((l) => (
              <Link
                key={`m-${l.href}-${l.label}`}
                href={l.href}
                target={l.target}
                rel={l.rel}
                className="px-2 py-2 rounded-md text-sm text-zinc-800 hover:bg-zinc-100/70"
                onClick={() => setOpen(false)}
              >
                {l.label}
              </Link>
            ))}
          </div>
          {cta ? (
            <Link href={cta.href} target={cta.target} rel={cta.rel}>
              <Button className="w-full h-10" onClick={() => setOpen(false)}>
                {cta.label}
              </Button>
            </Link>
          ) : null}
        </div>
      </div>
    </header>
  );
}
