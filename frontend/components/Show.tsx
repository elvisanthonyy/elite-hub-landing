"use client";
import React, { useState, useEffect, useRef } from "react";

interface ChildProps {
  children: React.ReactNode;
  classname?: string;
}

const Show = ({ children, classname }: ChildProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(entry.isIntersecting);
          observer.disconnect();
        }
      },
      {
        threshold: 0.5,
      },
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);
  return (
    <div
      ref={ref}
      className={`w-full transition-all ease-in duration-700 ${isVisible ? "translate-y-0 opacity-100" : "opacity-0 translate-y-8"} ${classname ? classname : ""}`}
    >
      {children}
    </div>
  );
};

export default Show;
