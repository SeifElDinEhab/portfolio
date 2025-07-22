"use client";
import type React from "react";
import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Copy, CopyCheck } from "lucide-react";

export function Tooltip({ children }: { children: React.ReactNode }) {
  const [isHovered, setIsHovered] = useState(false);
  const [isCopied, setIsCopied] = useState(false);

  const tooltipVariants = {
    hidden: {
      opacity: 0,
      scale: 0.8,
      filter: "blur(4px)",
      y: 6,
    },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      filter: "blur(0px)",
      transition: {
        duration: 0.3,
        ease: [0.6, 0.6, 0, 1],
      },
    },
    exit: {
      opacity: 0,
      scale: 0.8,
      filter: "blur(4px)",
      y: 6,
      transition: {
        duration: 0.25,
        ease: [0.6, 0.6, 0, 1],
      },
    },
  };

  const handleClick = () => {
    if (!isCopied) {
      setIsCopied(true);
      setTimeout(() => {
        setIsCopied(false);
        setIsHovered(false);
      }, 1500);
    }
  };

  return (
    <div
      className="relative inline-block"
      onMouseEnter={() => {
        if (isCopied) return;
        setIsHovered(true);
      }}
      onMouseLeave={() => {
        setIsHovered(false);
      }}
      onClick={handleClick}
    >
      {children}
      <div className="absolute bottom-full left-0 w-full h-fit flex justify-center pointer-events-none select-none">
        <AnimatePresence>
          {isHovered && (
            <motion.div
              key="tooltip"
              className="flex items-center bg-neutral-700 text-white text-[10px] px-2 py-0.5 rounded-md"
              initial="hidden"
              animate="visible"
              exit="exit"
              variants={tooltipVariants}
              style={{
                boxShadow: "0 4px 12px rgba(0, 0, 0, 0.15)",
              }}
            >
              <div className="grid">
                <CopyCheck
                  size={10}
                  className={`transition-all duration-500 [grid-area:1/1/2/2] ${
                    isCopied ? "scale-100 opacity-100" : "scale-0 opacity-0"
                  }`}
                />
                <Copy
                  size={10}
                  className={`transition-all duration-500 [grid-area:1/1/2/2] ${
                    isCopied ? "scale-0 opacity-0" : "scale-100 opacity-100"
                  }`}
                />
              </div>
              <motion.div className="ml-1 flex">
                <span>Cop</span>
                <AnimatePresence mode="wait">
                  {!isCopied ? (
                    <motion.span
                      key="y"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.2, ease: [0.6, 0.6, 0, 1] }}
                      className="inline-block"
                    >
                      y
                    </motion.span>
                  ) : (
                    <motion.div
                      key="ied"
                      className="flex"
                      initial={{ width: "5px" }}
                      animate={{ width: "auto" }}
                      exit={{ width: "5px" }}
                      transition={{ duration: 0.2, ease: [0.6, 0.6, 0, 1] }}
                    >
                      {["i", "e", "d"].map((letter, index, arr) => (
                        <motion.span
                          key={`${letter}-${index}`}
                          initial={{ opacity: 0, y: 8 }}
                          animate={{
                            opacity: 1,
                            y: 0,
                            transition: {
                              duration: 0.1,
                              ease: [0.6, 0.6, 0, 1],
                              delay: index * 0.1,
                            },
                          }}
                          exit={{
                            opacity: 0,
                            y: -8,
                            transition: {
                              duration: 0.1,
                              ease: [0.6, 0.6, 0, 1],
                              delay: (arr.length - index - 1) * 0.05,
                            },
                          }}
                          className="inline-block"
                        >
                          {letter}
                        </motion.span>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
