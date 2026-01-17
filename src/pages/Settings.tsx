// src/pages/Settings.tsx
import { useTheme } from "@/hooks/use-theme";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Monitor, Moon, Sun, Globe } from "lucide-react";

export default function Settings() {
  const { theme, setTheme } = useTheme();

  const settingsOptions = [
    {
      title: "Appearance",
      description: "Customize how the application looks on your device.",
      icon: Sun,
      content: (
        /* TOUCH OF BLUE: Segmented control with blue glass feel */
        <div className="flex bg-muted/50 dark:bg-blue-500/5 p-1 rounded-lg border border-border dark:border-blue-500/10 w-fit transition-all backdrop-blur-sm">
          <button
            onClick={() => setTheme("light")}
            className={`flex items-center gap-2 px-4 py-2 rounded-md text-[10px] font-bold transition-all ${
              theme === "light" 
                ? "bg-white text-primary shadow-sm" 
                : "text-muted-foreground hover:text-foreground"
            }`}
          >
            <Sun size={14} /> LIGHT
          </button>
          <button
            onClick={() => setTheme("dark")}
            className={`flex items-center gap-2 px-4 py-2 rounded-md text-[10px] font-bold transition-all ${
              theme === "dark" 
                ? "bg-primary text-primary-foreground shadow-[0_0_15px_rgba(59,130,246,0.5)]" 
                : "text-muted-foreground hover:text-foreground"
            }`}
          >
            <Moon size={14} /> DARK
          </button>
          <button
            onClick={() => setTheme("system")}
            className={`flex items-center gap-2 px-4 py-2 rounded-md text-[10px] font-bold transition-all ${
              theme === "system" 
                ? "bg-primary text-primary-foreground shadow-[0_0_15px_rgba(59,130,246,0.5)]" 
                : "text-muted-foreground hover:text-foreground"
            }`}
          >
            <Monitor size={14} /> SYSTEM
          </button>
        </div>
      ),
    },
    {
      title: "Network Preferences",
      description: "Choose your default testing node and protocol.",
      icon: Globe,
      content: (
        <div className="relative w-full max-w-xs group">
          <select className="bg-card dark:bg-[#03081c]/60 border border-border dark:border-blue-500/20 text-foreground text-xs rounded-lg px-4 py-2.5 outline-none focus:border-primary dark:focus:border-blue-400 w-full cursor-pointer appearance-none transition-all">
            <option value="accra-01">Accra - ISOC Node 01 (Default)</option>
            <option value="kumasi-02">Kumasi - Node 02</option>
            <option value="takoradi-03">Takoradi - Node 03</option>
          </select>
          {/* Custom Chevron for a cleaner look */}
          <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-muted-foreground group-hover:text-primary transition-colors">
            <Monitor size={12} className="rotate-180" />
          </div>
        </div>
      ),
    },
  ];

  return (
    /* TOUCH OF BLUE: Midnight background with radial glow */
    <div className="flex min-h-screen w-full flex-col bg-background dark:bg-[#020617] text-foreground transition-colors duration-500 overflow-x-hidden relative">
      
      {/* Background depth glow */}
      <div className="absolute top-[-10%] right-[-10%] w-[40%] h-[40%] bg-blue-600/5 blur-[120px] rounded-full pointer-events-none" />

      <Header />
      
      <main className="relative z-10 flex-1 max-w-4xl w-full mx-auto px-6 py-12">
        <div className="mb-10">
          <h1 className="text-2xl font-bold tracking-tight">Settings</h1>
          <p className="text-muted-foreground text-[10px] mt-1 uppercase tracking-[0.2em] font-bold">
            Manage your node preferences and interface
          </p>
        </div>

        <div className="space-y-6">
          {settingsOptions.map((item, index) => (
            <div 
              key={index} 
              className="group p-6 rounded-xl border border-border dark:border-blue-500/10 bg-card/50 dark:bg-[#03081c]/40 hover:bg-card dark:hover:bg-[#03081c]/60 transition-all duration-300 shadow-sm dark:shadow-[0_0_20px_rgba(59,130,246,0.03)]"
            >
              <div className="flex items-start justify-between gap-4">
                <div className="flex gap-4">
                  <div className="h-10 w-10 flex items-center justify-center rounded-lg bg-primary/10 text-primary dark:text-blue-400 dark:bg-blue-500/10 dark:drop-shadow-[0_0_5px_rgba(59,130,246,0.3)]">
                    <item.icon size={20} />
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-foreground group-hover:text-primary dark:group-hover:text-blue-300 transition-colors">{item.title}</h3>
                    <p className="text-xs text-muted-foreground mt-1">{item.description}</p>
                  </div>
                </div>
              </div>
              <div className="mt-6 sm:pl-14">
                {item.content}
              </div>
            </div>
          ))}
        </div>
      </main>
      <Footer status="READY" />
    </div>
  );
}