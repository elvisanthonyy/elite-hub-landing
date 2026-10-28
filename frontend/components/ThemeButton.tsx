"use client";

import Icon from "./Icon";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";

export default function ThemeToggle() {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <button
        type="button"
        aria-label="Change color theme"
        className="rounded-lg border p-2"
      >
        Theme
      </button>
    );
  }

  const isDark = resolvedTheme === "dark";

  return (
    <button
      type="button"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      aria-label={`Switch to ${isDark ? "light" : "dark"} mode`}
      className={`h-[34px] transition-all duration-500 ease-in cursor-pointer flex bg-text gap-2 pr-[24px] items-center p-1 text-[14px] font-medium rounded-[32px]`}
    >
      <div
        className={`h-[26px] flex items-center justify-center aspect-square rounded-full`}
      >
        <Icon
          iconUrl="/icons/light-mode-icon.svg"
          size={16}
          label="light icon"
        />
      </div>
      <p className="text-background">{isDark ? "Light" : "Dark"}</p>
    </button>
  );
}
