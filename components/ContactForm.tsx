"use client";
import { useState } from "react";

export default function ContactForm() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const form = e.currentTarget;

    setLoading(true);
    setSuccess(false);

    const formData = new FormData(form);

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
      form.reset(); 
      setSuccess(true);
    }

    setLoading(false);
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-10 w-full">
      {/* Name */}
      <div className="group relative border-b border-[#221A18]/20 py-2 focus-within:border-[#D7A3A1] transition-all duration-300">
        <label className="text-[10px] uppercase tracking-[0.2em] text-[#221A18]/60 group-focus-within:text-[#D7A3A1] font-bold">
          01. Name
        </label>
        <input
          name="name"
          placeholder="What should I call you?"
          required
          className="w-full bg-transparent pt-2 pb-1 outline-none text-[#221A18] placeholder:text-[#221A18]/50 text-lg"
        />
      </div>

      {/* Email */}
      <div className="group relative border-b border-[#221A18]/20 py-2 focus-within:border-[#D7A3A1] transition-all duration-300">
        <label className="text-[10px] uppercase tracking-[0.2em] text-[#221A18]/60 group-focus-within:text-[#D7A3A1] font-bold">
          02. Email
        </label>
        <input
          name="email"
          type="email"
          placeholder="Where should I reply?"
          required
          className="w-full bg-transparent pt-2 pb-1 outline-none text-[#221A18] placeholder:text-[#221A18]/50 text-lg"
        />
      </div>

      {/* Message */}
      <div className="group relative border-b border-[#221A18]/20 py-2 focus-within:border-[#D7A3A1] transition-all duration-300">
        <label className="text-[10px] uppercase tracking-[0.2em] text-[#221A18]/60 group-focus-within:text-[#D7A3A1] font-bold">
          03. Message
        </label>
        <textarea
          name="message"
          placeholder="Tell me about your project..."
          rows={4}
          required
          className="w-full bg-transparent pt-2 pb-1 outline-none text-[#221A18] placeholder:text-[#221A18]/50 text-lg resize-none"
        />
      </div>

      <button
        type="submit"
        disabled={loading}
        className="w-full bg-[#221A18] text-[#F5EFE7] py-5 rounded-full text-xs font-black uppercase tracking-[0.3em] hover:bg-[#D7A3A1] hover:text-[#221A18] transition-all duration-500 shadow-lg shadow-[#221A18]/10"
      >
        {loading ? "Sending..." : "Send Message"}
      </button>

      {success && (
        <p className="text-center text-[10px] uppercase tracking-widest text-[#D7A3A1] font-bold animate-pulse">
          ✓ Message received
        </p>
      )}
    </form>
  );
}