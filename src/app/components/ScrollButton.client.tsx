"use client"; // Mark as Client Component

import React from "react";

interface ScrollButtonProps {
  targetId: string;
  children: React.ReactNode;
  className?: string;
}

const ScrollButton = ({
  targetId,
  children,
  className = "",
}: ScrollButtonProps) => {
  const scrollToSection = () => {
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <button
      onClick={scrollToSection}
      className={`
        px-6 py-2 
        rounded-full 
        border-2 
        border-blue-500 
        text-blue-500 
        font-medium 
        hover:bg-blue-500 
        hover:text-white 
        transition-colors 
        duration-300
        focus:outline-none
        focus:ring-2
        focus:ring-blue-300
        ${className}
      `}
    >
      {children}
    </button>
  );
};

export default ScrollButton;
