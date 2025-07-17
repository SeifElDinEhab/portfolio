"use client";

import type React from "react";
import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

// Simple confetti effect component with Framer Motion
function Confetti({ active }: { active: boolean }) {
  if (!active) return null;

  return (
    <div className="absolute inset-0 pointer-events-none z-50">
      <DotLottieReact
        src="confetti.lottie"
        autoplay
        loop={false}
        className="w-full h-full"
      />
    </div>
  );
}

export function CustomCodeService() {
  const [isClicked, setIsClicked] = useState(false);
  const [userInput, setUserInput] = useState("");
  const [isCompleted, setIsCompleted] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [isFocused, setIsFocused] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleFalseClick = () => {
    setIsClicked(true);
    setIsFocused(true);
  };

  const handleInputFocus = () => {
    setIsFocused(true);
    if (!isClicked) {
      setIsClicked(true);
    }
  };

  const handleInputBlur = () => {
    setIsFocused(false);
    // Return to original state if not completed and input is empty
    if (!isCompleted && userInput === "") {
      setIsClicked(false);
      setHasError(false);
      setErrorMessage("");
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    const targetWord = "true";

    // Check if the new character is correct
    if (value.length > userInput.length) {
      const newChar = value[value.length - 1];
      const expectedChar = targetWord[value.length - 1];

      if (newChar !== expectedChar) {
        // Wrong character - show error and don't update input
        setHasError(true);
        setErrorMessage(`Expected "${expectedChar}", got "${newChar}"`);

        // Reset error after 1 second
        setTimeout(() => {
          setHasError(false);
          setErrorMessage("");
        }, 1000);

        return; // Don't update the input
      }
    }

    // Character is correct or user is deleting
    setUserInput(value);

    if (value === "true") {
      setIsCompleted(true);
    }
  };

  // Auto-focus input when clicked
  useEffect(() => {
    setTimeout(() => {
      if (isClicked && inputRef.current && isFocused) {
        console.log("Focusing input");
        inputRef.current.focus();
      }
    }, 500);
  }, [isClicked, isFocused]);

  return (
    <li className="relative col-span-1 row-span-1 flex flex-col bg-gray-100 rounded-2xl overflow-hidden group">
      <div
        className="relative flex-1"
        style={{
          WebkitMaskImage: "linear-gradient(to bottom, black 60%, transparent)",
        }}
      >
        <motion.div className="absolute top-7 left-10 bg-white rounded-lg p-4 pr-0 pb-8 font-mono text-[0.675rem] group-hover:translate-y-0 translate-y-3 transition-transform duration-[400ms] ease-in-out">
          <div className="flex items-center mb-3">
            <div className="flex gap-1">
              <div className="size-2 bg-red-400 rounded-full"></div>
              <div className="size-2 bg-yellow-400 rounded-full"></div>
              <div className="size-2 bg-green-400 rounded-full"></div>
            </div>
            <span className="text-neutral-400 ml-10">new-website.js</span>
          </div>
          <div className="text-neutral-600 space-y-1">
            <div>
              <span className="text-blue-600">import</span> Website{" "}
              <span className="text-blue-600">from</span>{" "}
              <span className="text-green-600">"@engineers/seif"</span>
              <span className="text-gray-500">;</span>
            </div>
            <div className="mt-4">
              {/* 🚀 Let's launch your new site! */}
              <span className="text-blue-600">const</span> yourSite ={" "}
              <span className="text-blue-600">new</span> Website(&#123; owner:{" "}
              <span className="text-green-600">"You"</span>, poweredBy:{" "}
              <span className="text-green-600">"Seif"</span>, features: [
              <span className="text-green-600">"Fast"</span>,{" "}
              <span className="text-green-600">"Beautiful"</span>,{" "}
              <span className="text-green-600">"Interactive"</span>] &#125;)
              <span className="text-gray-500">;</span>
            </div>
            <div className="mt-4">
              {/* Interactive false/true replacement */}
              yourSite.launch ={" "}
              <AnimatePresence mode="wait">
                {!isClicked ? (
                  <motion.span
                    key="false"
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    className="bg-neutral-300 text-red-400 rounded-sm py-0.5 px-1 cursor-pointer hover:bg-neutral-400 hover:shadow-sm transition-all duration-200 select-none inline-block"
                    onClick={handleFalseClick}
                  >
                    false
                  </motion.span>
                ) : !isCompleted ? (
                  <motion.span
                    key="input"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.2 }}
                    className="relative inline-block py-0.5 px-1"
                  >
                    <span className="text-neutral-400 opacity-50">true</span>
                    <motion.input
                      ref={inputRef}
                      type="text"
                      value={userInput}
                      onChange={handleInputChange}
                      onFocus={handleInputFocus}
                      onBlur={handleInputBlur}
                      className={`absolute left-1 top-0.5 bg-transparent border-none outline-none font-mono text-[0.675rem] w-12 transition-colors duration-200 ${
                        hasError ? "text-red-500" : "text-green-600"
                      }`}
                      placeholder=""
                      maxLength={4}
                      animate={
                        hasError
                          ? {
                              x: [-2, 2, -2, 2, 0],
                              transition: { duration: 0.2, ease: "easeInOut" },
                            }
                          : {}
                      }
                    />
                    <AnimatePresence>
                      {hasError && (
                        <motion.div
                          initial={{ opacity: 0, y: -5 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -5 }}
                          className="absolute -bottom-2 left-0 text-red-500 text-[0.5rem] whitespace-nowrap"
                        >
                          <span>{errorMessage}</span>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.span>
                ) : (
                  <motion.span
                    key="completed"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-green-600 bg-green-100 rounded-sm py-0.5 px-1 inline-block"
                  >
                    true
                  </motion.span>
                )}
              </AnimatePresence>
            </div>
          </div>
        </motion.div>
      </div>

      <div className="absolute top-0 right-0 bottom-10 w-16 bg-gradient-to-l from-gray-100 to-transparent" />

      <div className="flex-none p-4">
        <h3 className="font-medium">Custom Code</h3>
        <p className="text-neutral-500 leading-tight text-sm">
          For web applications and interactive sites
        </p>
      </div>
      <Confetti active={isCompleted} />
    </li>
  );
}
