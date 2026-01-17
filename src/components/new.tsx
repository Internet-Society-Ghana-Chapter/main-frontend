import { RotateCcw } from "lucide-react";

interface TestCompleteProps {
  download: string;
  onRetry: () => void;
}

export function TestComplete({ download, onRetry }: TestCompleteProps) {
  const speed = Number(download);

  let title = "Speed Test Complete";
  let subtitle = "Your connection is stable.";

  if (speed >= 100) {
    title = "Excellent Speeds 🚀";
    subtitle = "Your connection is blazing fast.";
  } else if (speed >= 50) {
    title = "Great Speeds ⚡";
    subtitle = "Your connection is performing optimally.";
  } else if (speed >= 20) {
    title = "Good Performance 👍";
    subtitle = "Your connection is suitable for everyday use.";
  } else {
    title = "Fair Connection ⚠️";
    subtitle = "You may experience slowdowns during heavy usage.";
  }

  return (
    <div className="flex flex-col items-center text-center space-y-6">
      <h2 className="text-3xl md:text-4xl font-semibold text-white">{title}</h2>

      <p className="text-sm md:text-base text-muted-foreground max-w-sm">
        {subtitle}
      </p>

      <button
        onClick={onRetry}
        className="
          flex items-center gap-2
          px-6 py-3 rounded-full
          bg-primary/80 hover:bg-primary
          text-white text-sm font-medium
          transition-all duration-300
          hover:scale-105
          shadow-lg
        "
      >
        ↻ Test Again
      </button>
    </div>
  );
}
