import { ProjectsTicker } from "./projects-slider";

export const Projects = () => {
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
