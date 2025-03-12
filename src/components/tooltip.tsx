"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";

export function Tooltip({
  children,
  content,
  icon,
  position = "top",
}: {
  children: React.ReactNode;
  content: string;
  icon?: React.ReactNode;
  position?: "top" | "bottom" | "left" | "right";
}) {
  const [isOpen, setIsOpen] = useState(false);

  const positionStyles = {
    top: "bottom-full left-[50%] mb-1",
    bottom: "top-full left-[50%]",
    left: "right-full top-[50%]",
    right: "left-full top-[50%]",
  };

  const tooltipVariants = {
    hidden: {
      opacity: 0,
      scale: 0.8,
      filter: "blur(4px)",
      y: position === "top" ? 10 : position === "bottom" ? -10 : 0,
      x: position === "left" ? 10 : position === "right" ? -10 : 0,
      ...(position === "top" || position === "bottom"
        ? { translateX: "-50%" }
        : {}),
      ...(position === "left" || position === "right"
        ? { translateY: "-50%" }
        : {}),
    },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      x: 0,
      filter: "blur(0px)",
      ...(position === "top" || position === "bottom"
        ? { translateX: "-50%" }
        : {}),
      ...(position === "left" || position === "right"
        ? { translateY: "-50%" }
        : {}),
      transition: {
        duration: 0.45,
        ease: [0.6, 0.6, 0, 1],
      },
    },
    exit: {
      opacity: 0,
      scale: 0.8,
      filter: "blur(4px)",
      y: position === "top" ? 10 : position === "bottom" ? -10 : 0,
      x: position === "left" ? 10 : position === "right" ? -10 : 0,
      ...(position === "top" || position === "bottom"
        ? { translateX: "-50%" }
        : {}),
      ...(position === "left" || position === "right"
        ? { translateY: "-50%" }
        : {}),
      transition: {
        duration: 0.45,
        ease: [0.6, 0.6, 0, 1],
      },
    },
  };

  return (
    <div
      className="relative inline-block"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
      onFocus={() => setIsOpen(true)}
      onBlur={() => setIsOpen(false)}
    >
      {children}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className={`absolute flex items-center z-50 bg-neutral-600 text-white h-6 text-[10px] px-2 py-1 rounded-md nice-shadow ${positionStyles[position]}`}
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={tooltipVariants}
          >
            {icon && <span className="mr-1">{icon}</span>}
            {content}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
