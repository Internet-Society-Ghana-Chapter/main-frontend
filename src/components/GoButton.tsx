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
        className="relative group flex items-center justify-center w-44 h-44 rounded-full"
      >
        {/* OUTER GLOW STROKE */}
        <span
          className="
          absolute -inset-6 rounded-full
          border border-primary/20
          opacity-0
          scale-95
          transition-all duration-500
          group-hover:opacity-100
          group-hover:scale-100
          group-hover:shadow-[0_0_40px_rgba(59,130,246,0.55)]
        "
        />

        <span
          className="
          absolute inset-0 rounded-full
          border border-primary/40
          transition-opacity duration-300
          group-hover:opacity-80
        "
        />

        <span
          className="
          relative z-10 flex items-center justify-center
          w-full h-full rounded-full
          from-primary/90 to-primary/70
          text-xl font-semibold tracking-wide
          shadow-lg
          transition-transform duration-300
          group-hover:scale-[1.04]
          active:scale-95
        "
        >
          GO
        </span>
      </Button>
      
      {/* Decorative Glow for Light Mode */}
      {!isRunning && (
        <div className="absolute -z-10 h-32 w-32 bg-primary/5 blur-3xl rounded-full" />
      )}
    </div>
  );
}