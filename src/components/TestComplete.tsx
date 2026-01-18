import { RotateCcw } from "lucide-react";

type TestCompleteProps = {
  download: string;
  onRetry: () => void;
};

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
      <div className="flex flex-col items-center justify-center text-center gap-6 py-24">
          
      <h2 className="text-3xl md:text-4xl font-semibold">{title}</h2>

      <p className="text-sm md:text-base text-muted-foreground max-w-sm">
        {subtitle}
      </p>

      {/* Button */}
      <button
        onClick={onRetry}
        className="
          mt-4
          flex items-center gap-2
          px-6 py-3
          rounded-full
          bg-sky-500/80 hover:bg-sky-400
          text-white text-sm font-medium
          transition-all duration-300
          shadow-[0_0_30px_rgba(56,189,248,0.25)]
          hover:shadow-[0_0_40px_rgba(56,189,248,0.4)]
        "
      >
        <RotateCcw size={16} />
        Test Again
      </button>
    </div>
  );
}


