"use client";

import Header from "@/components/landing/Header";
import Footer from "@/components/landing/Footer";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-dvh flex flex-col bg-white">
      {/* Header */}
      <Header
        links={[
          { label: "Home", href: "/" },
          { label: "Unsubscribe", href: "/unsubscribe" },
          {
            label: "Instagram",
            href: "https://www.instagram.com/duckcrossapp",
            target: "_blank",
            rel: "noopener noreferrer",
          },
        ]}
        cta={{ label: "Get updates", href: "/#subscribe" }}
      />

      {/* Hero section */}
      <section className="py-12 sm:py-16 bg-[#fdb415] border-b border-zinc-200">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-sm text-zinc-600 hover:text-zinc-900 hover:underline mb-6"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Home
            </Link>
            <h1 className="text-3xl sm:text-4xl font-semibold text-zinc-900">
              Privacy Policy
            </h1>
            <p className="mt-3 text-sm text-zinc-600">
              Version 25w29a — Effective July 17, 2025
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-12 sm:py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <article className="prose prose-zinc max-w-none prose-headings:font-semibold prose-h2:text-xl prose-h2:mt-10 prose-h2:mb-4 prose-p:my-3 prose-p:text-zinc-700 prose-ul:my-3 prose-li:text-zinc-700 prose-strong:text-zinc-900 prose-strong:font-semibold">
              <h2>1. What Information We Collect</h2>
              <p>
                We collect minimal information to operate our email newsletter
                service.
              </p>
              <p>
                <strong>Information You Provide Directly:</strong>
              </p>
              <ul>
                <li>Email address when you subscribe to our newsletter</li>
                <li>Any feedback or questions you send us</li>
              </ul>
              <p>
                <strong>Information Collected Automatically:</strong>
              </p>
              <ul>
                <li>Date and time of subscription</li>
                <li>IP address when you subscribe</li>
                <li>Device and browser information (user agent)</li>
                <li>
                  Email engagement data (opens, clicks) when you interact with
                  our newsletters
                </li>
              </ul>

              <h2>2. How We Use Your Information</h2>
              <p>We use your information solely to:</p>
              <ul>
                <li>Send you project updates via our newsletter</li>
                <li>
                  Measure newsletter performance (open rates, click rates)
                </li>
                <li>Improve our content based on engagement</li>
                <li>Comply with legal requirements</li>
                <li>Respond to your questions or feedback</li>
              </ul>
              <p>
                We do not use your information for advertising, marketing other
                products, or any commercial purposes beyond our project updates.
              </p>

              <h2>3. Legal Basis for Processing</h2>
              <p>
                <strong>For EU residents:</strong> We process your email based
                on your consent when you subscribe.
              </p>
              <p>
                <strong>For all other users:</strong> We process your
                information based on our legitimate business interest in keeping
                subscribers informed about our project.
              </p>

              <h2>4. Information Sharing</h2>
              <p>
                We do not sell, rent, or trade your personal information to
                third parties.
              </p>
              <p>We may share information with:</p>
              <ul>
                <li>
                  <strong>Email service providers</strong> to deliver
                  newsletters
                </li>
                <li>
                  <strong>Analytics providers</strong> to understand email
                  performance
                </li>
                <li>
                  <strong>Legal authorities</strong> if required by law or to
                  protect our rights
                </li>
              </ul>
              <p>
                All third-party services we use are contractually obligated to
                protect your information and use it only for the specified
                purposes.
              </p>

              <h2>5. Your Rights and Choices</h2>
              <p>
                <strong>Everyone can:</strong>
              </p>
              <ul>
                <li>
                  Unsubscribe from our newsletter at any time using the link in
                  any email
                </li>
                <li>
                  Contact us to access, correct, or delete your information
                </li>
                <li>
                  Request a copy of the personal information we have about you
                </li>
              </ul>
              <p>
                <strong>EU residents have additional rights:</strong>
              </p>
              <ul>
                <li>
                  Right to data portability (receive your data in a portable
                  format)
                </li>
                <li>Right to restrict processing of your data</li>
                <li>Right to object to processing</li>
                <li>
                  Right to lodge a complaint with your local data protection
                  authority
                </li>
              </ul>
              <p>
                <strong>California residents have additional rights:</strong>
              </p>
              <ul>
                <li>
                  Right to know what personal information we collect and how we
                  use it
                </li>
                <li>
                  Right to delete personal information (with some exceptions)
                </li>
              </ul>
            </article>
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
