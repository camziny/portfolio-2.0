"use client";
import Image from "next/image";

const CompanyLogo = ({ src, alt, wide }: { src: string; alt: string; wide?: boolean }) => {
  return (
    <div className={`relative h-9 flex-shrink-0 overflow-hidden rounded-md border border-border ${wide ? "w-14" : "w-9"}`}>
      <Image src={src} alt={alt} fill className={wide ? "object-contain p-0.5" : "object-cover"} sizes={wide ? "56px" : "36px"} />
    </div>
  );
};

export default CompanyLogo;
