'use client';

import React, { useState } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';
import { useForm, SubmitHandler } from 'react-hook-form';

import Footer from '@/components/footer';

type FormValues = {
  name: string;
  email: string;
  message: string;
};

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>();
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [recaptchaToken, setRecaptchaToken] = useState<string | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const recaptchaKey = process.env.NEXT_PUBLIC_RECAPTCHA_KEY || '';

  if (!recaptchaKey) {
    console.error(
      'Missing NEXT_PUBLIC_RECAPTCHA_KEY in environment variables.'
    );
    return <p>Configuration error: reCAPTCHA key is missing.</p>;
  }

  const onSubmit: SubmitHandler<FormValues> = async (data) => {
    if (!recaptchaToken) {
      setErrorMessage('Please complete the reCAPTCHA.');
      return;
    }

    setLoading(true);
    setErrorMessage(null);

    try {
      const response = await fetch('https://formspree.io/f/xeoeoklz', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ ...data, recaptchaToken }),
      });

      if (response.ok) {
        setIsSubmitted(true);
      } else {
        throw new Error('Failed to send message.');
      }
    } catch (error) {
      setErrorMessage(`Something went wrong: ${error}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center bg-gray-50 px-4 dark:bg-gray-900 sm:px-6 md:px-8">
      <div className="w-full max-w-4xl rounded-lg bg-white p-8 shadow-lg dark:bg-gray-800 dark:text-gray-200">
        {isSubmitted ? (
          <div className="text-center text-green-600 dark:text-green-400">
            <h2 className="text-2xl font-semibold">Thank you!</h2>
            <p>I&apos;ll get back to you shortly.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              <div>
                <input
                  {...register('name', { required: 'Name is required' })}
                  type="text"
                  placeholder="Your Name"
                  className="w-full rounded-lg border border-gray-300 bg-gray-50 p-3 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:border-gray-700 dark:bg-gray-700 dark:placeholder-gray-400 dark:focus:ring-blue-400"
                  aria-describedby="name-error"
                />
                {errors.name && (
                  <p id="name-error" className="text-sm text-red-500">
                    {errors.name.message}
                  </p>
                )}
              </div>

              <div>
                <input
                  {...register('email', {
                    required: 'Email is required',
                    pattern: {
                      value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                      message: 'Please enter a valid email address.',
                    },
                  })}
                  type="email"
                  placeholder="Your Email"
                  className="w-full rounded-lg border border-gray-300 bg-gray-50 p-3 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:border-gray-700 dark:bg-gray-700 dark:placeholder-gray-400 dark:focus:ring-blue-400"
                  aria-describedby="email-error"
                />
                {errors.email && (
                  <p id="email-error" className="text-sm text-red-500">
                    {errors.email.message}
                  </p>
                )}
              </div>
            </div>

            <div>
              <textarea
                {...register('message', {
                  required: 'Message is required',
                  minLength: {
                    value: 10,
                    message: 'Message must be at least 10 characters long.',
                  },
                })}
                placeholder="Your Message"
                rows={5}
                className="w-full rounded-lg border border-gray-300 bg-gray-50 p-3 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:border-gray-700 dark:bg-gray-700 dark:placeholder-gray-400 dark:focus:ring-blue-400"
                aria-describedby="message-error"
              />
              {errors.message && (
                <p id="message-error" className="text-sm text-red-500">
                  {errors.message.message}
                </p>
              )}
            </div>

            <div className="mt-4 flex w-full flex-col items-center">
              <ReCAPTCHA
                sitekey={recaptchaKey}
                onChange={(token) => setRecaptchaToken(token)}
                onExpired={() => setRecaptchaToken(null)}
              />
            </div>

            {errorMessage && (
              <p className="text-sm text-red-500">{errorMessage}</p>
            )}

            <button
              type="submit"
              className={`w-full rounded-lg p-3 text-white ${
                loading
                  ? 'cursor-not-allowed bg-gray-400'
                  : 'bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600'
              }`}
              disabled={loading}
            >
              {loading ? 'Sending...' : 'Send Message'}
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default function Contact() {
  return (
    <>
      {/* Main */}
      <main className="flex flex-1 flex-col items-center justify-center gap-10 px-6 py-10 sm:px-8 sm:pb-20 md:px-16 lg:px-20">
        <h1 className="my-4 text-center text-4xl font-bold text-gray-900 dark:text-gray-100 md:my-12">
          Leave a Message
        </h1>

        <ContactForm />
      </main>

      {/* Footer */}
      <Footer page="Contact" />
    </>
  );
}
