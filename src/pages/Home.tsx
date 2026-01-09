import { useState } from "react";
import { Header } from "@/components/Header";
import { ServerBar } from "@/components/ServerBar";
import { Footer } from "@/components/Footer";
import { SpeedCard } from "@/components/SpeedCard";
import { GoButton } from "@/components/GoButton";
import { MoveDown, MoveUp, Gauge, Cpu } from "lucide-react";

export default function Home() {
  const [testStage, setTestStage] = useState<"idle" | "ping" | "download" | "upload">("idle");
  const [progress, setProgress] = useState(0);
  const [results, setResults] = useState({ ping: "--", jitter: "--", download: "--", upload: "--" });

  const startTest = () => {
    setProgress(0);
    setResults({ ping: "--", jitter: "--", download: "--", upload: "--" });
    setTestStage("ping");
    setTimeout(() => { setResults(r => ({...r, ping: "14", jitter: "3"})); setTestStage("download"); setProgress(33); }, 1400);
    setTimeout(() => { setResults(r => ({...r, download: "94.2"})); setTestStage("upload"); setProgress(66); }, 4000);
    setTimeout(() => { setResults(r => ({...r, upload: "22.1"})); setTestStage("idle"); setProgress(100); }, 8000);
  };

  return (
    /* TOUCH OF BLUE: 
       - Added dark:bg-[#020617] for that Kasoa-modern deep navy base.
       - Added a hidden overflow radial gradient for depth.
    */
    <div className="flex min-h-screen w-full flex-col bg-background dark:bg-[#020617] text-foreground transition-colors duration-500 overflow-hidden relative">
      
      {/* FIGMA BACKGROUND GLOWS: 
          These blobs give the "Midnight Blue" depth from your Figma design.
      */}
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-600/10 dark:bg-blue-600/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-blue-500/10 dark:bg-blue-600/5 blur-[120px] rounded-full pointer-events-none" />

      <Header progress={progress} />
      
      <div className="mt-2 px-3 md:px-6 z-10">
        <ServerBar />
      </div>

      <main className="relative flex flex-1 flex-col items-center justify-center py-8 md:pt-16 md:pb-8 z-10">
        
        {/* GO BUTTON CONTAINER */}
        <div className="relative mb-12 scale-75 md:scale-90 group">
          {/* TOUCH OF BLUE: Radial Aura 
              This creates the "power source" feel behind the button.
          */}
          <div className={`absolute -inset-20 bg-primary/10 blur-[80px] rounded-full transition-opacity duration-1000 ${testStage !== 'idle' ? 'opacity-100 animate-pulse' : 'opacity-40 group-hover:opacity-60'}`} />
          
          <div className="absolute -inset-6 border-2 border-primary/10 rounded-full" />
          
          <div 
            className="absolute -inset-6 border-2 border-transparent rounded-full transition-all duration-1000 shadow-[0_0_15px_rgba(59,130,246,0.2)]"
            style={{
              borderTopColor: progress > 0 ? "var(--color-primary)" : "transparent",
              borderRightColor: progress >= 25 ? "var(--color-primary)" : "transparent",
              borderBottomColor: progress >= 50 ? "var(--color-primary)" : "transparent",
              borderLeftColor: progress >= 75 ? "var(--color-primary)" : "transparent",
              transform: `rotate(${progress * 3.6}deg)`,
              filter: `drop-shadow(0 0 8px var(--color-primary))`
            }}
          />
          <GoButton isRunning={testStage !== "idle"} onClick={startTest} />
        </div>

        {/* SPEED GRID */}
        <div className="grid w-full max-w-5xl grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4 px-4 md:px-6 mt-8 md:mt-24">
          <SpeedCard label="PING" value={results.ping} unit="MS" icon={Gauge} active={testStage === "ping"} />
          <SpeedCard label="JITTER" value={results.jitter} unit="MS" icon={Cpu} active={testStage === "ping"} />
          <SpeedCard label="DOWNLOAD" value={results.download} unit="MBPS" icon={MoveDown} active={testStage === "download"} />
          <SpeedCard label="UPLOAD" value={results.upload} unit="MBPS" icon={MoveUp} active={testStage === "upload"} />
        </div>
      </main>

      <Footer status={testStage === "idle" ? "READY" : `TESTING ${testStage.toUpperCase()}`} />
    </div>
  );
}