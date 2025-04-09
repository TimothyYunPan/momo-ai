"use client"

import Image from "next/image"
import { StyledButton } from "./ui/button-styles"
import type { ImageItem } from "../data"

interface ImageCardProps {
  image: ImageItem
  isHovered: boolean
  onMouseEnter: () => void
  onMouseLeave: () => void
}

export function ImageCard({ image, isHovered, onMouseEnter, onMouseLeave }: ImageCardProps) {
  return (
    <div
      className="relative rounded-lg overflow-hidden bg-white aspect-square group"
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      {/* Base image */}
      <Image
        src={image.imageUrl || "/placeholder.svg"}
        alt={image.title}
        width={200}
        height={200}
        className="w-full h-full object-contain"
      />

      {/* Hover overlay */}
      <div
        className={`absolute inset-0 bg-[#94a3b1] bg-opacity-90 flex flex-col justify-between p-3 transition-opacity duration-200 ${
          isHovered ? "opacity-100" : "opacity-0"
        }`}
      >
        <div className="self-end">
          <StyledButton variant="print">列印</StyledButton>
        </div>
        <div className="text-white">
          <div className="font-medium">{image.title}</div>
          <div className="text-xs">{image.description}</div>
        </div>
      </div>
    </div>
  )
}

