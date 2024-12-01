import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";

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
      className="contact-button-container fixed bottom-8 left-1/2 w-fit py-5 px-10 bg-[#3a3a3a] text-white flex items-center gap-6 rounded-2xl z-50 overflow-hidden"
    >
      <svg
        className="absolute w-full inset-0 pointer-events-none opacity-80"
        viewBox="0 0 512 512"
        preserveAspectRatio="none"
      >
        <pattern
          id="lines-pattern"
          x="0"
          y="0"
          width="20"
          height="20"
          patternUnits="userSpaceOnUse"
        >
          <line
            x1="0"
            y1="20"
            x2="20"
            y2="0"
            stroke="#ffffff"
            strokeWidth="0.5"
            strokeOpacity="0.02"
            transform="rotate(90 10 10)"
          />
          <line
            x1="-5"
            y1="25"
            x2="25"
            y2="-5"
            stroke="#ffffff"
            strokeWidth="0.5"
            strokeOpacity="0.02"
            transform="rotate(90 10 10)"
          />
          <line
            x1="-10"
            y1="30"
            x2="30"
            y2="-10"
            stroke="#ffffff"
            strokeWidth="0.5"
            strokeOpacity="0.02"
            transform="rotate(90 10 10)"
          />
        </pattern>
        <rect width="512" height="512" fill="url(#lines-pattern)" />
      </svg>
      <h4 className="font-instrument text-2xl drop-shadow">
        Like what you see?
      </h4>
      <button className="btn-shadow drop-shadow ml-auto rounded-md bg-white hover:bg-[#f1f1f1] text-[#3a3a3a] font-semibold text-sm px-4 py-2 tracking-tighter transition-all duration-300 ease-in-out hover:scale-105">
        Get in touch
      </button>
    </motion.div>
  );
};
