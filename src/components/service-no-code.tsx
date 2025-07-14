"use client";

import type React from "react";
import { useState } from "react";
import type { JSX } from "react";

interface DraggableItem {
  id: string;
  component: JSX.Element;
}

export function NoCodeService() {
  const [draggedItem, setDraggedItem] = useState<string | null>(null);
  const [dragOverItem, setDragOverItem] = useState<string | null>(null);

  const [items, setItems] = useState<DraggableItem[]>([
    {
      id: "header",
      component: (
        <div className="flex justify-between items-center p-4 hover:scale-95 transition-all ease-out duration-200">
          <div className="h-1 w-6 bg-neutral-200 rounded-sm"></div>
          <div className="flex gap-1 items-center">
            <div className="h-2 w-6 bg-violet-400 rounded-full"></div>
          </div>
        </div>
      ),
    },
    {
      id: "hero",
      component: (
        <div className="flex flex-col items-center gap-1 py-2 hover:scale-95 transition-all ease-out duration-200">
          <div className="w-12 h-2 bg-neutral-300 rounded-full mb-1"></div>
          <div className="w-24 h-1 bg-neutral-200 rounded-full"></div>
          <div className="w-16 h-1 bg-neutral-200 rounded-full"></div>
        </div>
      ),
    },
    {
      id: "visual",
      component: (
        <div className="flex justify-center items-center py-2 hover:scale-95 transition-all ease-out duration-200">
          <div className="bg-neutral-300 rounded w-32 h-16"></div>
        </div>
      ),
    },
  ]);

  const handleDragStart = (e: React.DragEvent, itemId: string) => {
    setDraggedItem(itemId);
    e.dataTransfer.effectAllowed = "move";
  };

  const handleDragOver = (e: React.DragEvent, itemId: string) => {
    e.preventDefault();
    e.dataTransfer.dropEffect = "move";
    setDragOverItem(itemId);
  };

  const handleDragLeave = () => {
    setDragOverItem(null);
  };

  const handleDrop = (e: React.DragEvent, dropItemId: string) => {
    e.preventDefault();

    if (!draggedItem || draggedItem === dropItemId) {
      setDraggedItem(null);
      setDragOverItem(null);
      return;
    }

    const draggedIndex = items.findIndex((item) => item.id === draggedItem);
    const dropIndex = items.findIndex((item) => item.id === dropItemId);

    if (draggedIndex === -1 || dropIndex === -1) return;

    const newItems = [...items];
    const [draggedElement] = newItems.splice(draggedIndex, 1);
    newItems.splice(dropIndex, 0, draggedElement);

    setItems(newItems);
    setDraggedItem(null);
    setDragOverItem(null);
  };

  const handleDragEnd = () => {
    setDraggedItem(null);
    setDragOverItem(null);
  };

  // Create custom cursor SVG
  const customCursor = `data:image/svg+xml;base64,${btoa(`
  <svg width="25" height="25" viewBox="0 0 40 40" style="transform: rotate(-30deg) scale(0.8);" 
  fill="none" xmlns="http://www.w3.org/2000/svg">
    <polygon points="13,0 0,25 13,20 25,25" fill="#2d2d44" stroke="#1a1a2e" stroke-width="1"/>
  </svg>
`)}`;

  return (
    <li
      className="relative col-span-1 row-span-1 flex justify-center items-center p-10 bg-gray-100 rounded-2xl group"
      style={{
        cursor: `url("${customCursor}") 12 12, auto`,
      }}
    >
      <div className="w-full h-full">
        <div
          className="bg-white rounded-lg w-full h-full group-hover:translate-y-0 translate-y-3 transition-transform duration-[400ms] ease-out"
          style={{
            WebkitMaskImage:
              "linear-gradient(to bottom, black 60%, transparent)",
          }}
        >
          {items.map((item) => (
            <div
              key={item.id}
              draggable
              onDragStart={(e) => handleDragStart(e, item.id)}
              onDragOver={(e) => handleDragOver(e, item.id)}
              onDragLeave={handleDragLeave}
              onDrop={(e) => handleDrop(e, item.id)}
              onDragEnd={handleDragEnd}
              className={`transition-all duration-200 hover:bg-blue-50/75 ${
                draggedItem === item.id ? "opacity-50 scale-95" : ""
              } ${
                dragOverItem === item.id && draggedItem !== item.id
                  ? "bg-blue-50 border border-blue-200 border-dashed rounded"
                  : ""
              }`}
            >
              {item.component}
            </div>
          ))}
        </div>
      </div>
      <div className="absolute bottom-4 left-4">
        <h3 className="font-medium">No-code</h3>
        <p className="text-neutral-500 leading-tight text-sm">
          For landing pages and marketing sites
        </p>
      </div>
    </li>
  );
}
