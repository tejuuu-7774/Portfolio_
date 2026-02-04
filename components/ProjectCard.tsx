import Link from "next/link";

type ProjectCardProps = {
  title: string;
  description: string;
  techStack: string[];
  githubUrl: string;
  liveUrl?: string;
};

export default function ProjectCard({ title, description, techStack, githubUrl, liveUrl }: ProjectCardProps) {
  return (
    <div className="group relative h-full w-full rounded-[1.75rem] bg-[#F5EFE7] p-8 flex flex-col justify-between transition-all duration-700 border border-[#D7A3A1]/20 hover:shadow-[0_20px_40px_-15px_rgba(215,163,161,0.3)]">
      <div className="relative z-10">
        <div className="flex justify-between items-start mb-6">
          <div className="space-y-1">
            <h4 className="text-2xl font-serif italic tracking-tight text-[#221A18] leading-none">{title}</h4>
            <div className="h-1 w-8 bg-[#D7A3A1] rounded-full transform origin-left group-hover:w-12 transition-all duration-500" />
          </div>
        </div>
        <p className="text-base leading-relaxed text-[#4A443F] line-clamp-4 font-light mb-8">{description}</p>
        <div className="flex flex-wrap gap-2">
          {techStack.slice(0, 3).map((tech) => (
            <span key={tech} className="text-[9px] uppercase tracking-widest font-black px-3 py-1.5 rounded-md bg-[#D7A3A1]/10 text-[#221A18] group-hover:bg-[#221A18] group-hover:text-[#F5EFE7] transition-all duration-300">
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* FIXED: HIGH VISIBILITY FOOTER */}
      <div className="relative z-10 mt-10 flex items-center justify-between border-t-2 border-[#221A18]/10 pt-6">
        
        {/* Source Code - High Contrast & Interaction */}
        {/* Source Code - High Contrast & Interaction */}
        <Link 
          href={githubUrl} 
          target="_blank" 
          className="group/link flex items-center gap-2 text-[11px] uppercase tracking-[0.25em] font-black text-[#221A18] transition-all"
        >
          <span className="relative pb-1">
            Source Code
            {/* Animated Underline: Stays dark but turns thick and pink on hover */}
            <span className="absolute bottom-0 left-0 w-full h-[2px] bg-[#221A18] group-hover/link:h-[4px] group-hover/link:bg-[#D7A3A1] transition-all duration-300"></span>
          </span>
          
          {/* The Arrow: Now shifts and changes color for clear feedback */}
          <span className="transform group-hover/link:translate-x-1 group-hover/link:text-[#D7A3A1] transition-all duration-300 font-bold text-lg">
            →
          </span>
        </Link>

        {liveUrl && (
          <Link 
            href={liveUrl} 
            target="_blank" 
            className="flex items-center gap-3 py-2.5 px-5 rounded-full bg-[#221A18] text-[#F5EFE7] hover:bg-[#D7A3A1] transition-all duration-300 shadow-md active:scale-95"
          >
            <span className="text-[11px] uppercase tracking-[0.2em] font-black">
              Live Demo
            </span>
            <div className="flex items-center justify-center transform group-hover:rotate-45 transition-transform duration-500">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                <path d="M7 17L17 7M17 7H7M17 7V17"/>
              </svg>
            </div>
          </Link>
        )}
      </div>
    </div>
  );
}