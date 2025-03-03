"use client";

import React, { useEffect, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";

import SideBar from "@/components/SideBar";
import { audiowide, raleway600, raleway800 } from "@/styles/fonts";

type FormValues = {
  name: string;
  email: string;
  message: string;
};

export default function ContactPage() {
  return (
    <div className="flex max-h-[calc(100vh-120px)] flex-col gap-12 sm:h-full lg:flex-row lg:justify-between">
      {/* Navigation */}
      <div className="flex w-full flex-col items-center lg:items-start">
        <h1 className={`${audiowide.className} text-3xl font-bold sm:text-5xl`}>Leave a Message</h1>

        {/* Navigation */}
        <div className="mb-0 mt-10 sm:mb-10 sm:mt-20">
          <SideBar page="Contact" />
        </div>
      </div>

      {/* Form */}
      <div className="flex flex-col items-center overflow-y-auto p-2 sm:p-8 md:lg:w-[560px] lg:absolute lg:bottom-0 lg:right-0 xl:w-[800px]">
        <ContactForm />
      </div>
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
      className={`${raleway600.className} w-full rounded-lg border-2 border-gray-500 p-4 sm:p-8`}
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
                className="w-full rounded-lg border-2 border-gray-500 bg-transparent p-3 focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-500"
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
                className="w-full rounded-lg border-2 border-gray-500 bg-transparent p-3 focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-500"
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
              className="w-full rounded-lg border-2 border-gray-500 bg-transparent p-3 focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-500"
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
            className={`${raleway800.className} w-full rounded-lg p-3 text-gray-200 dark:text-gray-800 ${
              loading
                ? "cursor-not-allowed"
                : "bg-gray-800 hover:bg-blue-500 dark:bg-gray-200 dark:hover:bg-blue-500"
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
