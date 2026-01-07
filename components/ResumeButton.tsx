"use client";

export default function ResumeButton() {
  async function handleClick() {
    await fetch("/api/resume", { method: "POST" });
  }

  return (
    <a
      href="/resume.pdf"
      target="_blank"
      onClick={handleClick}
      className="px-5 py-2 rounded-md border text-sm"
    >
      Download Resume
    </a>
  );
}
