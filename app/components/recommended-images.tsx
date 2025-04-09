"use client"

import { StyledButton } from "./ui/button-styles"
import { ImageCard } from "./image-card"
import type { ImageItem, RecommendationCategory } from "../data"

interface RecommendedImagesProps {
  categories: RecommendationCategory[]
  activeCategory: string
  images: ImageItem[]
  displayCount: number
  isLoading: boolean
  hoveredIndex: number | null
  onCategoryChange: (categoryId: string) => void
  onViewMore: () => void
  onHover: (index: number | null) => void
  totalCount?: number
}

export function RecommendedImages({
  categories,
  activeCategory,
  images,
  displayCount,
  isLoading,
  hoveredIndex,
  onCategoryChange,
  onViewMore,
  onHover,
  totalCount = 0,
}: RecommendedImagesProps) {
  return (
    <div>
      <h3 className="text-xl font-bold mb-4 text-[#323343]">墨墨推薦</h3>

      {/* Category tabs */}
      <div className="flex gap-4 mb-4 overflow-x-auto pb-2">
        {categories.map((category) => (
          <button
            key={category.id}
            className={`whitespace-nowrap transition-colors duration-200 ${activeCategory === category.id ? "text-[#5a4ff3] font-medium" : "text-[#696974] hover:text-[#5a4ff3]"
              }`}
            onClick={() => onCategoryChange(category.id)}
          >
            {category.label}
          </button>
        ))}
      </div>

      {/* Loading state for recommendations */}
      {isLoading && images.length === 0 ? (
        <div className="flex justify-center items-center py-20">
          <div className="flex space-x-2">
            <div className="w-3 h-3 bg-[#5a4ff3] rounded-full animate-bounce" style={{ animationDelay: "0ms" }}></div>
            <div className="w-3 h-3 bg-[#5a4ff3] rounded-full animate-bounce" style={{ animationDelay: "150ms" }}></div>
            <div className="w-3 h-3 bg-[#5a4ff3] rounded-full animate-bounce" style={{ animationDelay: "300ms" }}></div>
          </div>
        </div>
      ) : (
        <>
          {/* Image grid with hover effects */}
          <div className="grid grid-cols-4 gap-4 mb-8">
            {images.slice(0, displayCount).map((image, index) => (
              <ImageCard
                key={image.id}
                image={image}
                isHovered={hoveredIndex === index}
                onMouseEnter={() => onHover(index)}
                onMouseLeave={() => onHover(null)}
              />
            ))}
          </div>

          {/* Only show the "View More" button if there are more items to display */}
          {(displayCount < images.length || displayCount < totalCount) && (
            <div className="flex justify-center">
              <StyledButton
                variant="viewMore"
                onClick={onViewMore}
                disabled={isLoading}
                className={isLoading ? "opacity-70" : ""}
              >
                {isLoading ? (
                  <div className="flex space-x-1">
                    <div
                      className="w-1.5 h-1.5 bg-current rounded-full animate-bounce"
                      style={{ animationDelay: "0ms" }}
                    ></div>
                    <div
                      className="w-1.5 h-1.5 bg-current rounded-full animate-bounce"
                      style={{ animationDelay: "150ms" }}
                    ></div>
                    <div
                      className="w-1.5 h-1.5 bg-current rounded-full animate-bounce"
                      style={{ animationDelay: "300ms" }}
                    ></div>
                  </div>
                ) : (
                  "查看更多"
                )}
              </StyledButton>
            </div>
          )}
        </>
      )}
      {!isLoading && images.length === 0 && <div className="flex items-center justify-center text-center h-[250px] w-[100%] text-[#323343]">暫無結果</div>}
    </div>
  )
}

