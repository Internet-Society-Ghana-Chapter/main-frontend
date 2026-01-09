import { Button } from "@/components/ui/button";

interface GoButtonProps {
  isRunning: boolean;
  onClick: () => void;
}

export function GoButton({ isRunning, onClick }: GoButtonProps) {
  return (
    <div className="relative flex items-center justify-center">
      {/* Animated Outer Rings - Updated to use Primary variable */}
      {isRunning && (
        <>
          <div className="absolute h-48 w-48 animate-ping rounded-full border border-primary/30" />
          <div className="absolute h-64 w-64 animate-pulse rounded-full border border-primary/10" />
        </>
      )}

      {/* Main Button */}
      <Button
        onClick={onClick}
        disabled={isRunning}
        className={`h-40 w-40 rounded-full border-4 text-2xl font-bold tracking-widest transition-all duration-500 shadow-xl
          ${isRunning 
            ? "border-primary bg-primary/10 text-primary shadow-[0_0_50px_rgba(var(--primary),0.2)] animate-pulse" 
            : "border-border bg-card text-card-foreground hover:border-primary/50 hover:bg-accent hover:text-accent-foreground"
          }`}
      >
        <span className="relative z-10">
          {isRunning ? "TESTING" : "GO"}
        </span>
      </Button>
      
      {/* Decorative Glow for Light Mode */}
      {!isRunning && (
        <div className="absolute -z-10 h-32 w-32 bg-primary/5 blur-3xl rounded-full" />
      )}
    </div>
  );
}