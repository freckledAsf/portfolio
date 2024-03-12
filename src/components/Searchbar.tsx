"use client";

import { cn } from "@/libs/ui-utils";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";

interface Props {
  onSearch: (query: string) => void;
  className?: string;
}

const Searchbar = ({ onSearch, className }: Props) => {
  return (
    <div
      className={cn(
        "flex gap-2 py-1 px-2 items-center bg-card border border-border rounded-full group",
        className
      )}
    >
      <label htmlFor="search">
        <MagnifyingGlassIcon className="w-4 h-4 text-input group-hover:text-card-foreground group-focus:text-card-foreground transition-colors" />
      </label>
      <input
        id="search"
        type="text"
        onChange={(e) => onSearch(e.target.value)}
        placeholder="Search for a project..."
        className="appearance-none bg-transparent w-full border-none focus:outline-none text-card-foreground placeholder-input"
      />
    </div>
  );
};

export default Searchbar;
