"use client";

import Link from "next/link";
import { FaTelegramPlane } from "react-icons/fa";
import { IoIosArrowRoundForward } from "react-icons/io";
import { Tooltip } from "./tooltip";
import { availabilityDate } from "@/data/info";

export function CTA() {
  const copyEmail = async (e: React.MouseEvent) => {
    e.preventDefault();
    await navigator.clipboard.writeText("hi@seifelzeiny.com");
  };

  return (
    <div className="w-full max-w-4xl mx-auto py-16 flex flex-col items-center gap-6">
      <p className="flex items-center gap-2 px-3 py-1 bg-emerald-50 border border-emerald-100 rounded-full text-neutral-500 text-xs">
        <span className="relative flex size-2">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-200 opacity-75"></span>
          <span className="relative inline-flex size-2 rounded-full bg-emerald-200"></span>
        </span>
        Accepting Projects {availabilityDate.month}, {availabilityDate.year}
      </p>
      <h2 className="text-2xl text-center font-medium text-neutral-700">
        Your designs deserve to feel as good as they look
      </h2>

      <div
        className="flex justify-center w-full mt-4 md:mt-0 text-neutral-500"
        aria-label="Contact links"
      >
        <div
          className="flex flex-col gap-2 text-sm font-medium"
          style={{ color: "inherit" }}
        >
          <div className="flex items-center gap-3">
            {/* Telegram */}
            <Link
              className="w-fit flex gap-1 items-center py-2 px-4 bg-neutral-700 rounded-full hover:bg-neutral-700/95 hover:scale-95 transition-all ease-out duration-200"
              href="https://t.me/seifelzeiny"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Chat with me on Telegram"
            >
              <FaTelegramPlane size={14} className="text-white" />
              <span className="text-white">Chat Now</span>
            </Link>

            {/* Email */}
            <div className="flex items-center">
              <span className="text-neutral-400 flex items-center">
                Or <IoIosArrowRoundForward size={18} />
              </span>
              <Tooltip>
                <button className="py-1 text-neutral-700" onClick={copyEmail}>
                  hi@seifelzeiny.com
                </button>
              </Tooltip>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
