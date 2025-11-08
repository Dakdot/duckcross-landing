"use client";

import { useForm } from "react-hook-form";
import { Form, FormControl, FormField, FormItem, FormMessage } from "./ui/form";
import z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { useState } from "react";
import { LineSpinner } from "ldrs/react";
import "ldrs/react/LineSpinner.css";
import { TriangleAlert } from "lucide-react";
import axios, { isAxiosError } from "axios";
import { useSubscriptionFlow } from "./subscription-flow";

const formSchema = z.object({
  email: z.email(),
});

export const EmailForm = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<null | string>(null);

  const { setCompleted } = useSubscriptionFlow();

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
    },
  });

  const handleSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      setIsLoading(true);
      setError(null);

      const baseURL =
        process.env.NEXT_PUBLIC_API_BASE_URL || "https://duckcross.com/api";
      await axios.post(
        "/subscribe",
        {
          email: values.email,
          timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
          language: "en-US",
        },
        {
          baseURL,
        }
      );

      setCompleted();
    } catch (err) {
      if (isAxiosError(err)) {
        if (!err.response) {
          setError(err.message + " (" + err.code + ")");
          return;
        }

        const errorMessage = err.response.data.error as string;

        if (errorMessage.includes("Email is already in mailing list")) {
          setError("This email is already in the mailing list.");
          return;
        }

        setError(errorMessage);
      } else {
        setError("An unexpected error has occurred. Please try again later.");
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="">
      <p className="max-xl:text-sm font-medium text-center my-6">
        Enter your email below to be notified once it&apos;s ready.
      </p>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-4">
          <FormField
            name="email"
            control={form.control}
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    type="email"
                    className="border-zinc-400/40 bg-white/30"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          {error && (
            <div className="flex flex-row gap-2 items-center border rounded-md p-2 bg-red-200 border-red-300 text-red-800">
              <TriangleAlert className="w-8 h-8 mx-2" strokeWidth={1.5} />
              <div className="">
                <p className="font-medium">
                  There was a problem subscribing you to the newsletter.
                </p>
                <p>{error}</p>
              </div>
            </div>
          )}
          <div className="flex justify-end gap-2 items-center">
            <div>
              <p className="text-xs text-black/70">
                By clicking submit, I agree to receive occasional newsletters
                relating to the status of this project.
              </p>
              <a
                href="/privacy-policy"
                className="text-xs text-black/70 font-semibold hover:underline"
              >
                Privacy Policy
              </a>
            </div>
            <Button
              type="submit"
              disabled={isLoading}
              className="h-10 w-[80px]"
            >
              {isLoading ? (
                <LineSpinner color="white" size={24} stroke={1} />
              ) : (
                "Submit"
              )}
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
};
