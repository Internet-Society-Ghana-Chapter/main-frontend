import { LucideIcon } from "lucide-react";

interface SpeedCardProps {
  label: string;
  value: string;
  unit: string;
  icon: LucideIcon;
  active?: boolean;
}

export function SpeedCard({ label, value, unit, icon: Icon, active }: SpeedCardProps) {
  return (
    <div 
      /* TOUCH OF BLUE:
         - dark:bg-[#03081c]/40: Deep navy base.
         - dark:border-blue-500/10: Very subtle blue stroke.
         - dark:shadow-[inset_0_1px_1px_rgba(59,130,246,0.1)]: Figma-style inner light to define the top edge.
      */
      className={`relative group flex flex-col justify-between p-5 rounded-xl border transition-all duration-500 ease-out cursor-default
        ${active 
          ? "border-primary/50 bg-primary/5 dark:bg-blue-500/10 shadow-[0_0_25px_rgba(59,130,246,0.15)] ring-1 ring-primary/20" 
          : "border-border dark:border-blue-500/10 bg-card dark:bg-[#03081c]/40 text-foreground hover:border-primary/40 hover:bg-accent dark:hover:bg-blue-500/5 hover:-translate-y-1 hover:shadow-[0_15px_30px_-15px_rgba(59,130,246,0.2)]"
        }`}
    >
      {/* Top Row: Label and Icon */}
      <div className="flex justify-between items-start">
        <span className="text-[10px] font-bold text-muted-foreground uppercase tracking-[0.2em]">
          {label}
        </span>
        <div className={`transition-all duration-500 group-hover:scale-110 group-hover:rotate-3 
          ${active 
            ? "text-primary dark:text-blue-400 drop-shadow-[0_0_8px_rgba(59,130,246,0.5)]" 
            : "text-muted-foreground group-hover:text-primary dark:group-hover:text-blue-400"
          }`}>
          <Icon size={16} />
        </div>
      </div>

      {/* Bottom Row: Value and Unit */}
      <div className="mt-8 flex items-baseline gap-2">
        <span className="text-2xl font-bold tracking-tight text-foreground transition-colors duration-300 group-hover:text-primary dark:group-hover:text-blue-300">
          {value}
        </span>
        <span className="text-[9px] font-bold text-muted-foreground/60 uppercase tracking-widest">
          {unit}
        </span>
      </div>

      {/* Decorative Glows */}
      {/* 1. Corner Glow on Hover */}
      <div className="absolute top-0 right-0 -mr-2 -mt-2 w-10 h-10 bg-primary/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-full" />
      
      {/* 2. Bottom "Light Leak" only in Active State */}
      {active && (
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1/2 h-px bg-linear-to-r from-transparent via-primary to-transparent opacity-50" />
      )}
    </div>
  );
}