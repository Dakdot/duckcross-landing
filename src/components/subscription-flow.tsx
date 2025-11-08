"use client";

import { createContext, useContext, useState } from "react";
import { EmailForm } from "./email-form";
import Link from "next/link";

type SubscriptionContextType = {
  step: "input" | "completed";
  setCompleted: () => void;
};

const SubscriptionContext = createContext<SubscriptionContextType | undefined>(
  undefined
);

export const useSubscriptionFlow = () => {
  const context = useContext(SubscriptionContext);
  if (!context) throw new Error("useSubscriptionFlow() cannot be used here.");
  return context;
};

export const SubscriptionFlow = () => {
  const [step, setStep] = useState<"input" | "completed">("input");

  return (
    <SubscriptionContext.Provider
      value={{
        step,
        setCompleted: () => setStep("completed"),
      }}
    >
      <div className="bg-zinc-100/60 shadow backdrop-blur-md p-2 rounded-md border-1 border-white/30 w-full md:w-[500px] xl:w-[500px]">
        {step == "input" ? (
          <EmailForm />
        ) : (
          <div className="p-2 space-y-2">
            <p className="text-xl font-medium">Thank you! ❤️</p>
            <p>
              Your subscription to the newsletter has been recorded
              successfully. We appreciate your support. ☺️
            </p>
            <div className="space-y-1">
              <Link
                href={"/privacy-policy"}
                className="text-xs text-zinc-600 hover:underline hover:cursor-pointer"
              >
                View our privacy policy
              </Link>
              <p className="text-xs text-zinc-600 hover:underline hover:cursor-pointer">
                Nevermind, withdraw my subscription.
              </p>
            </div>
          </div>
        )}
      </div>
    </SubscriptionContext.Provider>
  );
};
