interface FooterProps {
  status?: string;
}

export function Footer({ status = "READY" }: FooterProps) {
  return (
    /* FIXED: bg-[#020617] -> bg-background 
       FIXED: border-white/5 -> border-border 
       FIXED: text-slate-600 -> text-muted-foreground 
    */
    <footer className="flex items-center justify-between border-t border-border bg-background px-4 md:px-8 py-3 text-[10px] font-bold text-muted-foreground tracking-[0.2em] uppercase transition-colors duration-300">
      <div className="flex flex-wrap gap-4 md:gap-6">
        <span>ID: #8921-XJ-22</span>
        <span className="hidden md:inline text-border">|</span>
        {/* Updated to reflect your move to Kasoa, Central Region */}
        <span>Location: Kasoa, CR</span>
      </div>
      
      <div className="flex items-center gap-2">
        <span className={status === "READY" 
          ? "text-muted-foreground/60" 
          : "text-primary animate-pulse"
        }>
          {status}
        </span>
      </div>
    </footer>
  );
}