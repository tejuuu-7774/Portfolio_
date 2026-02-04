export default function Footer() {
  return (
    <footer className="py-20 bg-[#F5EFE7] border-t border-[#D7A3A1]/10">
      <div className="max-w-5xl mx-auto px-8 flex flex-col md:flex-row justify-between items-center gap-8 text-[#7C6E6A] text-sm tracking-wide">
        <p className="font-medium">© {new Date().getFullYear()} — Tejaswini</p>
        
        <div className="flex gap-10 uppercase text-[10px] font-bold tracking-[0.2em]">
          <a href="#" className="hover:text-[#D7A3A1] transition-colors">LinkedIn</a>
          <a href="#" className="hover:text-[#D7A3A1] transition-colors">GitHub</a>
          <a href="#" className="hover:text-[#D7A3A1] transition-colors">Read CV</a>
        </div>

        <p className="italic opacity-70">Handcrafted with Next.js</p>
      </div>
    </footer>
  );
}