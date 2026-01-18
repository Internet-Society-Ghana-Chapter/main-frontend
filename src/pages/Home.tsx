import { useState } from "react";
import { Header } from "@/components/Header";
import { ServerBar } from "@/components/ServerBar";
import { Footer } from "@/components/Footer";
import { SpeedCard } from "@/components/SpeedCard";
import { GoButton } from "@/components/GoButton";
import { SpeedMeter } from "@/components/SpeedMeter";
import { TestComplete } from "@/components/TestComplete";
import { AnimatePresence, motion } from "framer-motion";

import { MoveDown, MoveUp, Gauge, Cpu } from "lucide-react";

export default function Home() {
  const [testStage, setTestStage] = useState<
    "idle" | "ping" | "download" | "upload" | "done"
  >("idle");

  const [progress, setProgress] = useState(0);
  const [results, setResults] = useState({
    ping: "--",
    jitter: "--",
    download: "--",
    upload: "--",
  });

  const startTest = () => {
    setProgress(0);
    setResults({ ping: "--", jitter: "--", download: "--", upload: "--" });
    setTestStage("ping");

    setTimeout(() => {
      setResults((r) => ({ ...r, ping: "14", jitter: "3" }));
      setTestStage("download");
      setProgress(33);
    }, 1400);

    setTimeout(() => {
      setResults((r) => ({ ...r, download: "94.2" }));
      setTestStage("upload");
      setProgress(66);
    }, 4000);

    setTimeout(() => {
      setResults((r) => ({ ...r, upload: "22.1" }));
      setTestStage("done");
      setProgress(100);
    }, 8000);
  };

  const resetTest = () => {
    setProgress(0);
    setResults({ ping: "--", jitter: "--", download: "--", upload: "--" });
    setTestStage("idle");
  };

  return (
    <div className="flex min-h-screen w-full flex-col bg-background dark:bg-[#020617] text-foreground transition-colors duration-500 overflow-hidden relative">
      {/* Background glows */}
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-600/10 dark:bg-blue-600/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-blue-500/10 dark:bg-blue-600/5 blur-[120px] rounded-full pointer-events-none" />

      <Header progress={progress} />

      <div className="mt-2 px-3 md:px-6 z-10">
        <ServerBar />
      </div>

      <main className="relative flex flex-1 flex-col items-center justify-center py-8 md:pt-16 md:pb-8 z-10">
        {/* CENTER AREA */}
        <AnimatePresence mode="wait">
          {testStage === "idle" && (
            <motion.div
              key="go"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
            >
              <GoButton onClick={startTest} isRunning={false} />
            </motion.div>
          )}

          {testStage !== "idle" && testStage !== "done" && (
            <motion.div
              key="meter"
              initial={{ opacity: 0, scale: 0.92 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
            >
              <SpeedMeter
                stage={testStage}
                progress={progress}
                download={results.download}
                upload={results.upload}
              />
            </motion.div>
          )}

          {testStage === "done" && (
            <motion.div
              key="complete"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            >
              <TestComplete download={results.download} onRetry={resetTest} />
            </motion.div>
          )}
        </AnimatePresence>

        {/* SPEED GRID */}
        <div className="grid w-full max-w-5xl grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4 px-4 md:px-6 mt-8 md:mt-24">
          <SpeedCard
            label="PING"
            value={results.ping}
            unit="MS"
            icon={Gauge}
            active={testStage === "ping"}
          />
          <SpeedCard
            label="JITTER"
            value={results.jitter}
            unit="MS"
            icon={Cpu}
            active={testStage === "ping"}
          />
          <SpeedCard
            label="DOWNLOAD"
            value={results.download}
            unit="MBPS"
            icon={MoveDown}
            active={testStage === "download"}
          />
          <SpeedCard
            label="UPLOAD"
            value={results.upload}
            unit="MBPS"
            icon={MoveUp}
            active={testStage === "upload"}
          />
        </div>
      </main>

      <Footer
        status={
          testStage === "idle"
            ? "READY"
            : testStage === "done"
              ? "COMPLETED"
              : `TESTING ${testStage.toUpperCase()}`
        }
      />
    </div>
  );
}
