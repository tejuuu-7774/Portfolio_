import ContactForm from "@/components/ContactForm";

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-[#F5EFE7] flex flex-col selection:bg-[#D7A3A1] selection:text-[#221A18]">
      
      <div className="flex-grow flex items-center justify-center px-6 py-20">
        <div className="w-full max-w-6xl grid lg:grid-cols-2 gap-16 lg:gap-32 items-center">

          {/* LEFT CONTENT */}
          <div className="flex flex-col gap-12">
            
            <div className="space-y-8">
              <h1 className="text-6xl md:text-8xl font-serif leading-[0.9] tracking-tighter text-[#221A18]">
                Let’s <br />
                <span className="italic text-[#D7A3A1]">Connect.</span>
              </h1>

              <p className="text-lg text-[#221A18]/80 max-w-md leading-relaxed">
                I’m open to meaningful collaborations, internships, and ideas that
                turn into real products. If you’re building something thoughtful —
                I’d love to be part of it.
              </p>

              {/* Status Indicator */}
              <div className="flex items-center gap-3 pt-4">
                <div className="w-2 h-2 rounded-full bg-[#D7A3A1] animate-ping" />
                <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-[#221A18]/60">
                  Available for new projects
                </span>
              </div>
            </div>

            {/* SOCIALS BOX */}
            <div className="max-w-xs border-t border-[#221A18]/10 pt-10 space-y-6">
              <h4 className="text-[10px] uppercase tracking-[0.4em] text-[#221A18]/40 font-black">
                Find me on
              </h4>
              <div className="flex flex-wrap gap-x-8 gap-y-4 text-sm font-medium">
                <a 
                  href="https://www.linkedin.com/in/tejaswini-palwai-9a1549268/" 
                  target="_blank"
                  className="hover:text-[#D7A3A1] transition-colors underline underline-offset-8 decoration-[#D7A3A1]/20 hover:decoration-[#D7A3A1]"
                >
                  LinkedIn
                </a>
                <a 
                  href="https://github.com/tejuuu-7774" 
                  target="_blank"
                  className="hover:text-[#D7A3A1] transition-colors underline underline-offset-8 decoration-[#D7A3A1]/20 hover:decoration-[#D7A3A1]"
                >
                  GitHub
                </a>
                <a 
                  href="mailto:Palwaitejaswini7777@gmail.com" 
                  className="hover:text-[#D7A3A1] transition-colors underline underline-offset-8 decoration-[#D7A3A1]/20 hover:decoration-[#D7A3A1]"
                >
                  Email
                </a>
              </div>
            </div>
          </div>

          {/* RIGHT CONTENT (FORM) */}
          <div className="relative group">
            {/* Background Glow */}
            <div className="absolute -inset-4 bg-gradient-to-tr from-[#D7A3A1]/10 to-transparent rounded-[3rem] blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            
            <div className="relative bg-white/40 backdrop-blur-xl p-10 md:p-14 rounded-[2.5rem] border border-white/40 shadow-2xl shadow-[#221A18]/5">
              <ContactForm />
            </div>
          </div>

        </div>
      </div>

      {/* FOOTER */}
      <div className="w-full max-w-6xl mx-auto px-6 pb-10 flex justify-between items-center text-[10px] uppercase tracking-[0.4em] text-[#221A18]/30">
        <p>© 2026 TEJASWINI</p>
        <div className="h-[1px] w-12 bg-[#221A18]/10 hidden md:block" />
        <p className="hidden md:block">BASED IN INDIA</p>
      </div>

    </main>
  );
}