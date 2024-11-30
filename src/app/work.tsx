"use client";
import React from "react";
import Image from "next/image";
import { WorkItem } from "@/types/work";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";
import { ContactButton } from "./contact-button";

const mockWorkData: WorkItem[] = [
  {
    id: 1,
    title: "Ziad Zidan",
    imageUrl: "/work/ziad-zidan-hero.png",
    backgroundColor: "#f0f8ff", // Light color
  },
  {
    id: 2,
    title: "Golden Agro",
    imageUrl: "/work/golden-agro-hero.png",
    backgroundColor: "#faebd7", // Light color
  },
  {
    id: 3,
    title: "Mobile App UI",
    imageUrl: "https://picsum.photos/800/1000?random=3",
    backgroundColor: "#ffe4e1", // Light color
  },
  {
    id: 4,
    title: "Restaurant Website",
    imageUrl: "https://picsum.photos/800/600?random=4",
    backgroundColor: "#e6e6fa", // Light color
  },
  {
    id: 5,
    title: "Blog Platform",
    imageUrl: "https://picsum.photos/800/700?random=7",
    backgroundColor: "#fff0f5", // Light color
  },
  {
    id: 6,
    title: "Social Media Dashboard",
    imageUrl: "https://picsum.photos/800/900?random=6",
    backgroundColor: "#f5f5dc", // Light color
  },
];

export const Work = () => {
  const [sectionRef, isIntersecting] = useIntersectionObserver();

  const column1 = mockWorkData.filter((_, index) => index % 3 === 0);
  const column2 = mockWorkData.filter((_, index) => index % 3 === 1);
  const column3 = mockWorkData.filter((_, index) => index % 3 === 2);

  const renderColumn = (items: WorkItem[]) => (
    <div className="flex flex-col gap-4 mt-16">
      {items.map((item) => (
        <div key={item.id}>
          <div
            style={{ backgroundColor: item.backgroundColor }}
            className="p-8 rounded-md"
          >
            <div className="relative w-full">
              <Image
                src={item.imageUrl}
                alt={item.title}
                width={800}
                height={600}
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
    <section
      ref={sectionRef}
      className="container mx-auto px-16 py-16 relative z-20"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {renderColumn(column1)}
        {renderColumn(column2)}
        {renderColumn(column3)}
      </div>
      <ContactButton show={isIntersecting} />
    </section>
  );
};
