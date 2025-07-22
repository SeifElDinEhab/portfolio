import React from "react";
import { motion, useScroll, useTransform } from "motion/react";

interface ContactButtonProps {
  workSectionRef: React.RefObject<HTMLElement>;
}

export const ContactButton: React.FC<ContactButtonProps> = ({
  workSectionRef,
}) => {
  const { scrollYProgress } = useScroll({
    target: workSectionRef,
    offset: ["start end", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.1, 0.9, 1], [0, 1, 1, 0]);

  const y = useTransform(scrollYProgress, [0, 0.1, 0.9, 1], [20, 0, 0, 20]);
  console.log(y);

  return (
    <motion.div
      style={{ opacity, y, x: "-50%" }}
      className="contact-button-container fixed bottom-6 left-1/2 w-fit py-5 px-10 bg-[#3a3a3a] text-white flex items-center gap-6 rounded-2xl z-50 overflow-hidden"
    >
      <div
        className="absolute inset-0 w-full h-full opacity-10 pointer-events-none bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,0.05)_25%,rgba(255,255,255,0.05)_50%,transparent_50%,transparent_75%,rgba(255,255,255,0.05)_75%)]"
        style={{ backgroundSize: "20px 20px" }}
      ></div>

      <h4 className="font-instrument text-2xl drop-shadow">
        Like what you see?
      </h4>
      <button className="btn-shadow drop-shadow ml-auto rounded-md bg-white hover:bg-[#f1f1f1] text-[#3a3a3a] font-semibold text-sm px-4 py-2 transition-all duration-300 ease-in-out hover:scale-105">
        Get in touch
      </button>
    </motion.div>
  );
};
