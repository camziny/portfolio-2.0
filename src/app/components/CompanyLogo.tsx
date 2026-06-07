"use client";
import Image from "next/image";

const CompanyLogo = ({ src, alt }: { src: string; alt: string }) => {
  return (
    <div className="relative h-9 w-9 flex-shrink-0 overflow-hidden rounded-md border border-border">
      <Image src={src} alt={alt} fill className="object-cover" sizes="36px" />
    </div>
  );
};

export default CompanyLogo;
