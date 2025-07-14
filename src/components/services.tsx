import { NoCodeService } from "./service-no-code";
import { CustomCodeService } from "./service-custom-code";

export function ServicesSection() {
  return (
    <section className="py-16 max-w-xl w-full mx-auto">
      <div className="relative w-full">
        <h2 className="text-2xl text-neutral-500 font-semibold mb-6">
          I can help with
        </h2>
        <ul className="w-full h-[576px] grid grid-cols-2 grid-rows-2 gap-4">
          <NoCodeService />
          <CustomCodeService />
          <li className="relative col-span-1 row-span-1 bg-gray-100 rounded-2xl">
            <div className="absolute bottom-4 left-4">
              <h3 className="font-medium">Web Animation</h3>
              <p className="text-neutral-500 leading-tight text-sm">
                When you need to add some motion
              </p>
            </div>
          </li>
          <li className="relative col-span-1 row-span-1 bg-gray-100 rounded-2xl">
            <div className="absolute bottom-4 left-4">
              <h3 className="font-medium">3D Development</h3>
              <p className="text-neutral-500 leading-tight text-sm">
                For immersive experiences
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
}
