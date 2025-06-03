import React from "react";

export default function BackgroundWrapper({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen w-full relative overflow-hidden">
      {/* Background image layer */}
      <div
        className="absolute inset-0 w-full h-full"
        style={{
          backgroundImage: "url('/assets/front-end-assets/bg-login.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          opacity: 0.4, // Only the image is faded
          zIndex: 0,
        }}
        aria-hidden="true"
      />
      {/* Foreground content */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
}