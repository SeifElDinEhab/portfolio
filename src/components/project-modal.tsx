"use client";

import type React from "react";

import { motion } from "motion/react";
import type { Project } from "@/types/project";
import { X } from "lucide-react";
import Image from "next/image";
import {
  ReactIcon,
  TypeScriptIcon,
  TailwindIcon,
  NextjsIcon,
  FramerMotionIcon,
  FigmaIcon,
  FramerIcon,
} from "@/components/icons/tech-icons";

// Technology to icon mapping with brand colors
const technologyIcons: {
  [key: string]: { icon: React.ReactNode; color: string };
} = {
  React: { icon: <ReactIcon size={12} />, color: "#61DAFB" },
  "Next.js": { icon: <NextjsIcon size={12} />, color: "#000000" },
  TypeScript: { icon: <TypeScriptIcon size={12} />, color: "#3178C6" },
  "Tailwind CSS": { icon: <TailwindIcon size={12} />, color: "#38BDF8" },
  "Framer Motion": {
    icon: <FramerMotionIcon size={12} />,
    color: "transparent",
  },
  Figma: { icon: <FigmaIcon size={12} />, color: "#F24E1E" },
  Framer: { icon: <FramerIcon size={12} />, color: "#000000" },
};

interface ProjectModalProps {
  project: Project;
  onClose: () => void;
  sharedTransition: {
    duration: number;
    ease: number[];
  };
}

export function ProjectModal({
  project,
  onClose,
  sharedTransition,
}: ProjectModalProps) {
  return (
    <>
      {/* Modal Container */}
      <motion.div
        className="fixed inset-0 z-50 grid place-items-center"
        onClick={onClose}
        initial={{
          opacity: 0,
          backdropFilter: "blur(0px)",
          backgroundColor: "rgba(0, 0, 0, 0)",
        }}
        animate={{
          opacity: 1,
          backdropFilter: "blur(4px)",
          backgroundColor: "rgba(0, 0, 0, 0.5)",
        }}
        exit={{
          opacity: 0,
          backdropFilter: "blur(0px)",
          backgroundColor: "rgba(0, 0, 0, 0)",
        }}
        transition={sharedTransition}
      >
        <motion.div
          layoutId={`project-${project.id}`}
          className="p-6 relative rounded-2xl h-full w-full max-w-6xl grid place-items-center"
          onClick={(e: React.MouseEvent) => e.stopPropagation()}
          style={{ scrollbarWidth: "none" }}
          transition={sharedTransition}
        >
          <motion.div
            className="absolute top-0 left-0 w-full h-32 z-10"
            initial="initial"
            animate="initial"
            whileHover="hover"
          >
            <motion.div className="flex justify-center items-center sticky top-0 mb-1">
              <motion.button
                onClick={onClose}
                className="rounded-full p-2 bg-neutral-200/80 hover:bg-neutral-200/100 backdrop-blur-sm transition-colors"
                variants={{
                  initial: {
                    y: -20,
                    transition: { duration: 0.3, ease: [0.32, 0.72, 0, 1] },
                  },
                  hover: {
                    y: 20,
                    transition: { duration: 0.3, ease: [0.32, 0.72, 0, 1] },
                  },
                }}
                whileHover={{
                  backgroundColor: "rgba(220, 220, 220, 0.9)",
                }}
                whileTap={{ scale: 0.95 }}
              >
                <X strokeWidth={1.5} size={24} />
              </motion.button>
            </motion.div>
          </motion.div>

          {/* Modal Content */}
          <div
            className="h-[85vh] overflow-y-auto p-4 bg-white border border-neutral-300 rounded-[24px]"
            style={{ scrollbarWidth: "none" }}
          >
            <div className="p-12 bg-neutral-100 rounded-2xl border border-neutral-300 mb-4">
              <motion.p
                layoutId={`category-${project.id}`}
                transition={sharedTransition}
                className="text-sm text-neutral-600 mb-1"
              >
                {project.category}
              </motion.p>
              <motion.h3
                layoutId={`title-${project.id}`}
                transition={sharedTransition}
                className="text-xl font-medium mb-2"
              >
                {project.title}
              </motion.h3>
              {/* Project Details */}
              <motion.p
                layoutId={`long-description-${project.id}`}
                transition={sharedTransition}
                className="text-neutral-600 text-sm mb-4 leading-relaxed"
              >
                {project.longDescription}
              </motion.p>
              <motion.div className="flex flex-wrap gap-2 text-xs">
                {project.technologies.map((tech: string, index: number) => {
                  const techInfo = technologyIcons[tech];
                  return (
                    <motion.span
                      key={index}
                      layoutId={`container-${tech}-${project.id}`}
                      transition={sharedTransition}
                      className="px-3 py-1.5 mb-1 backdrop-blur border border-neutral-300 rounded-full text-xs flex items-center gap-1.5"
                    >
                      {techInfo ? (
                        <motion.span
                          style={{ color: techInfo.color }}
                          layoutId={`${tech}-${project.id}`}
                          transition={sharedTransition}
                        >
                          {techInfo.icon}
                        </motion.span>
                      ) : null}
                      {tech}
                    </motion.span>
                  );
                })}
              </motion.div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 bg-neutral-100 rounded-2xl px-12 py-12 border border-neutral-300">
              {project.videos && project.videos.length > 0 ? (
                project.videos.map((video, index) => (
                  <div
                    key={index}
                    className="col-span-1 rounded-xl overflow-hidden border border-neutral-300 bg-neutral-200"
                  >
                    <video
                      src={video.url}
                      autoPlay
                      loop
                      muted
                      playsInline
                      className="w-full aspect-video object-cover"
                    />
                  </div>
                ))
              ) : (
                // Fallback to mainImage if no videos are available
                <motion.div
                  layoutId={`main-image-${project.id}`}
                  transition={sharedTransition}
                  className="relative md:col-span-2 w-full aspect-[1.5333333/1] rounded-xl overflow-hidden border border-neutral-300 bg-neutral-200"
                >
                  <Image
                    src={project.mainImage || "/placeholder.svg"}
                    alt={project.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 100vw"
                    className="object-cover"
                  />
                </motion.div>
              )}
            </div>
          </div>
        </motion.div>
      </motion.div>
    </>
  );
}
