import Link from "next/link";
import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/lib/projects";
// Note: Ensure you have lucide-react installed: npm install lucide-react
import { Github, Linkedin, Twitter, ArrowUpRight } from "lucide-react";

export default function HomePage() {
  const featuredProjects = projects.slice(0, 4);

  return (
    <main className="relative min-h-screen bg-[#F5EFE7] text-[#221A18] selection:bg-[#221A18] selection:text-[#D7A3A1] overflow-x-hidden">
      
      {/* Texture Layer */}
      <div className="fixed inset-0 opacity-[0.04] pointer-events-none z-50 bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />

      <div className="max-w-6xl mx-auto px-6">

        {/* 1. HERO SECTION - Full Screen Initial View */}
        <section className="relative min-h-[80vh] flex flex-col justify-center py-20">
          <div className="flex flex-col gap-10 relative z-10">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <span className="h-[2px] w-12 bg-[#221A18]" />
                <span className="text-xs tracking-[0.4em] uppercase font-black text-[#221A18]">
                  Portfolio 2026
                </span>
              </div>
              
              {/* 3. SOCIAL ICONS */}
              <div className="flex gap-5 text-[#221A18]">
                <a href="https://github.com" target="_blank" className="hover:text-[#D7A3A1] transition-colors">
                  <Github size={20} strokeWidth={1.5} />
                </a>
                <a href="https://linkedin.com" target="_blank" className="hover:text-[#D7A3A1] transition-colors">
                  <Linkedin size={20} strokeWidth={1.5} />
                </a>
                <a href="https://twitter.com" target="_blank" className="hover:text-[#D7A3A1] transition-colors">
                  <Twitter size={20} strokeWidth={1.5} />
                </a>
              </div>
            </div>

            <h1 className="text-6xl sm:text-8xl md:text-[9.5rem] font-serif italic leading-[0.8] tracking-tighter text-[#221A18]">
              Teja<span className="text-[#D7A3A1] not-italic">swini.</span>
            </h1>

            <div className="grid md:grid-cols-2 gap-10 items-start mt-6">
              <p className="text-xl md:text-3xl text-[#4A443F] leading-tight font-light max-w-lg">
                Frontend developer crafting <span className="text-[#221A18] font-semibold border-b-2 border-[#D7A3A1]">intentional interfaces</span>. I translate complexity into calm systems.
              </p>
              
              <div className="hidden md:flex justify-end items-center gap-6 self-end">
                <span className="text-xs font-bold uppercase tracking-widest text-[#221A18]">Scroll for Work</span>
                <div className="h-12 w-12 rounded-full border-2 border-[#221A18] flex items-center justify-center text-[#221A18] animate-bounce">
                  ↓
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 2. PROJECTS - Named "MY WORK" */}
        <section className="pt-20 pb-32">
          <div className="flex items-end justify-between mb-16 border-b-2 border-[#221A18] pb-6">
            <h2 className="text-5xl md:text-7xl font-serif italic text-[#221A18]">MY WORK</h2>
            <span className="text-xs tracking-[0.3em] font-black text-[#221A18] uppercase">Selected Archive</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20">
            {featuredProjects.map((project) => (
              <article key={project.id} className="group flex flex-col gap-8">
                <div className="relative aspect-[4/3] rounded-[2rem] overflow-hidden bg-[#E2D9CF] border-2 border-[#221A18]/10 transition-all duration-700 group-hover:border-[#221A18]/30 group-hover:shadow-2xl group-hover:-translate-y-3">
                  <div className="absolute inset-0 p-4">
                    <ProjectCard {...project} />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-[#221A18]/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                </div>

                <div className="flex justify-between items-start px-2">
                  <div className="space-y-1">
                    <h3 className="text-2xl font-bold tracking-tight text-[#221A18]">{project.title}</h3>
                    <p className="text-xs uppercase tracking-[0.2em] text-[#4A443F] font-bold">
                      {project.techStack.slice(0, 2).join(" + ")}
                    </p>
                  </div>
                  
                  {/* 2. ARROW REDIRECT TO PROJECTS PAGE */}
                  <Link 
                    href="/projects" 
                    className="h-14 w-14 rounded-full bg-[#221A18] text-[#F5EFE7] flex items-center justify-center scale-90 group-hover:scale-105 transition-all duration-500 shadow-lg hover:bg-[#D7A3A1]"
                  >
                    <ArrowUpRight size={24} />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* SKILLS SECTION - Optimized */}
        <section className="pb-32">
          <div className="relative rounded-[3.5rem] bg-[#221A18] p-10 md:p-24 overflow-hidden shadow-2xl">
            <div className="absolute -top-20 -right-20 w-96 h-96 bg-[#D7A3A1] rounded-full blur-[120px] opacity-10" />

            <div className="relative z-10 grid lg:grid-cols-3 gap-16 items-start">
              <div className="lg:col-span-1 space-y-6">
                <h2 className="text-5xl md:text-6xl font-serif italic text-[#F5EFE7]">Expertise</h2>
                <div className="h-1 w-20 bg-[#D7A3A1]" />
                <p className="text-lg text-[#A3928E] leading-relaxed max-w-xs font-medium">
                  Focused on high-performance web systems and refined user experience.
                </p>
              </div>

              <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-12">
                {[
                  ["Frontend", "React / Next.js / TypeScript / Tailwind"],
                  ["Design", "Figma / Motion / UX Systems"],
                  ["Backend", "Node / Express / PostgreSQL"],
                  ["Tools", "Git / Vercel / Docker"]
                ].map(([title, list]) => (
                  <div key={title} className="group relative pt-6 border-t border-[#F5EFE7]/10">
                    <h3 className="text-[#D7A3A1] text-xs uppercase tracking-[0.4em] font-black mb-4 group-hover:translate-x-2 transition-transform duration-300">
                      {title}
                    </h3>
                    <p className="text-2xl font-light text-[#F5EFE7] group-hover:text-[#D7A3A1] transition-colors duration-300">
                      {list}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

      </div>
    </main>
  );
}