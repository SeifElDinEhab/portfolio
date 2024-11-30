import React, { useEffect, useState } from "react";

interface ContactButtonProps {
  show: boolean;
}

export const ContactButton: React.FC<ContactButtonProps> = ({ show }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [shouldRender, setShouldRender] = useState(false);

  useEffect(() => {
    if (show) {
      setShouldRender(true);
      // Small delay to ensure the enter animation plays
      setTimeout(() => setIsVisible(true), 10);
    } else {
      setIsVisible(false);
      // Wait for the exit animation to complete before removing from DOM
      setTimeout(() => setShouldRender(false), 500);
    }
  }, [show]);

  if (!shouldRender) return null;

  return (
    <div
      className={`contact-button-container ${
        isVisible ? "contact-button-enter" : "contact-button-exit"
      } w-fit py-4 px-6 bg-[#3a3a3a] text-white flex items-center gap-4 rounded-xl z-50 overflow-hidden`}
    >
      <svg
        className="absolute w-full inset-0 pointer-events-none"
        viewBox="0 0 512 512"
        preserveAspectRatio="none"
      >
        <pattern
          id="lines-pattern"
          x="0"
          y="0"
          width="20"
          height="20"
          patternUnits="userSpaceOnUse"
        >
          <line
            x1="0"
            y1="20"
            x2="20"
            y2="0"
            stroke="#ffffff"
            strokeWidth="0.5"
            strokeOpacity="0.02"
            transform="rotate(90 10 10)"
          />
          <line
            x1="-5"
            y1="25"
            x2="25"
            y2="-5"
            stroke="#ffffff"
            strokeWidth="0.5"
            strokeOpacity="0.02"
            transform="rotate(90 10 10)"
          />
          <line
            x1="-10"
            y1="30"
            x2="30"
            y2="-10"
            stroke="#ffffff"
            strokeWidth="0.5"
            strokeOpacity="0.02"
            transform="rotate(90 10 10)"
          />
        </pattern>
        <rect width="512" height="512" fill="url(#lines-pattern)" />
      </svg>
      <h4 className="font-instrument text-2xl drop-shadow">
        Like what you see?
      </h4>
      <button className="smooth-button drop-shadow ml-auto rounded-md bg-white hover:bg-[#f1f1f1] text-[#3a3a3a] font-semibold text-sm px-4 py-2 tracking-tighter transition-all">
        Get in touch
      </button>
    </div>
  );
};
