"use client";

import { useState } from "react";

export default function ContactForm() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setSuccess(false);

    const formData = new FormData(e.currentTarget);

    const res = await fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: formData.get("name"),
        email: formData.get("email"),
        message: formData.get("message"),
      }),
    });

    if (res.ok) {
      e.currentTarget.reset();
      setSuccess(true);
    }

    setLoading(false);
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4 max-w-md">
      <input
        name="name"
        placeholder="Your name"
        required
        className="border p-2 rounded"
      />

      <input
        name="email"
        type="email"
        placeholder="Your email"
        required
        className="border p-2 rounded"
      />

      <textarea
        name="message"
        placeholder="Your message"
        rows={4}
        required
        className="border p-2 rounded"
      />

      <button
        type="submit"
        disabled={loading}
        className="bg-black text-white py-2 rounded text-sm"
      >
        {loading ? "Sending..." : "Send Message"}
      </button>

      {success && (
        <p className="text-sm text-green-600">
          Message sent successfully 🌿
        </p>
      )}
    </form>
  );
}
