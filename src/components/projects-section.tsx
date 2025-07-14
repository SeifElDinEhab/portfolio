"use client";

import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import { projects } from "@/data/projects";
import { ProjectCard } from "./project-card";
import { ProjectModal } from "./project-modal";
import { ProjectsTicker } from "./projects-slider";

const sharedTransition = {
  duration: 0.7,
  ease: [0.32, 0.72, 0, 1],
};

export const ProjectsSection = () => {
  const [selectedProject, setSelectedProject] = useState<number | null>(null);

  const selectedProjectData =
    selectedProject !== null
      ? projects.find((p) => p.id === selectedProject)
      : null;

  return <ProjectsTicker />;
};

// <section className="py-16 max-w-3xl w-full mx-auto">
//         <div className="relative w-full">
//           {/* Project Modal */}
//           <AnimatePresence>
//             {selectedProject !== null && selectedProjectData && (
//               <ProjectModal
//                 project={selectedProjectData}
//                 onClose={() => setSelectedProject(null)}
//                 sharedTransition={sharedTransition}
//               />
//             )}
//           </AnimatePresence>

//           {/* Project Grid */}
//           <div className="grid grid-cols-1 gap-8 md:gap-12 lg:gap-16 w-full">
//             {projects.map((project) => (
//               <ProjectCard
//                 key={project.id}
//                 project={project}
//                 onClick={() => {
//                   setSelectedProject(project.id);
//                 }}
//                 sharedTransition={sharedTransition}
//               />
//             ))}
//           </div>
//         </div>
//       </section>
