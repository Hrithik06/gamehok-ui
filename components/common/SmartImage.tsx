"use client";

import Image, { ImageProps } from "next/image";
import { useState } from "react";

type Props = Omit<ImageProps, "alt"> & {
  alt: string; //force alt
};

export default function SmartImage({ alt, className = "", ...props }: Props) {
  const [loaded, setLoaded] = useState(false);

  return (
    <div className="relative w-full h-full overflow-hidden bg-white/5">
      {/* Shimmer */}
      {!loaded && (
        <div className="absolute inset-0 animate-pulse bg-gradient-to-r from-white/5 via-white/10 to-white/5" />
      )}

      <Image
        {...props}
        alt={alt} // 🔥 always present
        className={`
          object-cover transition-all duration-500
          ${loaded ? "opacity-100 scale-100" : "opacity-0 scale-105"}
          ${className}
        `}
        onLoad={() => setLoaded(true)}
      />
    </div>
  );
}
