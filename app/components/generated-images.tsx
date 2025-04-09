"use client"

import { useRef } from "react"
import { ImageCard } from "./image-card"
import { mockDataByCategory, type ImageItem } from "../data"

interface GeneratedImagesProps {
  images: ImageItem[]
  hoveredIndex: number | null
  onHover: (index: number | null) => void
}

export function GeneratedImages({ images, hoveredIndex, onHover }: GeneratedImagesProps) {
  const sectionRef = useRef<HTMLDivElement>(null)
  // let images1 = mockDataByCategory['explore']
  if (images.length === 0) return null

  return (
    <div className="mb-16" ref={sectionRef}>
      <h3 className="text-xl font-bold mb-4 text-[#323343]">以下為符合條件的圖畫：</h3>

      <div className="grid grid-cols-4 gap-4 mb-8">
        {images.map((image, index) => (
          <ImageCard
            key={image.id}
            image={image}
            isHovered={hoveredIndex === index + 1000}
            onMouseEnter={() => onHover(index + 1000)}
            onMouseLeave={() => onHover(null)}
          />
        ))}
      </div>
    </div>
  )
}

