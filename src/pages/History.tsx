// src/pages/History.tsx
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { History as HistoryIcon, Download, Upload, Gauge } from "lucide-react";

export default function History() {
  // Sample data
  const historyData = [
    { id: 1, date: "Jan 09, 2026", ping: "12ms", download: "94.2 Mbps", upload: "22.1 Mbps" },
    { id: 2, date: "Jan 08, 2026", ping: "15ms", download: "88.5 Mbps", upload: "19.4 Mbps" },
  ];

  return (
    /* TOUCH OF BLUE: 
       - Added dark:bg-[#020617] base.
       - Added the background glow blobs for depth.
    */
    <div className="flex min-h-screen w-full flex-col bg-background dark:bg-[#020617] text-foreground overflow-x-hidden transition-colors duration-500 relative">
      
      {/* Background depth glows */}
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-600/5 blur-[120px] rounded-full pointer-events-none" />

      <Header />
      
      <main className="relative z-10 flex-1 max-w-5xl w-full mx-auto px-6 py-12">
        <div className="mb-10">
          <h1 className="text-2xl font-bold tracking-tight flex items-center gap-3">
            {/* Logo icon with Figma-style glow */}
            <HistoryIcon className="text-primary dark:text-blue-400 dark:drop-shadow-[0_0_8px_rgba(59,130,246,0.5)]" /> 
            Test History
          </h1>
          <p className="text-muted-foreground text-[10px] mt-1 uppercase tracking-[0.2em] font-bold">
            Your previous network performance results
          </p>
        </div>

        {/* TOUCH OF BLUE TABLE CONTAINER:
           - dark:bg-[#03081c]/60: Deep navy surface.
           - dark:border-blue-500/20: Translucent blue stroke.
           - dark:shadow-[0_0_20px_rgba(59,130,246,0.05)]: Subtle outer glow.
        */}
        <div className="w-full overflow-hidden rounded-xl border border-border dark:border-blue-500/20 bg-card dark:bg-[#03081c]/60 backdrop-blur-md shadow-sm dark:shadow-[0_0_20px_rgba(59,130,246,0.05)]">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                {/* Header with blue tint row in dark mode */}
                <tr className="border-b border-border dark:border-blue-500/10 bg-muted/50 dark:bg-blue-500/5 text-[10px] font-bold uppercase tracking-widest text-muted-foreground">
                  <th className="px-6 py-4">Date</th>
                  <th className="px-6 py-4">
                    <div className="flex items-center gap-2"><Gauge size={14} className="text-primary dark:text-blue-400"/> Ping</div>
                  </th>
                  <th className="px-6 py-4">
                    <div className="flex items-center gap-2"><Download size={14} className="text-emerald-500"/> Download</div>
                  </th>
                  <th className="px-6 py-4">
                    <div className="flex items-center gap-2"><Upload size={14} className="text-purple-500"/> Upload</div>
                  </th>
                </tr>
              </thead>
              <tbody className="text-xs">
                {historyData.map((test) => (
                  /* Rows with blue hover effect */
                  <tr 
                    key={test.id} 
                    className="border-b border-border dark:border-blue-500/5 hover:bg-muted/30 dark:hover:bg-blue-500/5 transition-colors group"
                  >
                    <td className="px-6 py-4 text-muted-foreground font-medium group-hover:text-foreground transition-colors">{test.date}</td>
                    <td className="px-6 py-4 text-primary dark:text-blue-400 font-bold">{test.ping}</td>
                    <td className="px-6 py-4 text-emerald-500 font-bold">{test.download}</td>
                    <td className="px-6 py-4 text-purple-500 font-bold">{test.upload}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </main>
      <Footer status="VIEWING HISTORY" />
    </div>
  );
}