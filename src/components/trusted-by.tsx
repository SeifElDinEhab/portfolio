import Image from "next/image";

export const TrustedBy = () => {
  return (
    <div className="flex flex-col items-center mt-12 mb-16">
      <h2 className=" mb-6 text-gray-700">Trusted by</h2>
      <div className="flex justify-center items-center gap-12 w-full max-w-md mx-auto">
        <Image
          src="/hireinc-logo.svg"
          alt="Hire Inc"
          width={80}
          height={30}
          className="h-6 w-auto opacity-80 hover:opacity-100 transition-opacity"
        />
        <Image
          src="/studioshot-logo.svg"
          alt="StudioShot"
          width={80}
          height={30}
          className="h-6 w-auto opacity-80 hover:opacity-100 transition-opacity"
        />
      </div>
    </div>
  );
};
