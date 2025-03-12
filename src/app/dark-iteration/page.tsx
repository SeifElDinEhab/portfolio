"use client";
import Image from "next/image";
import Link from "next/link";
import { FaXTwitter } from "react-icons/fa6";
import { CiMail } from "react-icons/ci";
import { motion } from "motion/react";

export default function DarkIteration() {
  const headlineVariants = {
    hidden: {
      opacity: 0,
      y: 20,
      filter: "blur(4px)",
    },
    visible: (custom: number) => ({
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: {
        duration: 0.8,
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
        duration: 0.8,
        delay: custom * 0.2 + 1.8,
        ease: [0.215, 0.61, 0.355, 1.0],
      },
    }),
  };

  const visualElementVariants = {
    hidden: {
      opacity: 0,
      scale: 0.95,
    },
    visible: (custom: number) => ({
      opacity: custom === 1 ? 0.4 : 0.2,
      scale: 1,
      transition: {
        duration: 1.2,
        delay: 2.4,
        ease: [0.215, 0.61, 0.355, 1.0],
      },
    }),
  };
  // font-rethinkSans
  return (
    <main className="font-plusJakartaSans bg-neutral-900 text-gray-300 text-sm tracking-tight min-h-screen w-full pt-40 px-40">
      <div className="max-w-screen-md mx-auto">
        <h1>Seif El-Zeiny</h1>
        <h2 className="flex items-center mb-8">
          I build
          <span className="flex items-center">
            <Image
              src="/framer.svg"
              alt="Framer"
              width={140}
              height={140}
              className="inline-block w-8 h-8"
            />
          </span>
          framer websites
        </h2>
        <div className="grid grid-cols-4 gap-4 border border-neutral-700 rounded-lg bg-gray-200 p-4 h-40">
          {/* Work thumbnails slider */}
          <div className="col-span-1 h-full bg-neutral-700 rounded-md"></div>
          <div className="col-span-1 h-full bg-neutral-700 rounded-md"></div>
          <div className="col-span-1 h-full bg-neutral-700 rounded-md"></div>
          <div className="col-span-1 h-full bg-neutral-700 rounded-md"></div>
        </div>
      </div>
    </main>
  );
}
