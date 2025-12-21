"use client";

import React, { useEffect, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";

import SideBar from "@/components/SideBar";
import { raleway600, raleway800 } from "@/styles/fonts";

type FormValues = {
  name: string;
  email: string;
  message: string;
};

export default function ContactPage() {
  return (
    <div className="space-y-12">
      <div>
        <h1 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl">
          Contact
        </h1>
        <p className="mt-2 text-base text-gray-600 dark:text-gray-400">Get in touch.</p>
      </div>

      <div className="max-w-2xl space-y-4">
        <p className="text-sm text-gray-600 dark:text-gray-400">
          For roles, internships, or collaboration inquiries.
        </p>
        <ContactForm />
      </div>

      <SideBar page="Contact" />
    </div>
  );
}

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>();
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const script = document.createElement("script");
    script.src = `https://www.google.com/recaptcha/api.js?render=${process.env.NEXT_PUBLIC_RECAPTCHA_KEY}`;
    script.async = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  const onSubmit: SubmitHandler<FormValues> = async (data) => {
    setLoading(true);

    try {
      const token = await new Promise<string>((resolve) => {
        window.grecaptcha.ready(() => {
          window.grecaptcha
            .execute(process.env.NEXT_PUBLIC_RECAPTCHA_KEY || "", {
              action: "submit",
            })
            .then(resolve);
        });
      });

      const response = await fetch("https://formspree.io/f/xeoeoklz", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ ...data, "g-recaptcha-response": token }),
      });

      if (response.ok) {
        setIsSubmitted(true);
      } else {
        throw new Error("Failed to submit the form.");
      }
    } catch (error) {
      console.error(error);
      alert("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className={`${raleway600.className} w-full rounded border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-gray-900 sm:p-8`}
    >
      {isSubmitted ? (
        <div className="text-center">
          <h2 className={`${raleway800.className} text-2xl`}>Thank you!</h2>
          <p>I&apos;ll get back to you shortly.</p>
        </div>
      ) : (
        // Form
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            {/* Name */}
            <div>
              <input
                {...register("name", { required: "Name is required" })}
                type="text"
                placeholder="Name"
                className="w-full rounded border border-gray-300 bg-white p-3 text-sm transition-colors focus:border-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-0 dark:border-gray-700 dark:bg-gray-900 dark:focus:border-gray-500 dark:focus:ring-gray-500"
                aria-describedby="name-error"
              />
              {errors.name && (
                <p id="name-error" className="text-sm text-red-500">
                  {errors.name.message}
                </p>
              )}
            </div>

            {/* Email */}
            <div>
              <input
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                    message: "Please enter a valid email address.",
                  },
                })}
                type="email"
                placeholder="Email"
                className="w-full rounded border border-gray-300 bg-white p-3 text-sm transition-colors focus:border-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-0 dark:border-gray-700 dark:bg-gray-900 dark:focus:border-gray-500 dark:focus:ring-gray-500"
                aria-describedby="email-error"
              />
              {errors.email && (
                <p id="email-error" className="text-sm text-red-500">
                  {errors.email.message}
                </p>
              )}
            </div>
          </div>

          {/* Message */}
          <div>
            <textarea
              {...register("message", {
                required: "Message is required",
                minLength: {
                  value: 10,
                  message: "Message must be at least 10 characters long.",
                },
              })}
              placeholder="Message"
              rows={5}
              className="w-full rounded border border-gray-300 bg-white p-3 text-sm transition-colors focus:border-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-0 dark:border-gray-700 dark:bg-gray-900 dark:focus:border-gray-500 dark:focus:ring-gray-500"
              aria-describedby="message-error"
            />
            {errors.message && (
              <p id="message-error" className="text-sm text-red-500">
                {errors.message.message}
              </p>
            )}
          </div>

          {/* Submit */}
          <button
            type="submit"
            className={`${raleway600.className} w-full rounded border border-gray-900 bg-gray-900 p-3 text-sm text-white transition-colors ${
              loading
                ? "cursor-not-allowed bg-gray-400"
                : "hover:bg-gray-800 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
            }`}
            disabled={loading}
          >
            {loading ? "Sending..." : "Send Message"}
          </button>
        </form>
      )}
    </div>
  );
};
