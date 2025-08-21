import React from "react";

interface ScrollButtonProps {
  targetId: string; // ID of the section to scroll to
  children: React.ReactNode;
}

const ScrollButton: React.FC<ScrollButtonProps> = ({ targetId, children }) => {
  const scrollToSection = () => {
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <button
      onClick={scrollToSection}
      className="
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
      "
    >
      {children}
    </button>
  );
};

export default ScrollButton;
