"use client";

import { useRef, useEffect, useState } from "react";
import { motion } from "motion/react";

// Define the type for a single content item
interface ContentItem {
  type: "image" | "video";
  src: string;
}

// Portfolio content
const content: ContentItem[] = [
  {
    type: "image",
    src: "/work/thumbnails/studioshot-hero.png",
  },
  {
    type: "video",
    src: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/'BigBuckBunny.mp4",
  },
  {
    type: "image",
    src: "/work/thumbnails/hire-inc-hero.png",
  },
  {
    type: "video",
    src: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/;ElephantsDream.mp4",
  },
];

export function ProjectsTicker() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [dragConstraints, setDragConstraints] = useState({ left: 0, right: 0 });

  useEffect(() => {
    const updateConstraints = () => {
      if (containerRef.current) {
        const containerWidth = containerRef.current.offsetWidth;
        const contentWidth = content.length * 592; // 400px width + 16px padding
        const maxDrag = Math.min(0, containerWidth - contentWidth);

        setDragConstraints({
          left: maxDrag,
          right: 0,
        });
      }
    };

    updateConstraints();
    window.addEventListener("resize", updateConstraints);
    return () => window.removeEventListener("resize", updateConstraints);
  }, []);

  return (
    <div
      ref={containerRef}
      className="w-full overflow-hidden cursor-grab active:cursor-grabbing px-8 pb-16"
      style={
        {
          // WebkitMaskImage:
          //   "linear-gradient(to right, transparent, black 5%, black 95%, transparent)",
        }
      }
    >
      <motion.div
        className="flex select-none"
        style={{ width: "fit-content" }}
        drag="x"
        dragConstraints={dragConstraints}
        dragElastic={0.01}
        dragMomentum={true} // Enable momentum after dragging
        whileDrag={{ cursor: "grabbing" }}
      >
        {content.map((item, idx) => (
          <div key={idx} className="max-w-xl shrink-0 p-2">
            <div className="h-[384px] bg-neutral-800 rounded-lg overflow-hidden">
              {item.type === "image" ? (
                <img
                  src={item.src || "/placeholder.svg"}
                  alt={`Portfolio project ${idx + 1}`}
                  className="w-full h-full object-cover"
                  draggable="false"
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
