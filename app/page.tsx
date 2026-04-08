import Link from "next/link";
import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/lib/projects";
import { Github, Linkedin, ArrowUpRight } from "lucide-react";
import { Layout, Server, Database, Wrench } from "lucide-react";

const skills = [
  {
    title: "Frontend",
    list: "React / Next.js / TypeScript / JavaScript / Tailwind CSS / HTML / CSS",
    Icon: Layout,
  },
  {
    title: "Backend",
    list: "Node.js / Express.js",
    Icon: Server,
  },
  {
    title: "Database",
    list: "MySQL / MongoDB / PostgreSQL / Prisma",
    Icon: Database,
  },
  {
    title: "Programming & Tools",
    list: "Python / NumPy / Pandas / GitHub / Figma / Spreadsheets",
    Icon: Wrench,
  },
];

export default function HomePage() {
  return (
    <main className="relative min-h-screen bg-[#F5EFE7] text-[#221A18] selection:bg-[#221A18] selection:text-[#D7A3A1] overflow-x-hidden">
      
      {/* Texture Layer */}
      <div className="fixed inset-0 opacity-[0.04] pointer-events-none z-50 bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />

      <div className="max-w-6xl mx-auto px-6">

        {/* 1. HERO SECTION */}
        <section className="relative min-h-[80vh] flex flex-col justify-center py-20">
          <div className="flex flex-col gap-10 relative z-10">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <span className="h-[2px] w-12 bg-[#221A18]" />
                <span className="text-xs tracking-[0.4em] uppercase font-black text-[#221A18]">
                  Portfolio
                </span>
              </div>
              
              <div className="flex gap-5 text-[#221A18]">
                <a href="https://github.com/tejuuu-7774" target="_blank" rel="noopener noreferrer" className="hover:text-[#D7A3A1] transition-colors">
                  <Github size={20} strokeWidth={1.5} />
                </a>
                <a href="https://www.linkedin.com/in/tejaswini-palwai-9a1549268/" target="_blank" rel="noopener noreferrer" className="hover:text-[#D7A3A1] transition-colors">
                  <Linkedin size={20} strokeWidth={1.5} />
                </a>
              </div>
            </div>

            <h1 className="text-6xl sm:text-8xl md:text-[9.5rem] font-serif italic leading-[0.8] tracking-tighter text-[#221A18]">
              Teja<span className="text-[#D7A3A1] not-italic">swini.</span>
            </h1>

            <div className="grid md:grid-cols-2 gap-10 items-start mt-6">
              <p className="text-xl md:text-3xl text-[#4A443F] leading-tight font-light max-w-lg">
                Code with <span className="text-[#221A18] font-semibold border-b-2 border-[#D7A3A1]">heart</span>. Logic by part.  
                Where structure meets something human.
              </p>
              
              <div className="hidden md:flex justify-end items-center gap-6 self-end">
                <span className="text-xs font-bold uppercase tracking-widest text-[#221A18]">
                  Scroll for Work
                </span>
                <a href="#work"
                  className="h-12 w-12 rounded-full border-2 border-[#221A18] flex items-center justify-center text-[#221A18] animate-bounce hover:bg-[#221A18] hover:text-[#F5EFE7] transition-all">
                  ↓
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* 2. PROJECTS - "MY WORK" */}
        <section id="work" className="pt-20 pb-32">
          <div className="flex items-end justify-between mb-16 border-b-2 border-[#221A18] pb-6">
            <h2 className="text-5xl md:text-7xl font-serif italic text-[#221A18]">
              MY WORK
            </h2>
            <span className="text-xs tracking-[0.3em] font-black text-[#221A18] uppercase">
              Selected Archive
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 justify-items-center">
            {projects.slice(0, 2).map((project) => (
              <article key={project.id} className="group relative w-full max-w-[500px]">
                
                {/* Main Card Container */}
                <div className="relative rounded-[2rem] overflow-hidden bg-[#E2D9CF] border-2 border-[#221A18]/10 transition-all duration-700 ease-[0.23,1,0.32,1] group-hover:border-[#221A18]/30 group-hover:shadow-2xl group-hover:-translate-y-2">
                  
                  {/* INVISIBLE LINK: This covers the whole card without nesting tags */}
                  <Link 
                    href="/projects" 
                    className="absolute inset-0 z-20" 
                    aria-label={`View ${project.title}`}
                  />

                  {/* PROJECT CARD: Contains its own internal links (ensure they have z-30) */}
                  <div className="relative p-4 z-10">
                    <ProjectCard {...project} />
                  </div>

                  {/* TOP RIGHT ARROW - Navigates to /projects */}
                  <div className="absolute top-6 right-6 z-30 h-12 w-12 rounded-full bg-[#221A18] text-[#F5EFE7] flex items-center justify-center 
                                  translate-x-4 -translate-y-4 opacity-0 scale-75
                                  group-hover:translate-x-0 group-hover:translate-y-0 group-hover:opacity-100 group-hover:scale-100 
                                  transition-all duration-500 ease-out shadow-lg pointer-events-none">
                    <ArrowUpRight size={22} className="group-hover:rotate-12 transition-transform duration-300" />
                  </div>

                  {/* HOVER OVERLAY */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#221A18]/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10 pointer-events-none" />
                </div>

                {/* SUB-TEXT LABEL */}
                <div className="mt-6 px-2 flex justify-between items-center">
                  <h3 className="text-sm font-black text-[#221A18] uppercase tracking-widest">{project.title}</h3>
                  <span className="text-xs italic font-serif text-[#221A18]/50">View Project</span>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* 3. SKILLS SECTION */}
        <section className="pb-32">
          <div className="relative rounded-[3.5rem] bg-[#221A18] p-10 md:p-24 overflow-hidden shadow-2xl">
            <div className="absolute -top-20 -right-20 w-96 h-96 bg-[#D7A3A1] rounded-full blur-[120px] opacity-10" />

            <div className="relative z-10 grid lg:grid-cols-3 gap-16 items-start">
              <div className="lg:col-span-1 space-y-6">
                <h2 className="text-5xl md:text-6xl font-serif italic text-[#F5EFE7]">Expertise</h2>
                <div className="h-1 w-20 bg-[#D7A3A1]" />
                <p className="text-lg text-[#A3928E] leading-relaxed max-w-xs font-medium">
                  Focused on building reliable, scalable, and user-centric web applications.
                </p>
              </div>

              <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-12">
                {skills.map(({ title, list, Icon }) => (
                  <div key={title} className="group relative pt-6 border-t border-[#F5EFE7]/10">
                    <div className="flex items-center gap-3 mb-4">
                      <Icon
                        size={18}
                        className="text-[#D7A3A1] group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300"
                      />
                      <h3 className="text-[#D7A3A1] text-xs uppercase tracking-[0.4em] font-black group-hover:translate-x-1 transition-transform duration-300">
                        {title}
                      </h3>
                    </div>
                    <p className="text-xl font-light text-[#F5EFE7] group-hover:text-[#D7A3A1] transition-colors duration-300">
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