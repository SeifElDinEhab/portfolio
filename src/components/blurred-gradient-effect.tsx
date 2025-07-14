export const BlurredGradientEffect = () => {
  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        height: "100%",
        borderRadius: "0px",
      }}
    >
      <div
        style={{
          position: "absolute",
          inset: 0,
          zIndex: 1,
          backdropFilter: "blur(0.0625px)",
          WebkitBackdropFilter: "blur(0.0625px)",
          maskImage:
            "linear-gradient(to bottom, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 1) 12.5%, rgba(0, 0, 0, 1) 25%, rgba(0, 0, 0, 0) 37.5%)",
          WebkitMaskImage:
            "linear-gradient(to bottom, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 1) 12.5%, rgba(0, 0, 0, 1) 25%, rgba(0, 0, 0, 0) 37.5%)",
          borderRadius: "0px",
          pointerEvents: "none",
        }}
      ></div>
      <div
        style={{
          position: "absolute",
          inset: 0,
          zIndex: 2,
          backdropFilter: "blur(0.125px)",
          WebkitBackdropFilter: "blur(0.125px)",
          maskImage:
            "linear-gradient(to bottom, rgba(0, 0, 0, 0) 12.5%, rgba(0, 0, 0, 1) 25%, rgba(0, 0, 0, 1) 37.5%, rgba(0, 0, 0, 0) 50%)",
          WebkitMaskImage:
            "linear-gradient(to bottom, rgba(0, 0, 0, 0) 12.5%, rgba(0, 0, 0, 1) 25%, rgba(0, 0, 0, 1) 37.5%, rgba(0, 0, 0, 0) 50%)",
          borderRadius: "0px",
          pointerEvents: "none",
        }}
      ></div>
      <div
        style={{
          position: "absolute",
          inset: 0,
          zIndex: 3,
          backdropFilter: "blur(0.25px)",
          WebkitBackdropFilter: "blur(0.25px)",
          maskImage:
            "linear-gradient(to bottom, rgba(0, 0, 0, 0) 25%, rgba(0, 0, 0, 1) 37.5%, rgba(0, 0, 0, 1) 50%, rgba(0, 0, 0, 0) 62.5%)",
          WebkitMaskImage:
            "linear-gradient(to bottom, rgba(0, 0, 0, 0) 25%, rgba(0, 0, 0, 1) 37.5%, rgba(0, 0, 0, 1) 50%, rgba(0, 0, 0, 0) 62.5%)",
          borderRadius: "0px",
          pointerEvents: "none",
        }}
      ></div>
      <div
        style={{
          position: "absolute",
          inset: 0,
          zIndex: 4,
          backdropFilter: "blur(0.5px)",
          WebkitBackdropFilter: "blur(0.5px)",
          maskImage:
            "linear-gradient(to bottom, rgba(0, 0, 0, 0) 37.5%, rgba(0, 0, 0, 1) 50%, rgba(0, 0, 0, 1) 62.5%, rgba(0, 0, 0, 0) 75%)",
          WebkitMaskImage:
            "linear-gradient(to bottom, rgba(0, 0, 0, 0) 37.5%, rgba(0, 0, 0, 1) 50%, rgba(0, 0, 0, 1) 62.5%, rgba(0, 0, 0, 0) 75%)",
          borderRadius: "0px",
          pointerEvents: "none",
        }}
      ></div>
      <div
        style={{
          position: "absolute",
          inset: 0,
          zIndex: 5,
          backdropFilter: "blur(1px)",
          WebkitBackdropFilter: "blur(1px)",
          maskImage:
            "linear-gradient(to bottom, rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, 1) 62.5%, rgba(0, 0, 0, 1) 75%, rgba(0, 0, 0, 0) 87.5%)",
          WebkitMaskImage:
            "linear-gradient(to bottom, rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, 1) 62.5%, rgba(0, 0, 0, 1) 75%, rgba(0, 0, 0, 0) 87.5%)",
          borderRadius: "0px",
          pointerEvents: "none",
        }}
      ></div>
      <div
        style={{
          position: "absolute",
          inset: 0,
          zIndex: 6,
          backdropFilter: "blur(2px)",
          WebkitBackdropFilter: "blur(2px)",
          maskImage:
            "linear-gradient(to bottom, rgba(0, 0, 0, 0) 62.5%, rgba(0, 0, 0, 1) 75%, rgba(0, 0, 0, 1) 87.5%, rgba(0, 0, 0, 0) 100%)",
          WebkitMaskImage:
            "linear-gradient(to bottom, rgba(0, 0, 0, 0) 62.5%, rgba(0, 0, 0, 1) 75%, rgba(0, 0, 0, 1) 87.5%, rgba(0, 0, 0, 0) 100%)",
          borderRadius: "0px",
          pointerEvents: "none",
        }}
      ></div>
      <div
        style={{
          position: "absolute",
          inset: 0,
          zIndex: 7,
          backdropFilter: "blur(4px)",
          WebkitBackdropFilter: "blur(4px)",
          maskImage:
            "linear-gradient(to bottom, rgba(0, 0, 0, 0) 75%, rgba(0, 0, 0, 1) 87.5%, rgba(0, 0, 0, 1) 100%)",
          WebkitMaskImage:
            "linear-gradient(to bottom, rgba(0, 0, 0, 0) 75%, rgba(0, 0, 0, 1) 87.5%, rgba(0, 0, 0, 1) 100%)",
          borderRadius: "0px",
          pointerEvents: "none",
        }}
      ></div>
      <div
        style={{
          position: "absolute",
          inset: 0,
          zIndex: 8,
          backdropFilter: "blur(8px)",
          WebkitBackdropFilter: "blur(8px)",
          maskImage:
            "linear-gradient(to bottom, rgba(0, 0, 0, 0) 87.5%, rgba(0, 0, 0, 1) 100%)",
          WebkitMaskImage:
            "linear-gradient(to bottom, rgba(0, 0, 0, 0) 87.5%, rgba(0, 0, 0, 1) 100%)",
          borderRadius: "0px",
          pointerEvents: "none",
        }}
      ></div>
    </div>
  );
};
