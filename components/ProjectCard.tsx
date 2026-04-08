import Link from "next/link";
import Image from "next/image";

type ProjectCardProps = {
  title: string;
  description: string;
  techStack: string[];
  githubUrl: string;
  liveUrl?: string;
  imageUrl?: string;
};

export default function ProjectCard({
  title,
  description,
  techStack,
  githubUrl,
  liveUrl,
  imageUrl,
}: ProjectCardProps) {
  return (
    <div className="group relative h-full w-full max-w-[480px] rounded-[1.5rem] bg-[#F5EFE7] p-5 flex flex-col justify-between transition-all duration-500 border border-[#D7A3A1]/20 hover:shadow-[0_15px_30px_-10px_rgba(215,163,161,0.25)]">

      <div className="relative z-10">

        {/* IMAGE - HOVER EFFECT IS NOW LOCALIZED HERE */}

        <div className="relative w-full h-40 mb-5 overflow-hidden rounded-lg bg-[#221A18]/5 border border-[#221A18]/5 transition-all duration-500 hover:scale-[1.02] hover:-translate-y-1 hover:shadow-md cursor-pointer">
          {imageUrl ? (
            <Image
              src={imageUrl}
              alt={title}
              fill
              /* ADDED 'object-top' BELOW */
              className="object-cover object-top transition-transform duration-700 ease-in-out hover:scale-110"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center text-[#221A18]/20 font-serif italic text-sm">
              Preview
            </div>
          )}
        </div>

        {/* TITLE - Keeps existing group hover logic */}
        <div className="mb-3">
          <h4 className="text-lg font-serif italic tracking-tight text-[#221A18] leading-none">
            {title}
          </h4>
          <div className="h-[3px] w-6 bg-[#D7A3A1] mt-1 group-hover:w-10 transition-all duration-500" />
        </div>

        {/* DESCRIPTION */}
        <p className="text-sm leading-relaxed text-[#4A443F] line-clamp-2 font-light mb-4">
          {description}
        </p>

        {/* TECH STACK */}
        <div className="flex flex-wrap gap-1.5">
          {techStack.slice(0, 3).map((tech) => (
            <span
              key={tech}
              className="text-[7px] uppercase tracking-widest font-black px-2 py-1 rounded bg-[#D7A3A1]/10 text-[#221A18] group-hover:bg-[#221A18] group-hover:text-[#F5EFE7] transition-all"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* FOOTER */}
      <div className="relative z-10 mt-6 flex items-center justify-between border-t border-[#221A18]/10 pt-3">

        <Link
          href={githubUrl}
          target="_blank"
          className="group/link flex items-center gap-1 text-[9px] uppercase tracking-[0.2em] font-black text-[#221A18]"
        >
          <span className="relative pb-0.5">
            Code
            <span className="absolute bottom-0 left-0 w-full h-[1.5px] bg-[#221A18] group-hover/link:bg-[#D7A3A1]" />
          </span>
          <span className="group-hover/link:translate-x-1 transition-transform">
            →
          </span>
        </Link>

        {liveUrl && (
          <Link
            href={liveUrl}
            target="_blank"
            className="flex items-center gap-1.5 py-1.5 px-3 rounded-full bg-[#221A18] text-[#F5EFE7] hover:bg-[#D7A3A1] transition-all text-[9px] uppercase tracking-[0.2em] font-black"
          >
            Live
          </Link>
        )}
      </div>
    </div>
  );
}