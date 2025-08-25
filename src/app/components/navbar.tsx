// components/Navbar.tsx
"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  const [lastScrollY, setLastScrollY] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setVisible(false);
      } else if (currentScrollY < lastScrollY) {
        setVisible(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  // Navigation items
  const leftItem = {
    href: "/",
    label: "Work / Home",
    img: "/Assets/Intro/PlaceholderIcon.webp",
  };

  const rightItems = [
    { href: "/About", label: "About" },
    { href: "/Resume", label: "Resume" },
  ];

  return (
    <nav
      className={`
        bg-white shadow-sm fixed w-full z-10 
        transition-transform duration-300 ease-in-out
        ${visible ? "translate-y-0" : "-translate-y-full"}
      `}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Left item (Work/Home) */}
          <Link href={leftItem.href}>
            <div className="flex items-center space-x-2 cursor-pointer">
              {leftItem.img ? (
                <Image
                  src={leftItem.img}
                  alt={leftItem.label}
                  width={28}
                  height={28}
                  className="h-7 w-7"
                  onError={(e) => {
                    (e.currentTarget as HTMLImageElement).style.display =
                      "none";
                  }}
                />
              ) : (
                <div className="bg-gray-300 h-7 w-7 rounded" />
              )}
              {/* Added text label */}
              <span className="text-gray-800 font-medium text-lg">Home</span>
            </div>
          </Link>

          {/* Right items */}
          <div className="flex space-x-6">
            {rightItems.map((item, i) => (
              <Link key={i} href={item.href}>
                <div className="flex items-center cursor-pointer">
                  {/* Removed image check since right items don't have images */}
                  <span className="text-gray-700 font-medium text-sm hover:text-black transition-colors">
                    {item.label}
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
