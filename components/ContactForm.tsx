"use client";

import { FormEvent, useState } from "react";
import { school } from "@/lib/content";

export function ContactForm() {
  const [sent, setSent] = useState(false);

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const name = String(data.get("name") || "");
    const phone = String(data.get("phone") || "");
    const email = String(data.get("email") || "");
    const message = String(data.get("message") || "");

    const subject = encodeURIComponent(`Enquiry from ${name || "website"}`);
    const body = encodeURIComponent(
      `Name: ${name}\nPhone: ${phone}\nEmail: ${email}\n\nMessage:\n${message}`,
    );
    window.location.href = `mailto:${school.email}?subject=${subject}&body=${body}`;
    setSent(true);
  }

  return (
    <form onSubmit={onSubmit} className="space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <label className="block">
          <span className="mb-1.5 block text-sm font-medium text-navy">
            Full name
          </span>
          <input
            name="name"
            required
            className="w-full rounded-md border border-brand/25 bg-white px-4 py-3 text-navy outline-none transition focus:border-brand-deep focus:ring-2 focus:ring-brand/30"
          />
        </label>
        <label className="block">
          <span className="mb-1.5 block text-sm font-medium text-navy">
            Phone
          </span>
          <input
            name="phone"
            type="tel"
            required
            className="w-full rounded-md border border-brand/25 bg-white px-4 py-3 text-navy outline-none transition focus:border-brand-deep focus:ring-2 focus:ring-brand/30"
          />
        </label>
      </div>
      <label className="block">
        <span className="mb-1.5 block text-sm font-medium text-navy">Email</span>
        <input
          name="email"
          type="email"
          className="w-full rounded-md border border-brand/25 bg-white px-4 py-3 text-navy outline-none transition focus:border-brand-deep focus:ring-2 focus:ring-brand/30"
        />
      </label>
      <label className="block">
        <span className="mb-1.5 block text-sm font-medium text-navy">
          Message
        </span>
        <textarea
          name="message"
          required
          rows={5}
          className="w-full resize-y rounded-md border border-brand/25 bg-white px-4 py-3 text-navy outline-none transition focus:border-brand-deep focus:ring-2 focus:ring-brand/30"
          placeholder="Tell us about the class you are interested in…"
        />
      </label>
      <button
        type="submit"
        className="rounded-md bg-brand-deep px-6 py-3 text-sm font-semibold text-white transition hover:bg-navy"
      >
        Send enquiry
      </button>
      {sent ? (
        <p className="text-sm text-navy-muted">
          Your email app should open with the message ready to send.
        </p>
      ) : null}
    </form>
  );
}
