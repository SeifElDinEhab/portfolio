"use client";

import { easeOut, motion } from "framer-motion";
import Image from "next/image";
import { Project } from "@/types/project";
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

interface ProjectCardProps {
  project: Project;
  onClick: () => void;
  sharedTransition: {
    duration: number;
    ease: number[];
  };
}

export function ProjectCard({
  project,
  onClick,
  sharedTransition,
}: ProjectCardProps) {
  return (
    <motion.div
      key={project.id}
      layoutId={`project-${project.id}`}
      onClick={onClick}
      transition={sharedTransition}
    >
      <div className="relative w-full p-12 overflow-hidden cursor-pointer mb-5 aspect-[1.333333/1] bg-white hover:bg-neutral-100 rounded-xl border border-black/10 transition-colors duration-200">
        {/* Tech Icons */}
        <motion.div
          layoutId={`main-image-${project.id}`}
          transition={sharedTransition}
          className="relative w-full h-full rounded-lg overflow-hidden"
        >
          <Image
            src={project.mainImage || "/placeholder.svg"}
            alt={project.title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="nice-shadow"
            priority={project.id <= 2}
          />
        </motion.div>
      </div>
      <motion.div className="flex gap-1.5 mb-2">
        {project.technologies.slice(0, 3).map((tech, index) => {
          const techInfo = technologyIcons[tech];
          return techInfo ? (
            <motion.span
              key={index}
              className="w-fit h-fit"
              style={{ color: techInfo.color }}
              layoutId={`container-${tech}-${project.id}`}
              transition={sharedTransition}
            >
              <motion.span
                layoutId={`${tech}-${project.id}`}
                transition={sharedTransition}
                className="w-6 h-6 rounded-full bg-white/90 backdrop-blur-sm border border-neutral-200 flex items-center justify-center"
                style={{ color: techInfo.color }}
              >
                {techInfo.icon}
              </motion.span>
            </motion.span>
          ) : null;
        })}
        {project.technologies.length > 3 && (
          <motion.div className="w-7 h-7 rounded-full bg-white/90 backdrop-blur-sm border border-neutral-200 flex items-center justify-center text-xs font-medium">
            +{project.technologies.length - 3}
          </motion.div>
        )}
      </motion.div>
      <motion.p
        layoutId={`category-${project.id}`}
        transition={sharedTransition}
        className="text-sm text-neutral-600"
      >
        {project.category}
      </motion.p>
      <motion.h3
        layoutId={`title-${project.id}`}
        transition={sharedTransition}
        className="text-lg text-neutral-800"
      >
        {project.title}
      </motion.h3>
      <motion.div
        style={{ opacity: 0, backdropFilter: "blur(4px)" }}
        layoutId={`long-description-${project.id}`}
        transition={sharedTransition}
      ></motion.div>
    </motion.div>
  );
}
