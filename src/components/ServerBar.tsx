import { Globe, ShieldCheck } from "lucide-react";

export function ServerBar() {
  return (
    /* TOUCH OF BLUE:
       - dark:bg-[#03081c]/60: A deeper navy base for dark mode.
       - dark:border-blue-500/20: Translucent blue border instead of gray.
       - dark:shadow-[0_0_25px_rgba(59,130,246,0.05)]: A very subtle outer blue glow.
    */
    <div className="mx-auto grid w-full max-w-4xl grid-cols-2 gap-2 md:gap-0 md:flex md:items-center md:justify-between rounded-xl border border-border dark:border-blue-500/20 bg-card/50 dark:bg-[#03081c]/60 px-4 md:px-6 py-3 md:py-4 backdrop-blur-md transition-all duration-300 shadow-sm dark:shadow-[0_0_20px_rgba(59,130,246,0.05)]">
      
      {/* Provider Box */}
      <div className="flex items-center gap-3 p-2 md:p-0 md:flex-1 group">
        {/* Icon container with blue glow on group-hover */}
        <div className="flex h-8 w-8 md:h-10 md:w-10 items-center justify-center rounded-lg bg-primary/10 text-primary dark:text-blue-400 dark:bg-blue-500/10 transition-colors group-hover:bg-primary/20">
          <Globe size={14} className="md:hidden" />
          <Globe size={18} className="hidden md:block" />
        </div>
        <div className="flex flex-col min-w-0">
          <span className="text-[7px] md:text-[9px] font-bold text-muted-foreground uppercase tracking-[0.2em] truncate">Provider</span>
          <span className="text-[10px] md:text-xs font-semibold text-foreground dark:text-blue-50">Telecel Ghana</span>
        </div>
      </div>
      
      {/* Vertical Divider: Blue tint in dark mode */}
      <div className="hidden md:block h-8 w-px bg-border dark:bg-blue-500/20 mx-4" />
      
      {/* Server Box */}
      <div className="flex items-center gap-3 p-2 md:p-0 md:flex-1 md:justify-end group">
        <div className="flex flex-col items-start md:items-end min-w-0">
          <span className="text-[7px] md:text-[9px] font-bold text-muted-foreground uppercase tracking-[0.2em] truncate">Server</span>
          {/* Note: Kept as Accra Mail for the node name */}
          <span className="text-[10px] md:text-xs font-semibold text-foreground dark:text-blue-50">Accra Mail</span>
        </div>
        <div className="flex h-8 w-8 md:h-10 md:w-10 items-center justify-center rounded-lg bg-primary/10 text-primary dark:text-blue-400 dark:bg-blue-500/10 transition-colors group-hover:bg-primary/20">
          <ShieldCheck size={14} className="md:hidden" />
          <ShieldCheck size={18} className="hidden md:block" />
        </div>
      </div>
    </div>
  );
}