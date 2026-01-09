import { Moon, Sun } from "lucide-react";
import { useTheme } from "@/hooks/use-theme";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export function ModeToggle() {
  const { setTheme } = useTheme();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon" className="w-9 h-9 border-none bg-transparent hover:bg-white/5">
          <Sun className="h-[1.2rem] w-[1.2rem] scale-100 rotate-0 transition-all dark:scale-0 dark:-rotate-90 text-slate-400" />
          <Moon className="absolute h-[1.2rem] w-[1.2rem] scale-0 rotate-90 transition-all dark:scale-100 dark:rotate-0 text-slate-400" />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="bg-[#0f172a] border-white/10 text-slate-200">
        <DropdownMenuItem onClick={() => setTheme("light")} className="focus:bg-white/10 cursor-pointer">Light</DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("dark")} className="focus:bg-white/10 cursor-pointer">Dark</DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("system")} className="focus:bg-white/10 cursor-pointer">System</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}