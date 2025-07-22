"use client";

import { Play } from "lucide-react";
import { useState } from "react";
import { motion } from "motion/react";

export function ProjectsVideo() {
  const [isClicked, setIsClicked] = useState(false);
  return (
    <motion.div
      className={`relative z-50 w-full max-w-xl mx-auto aspect-[1.7777] bg-neutral-500 rounded-xl transition-transform duration-300 ease-out cursor-pointer overflow-hidden`}
      initiol={{ scale: 1 }}
      animate={{ scale: isClicked ? 1.5 : 1 }}
      whileHover={{ scale: isClicked ? 1.5 : 0.98 }}
      transition={{
        duration: 0.3,
        type: "spring",
        stiffness: 300,
        damping: 20,
      }}
      onClick={() => setIsClicked(!isClicked)}
    >
      <div className="absolute inset-0 flex items-center justify-center">
        <div
          className={`p-3 bg-neutral-700/10 backdrop-blur-lg rounded-full transition-all ${
            isClicked ? "opacity-0 scale-0" : "opacity-100 scale-100"
          }`}
        >
          <Play stroke="#ffffff" fill="#ffffff" size={16} />
        </div>
      </div>
      <video
        className="w-full h-full object-cover"
        autoPlay
        loop
        muted
        playsInline
        // src="/projects.mp4"
      />
    </motion.div>
  );
}
