import { NoCodeService } from "./service-no-code";
import { CustomCodeService } from "./service-custom-code";
import { ThreeDService } from "./service-3d";
import { AnimationsService } from "./service-animations";
import Image from "next/image";

export function ServicesSection() {
  return (
    <section className="pb-16 pt-32 max-w-3xl w-full mx-auto">
      <div className="relative w-full">
        <h2 className="text-2xl text-neutral-600 font-semibold mb-6">
          I can help with
        </h2>
        <ul className="w-full aspect-3 grid grid-cols-3 grid-rows-1 gap-4">
          <NoCodeService />
          <CustomCodeService />
          {/* <AnimationsService /> */}
          <ThreeDService />
        </ul>
      </div>
    </section>
  );
}
