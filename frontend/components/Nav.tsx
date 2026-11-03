"use client";
import Icon from "./Icon";
import ThemeButton from "./ThemeButton";
import { useTheme } from "next-themes";
import {useEffect, useState} from "react"

const Nav = () => {
   const { theme, setTheme, resolvedTheme } = useTheme();
   
   const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])
  const isDark = resolvedTheme === "dark";
  return (
    <nav className="bg-white fixed top-0 z-50 dark:bg-[#404040] border-b border-[#d8d8d8] dark:border-red-400/0 flex items-center justify-between px-4 h-[64px] w-full">
      <div className="flex items-center gap-3">
        {mounted &&  <Icon iconUrl={isDark ? "/icons/dark-logo.svg" : "/icons/light-logo.svg"} size={24} label="light icon" />}
       
        <h1 className="text-[20px] font-semibold tracking-[-2%]">Elite hub</h1>
      </div>

      {/* Button to toggle theme*/}
      <ThemeButton />
    </nav>
  );
};

export default Nav;
