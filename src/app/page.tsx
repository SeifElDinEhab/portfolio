"use client";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { motion, useScroll } from "motion/react";

import { ProjectsSection } from "../components/projects-section";
import { AtSignIcon } from "@/components/icons/at-icon";
import { useRef } from "react";
import { TwitterIcon } from "@/components/icons/twitter-icon";
import { Tooltip } from "@/components/tooltip";
import { Copy, CopyCheck, ExternalLink } from "lucide-react";
import { BlurredGradientEffect } from "@/components/BlurredGradientEffect";

export default function Home() {
  const { scrollY } = useScroll();
  const [isSticky, setIsSticky] = useState(false);

  const atIconRef = useRef<{
    startAnimation: () => void;
    stopAnimation: () => void;
  }>(null);

  const twitterIconRef = useRef<{
    startAnimation: () => void;
    stopAnimation: () => void;
  }>(null);

  const [tooltipContent, setTooltipContent] = useState("Copy");

  const copyEmail = async (e: React.MouseEvent) => {
    e.preventDefault();
    await navigator.clipboard.writeText("seifeldinelzeiny@gmail.com");
    setTooltipContent("Copied");
    setTimeout(() => setTooltipContent("Copy"), 1500);
  };

  const headlineVariants = {
    hidden: {
      opacity: 0,
      y: 20,
      filter:
        "blur(4px) drop-shadow(0 1px 2px rgb(0 0 0 / 0.15)) drop-shadow(0 1px 1px rgb(0 0 0 / 0.08))",
    },
    visible: (custom: number) => ({
      opacity: 1,
      y: 0,
      filter:
        "blur(0px) drop-shadow(0 1px 2px rgb(0 0 0 / 0.15)) drop-shadow(0 1px 1px rgb(0 0 0 / 0.08))",
      transition: {
        duration: 0.6,
        delay: custom * 0.15,
        ease: [0.215, 0.61, 0.355, 1.0],
      },
    }),
  };

  const fadeInUpVariants = {
    hidden: {
      opacity: 0,
      y: 20,
    },
    visible: (custom: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        delay: custom * 0.2 + 1.2,
        ease: [0.215, 0.61, 0.355, 1.0],
      },
    }),
  };

  useEffect(() => {
    return scrollY.onChange((latest) => {
      setIsSticky(latest > 200);
    });
  }, [scrollY]);

  const navVariants = {
    normal: {
      backgroundColor: "rgba(100, 100, 100, 0)",
      backdropFilter: "blur(0px)",
      color: "rgba(91, 91, 91, 1)",
      padding: "12px 24px",
      boxShadow: "0 0 0 0 rgba(0, 0, 0, 0)",
      transition: {
        duration: 0.3,
        ease: "easeOut",
      },
    },
    sticky: {
      backgroundColor: "rgba(100, 100, 100, 0.8)",
      color: "rgba(220, 220, 220, 1)",
      backdropFilter: "blur(4px)",
      padding: "12px 24px",
      boxShadow:
        "0px 35px 10px 0px rgba(0, 0, 0, 0),0px 22px 9px 0px rgba(0, 0, 0, 0.02), 0px 6px 6px 0px rgba(0, 0, 0, 0.04),0px 1px 3px 0px rgba(0, 0, 0, 0.08)",
      transition: {
        duration: 0.3,
        ease: "easeOut",
      },
    },
  };
  // font-rethinkSans
  return (
    <main className="font-plusJakartaSans relative radial">
      {/* <div className="fixed bottom-0 left-0 right-0 h-24 z-50 pointer-events-none">
        <BlurredGradientEffect />
      </div> */}

      <div className="fixed top-0 left-0 right-0 h-16 z-50 pointer-events-none progressive-blur-top"></div>
      <div className="fixed bottom-0 left-0 right-0 h-16 z-50 pointer-events-none progressive-blur-bottom"></div>
      <div className="relative max-w-6xl mx-auto pt-32 flex flex-col items-center">
        <h1 className="flex items-center gap-3 text-5xl text-neutral-700 font-instrument">
          <motion.span
            variants={headlineVariants}
            initial="hidden"
            animate="visible"
            custom={0}
            className="waitest"
          >
            Hey
          </motion.span>
          <motion.span
            variants={headlineVariants}
            initial="hidden"
            animate="visible"
            custom={1}
            className="waitest"
          >
            there
          </motion.span>
          <motion.span
            variants={headlineVariants}
            initial="hidden"
            animate="visible"
            custom={2}
            className="waitest"
          >
            I'm
          </motion.span>
          <motion.div
            variants={headlineVariants}
            initial="hidden"
            animate="visible"
            custom={3}
            className="relative w-12 h-12"
          >
            <div className="absolute inset-0 border-2 border-white/15 rounded-lg"></div>
            <Image
              src="/my-face.jpg"
              alt="Seif's face in black & white. He's looking at the camera with the sea behind him"
              width={479}
              height={479}
              className="w-full h-full rounded-lg nice-shadow"
            />
          </motion.div>
          <motion.span
            variants={headlineVariants}
            initial="hidden"
            animate="visible"
            custom={4}
            className="waitest"
          >
            Seif
          </motion.span>
        </h1>
        <motion.h2
          variants={fadeInUpVariants}
          initial="hidden"
          animate="visible"
          custom={0}
          className="text-base font-normal text-neutral-700 drop-shadow mt-8 max-w-lg text-center"
        >
          {/* Web developer with a passion for creating seamless web experiences
          focused on Framer marketing sites, web applications, and interactive
          components */}
          I partner with founders to build high-impact marketing sites and
          interactive web applications
        </motion.h2>
        <motion.nav
          variants={fadeInUpVariants}
          initial="hidden"
          animate="visible"
          custom={0.5}
          className="sticky top-6 z-50 flex justify-center w-full"
          aria-label="Contact links"
        >
          <motion.div
            className="flex gap-5 text-xs font-medium rounded-full"
            style={{ color: "inherit" }}
            variants={navVariants}
            animate={isSticky ? "sticky" : "normal"}
          >
            <Tooltip
              icon={
                tooltipContent === "Copied" ? (
                  <CopyCheck size={12} />
                ) : (
                  <Copy size={12} />
                )
              }
              content={tooltipContent}
            >
              <button
                className="flex items-center gap-1 py-1 drop-shadow transition-none"
                onClick={copyEmail}
                onMouseEnter={() => atIconRef.current?.startAnimation()}
                onMouseLeave={() => atIconRef.current?.stopAnimation()}
              >
                <AtSignIcon ref={atIconRef} size={16} />
                <span>hi@seifelzeiny.com</span>
              </button>
            </Tooltip>
            <Tooltip icon={<ExternalLink size={12} />} content="Visit">
              <Link
                className="flex gap-1 items-center py-1 drop-shadow transition-none"
                href="https://x.com/SeifDesigns"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Follow me on X (formerly Twitter)"
                onMouseEnter={() => twitterIconRef.current?.startAnimation()}
                onMouseLeave={() => twitterIconRef.current?.stopAnimation()}
              >
                <TwitterIcon ref={twitterIconRef} size={16} />
                <span>@SeifDesigns</span>
              </Link>
            </Tooltip>
          </motion.div>
        </motion.nav>

        <motion.div
          variants={fadeInUpVariants}
          initial="hidden"
          animate="visible"
          custom={2}
          className="w-full"
        >
          <ProjectsSection />
        </motion.div>
      </div>
    </main>
  );
}
