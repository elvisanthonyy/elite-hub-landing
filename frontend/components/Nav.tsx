"use client";
import Icon from "./Icon";
import ThemeButton from "./ThemeButton";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

const Nav = () => {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  const navLinks = [
    {
      name: "Home",
      link: "/",
    },
    {
      name: "Our Work",
      link: "/our-work",
    },
    {
      name: "About Us",
      link: "/about-us",
    },
  ];

  useEffect(() => {
    setMounted(true);
  }, []);
  const isDark = resolvedTheme === "dark";
  return (
    <nav className="bg-white z-100 fixed top-0 dark:bg-[#404040] border-b border-[#d8d8d8] dark:border-red-400/0 flex items-center justify-between px-4 lg:px-[120px] h-[64px] w-full">
      <div className="flex z-100 items-center gap-3">
        {mounted && (
          <Icon
            iconUrl={isDark ? "/icons/dark-logo.svg" : "/icons/light-logo.svg"}
            size={20}
            label="icon"
          />
        )}

        <h1 className="text-[20px] dark:text-[#d8d8d8] font-semibold tracking-[-2%]">
          Elite hub
        </h1>
      </div>

      {/* Button to toggle theme*/}
      <ThemeButton />
      <div
        className={`absolute md:sticky z-40 flex-col pt-[88px] bg-background md:bg-white/0 md:flex-row md:pt-0 top-0 left-0 h-[70dvh] md:h-fit w-full md:w-fit md:flex px-4 gap-8 items-end ${isMenuOpen ? "flex" : "hidden"}`}
      >
        {navLinks.map((link) => (
          <a
            key={link.name}
            href={link.link}
            className="text-[20px] font-bold dark:text-[#d8d8d8] hover:text-primary md:font-medium md:text-[16px] dark:hover:text-[#669985] font-medium"
          >
            {link.name.toUpperCase()}
          </a>
        ))}
      </div>
      <div
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        className="flex z-100 flex-col md:hidden gap-1 cursor-pointer"
      >
        <span
          className={`w-6 transition-all duration-300 h-0.75 ${isMenuOpen ? "rotate-45 translate-y-2" : ""} bg-text rounded-2xl block dark:bg-[#d8d8d8]`}
        ></span>
        <span
          className={`w-6 transition-all duration-300 h-0.75 ${isMenuOpen ? "opacity-0" : ""} bg-text rounded-2xl block dark:bg-[#d8d8d8]`}
        ></span>
        <span
          className={`w-6 transition-all duration-300 h-0.75 ${isMenuOpen ? "-rotate-45 -translate-y-2" : ""} bg-text rounded-2xl block dark:bg-[#d8d8d8]`}
        ></span>
      </div>
    </nav>
  );
};

export default Nav;
