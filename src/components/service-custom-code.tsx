"use client";

import type React from "react";

export function CustomCodeService() {
  return (
    <li className="relative col-span-1 row-span-1 bg-gray-100 rounded-2xl overflow-hidden group">
      <div
        className="absolute w-[90%] bg-white top-[52px] left-10 rounded-lg p-4 font-mono text-[0.65rem]"
        style={{
          WebkitMaskImage: "linear-gradient(to bottom, black 60%, transparent)",
        }}
      >
        <div className="flex items-center mb-3">
          <div className="flex gap-1">
            <div className="size-2 bg-red-400 rounded-full"></div>
            <div className="size-2 bg-yellow-400 rounded-full"></div>
            <div className="size-2 bg-green-400 rounded-full"></div>
          </div>
          <span className="text-neutral-400 ml-10">new-website.js</span>
        </div>

        <div className="text-neutral-600 space-y-1">
          <div>
            <span className="text-blue-600">import</span> Website{" "}
            <span className="text-blue-600">from</span>{" "}
            <span className="text-green-600">"@engineers/seif"</span>
            <span className="text-gray-500">;</span>
          </div>
          <div className="mt-4">
            {/* 🚀 Let's launch your new site! */}
            <span className="text-blue-600">const</span> yourSite ={" "}
            <span className="text-blue-600">new</span> Website(&#123; owner:{" "}
            <span className="text-green-600">"You"</span>, poweredBy:{" "}
            <span className="text-green-600">"Seif"</span>, features: [
            <span className="text-green-600">"Fast"</span>,{" "}
            <span className="text-green-600">"Beautiful"</span>,{" "}
            <span className="text-green-600">"Interactive"</span>] &#125;)
            <span className="text-gray-500">;</span>
          </div>
          <div className="mt-4">
            {/* false should be replacable by true, when the user hovers, it should show  */}
            yourSite.launch ={" "}
            <span className="bg-neutral-300 text-red-400 rounded-sm py-0.5 px-1">
              false
            </span>
          </div>
          <div className="mt-4">
            {/* Should be invisible by default, once the user replaces false with true in
             yourSite.launch it should get typed and then confetti appears */}
            yourSite.sendCongrats(<span className="text-green-600">"🎉"</span>);
          </div>
        </div>
      </div>
      <div className="absolute top-0 right-0 bottom-10 w-16 bg-gradient-to-l from-gray-100 to-transparent"></div>
      <div className="absolute bottom-4 left-4">
        <h3 className="font-medium">Custom Code</h3>
        <p className="text-neutral-500 leading-tight text-sm">
          For web applications and interactive sites
        </p>
      </div>
    </li>
  );
}
