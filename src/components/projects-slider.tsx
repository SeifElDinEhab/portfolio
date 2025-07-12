// components/InfiniteTicker.tsx
"use client";

import { useRef } from "react";
import { motion, useMotionValue, useAnimationFrame } from "framer-motion";

// Define the type for a single content item
interface ContentItem {
  type: "image" | "video";
  src: string;
}

// Your portfolio content
const content: ContentItem[] = [
  {
    type: "image",
    src: "https://images.unsplash.com/photo-1682687220247-9f786e34d472?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    type: "video",
    src: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
  },
  {
    type: "image",
    src: "https://images.unsplash.com/photo-1707343843344-011334a16538?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    type: "video",
    src: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
  },
];

// We duplicate the content to create a seamless loo
const duplicatedContent = [...content, ...content];

export function ProjectsTicker() {
  const tickerRef = useRef<HTMLDivElement>(null);
  const baseX = useMotionValue(0); // Tracks the base horizontal position
  const isDragging = useRef(false); // Ref to track drag state

  // This function handles the continuous animation loop
  useAnimationFrame((time, delta) => {
    // If the user is dragging, we pause the automatic animation
    if (isDragging.current || !tickerRef.current) return;

    // We calculate a velocity-based movement factor for momentum
    let moveBy = -0.1; // Base speed (pixels per frame)

    if (baseX.getVelocity() !== 0) {
      // Use velocity for momentum after a drag
      moveBy = baseX.getVelocity() * (delta / 1000);
    }

    // Reset the position to create the infinite loop effect
    if (baseX.get() < -tickerRef.current.offsetWidth / 2) {
      baseX.set(0);
    }

    // Update the position
    baseX.set(baseX.get() + moveBy);
  });

  return (
    <div
      className="w-full overflow-hidden"
      style={{
        WebkitMaskImage:
          "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
      }}
    >
      <motion.div
        ref={tickerRef}
        className="flex"
        style={{ x: baseX }} // Directly use the motion value
        drag="x"
        dragConstraints={{ left: 0, right: 0 }}
        dragElastic={0.05}
        onDragStart={() => (isDragging.current = true)} // Set drag state to true
        onDragEnd={() => (isDragging.current = false)} // Set drag state to false
      >
        {duplicatedContent.map((item, idx) => (
          <div key={idx} className="w-[300px] shrink-0 p-2">
            <div className="h-[200px] bg-neutral-800 rounded-lg overflow-hidden">
              {item.type === "image" ? (
                <img
                  src={item.src}
                  alt="Portfolio work"
                  className="w-full h-full object-cover"
                />
              ) : (
                <video
                  src={item.src}
                  className="w-full h-full object-cover"
                  autoPlay
                  muted
                  loop
                  playsInline
                />
              )}
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  );
}
