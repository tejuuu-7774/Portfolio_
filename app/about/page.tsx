import Image from "next/image";
import {
  GraduationCap,
  Briefcase,
  Sparkles,
  BookOpen,
  Code2,
  Terminal,
  Cpu,
} from "lucide-react";

const learningItems = [
  {
    title: "Large Language Models",
    desc: "Exploring RAG (Retrieval-Augmented Generation) and LangChain workflows.",
    Icon: Cpu,
  },
  {
    title: "Motion Design",
    desc: "Mastering Framer Motion for complex, high-performance UI transitions.",
    Icon: Code2,
  },
  {
    title: "System Architecture",
    desc: "Studying scalable backend patterns and efficient database indexing.",
    Icon: Terminal,
  },
];

export default function AboutPage() {
  return (
    <main className="relative min-h-screen bg-[#F5EFE7] text-[#221A18] selection:bg-[#221A18] selection:text-[#D7A3A1] overflow-x-hidden pt-24 pb-40">
      {/* Texture */}
      <div className="fixed inset-0 opacity-[0.04] pointer-events-none z-50 bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />

      {/* Increased max-width to 6xl to match your Home Page scale */}
      <div className="max-w-6xl mx-auto px-6">

        {/* HERO - Increased text sizes and image scale */}
        <section className="flex flex-col md:flex-row gap-16 items-start mb-32">
          {/* Larger Image Container (w-80) */}
          <div className="relative w-56 h-56 md:w-80 md:h-80 flex-shrink-0 group cursor-none">
            <div className="absolute inset-0 border-2 border-[#221A18] rounded-[2.5rem] translate-x-4 translate-y-4 group-hover:translate-x-0 group-hover:translate-y-0 transition-all duration-500" />
            <div className="relative w-full h-full rounded-[2.5rem] overflow-hidden border-2 border-[#221A18] bg-[#E2D9CF]">
              <Image
                src="/profile.jpg" 
                alt="Tejaswini"
                fill
                className="object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700"
                priority
              />
            </div>
          </div>

          <div className="flex-1 space-y-8">
            <div className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full border border-[#221A18]/20 bg-[#221A18]/5">
              <Sparkles size={16} className="text-[#D7A3A1]" />
              <span className="text-xs font-black uppercase tracking-[0.2em]">
                B.Tech CS + AI Student
              </span>
            </div>

            <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif italic leading-[0.9] tracking-tight">
              Designing systems with{" "}
              <span className="text-[#D7A3A1] not-italic">intelligence.</span>
            </h1>

            <p className="text-lg md:text-2xl text-[#4A443F] font-light leading-relaxed max-w-2xl">
              I’m <strong className="font-bold text-[#221A18]">Tejaswini</strong>. I bridge
              the gap between complex AI logic and intuitive user interfaces, focusing on
              calm, high-performance web systems.
            </p>
          </div>
        </section>

        {/* LEARNING - Larger padding and icons */}
        <section className="mb-40">
          <div className="flex items-center gap-4 mb-12">
            <BookOpen size={24} className="text-[#D7A3A1]" />
            <h2 className="text-sm font-black uppercase tracking-[0.4em]">
              Currently Learning
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {learningItems.map(({ title, desc, Icon }) => (
              <div
                key={title}
                className="group p-10 rounded-[2.5rem] border-2 border-[#221A18]/10 hover:bg-[#221A18] hover:border-[#221A18] transition-all duration-500 cursor-default"
              >
                <Icon
                  size={28}
                  className="text-[#D7A3A1] mb-8 group-hover:scale-110 group-hover:rotate-6 transition-transform"
                />
                <h3 className="text-2xl font-bold mb-4 group-hover:text-[#F5EFE7] transition-colors">
                  {title}
                </h3>
                <p className="text-base text-[#4A443F] group-hover:text-[#A3928E] font-light leading-relaxed transition-colors">
                  {desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* TIMELINE - Expanded spacing and text */}
        <section className="grid lg:grid-cols-12 gap-16 border-t-2 border-[#221A18] pt-20">
          <div className="lg:col-span-4 space-y-6">
            <h2 className="text-5xl md:text-6xl font-serif italic">The Journey</h2>
            <div className="w-16 h-[3px] bg-[#D7A3A1]" />
          </div>

          <div className="lg:col-span-8 space-y-24">

            {/* INTERNSHIP */}
            <div className="group">
              <div className="flex items-center gap-4 mb-8">
                <div className="p-3 bg-[#D7A3A1] rounded-xl group-hover:rotate-12 transition-transform duration-300">
                  <Briefcase size={24} />
                </div>
                <h3 className="text-sm font-black uppercase tracking-widest transition-colors group-hover:text-[#D7A3A1]">
                  Work Experience
                </h3>
              </div>

              <div className="pl-8 border-l-2 border-[#221A18]/10 group-hover:border-[#D7A3A1] transition-all duration-500">
                <div className="flex flex-col sm:flex-row justify-between items-start gap-4 mb-4">
                  <h4 className="text-3xl md:text-4xl font-bold group-hover:translate-x-1 transition-transform">
                    Frontend Developer Intern
                  </h4>
                  <span className="text-xs font-black px-3 py-1.5 bg-[#221A18] text-[#F5EFE7] rounded-lg group-hover:bg-[#D7A3A1] group-hover:text-[#221A18] transition-colors">
                    2025
                  </span>
                </div>
                <p className="text-xl italic text-[#4A443F] mb-4">Company Name</p>
                <p className="text-lg text-[#4A443F] font-light max-w-2xl group-hover:text-[#221A18] transition-colors leading-relaxed">
                  Worked on production-level React applications with a focus on
                  performance, UI consistency, and calm user experience.
                </p>
              </div>
            </div>

            {/* EDUCATION */}
            <div className="group">
              <div className="flex items-center gap-4 mb-8">
                <div className="p-3 bg-[#221A18] text-[#F5EFE7] rounded-xl group-hover:-rotate-12 transition-transform duration-300">
                  <GraduationCap size={24} />
                </div>
                <h3 className="text-sm font-black uppercase tracking-widest transition-colors group-hover:text-[#D7A3A1]">
                  Academic Background
                </h3>
              </div>

              <div className="pl-8 border-l-2 border-[#221A18]/10 group-hover:border-[#221A18] transition-all duration-500 space-y-12">
                <div>
                  <h4 className="text-2xl md:text-3xl font-bold group-hover:translate-x-1 transition-transform">
                    B.Tech in Computer Science (AI)
                  </h4>
                  <p className="text-xs font-bold text-[#D7A3A1] mt-2 mb-4 tracking-widest">
                    2022 — 2026
                  </p>
                  <p className="text-lg text-[#4A443F] font-light max-w-2xl group-hover:text-[#221A18] transition-colors leading-relaxed">
                    Focused on integrating machine learning models into
                    real-world web applications and optimizing user-centric AI workflows.
                  </p>
                </div>

                <div className="opacity-60 group-hover:opacity-100 transition-opacity duration-500">
                  <h4 className="text-2xl font-bold italic">Secondary & Higher Secondary</h4>
                  <p className="text-xs font-bold text-[#4A443F] mt-1 mb-4 uppercase tracking-widest">
                    Studied at [Your School]
                  </p>
                  <p className="text-base text-[#4A443F] font-light italic leading-relaxed">
                    Focus on Science and Mathematics, laying the groundwork for CS logic and algorithmic thinking.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </section>
      </div>
    </main>
  );
}