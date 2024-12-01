import Image from "next/image";
import Link from "next/link";
import { FaXTwitter } from "react-icons/fa6";
import { CiMail } from "react-icons/ci";
import { Work } from "./work";
import { ContactButton } from "./contact-button";

export default function Home() {
  return (
    <main className="font-inter relative">
      <Image
        loading="eager"
        src="/bg-clouds.png"
        alt="sky with clouds"
        width={3500}
        height={2500}
        className="w-full absolute z-0 opacity-10"
      />

      <div className="relative max-w-6xl mx-auto pt-40 flex flex-col items-center">
        <div className="flex gap-3 text-5xl font-instrument">
          <h1 className="drop-shadow">Hey there I am Seif</h1>
          <div className="relative w-12 h-12">
            <div className="absolute inset-0 border-2 border-white/15 rounded-lg"></div>
            <Image
              src="/my-face.jpg"
              alt="Seif' face in black & white. He's looking at the camera with the sea behind him"
              width={1000}
              height={1000}
              className="w-full h-full rounded-lg beautiful-shadow"
            />
          </div>
          <h1 className="drop-shadow">& I build websites</h1>
          <div className="relative w-10 h-10 group">
            <Image
              src="/website-visual.svg"
              alt="small website visual"
              width={240}
              height={240}
              className="absolute left-2 bottom-2 group-hover:bottom-1 w-8 h-8 drop-shadow-xl rotate-3 group-hover:rotate-[0deg] transition-all duration-300 ease-in-out"
            />
            <Image
              src="/website-visual.svg"
              alt="small website visual"
              width={240}
              height={240}
              className="absolute bottom-0 left-4 group-hover:left-3 w-8 h-8 drop-shadow-xl rotate-[9deg] group-hover:rotate-[6deg] transition-all duration-300 ease-in-out"
            />
            <Image
              src="/website-visual.svg"
              alt="small website visual"
              width={240}
              height={240}
              className="absolute bottom-0 left-0 group-hover:left-1 w-8 h-8 drop-shadow-xl -rotate-12 group-hover:-rotate-[8deg] transition-all duration-300 ease-in-out"
            />
          </div>
        </div>
        <h3 className="text-lg font-medium text-[#5B5B5B] drop-shadow mt-8">
          I do UI/UX as well as code & no-code development
        </h3>
        <div className="flex gap-5 mt-4 text-xs text-[#5B5B5B] font-medium">
          <Link
            className="flex gap-1 items-center drop-shadow"
            href="https://x.com/SeifDesigns"
          >
            <CiMail strokeWidth={1} className="text-base" />
            seifeldinelzeiny@gmail.com
          </Link>
          <Link
            className="flex gap-1 items-center drop-shadow"
            href="https://x.com/SeifDesigns"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaXTwitter size={"1.1em"} /> @SeifDesigns
          </Link>
          <Link
            className="flex gap-1 items-center drop-shadow"
            href="https://layers.to/seif"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/layers-logo.svg"
              alt="layers.to logo"
              width={100}
              height={100}
              className="w-4 h-4"
            />
            @Seif
          </Link>
        </div>

        <div className="absolute w-52 opacity-40 left-10 -bottom-36 -rotate-12">
          <Image
            src="/vscode-logo.png"
            alt="vs code logo"
            width={100}
            height={100}
            className="absolute -top-4 -left-4 w-10 h-10"
          />
          <Image
            src="/vscode-visual.svg"
            alt="vs code visual"
            width={100}
            height={100}
            className="h-full w-full"
          />
        </div>
        <div className="absolute w-52 opacity-20 right-10 -bottom-32 rotate-12">
          <Image
            src="/figma-logo.webp"
            alt="vs code logo"
            width={100}
            height={100}
            className="absolute -top-6 -right-6 h-16 w-16"
          />
          <Image
            src="/figma-visual.svg"
            alt="vs code visual"
            width={100}
            height={100}
            className="h-full w-full"
          />
          <Image
            src="/cursor-icon.svg"
            alt="vs code visual"
            width={100}
            height={100}
            className="absolute -bottom-4 -right-4 h-6 w-6"
          />
        </div>
      </div>
      <Work />
    </main>
  );
}
