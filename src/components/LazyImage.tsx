import React, { useState } from "react";

interface LazyImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  /** relación ancho/alto para reservar espacio (p. ej. "16/9", "1/1") */
  aspectRatio?: string;
  /** color de fondo del placeholder */
  placeholderColor?: string;
}

export function LazyImage({
  src,
  alt,
  aspectRatio = "16/9",
  placeholderColor = "bg-gray-200",
  className = "",
  ...rest
}: LazyImageProps) {
  const [loaded, setLoaded] = useState(false);

  return (
    <div
      className={`relative overflow-hidden ${className}`}
      style={{ aspectRatio }}
    >
      {/* Placeholder */}
      <div
        className={`${placeholderColor} absolute inset-0 transition-opacity duration-500 ${
          loaded ? "opacity-0" : "opacity-100"
        }`}
      />

      {/* Imagen */}
      <img
        src={src}
        alt={alt}
        loading="lazy"
        onLoad={() => setLoaded(true)}
        className={`w-full h-full object-cover absolute inset-0 transition-opacity duration-700 ease-out ${
          loaded ? "opacity-100" : "opacity-0"
        }`}
        {...rest}
      />
    </div>
  );
}
