import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-[100] w-full bg-[#F5EFE7] px-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center justify-between h-16 border-b-2 border-[#221A18]/60">

          {/* BRAND */}
          <Link href="/" className="group flex items-center">
            <span className="text-2xl md:text-[1.6rem] font-serif italic font-black tracking-tighter text-[#221A18] transition-opacity hover:opacity-80">
              T<span className="text-[#D7A3A1] not-italic">.</span>
            </span>
          </Link>

          {/* NAV LINKS */}
          <div className="hidden md:flex items-center gap-10">
            {[
              ["Home", "/"],
              ["About", "/about"],
              ["Work", "/projects"],
              ["Contact", "/contact"],
            ].map(([label, href]) => (
              <Link
                key={label}
                href={href}
                className="relative text-[11px] uppercase tracking-[0.3em] font-black text-[#221A18] group"
              >
                <span className="hover:text-[#D7A3A1] transition-colors duration-300">
                  {label}
                </span>
                <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-[#D7A3A1] group-hover:w-full transition-all duration-500 ease-in-out" />
              </Link>
            ))}
          </div>

          {/* CTA */}
          <Link
            href="/contact"
            className="relative h-10 px-6 flex items-center justify-center border-2 border-[#221A18] text-[10px] uppercase tracking-[0.3em] font-black text-[#221A18] overflow-hidden group transition-all duration-300"
          >
            <span className="relative z-10 group-hover:text-[#F5EFE7] transition-colors duration-300">
              Let’s Talk
            </span>
            <div className="absolute inset-0 bg-[#221A18] translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
          </Link>

        </div>
      </div>
    </nav>
  );
}
