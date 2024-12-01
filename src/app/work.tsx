"use client";
import React, { useRef } from "react";
import Image from "next/image";
import { WorkItem } from "@/types/work";
import { ContactButton } from "./contact-button";

const mockWorkData: WorkItem[] = [
  {
    id: 1,
    title: "Ziad Zidan",
    imageUrl: "/work/ziad-zidan-hero.png",
    backgroundColor: "#222222",
    padding: "0px",
  },
  {
    id: 2,
    title: "Golden Agro",
    imageUrl: "/work/golden-agro-hero.png",
    backgroundColor: "#c6d6d6",
    padding: "0px",
  },
  {
    id: 3,
    title: "Financify",
    imageUrl: "/work/financify.png",
    backgroundColor: "#ffe4e1",
    padding: "0px",
  },
  {
    id: 4,
    title: "Restaurant Website",
    imageUrl: "https://picsum.photos/800/600?random=4",
    backgroundColor: "#e6e6fa",
    padding: "0px",
  },
  {
    id: 5,
    title: "Blog Platform",
    imageUrl: "https://picsum.photos/800/700?random=7",
    backgroundColor: "#fff0f5",
    padding: "0px",
  },
  {
    id: 6,
    title: "Social Media Dashboard",
    imageUrl: "https://picsum.photos/800/900?random=6",
    backgroundColor: "#f5f5dc",
    padding: "0px",
  },
];
export const Work = () => {
  const sectionRef = useRef<HTMLElement>(null);

  const column1 = mockWorkData.filter((_, index) => index % 3 === 0);
  const column2 = mockWorkData.filter((_, index) => index % 3 === 1);
  const column3 = mockWorkData.filter((_, index) => index % 3 === 2);

  const renderColumn = (items: WorkItem[]) => (
    <div className="flex flex-col gap-4 mt-16">
      {items.map((item) => (
        <div key={item.id}>
          <div
            style={{
              backgroundColor: item.backgroundColor,
              padding: item.padding,
            }}
            className="rounded-md"
          >
            <div className="relative w-full">
              <Image
                src={item.imageUrl}
                alt={item.title}
                width={1000}
                height={1000}
                className="w-full h-auto rounded-md beautiful-shadow"
              />
            </div>
          </div>
          <h3 className="text-xs font-medium text-[#757575] mt-2 ml-1">
            {item.title}
          </h3>
        </div>
      ))}
    </div>
  );

  return (
    <>
      <section
        ref={sectionRef}
        className="container mx-auto px-16 py-16 relative z-20"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {renderColumn(column1)}
          {renderColumn(column2)}
          {renderColumn(column3)}
        </div>
      </section>
      <ContactButton workSectionRef={sectionRef} />
    </>
  );
};
