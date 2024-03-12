"use client";

import { cn } from "@/lib/utils";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";

interface Props {
  onSearch: (query: string) => void;
  className?: string;
}

const Searchbar = ({ onSearch, className }: Props) => {
  return (
    <div
      className={cn(
        "flex gap-2 py-1 px-2 items-center bg-card border border-input rounded-full group",
        className
      )}
    >
      <label htmlFor="search">
        <MagnifyingGlassIcon className="w-4 h-4 text-muted-foreground group-hover:text-card-foreground group-focus-within:text-card-foreground transition-colors" />
      </label>
      <input
        id="search"
        type="text"
        onChange={(e) => onSearch(e.target.value)}
        placeholder="Search for a project..."
        className="appearance-none bg-transparent w-full border-none focus:outline-none text-card-foreground placeholder:text-muted-foreground"
      />
    </div>
  );
};

export default Searchbar;
