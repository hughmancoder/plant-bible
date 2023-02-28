import classNames from "classnames";
import { useEffect, useRef } from "react";
import { Command } from "cmdk";

export const SearchBar = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  /* classNames(
    "flex max-w-[90vw] flex-col items-stretch",
    "rounded-xl border-[1px] border-neutral-100 bg-white",
    "z-20 overflow-hidden",
    "transition-[box-shadow,border] duration-500",
    deemphasise ? "shadow-md" : "shadow-2xl",
    // State: focus
    "focus-within:border-neutral-300"
  )} */
  return (
    <Command
      className={classNames(
        "flex max-w-[90vw] flex-col items-stretch",
        "rounded-xl border-[1px] border-neutral-100 bg-white",
        "z-20 overflow-hidden",
        "transition-[box-shadow, border]",
        "shadow-md",
        "focus-within:border-none"
      )}
    >
      <Command.Input
        ref={inputRef}
        className="border-b-[1px] border-neutral-100 p-4 text-md font-light tracking-tight placeholder:text-neutral-400"
        placeholder="Search for plants..."
        autoFocus
      />
      <Command.List className="h-[50vh] max-h-96 overflow-y-auto p-3 text-center text-sm">
        <CommandBarEmpty />
        <Command.Item>Demo item 1</Command.Item>
        <Command.Item>Demo item</Command.Item>
        {/* {plants.map((plant) => (
          <CommandBarItem key={getPlantKey(plant)} plant={plant} />
        ))} */}
      </Command.List>
    </Command>
  );
};

export const CommandBarEmpty = () => {
  return (
    <Command.Empty className="flex flex-col items-center gap-y-2 py-10 px-6 text-center">
      <span className="text-3xl">🥀 </span>
      <h3 className="text-sm text-neutral-500">Can&apos;t find your plant?</h3>
      <p className="text-sm text-neutral-400">Plant not in database</p>
    </Command.Empty>
  );
};
