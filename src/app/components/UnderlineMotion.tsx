"use client";

const UnderlineMotion = () => {
  return (
    <div className="flex justify-center">
      <div
        className="w-80 h-1 rounded-full bg-gradient-to-r from-cyan-500 via-blue-500 to-cyan-500 animate-gradient-shift mt-2"
        style={{
          backgroundSize: "200% 200%",
        }}
      />
    </div>
  );
};

export default UnderlineMotion;
