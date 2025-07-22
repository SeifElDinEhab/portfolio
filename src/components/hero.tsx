"use client";

import { Tooltip } from "./tooltip";
import { IoIosArrowRoundForward } from "react-icons/io";
import Link from "next/link";
import Image from "next/image";
import { motion } from "motion/react";
import { FaTelegramPlane } from "react-icons/fa";
import { availabilityDate, role } from "@/data/info";

export function Hero() {
  const copyEmail = async (e: React.MouseEvent) => {
    e.preventDefault();
    await navigator.clipboard.writeText("hi@seifelzeiny.com");
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
        duration: 0.2,
        delay: custom * 0.2 + 0.2,
        ease: [0.215, 0.61, 0.355, 1.0],
      },
    }),
  };

  return (
    <div className="relative max-w-xl mx-auto pt-16 py-8">
      <div className="flex items-center justify-between mb-8">
        <div className="flex gap-2">
          {/* Logo */}
          <div className="size-12 pt-0.5 bg-neutral-200 rounded-lg nice-shadow relative overflow-hidden">
            <Image
              src="/me.png"
              alt="Seif Elzeiny Avatar"
              width={1024}
              height={1024}
              className="object-cover rounded-lg"
              priority
            />
            <div className="size-12 bg-neutral-500"></div>
          </div>
          <div className="font-medium text-neutral-500 flex flex-col justify-end">
            {/* Name and Title */}
            <p className="text-sm">Seif El-Zeiny</p>
            <p className="text-xs">{role}</p>
          </div>
        </div>
        <div className="text-neutral-500 font-medium flex flex-col justify-end">
          {/* Status and Date */}
          <p className="text-sm">Available for bookings</p>
          <p className="flex items-center gap-0.5 text-xs">
            <Image
              src="/calender.png"
              alt="Calendar Icon"
              width={18}
              height={18}
              className="object-cover rounded-lg"
              priority
            />
            {availabilityDate.month}, {availabilityDate.year}
          </p>
        </div>
      </div>
      {/* Heading */}
      <h1 className="font-medium text-2xl text-neutral-500 mb-4">
        Hey there, I’m Seif - a
        <span className="text-neutral-700 lowercase"> {role} </span> that
        partners with <span className="text-neutral-700"> founders </span> to
        build high-impact
        <span className="text-neutral-700"> websites </span> and interactive
        <span className="text-neutral-700"> web applications</span>
      </h1>

      {/* Contact */}
      <div className="w-full mt-4 md:mt-0 text-neutral-500 text-sm font-medium">
        <div className="flex items-center gap-2">
          {/* Telegram */}
          <Link
            className="w-fit flex gap-1 items-center py-2 px-4 bg-neutral-700 rounded-full hover:bg-neutral-700/95 hover:scale-[0.96] transition-all ease-out duration-200"
            href="https://t.me/seifelzeiny"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Chat with me on Telegram"
          >
            <FaTelegramPlane size={14} className="text-white" />
            <span className="text-white">Chat Now</span>
          </Link>
          <div className="flex items-center">
            {/* Email */}
            <span className="text-neutral-400 flex items-center">
              Or <IoIosArrowRoundForward size={18} />
            </span>
            <Tooltip>
              <button className="py-1" onClick={copyEmail}>
                <span className="text-neutral-700">hi@seifelzeiny.com</span>
              </button>
            </Tooltip>
          </div>
        </div>
      </div>
    </div>
  );
}
