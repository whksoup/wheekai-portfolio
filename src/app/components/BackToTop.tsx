"use client";

import { useEffect, useState } from "react";

export default function BackToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.scrollY > 300);
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  // ↑ scroll to top
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  // ↓ scroll to next section
  const scrollToNext = () => {
    const sections = document.querySelectorAll("section");

    const scrollPosition = window.scrollY + window.innerHeight * 0.2;

    for (let section of sections) {
      const rect = section.getBoundingClientRect();
      const offsetTop = rect.top + window.scrollY;

      if (offsetTop > scrollPosition) {
        window.scrollTo({
          top: offsetTop,
          behavior: "smooth",
        });
        break;
      }
    }
  };

  return (
    <>
      {isVisible && (
        <div className="fixed bottom-6 right-6 flex flex-col gap-2 z-50">
          {/* ↓ Down button */}
          <button
            onClick={scrollToNext}
            className="p-3 rounded-full bg-gray-800 text-white shadow-lg hover:bg-gray-700 transition-all duration-300"
            aria-label="Scroll to next section"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19.5 8.25l-7.5 7.5-7.5-7.5"
              />
            </svg>
          </button>

          {/* ↑ Up button */}
          <button
            onClick={scrollToTop}
            className="p-3 rounded-full bg-gray-800 text-white shadow-lg hover:bg-gray-700 transition-all duration-300"
            aria-label="Back to top"
          >
            To Top
          </button>
        </div>
      )}
    </>
  );
}
