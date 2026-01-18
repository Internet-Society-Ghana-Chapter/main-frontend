import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  Menu,
  X,
  History,
  Settings,
  Home,
  ChevronRight,
  Moon,
  Sun,
} from "lucide-react";
import { ModeToggle } from "./ModeToggle";

interface HeaderProps {
  progress?: number;
}

export function Header({ progress = 0 }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDark, setIsDark] = useState(false);
  const location = useLocation();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const isActive = (path: string) => location.pathname === path;

  // Sync local state with actual document class
  useEffect(() => {
    const isDarkMode = document.documentElement.classList.contains("dark");
    setIsDark(isDarkMode);
  }, [isMenuOpen]);

  // Manual Toggle Function for Mobile
  const toggleTheme = () => {
    const root = document.documentElement;
    if (root.classList.contains("dark")) {
      root.classList.remove("dark");
      setIsDark(false);
    } else {
      root.classList.add("dark");
      setIsDark(true);
    }
  };

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
    <>
      {/* 1. NAVBAR */}
      <header className="relative z-50 flex items-center justify-between px-4 md:px-8 py-4 bg-background/80 dark:bg-[#020617]/80 backdrop-blur-md border-b border-border dark:border-blue-500/10 transition-all duration-300">
        <div className="flex items-center gap-2 md:gap-4">
          <Link
            to="/"
            className="flex items-center gap-3 hover:opacity-80 transition-opacity"
          >
            {/* --- LOGO SECTION --- */}

            
            <img
              src="/isg_logo.png"
              alt="Internet Society Ghana"
              className="w-[140px] brightness-0 dark:invert transition-all duration-300"
            />

            {/* --- END LOGO SECTION --- */}
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

        {/* PROGRESS BAR */}
        <div className="absolute bottom-0 left-0 w-full h-px bg-transparent overflow-hidden">
          <div
            className="h-full bg-primary dark:bg-blue-500 shadow-[0_0_12px_rgba(59,130,246,0.8)] transition-all duration-700"
            style={{ width: `${progress}%` }}
          />
        </div>
      </header>

      {/* 2. MOBILE MENU */}
      <div
        className={`fixed inset-0 z-[999] md:hidden transition-opacity duration-300 ${
          isMenuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none delay-200"
        }`}
      >
        <div
          className={`absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity duration-300 ${
            isMenuOpen ? "opacity-100" : "opacity-0"
          }`}
          onClick={toggleMenu}
        />

        <nav
          className={`absolute right-0 top-0 h-full w-72 bg-[#1e40af] dark:bg-[#172554] border-l border-white/10 p-6 shadow-2xl shadow-blue-900/50 transform transition-transform duration-300 ease-out flex flex-col ${
            isMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex justify-end mb-4">
            <button
              onClick={toggleMenu}
              className="text-white/70 hover:text-white"
            >
              <X size={24} />
            </button>
          </div>

          <div className="mb-8 pb-6 border-b border-white/10">
            <span className="text-[10px] font-bold text-blue-100/60 uppercase tracking-[0.2em]">
              Active Window
            </span>
            <h2 className="text-xl font-bold text-white mt-1">
              {getPageTitle()}
            </h2>
          </div>

          <div className="flex flex-col gap-6 flex-1">
            {!isActive("/") && (
              <Link
                to="/"
                onClick={toggleMenu}
                className="flex items-center gap-4 text-sm font-semibold text-blue-100 hover:text-white transition-colors"
              >
                <div className="h-8 w-8 rounded-lg bg-white/20 flex items-center justify-center">
                  <Home size={18} className="text-white" />
                </div>{" "}
                Home
              </Link>
            )}

            <Link
              to="/history"
              onClick={toggleMenu}
              className={`flex items-center gap-4 text-sm font-semibold transition-all ${
                isActive("/history")
                  ? "text-white"
                  : "text-blue-100/70 hover:text-white"
              }`}
            >
              <div
                className={`h-8 w-8 rounded-lg flex items-center justify-center ${
                  isActive("/history")
                    ? "bg-white text-blue-600 shadow-lg"
                    : "bg-white/10 text-white"
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
                  ? "text-white"
                  : "text-blue-100/70 hover:text-white"
              }`}
            >
              <div
                className={`h-8 w-8 rounded-lg flex items-center justify-center ${
                  isActive("/settings")
                    ? "bg-white text-blue-600 shadow-lg"
                    : "bg-white/10 text-white"
                }`}
              >
                <Settings size={18} />
              </div>{" "}
              Settings
            </Link>
          </div>

          {/* MOBILE THEME TOGGLE */}
          <div className="mt-auto pt-6 border-t border-white/10 flex items-center justify-between">
            <span className="text-sm font-semibold text-blue-100">
              Appearance
            </span>

            <button
              onClick={toggleTheme}
              className="flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white px-3 py-1.5 rounded-full transition-colors"
            >
              {isDark ? (
                <>
                  <Moon size={16} className="fill-white" />
                  <span className="text-xs font-bold">DARK</span>
                </>
              ) : (
                <>
                  <Sun size={16} className="fill-white" />
                  <span className="text-xs font-bold">LIGHT</span>
                </>
              )}
            </button>
          </div>
        </nav>
      </div>
    </>
  );
}
