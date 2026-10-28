"use client";
import Icon from "./Icon";
import ThemeButton from "./ThemeButton";

const Nav = () => {
  return (
    <nav className="bg-white fixed top-0 z-50 dark:bg-[#1a1a1a] border-b border-[#d8d8d8] flex items-center justify-between px-4 h-[64px] w-full">
      <div className="flex items-center gap-3">
        <Icon iconUrl="/icons/light-logo.svg" size={20} label="light icon" />
        <h1 className="text-[18px] tracking-[-4%]">Elite hub</h1>
      </div>

      {/* Button to toggle theme*/}
      <ThemeButton />
    </nav>
  );
};

export default Nav;
