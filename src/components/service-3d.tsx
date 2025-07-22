"use client";
import Spline from "@splinetool/react-spline";

export function ThreeDService() {
  return (
    <li className="relative col-span-1 row-span-1 flex flex-col bg-neutral-100 rounded-2xl overflow-hidden">
      <div className="relative flex-1 service-mask">
        <div className="absolute top-0 left-0 right-0 -bottom-16">
          {/* <Spline scene="https://prod.spline.design/RYTpK4epENFANj5U/scene.splinecode" /> */}
        </div>
      </div>
      <div className="flex-none p-4">
        <h3 className="font-medium">3D Development</h3>
        <p className="text-neutral-500 leading-tight text-sm">
          For immersive experiences
        </p>
      </div>
    </li>
  );
}
