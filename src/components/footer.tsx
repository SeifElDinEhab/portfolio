import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaXTwitter, FaGithub } from "react-icons/fa6";

export const Footer: React.FC = () => {
  return (
    <footer className="relative pb-36 pt-16 text-center w-full text-neutral-500 overflow-hidden">
      <div className="flex gap-1 items-center justify-center text-sm">
        <Link
          href="https://x.com/seifdesigns"
          target="_blank"
          className="flex items-center gap-1 p-2 hover:text-neutral-600 transition-colors duration-200"
        >
          <FaXTwitter size={16} />
        </Link>
        <Link
          href="https://github.com/seifeldinehab"
          target="_blank"
          className="flex items-center gap-1 p-2 hover:text-neutral-600 transition-colors duration-200"
        >
          <FaGithub size={16} />
        </Link>
      </div>
      <p className="text-xs mt-4 text-neutral-400">
        © {new Date().getFullYear()} Seif El-Zeiny. All rights reserved.
      </p>
      <Image
        src="/footer-hill.png"
        alt="Grassy hill"
        width={1536}
        height={1024}
        className="max-w-xl mx-auto mt-4 absolute -bottom-4 left-0 right-0 w-full h-auto pointer-events-none"
      />
    </footer>
  );
};
