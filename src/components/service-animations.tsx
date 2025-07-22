import { motion } from "motion/react";
import { useState } from "react";

export function AnimationsService() {
  const [clicked, setClicked] = useState(false);

  return (
    <li className="relative col-span-1 row-span-1 flex flex-col bg-neutral-100 rounded-2xl">
      <div className="flex-1 flex items-center justify-center text-sm service-mask">
        <motion.div
          layoutId="button"
          className={`px-4 py-2 text-white cursor-pointer select-none ${
            clicked ? "w-full h-full" : ""
          }`}
          animate={{
            backgroundColor: clicked ? "#e5e5e5" : "#d4d4d4", // To be changed later
            borderRadius: clicked ? "16px" : "99px",
          }}
          transition={{
            layout: { type: "spring", stiffness: 300, damping: 30 },
            backgroundColor: { duration: 0.3, ease: "easeInOut" },
            borderRadius: { duration: 0.3, ease: "easeInOut" },
          }}
          onClick={() => setClicked(!clicked)}
        >
          {!clicked && <span className="opacity-0">Click Me</span>}
        </motion.div>
      </div>
      <div className="flex-none p-4">
        <h3 className="font-medium">Web Animation</h3>
        <p className="text-neutral-500 leading-tight text-sm">
          When you need to add some motion
        </p>
      </div>
    </li>
  );
}
