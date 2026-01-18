import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  Wifi,
  Menu,
  X,
  History,
  Settings,
  Home,
  ChevronRight,
} from "lucide-react";
import { ModeToggle } from "./ModeToggle";

interface HeaderProps {
  progress?: number;
}

export function Header({ progress = 0 }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const isActive = (path: string) => location.pathname === path;

  const getPageTitle = () => {
    switch (location.pathname) {
      case "/history":
        return "Test History";
      case "/settings":
        return "Node Settings";
      default:
        return "Speed Test";
    }
  };

  return (
    /* TOUCH OF BLUE: 
       - Added 'dark:bg-[#020617]/80' for that deep navy Figma feel.
       - Added 'backdrop-blur-md' for the glass effect.
       - Added 'dark:border-blue-500/10' for the subtle blue border tint.
    */
    <header className="relative z-50 flex items-center justify-between px-4 md:px-8 py-4 bg-background/80 dark:bg-[#020617]/80 backdrop-blur-md border-b border-border dark:border-blue-500/10 transition-all duration-300">
      {/* LOGO AREA & BREADCRUMB */}
      <div className="flex items-center gap-2 md:gap-4">
        <Link
          to="/"
          className="flex items-center gap-3 hover:opacity-80 transition-opacity"
        >
          {/* TOUCH OF BLUE: Icon gets a subtle glow in dark mode */}
          {/* <Wifi
            size={18}
            className="text-foreground dark:text-blue-400 dark:drop-shadow-[0_0_8px_rgba(59,130,246,0.5)]"
          /> */}
          <div className="flex flex-col">
            {/* <span className="text-xs font-bold tracking-tight text-foreground">Internet Society</span>
            <span className="text-[9px] text-muted-foreground font-bold uppercase tracking-widest leading-none">Ghana Chapter</span> */}
            <img src="/isg_logo.png" alt="logo" style={{ width: 140 }} />
          </div>
        </Link>

        {!isActive("/") && (
          <div className="hidden md:flex items-center gap-2 text-muted-foreground/40">
            <ChevronRight size={14} />
            <span className="text-[10px] font-bold uppercase tracking-widest text-primary animate-in fade-in slide-in-from-left-2">
              {getPageTitle()}
            </span>
          </div>
        )}
      </div>

      {/* DESKTOP NAV */}
      <div className="hidden md:flex items-center gap-6">
        <nav className="flex items-center gap-6 text-[11px] font-medium">
          {!isActive("/") && (
            <Link
              to="/"
              className="text-muted-foreground hover:text-foreground dark:hover:text-blue-400 uppercase tracking-wider transition-colors flex items-center gap-1.5"
            >
              <Home size={14} /> Home
            </Link>
          )}
          <Link
            to="/history"
            className={`uppercase tracking-wider transition-all ${
              isActive("/history")
                ? "text-primary dark:text-blue-400 font-bold"
                : "text-muted-foreground hover:text-foreground"
            }`}
          >
            History
          </Link>
          <Link
            to="/settings"
            className={`uppercase tracking-wider transition-all ${
              isActive("/settings")
                ? "text-primary dark:text-blue-400 font-bold"
                : "text-muted-foreground hover:text-foreground"
            }`}
          >
            Settings
          </Link>
        </nav>

        <div className="flex items-center gap-3 border-l border-border dark:border-blue-500/20 pl-6">
          <ModeToggle />
          {/* TOUCH OF BLUE: Status badge uses a slightly more vibrant emerald-blue tint */}
          <div className="px-3 py-1 rounded-full border border-emerald-500/20 bg-emerald-500/5 dark:bg-emerald-500/10 text-[10px] font-bold text-emerald-500 shadow-[0_0_15px_rgba(16,185,129,0.1)]">
            <span className="mr-1.5 inline-block h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
            ONLINE
          </div>
        </div>
      </div>

      {/* MOBILE HAMBURGER */}
      <button
        onClick={toggleMenu}
        className="md:hidden p-2 text-muted-foreground hover:text-foreground dark:hover:text-blue-400"
      >
        {isMenuOpen ? <X size={22} /> : <Menu size={22} />}
      </button>

      {/* MOBILE MENU */}
      <div
        className={`fixed inset-0 z-40 transform transition-transform duration-300 ease-in-out md:hidden ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div
          className="absolute inset-0 bg-black/60 backdrop-blur-sm"
          onClick={toggleMenu}
        />

        <nav className="absolute right-0 top-0 h-full w-72 bg-background dark:bg-[#020617] border-l border-border dark:border-blue-500/10 p-6 shadow-2xl">
          <div className="mb-10 pb-6 border-b border-border dark:border-blue-500/10">
            <span className="text-[10px] font-bold text-muted-foreground uppercase tracking-[0.2em]">
              Active Window
            </span>
            <h2 className="text-xl font-bold text-foreground dark:text-blue-100 mt-1">
              {getPageTitle()}
            </h2>
          </div>

          <div className="flex flex-col gap-6">
            {!isActive("/") && (
              <Link
                to="/"
                onClick={toggleMenu}
                className="flex items-center gap-4 text-sm font-semibold text-foreground/80 hover:text-primary transition-colors"
              >
                <div className="h-8 w-8 rounded-lg bg-muted dark:bg-blue-500/5 flex items-center justify-center">
                  <Home size={18} />
                </div>{" "}
                Home
              </Link>
            )}

            <Link
              to="/history"
              onClick={toggleMenu}
              className={`flex items-center gap-4 text-sm font-semibold transition-all ${
                isActive("/history")
                  ? "text-primary dark:text-blue-400"
                  : "text-foreground/80"
              }`}
            >
              <div
                className={`h-8 w-8 rounded-lg flex items-center justify-center ${
                  isActive("/history")
                    ? "bg-primary/10 dark:bg-blue-500/20 shadow-[0_0_10px_rgba(59,130,246,0.2)]"
                    : "bg-muted dark:bg-blue-500/5"
                }`}
              >
                <History size={18} />
              </div>{" "}
              History
            </Link>

            <Link
              to="/settings"
              onClick={toggleMenu}
              className={`flex items-center gap-4 text-sm font-semibold transition-all ${
                isActive("/settings")
                  ? "text-primary dark:text-blue-400"
                  : "text-foreground/80"
              }`}
            >
              <div
                className={`h-8 w-8 rounded-lg flex items-center justify-center ${
                  isActive("/settings")
                    ? "bg-primary/10 dark:bg-blue-500/20 shadow-[0_0_10px_rgba(59,130,246,0.2)]"
                    : "bg-muted dark:bg-blue-500/5"
                }`}
              >
                <Settings size={18} />
              </div>{" "}
              Settings
            </Link>
          </div>
        </nav>
      </div>

      {/* PROGRESS BAR: Enhanced with a blue glow shadow */}
      <div className="absolute bottom-0 left-0 w-full h-px bg-transparent overflow-hidden">
        <div
          className="h-full bg-primary dark:bg-blue-500 shadow-[0_0_12px_rgba(59,130,246,0.8)] transition-all duration-700"
          style={{ width: `${progress}%` }}
        />
      </div>
    </header>
  );
}
