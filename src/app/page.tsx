"use client";

import Header from "@/components/landing/Header";
import Hero from "@/components/landing/Hero";
import Features from "@/components/landing/Features";
import CtaBand from "@/components/landing/CtaBand";
import Footer from "@/components/landing/Footer";
import { SubscriptionFlow } from "@/components/subscription-flow";
import {
  Map,
  BellRing,
  Megaphone,
  Route as RouteIcon,
  Clock,
  Users,
} from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-dvh flex flex-col bg-white">
      {/* Header */}
      <Header cta={{ label: "Get updates", href: "#subscribe" }} />

      {/* Hero */}
      <Hero
        kicker="Next stop:"
        title="A revolution in public transit."
        subtitle={
          <>
            DuckCross is a new platform focused on simplifying and extending
            your journeys with public transit — from smarter routing and
            real‑time alerts to community-powered insights.
          </>
        }
        ctaLabel="Try the app"
        ctaHref="https://app.duckcross.com"
        belowCta={
          <p className="text-xs text-zinc-600">
            No spam. Occasional updates about launch and progress.
          </p>
        }
      />

      {/* Features */}
      <Features
        kicker="Why DuckCross"
        title="Smarter, calmer, and more connected trips"
        subtitle="Everything you need to get from A to B with confidence—across buses, ferries, and hyper‑local options."
        items={[
          {
            title: "Smarter routing & exploration",
            description:
              "Find the best way from point A to point B across modes. Explore nearby options with an intuitive, detailed map.",
            icon: Map,
          },
          {
            title: "Real-time trip tracking",
            description:
              "Get delay alerts, nap‑mode wake‑ups near your stop, and live updates directly from agencies.",
            icon: BellRing,
          },
          {
            title: "Community-powered reports",
            description:
              "See and share live conditions like overcrowding, broken A/C, or outages—forwarded to agencies when needed.",
            icon: Megaphone,
          },
          {
            title: "Multi‑modal clarity",
            description:
              "Plan confidently across lines, transfers, and last‑mile options with step‑by‑step guidance.",
            icon: RouteIcon,
          },
          {
            title: "Timing that adapts",
            description:
              "Smarter ETAs and heads‑up adjustments help you avoid sprints, long waits, and missed connections.",
            icon: Clock,
          },
          {
            title: "Built with riders",
            description:
              "Feedback‑driven roadmap shaped by real people who rely on transit every day.",
            icon: Users,
          },
        ]}
        columns={3}
        align="center"
      />

      {/* CTA band */}
      <CtaBand
        title="Follow the journey"
        subtitle="We’re building in the open. See product previews and progress updates."
        variant="link"
        ctaLabel="Follow on Instagram"
        ctaHref="https://www.instagram.com/duckcrossapp"
        ctaTarget="_blank"
      />

      {/* Subscribe */}
      <section id="subscribe" className="py-14 sm:py-16 bg-zinc-50">
        <div className="container mx-auto px-4">
          <div className="mx-auto w-full md:w-[520px]">
            <div className="rounded-lg border border-black/10 bg-white/70 p-4 sm:p-6 backdrop-blur">
              <h2 className="text-xl sm:text-2xl font-semibold text-zinc-900">
                Get notified at launch
              </h2>
              <p className="mt-1 text-sm text-zinc-700">
                Enter your email below to receive early access and occasional
                updates. You can unsubscribe anytime.
              </p>
              <div className="mt-4">
                <SubscriptionFlow />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer
        legalLinks={[
          { label: "Privacy Policy", href: "/privacy-policy" },
          { label: "Unsubscribe", href: "/unsubscribe" },
        ]}
      />
    </main>
  );
}
