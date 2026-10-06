"use client";
import Icon from "./Icon";
import { useState } from "react";

const Nav = () => {
  const [mode, setMode] = useState("light");
  return (
    <nav className="bg-white flex items-center justify-between px-4 h-[64px] w-full">
      <Icon iconUrl="/icons/light-logo.svg" size={24} label="light icon" />

      {/* Button to toggle theme*/}
      <button
        onClick={() => (mode === "light" ? setMode("dark") : setMode("light"))}
        className={`h-[34px] transition-all duration-500 ease-in cursor-pointer flex gap-2 pr-[24px] items-center p-1 text-[14px] ${mode === "light" ? "bg-accent" : "bg-text"} font-medium rounded-[32px]`}
      >
        <div
          className={`${mode === "light" ? "flex-1 bg-text" : "flex-2 bg-accent"} h-[26px] flex items-center justify-center aspect-square rounded-full`}
        >
          <Icon
            iconUrl="/icons/light-mode-icon.svg"
            size={16}
            label="light icon"
          />
        </div>

        <p
          className={`${mode === "light" ? "flex-2 text-text" : "flex-1 text-white"}`}
        >
          {mode}
        </p>
      </button>
    </nav>
  );
};

export default Nav;
