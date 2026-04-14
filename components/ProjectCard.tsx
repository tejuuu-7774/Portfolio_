"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import type { ProjectStackItem } from "@/lib/projects";

type ProjectCardProps = {
  title: string;
  description: string;
  techStack: ProjectStackItem[];
  githubUrl: string;
  liveUrl?: string;
  imageUrl?: string;
  status?: string;
  interactivePreview?: boolean;
};

export default function ProjectCard({
  title,
  description,
  techStack,
  githubUrl,
  liveUrl,
  imageUrl,
  status,
  interactivePreview = false,
}: ProjectCardProps) {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    };

    window.addEventListener("keydown", handleEscape);
    return () => window.removeEventListener("keydown", handleEscape);
  }, [isOpen]);

  const openPreview = () => {
    if (interactivePreview) {
      setIsOpen(true);
    }
  };

  const closePreview = () => setIsOpen(false);

  const cardBody = (expanded = false) => (
    <div
      className={`group relative h-full w-full rounded-[1.5rem] border bg-[#F5EFE7] p-5 transition-all duration-500 ${
        expanded
          ? "border-[#D7A3A1]/50 shadow-[0_35px_80px_-24px_rgba(34,26,24,0.45)] ring-1 ring-[#D7A3A1]/35"
          : "max-w-[480px] border-[#221A18]/10 ring-1 ring-[#221A18]/5 hover:border-[#D7A3A1]/55 hover:shadow-[0_28px_70px_-24px_rgba(34,26,24,0.24)]"
      }`}
    >
      <div
        className={`pointer-events-none absolute inset-0 rounded-[1.5rem] transition-opacity duration-500 ${
          expanded
            ? "opacity-100"
            : "opacity-0 group-hover:opacity-100"
        } bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.9),transparent_42%),linear-gradient(135deg,rgba(215,163,161,0.16),transparent_55%)]`}
      />

      <div className="relative z-10">
        <div className="relative mb-5 h-40 w-full cursor-pointer overflow-hidden rounded-lg border border-[#221A18]/5 bg-[#221A18]/5 transition-all duration-500 hover:scale-[1.02] hover:-translate-y-1 hover:shadow-md">
          {status && (
            <div className="absolute right-3 top-3 z-20">
              <span className="inline-flex items-center rounded-full border border-[#F5EFE7]/60 bg-[#221A18]/78 px-3 py-1.5 text-[10px] font-black uppercase tracking-[0.28em] text-[#FFF4EC] shadow-[0_10px_25px_-12px_rgba(34,26,24,0.8)] backdrop-blur-md">
                {status}
              </span>
            </div>
          )}
          {imageUrl ? (
            <Image
              src={imageUrl}
              alt={title}
              fill
              className="object-cover object-top transition-transform duration-700 ease-in-out hover:scale-110"
            />
          ) : (
            <div className="flex h-full w-full items-center justify-center text-sm font-serif italic text-[#221A18]/20">
              Preview
            </div>
          )}
        </div>

        <div className="mb-3">
          <div className="flex flex-wrap items-center gap-2">
            <h4 className="text-lg font-serif italic leading-none tracking-tight text-[#221A18]">
              {title}
            </h4>
          </div>
          <div className="mt-1 h-[3px] w-6 bg-[#D7A3A1] transition-all duration-500 group-hover:w-10" />
        </div>

        <p className="mb-5 text-sm font-light leading-relaxed text-[#4A443F]">
          {description}
        </p>

        <div className="rounded-[1.2rem] border border-[#221A18]/8 bg-[#FFF9F4] p-4">
          <div className="mb-3">
            <p className="text-[10px] font-black uppercase tracking-[0.28em] text-[#7C6E6A]">
              Tech Stack At a Glance
            </p>
            <div className="mt-2 h-px w-14 bg-[#D7A3A1]/80" />
          </div>

          <div className="flex flex-wrap gap-2">
            {techStack.map((item) => (
              <div
                key={`${item.label}-${item.value}`}
                className="rounded-full border border-[#D7A3A1]/30 bg-[#D7A3A1]/10 px-3 py-2 text-[11px] leading-none text-[#221A18] transition-all duration-300 group-hover:border-[#221A18]/10 group-hover:bg-[#221A18] group-hover:text-[#F5EFE7]"
              >
                <span className="mr-1.5 text-[9px] font-black uppercase tracking-[0.16em] opacity-65">
                  {item.label}
                </span>
                <span className="font-medium normal-case tracking-[0.01em]">
                  {item.value}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="relative z-10 mt-6 flex items-center justify-between border-t border-[#221A18]/10 pt-3">
        <Link
          href={githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          onClick={(event) => event.stopPropagation()}
          className="relative z-30 flex items-center gap-1 text-[11px] font-black uppercase tracking-[0.2em] text-[#221A18]"
        >
          <span className="relative pb-0.5">
            Code
            <span className="absolute bottom-0 left-0 h-[1.5px] w-full bg-[#221A18] transition-colors group-hover:bg-[#D7A3A1]" />
          </span>
          <span className="transition-transform group-hover:translate-x-1">→</span>
        </Link>

        {liveUrl && (
          <Link
            href={liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(event) => event.stopPropagation()}
            className="relative z-30 flex items-center gap-1.5 rounded-full bg-[#221A18] px-4 py-1.5 text-[11px] font-black uppercase tracking-[0.2em] text-[#F5EFE7] shadow-sm transition-all hover:bg-[#D7A3A1]"
          >
            Live
          </Link>
        )}
      </div>
    </div>
  );

  return (
    <>
      <div
        onClick={openPreview}
        className={interactivePreview ? "cursor-pointer" : ""}
        role={interactivePreview ? "button" : undefined}
        tabIndex={interactivePreview ? 0 : undefined}
        onKeyDown={
          interactivePreview
            ? (event) => {
                if (event.key === "Enter" || event.key === " ") {
                  event.preventDefault();
                  openPreview();
                }
              }
            : undefined
        }
      >
        {cardBody()}
      </div>

      {interactivePreview && isOpen && (
        <div
          className="fixed inset-0 z-[90] flex items-center justify-center bg-[#221A18]/45 px-6 py-10 backdrop-blur-sm"
          onClick={closePreview}
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.18),transparent_30%)]" />
          <div
            className="relative z-10 w-full max-w-2xl animate-[fadeIn_.25s_ease-out]"
            onClick={(event) => event.stopPropagation()}
          >
            {cardBody(true)}
            <p className="mt-4 text-center text-[11px] font-black uppercase tracking-[0.24em] text-[#F5EFE7]/85">
              Click anywhere outside to close
            </p>
          </div>
        </div>
      )}
    </>
  );
}
