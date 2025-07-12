"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { motion, useScroll, AnimatePresence } from "framer-motion";
import { ProjectsSection } from "../components/projects-section";
import { Tooltip } from "@/components/tooltip";
import {
  Copy,
  CopyCheck,
  ExternalLink,
  Mail,
  MessageCircle,
} from "lucide-react";
import { FaXTwitter } from "react-icons/fa6";
import { IoIosArrowRoundForward } from "react-icons/io";
import { FaTelegramPlane } from "react-icons/fa";

import { Footer } from "@/components/footer";

export default function Home() {
  const { scrollY } = useScroll();
  const [isSticky, setIsSticky] = useState(false);
  const [isLogoHovered, setIsLogoHovered] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const [tooltipContent, setTooltipContent] = useState("Copy");

  const copyEmail = async (e: React.MouseEvent) => {
    e.preventDefault();
    await navigator.clipboard.writeText("hi@seifelzeiny.com");
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
      boxShadow:
        "0px 35px 10px 0px rgba(0, 0, 0, 0),0px 22px 9px 0px rgba(0, 0, 0, 0.02), 0px 6px 6px 0px rgba(0, 0, 0, 0.04),0px 1px 3px 0px rgba(0, 0, 0, 0.08)",
      transition: {
        duration: 0.3,
        ease: "easeOut",
      },
    },
  };

  // const logoImages = [
  //   "/me.png",
  //   "/me-right.png",
  //   "/me-behind.png",
  //   "/me-left.png",
  // ];

  // useEffect(() => {
  //   if (isLogoHovered) {
  //     const interval = setInterval(() => {
  //       setCurrentImageIndex((prev) => (prev + 1) % logoImages.length);
  //     }, 250); // Adjust timing as needed

  //     return () => clearInterval(interval);
  //   } else {
  //     setCurrentImageIndex(0);
  //   }
  // }, [isLogoHovered]);

  return (
    <main className="font-geist tracking-[-0.04rem] relative radial">
      <div className="fixed top-0 left-0 right-0 h-16 z-50 pointer-events-none progressive-blur-top"></div>
      <div className="fixed bottom-0 left-0 right-0 h-16 z-50 pointer-events-none progressive-blur-bottom"></div>
      <div className="relative max-w-xl mx-auto pt-16 md:pt-32">
        <div className="flex items-center justify-between mb-8">
          <div className="flex gap-2">
            {/* Logo */}
            <div
              className="size-12 bg-neutral-200 rounded-lg nice-shadow relative pt-0.5 overflow-hidden"
              // onHoverStart={() => setIsLogoHovered(true)}
              // onHoverEnd={() => setIsLogoHovered(false)}
            >
              {/* {logoImages.map((src, index) => (
            <Image
              src={src}
              alt={`Seif Elzeiny Pixel Art Avatar ${index + 1}`}
              width={1024}
              height={1024}
              className={`object-cover rounded-lg ${
                index === currentImageIndex ? "block" : "hidden"
              }`}
              priority
            />
          ))} */}
              <Image
                src="/me.png"
                alt="Seif Elzeiny Pixel Art Avatar"
                width={1024}
                height={1024}
                className="object-cover rounded-lg"
                priority
              />
            </div>
            <div className="font-medium text-neutral-500 flex flex-col justify-end">
              {/* Name and Title */}
              <p className="text-sm">Seif El-Zeiny</p>
              <p className="text-xs">Front-end Engineer</p>
            </div>
          </div>
          <div className="text-neutral-500 font-medium flex flex-col justify-end">
            {/* Status and Date */}
            <p className="text-sm">Available for bookings</p>
            <p className="flex items-center gap-0.5 text-xs">
              <Image
                src="/calender.png"
                alt="Calendar Icon"
                width={20}
                height={20}
                className="object-cover rounded-lg"
                priority
              />
              July 2025
            </p>
          </div>
        </div>
        {/* Heading */}
        <h1 className="font-medium text-2xl text-neutral-500 mb-4">
          Hey there, I’m Seif - a
          <span className="text-neutral-700"> frontend engineer </span> that
          partners with <span className="text-neutral-700"> founders </span> to
          build high-impact
          <span className="text-neutral-700"> websites </span> and interactive
          <span className="text-neutral-700"> web applications</span>
        </h1>

        {/* Contact */}
        <motion.div
          variants={fadeInUpVariants}
          initial="hidden"
          animate="visible"
          custom={0.5}
          className="sticky top-4 md:top-6 flex w-full mt-4 md:mt-0 text-neutral-500"
          aria-label="Contact links"
        >
          <motion.div
            className="flex flex-col gap-2 text-sm font-medium"
            style={{ color: "inherit" }}
            variants={navVariants}
          >
            <div className="flex items-center gap-3">
              {/* Telegram */}
              <Link
                className="w-fit flex gap-1 items-center py-2 px-4 bg-neutral-700 rounded-full hover:bg-neutral-600 transition-colors"
                href="https://t.me/seifelzeiny"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Chat with me on Telegram"
              >
                <FaTelegramPlane size={14} className="text-white" />
                <span className="text-white">Chat Now</span>
              </Link>

              {/* View Services */}
              <Link
                className="w-fit flex gap-1 items-center py-2 px-4 bg-neutral-200 hover:bg-neutral-300 transition-colors rounded-full"
                href="https://t.me/seifelzeiny"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Chat with me on Telegram"
              >
                {/* <Image
                  src="/work-icon.png"
                  alt="Work icon"
                  width={16}
                  height={16}
                /> */}
                <span className="text-neutral-700">View Services</span>
              </Link>
            </div>
            <div className="flex items-center gap-1">
              {/* Email */}
              <span className="text-neutral-400 flex items-center gap-1">
                Or drop me an email <IoIosArrowRoundForward size={18} />
              </span>
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
                <button className="py-1" onClick={copyEmail}>
                  <span className="text-neutral-700">hi@seifelzeiny.com</span>
                </button>
              </Tooltip>
            </div>
            {/* <Tooltip icon={<ExternalLink size={12} />} content="Visit">
              <Link
                className="flex gap-0.5 items-center py-1"
                href="https://x.com/SeifDesigns"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Follow me on X (formerly Twitter)"
              >
                <FaXTwitter size={14} />
                <span>@SeifDesigns</span>
              </Link>
            </Tooltip> */}
          </motion.div>
        </motion.div>
      </div>

      {/* Projects */}
      <motion.div
        variants={fadeInUpVariants}
        initial="hidden"
        animate="visible"
        custom={2}
        className="w-full"
      >
        <ProjectsSection />
      </motion.div>

      {/* CTA */}

      {/* Footer */}
      <Footer />
    </main>
  );
}
