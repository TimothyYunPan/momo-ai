"use client"

import { useState, useRef } from "react"
import { Header } from "../components/header"
import { Footer } from "../components/footer"
import { PromptInput } from "../components/prompt-input"
import { ImageUploader } from "../components/image-uploader"
import { OptionDropdown } from "../components/option-dropdown"
import { GenerateButton } from "../components/generate-button"
import { GeneratedImages } from "../components/generated-images"
import { RecommendedImages } from "../components/recommended-images"
import { BackgroundShapes } from "../components/background-shapes"
import { useImageUpload } from "../hooks/use-image-upload"
import { useImageGeneration } from "../hooks/use-image-generation"
import { useRecommendations } from "../hooks/use-recommendations"
import { colorOptions, recommendationCategories } from "../data"
import IconfairyWand from "@/public/image/fairy-wand.svg"
import Image from "next/image"
import MomoSVG from "../components/MomoSVG"


export default function MomoCreationPage() {
  // State
  const [promptText, setPromptText] = useState("")
  const [hoveredImageIndex, setHoveredImageIndex] = useState<number | null>(null)
  // const [selectedColorOption, setSelectedColorOption] = useState(colorOptions[0])
  // const [selectedAspectRatio, setSelectedAspectRatio] = useState({ id: "3:4", label: "3:4" })

  // Refs
  const generatedSectionRef = useRef<HTMLDivElement>(null)

  // Custom hooks
  const { uploadedImage, uploadSuccess, uploadImage, removeUploadedImage } = useImageUpload()
  const { generatedImages, isGenerating, generateImages } = useImageGeneration()
  const {
    activeCategory,
    isLoadingRecommendations,
    recommendedImages,
    displayCount,
    handleCategoryChange,
    handleViewMore,
    totalCount,
  } = useRecommendations()

  // Aspect ratio options
  const aspectRatioOptions = [
    { id: "3:4", label: "3:4" },
    { id: "4:3", label: "4:3" },
    { id: "1:1", label: "1:1" },
  ]

  // Handlers
  const handlePromptChange = (text: string) => {
    setPromptText(text)
  }

  const handleFileUpload = async (file: File) => {
    await uploadImage(file)
  }

  const handleGenerateClick = async () => {
    if (!isConditionsSatisfied()) return

    const images = await generateImages(promptText, uploadedImage)

    if (images.length > 0 && generatedSectionRef.current) {
      generatedSectionRef.current.scrollIntoView({ behavior: "smooth" })
    }
  }

  // Check if conditions are satisfied to enable the generate button
  const isConditionsSatisfied = () => {
    return promptText.trim().length > 0 || !!uploadedImage
  }

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* 背景圖形 */}
      <BackgroundShapes />

      <div className="relative z-10">
        <Header />

        {/* Main content - with 120px padding */}
        <main className="max-w-[1200px] mx-auto">
          <div className="mb-12">
            <div className="flex items-center mb-3">
              <div className="text-[#5a4ff3] mr-2">
                <MomoSVG src="/image/fairy-wand.svg" width="24px" height="24px"></MomoSVG>
              </div>
              <h4 className="text-xl font-bold text-[#5A4FF3]">墨墨 AI 創作</h4>
            </div>
            <h2 className="text-3xl font-bold mb-6 text-[#323343]">你今天想畫些什麼？</h2>

            <PromptInput
              promptText={promptText}
              uploadedImage={uploadedImage}
              onPromptChange={handlePromptChange}
              onRemoveImage={removeUploadedImage}
            />

            <div className="flex justify-between items-center">
              <div className="flex gap-2">
                <ImageUploader
                  uploadedImage={uploadedImage}
                  uploadSuccess={uploadSuccess}
                  onUpload={handleFileUpload}
                  onRemove={removeUploadedImage}
                />

                {/* <OptionDropdown
                  options={colorOptions}
                  selectedOption={selectedColorOption}
                  onSelect={setSelectedColorOption}
                  tooltipText="調整圖畫樣式"
                  type="color"
                />

                <OptionDropdown
                  options={aspectRatioOptions}
                  selectedOption={selectedAspectRatio}
                  onSelect={setSelectedAspectRatio}
                  tooltipText="調整尺寸"
                  type="size"
                /> */}
              </div>

              <GenerateButton
                isGenerating={isGenerating}
                isEnabled={isConditionsSatisfied()}
                onClick={handleGenerateClick}
              />
            </div>
          </div>

          <div ref={generatedSectionRef}>
            <GeneratedImages images={generatedImages} hoveredIndex={hoveredImageIndex} onHover={setHoveredImageIndex} />
          </div>

          <RecommendedImages
            categories={recommendationCategories}
            activeCategory={activeCategory}
            images={recommendedImages}
            // images={mockDataByCategory['explore']}
            displayCount={displayCount}
            isLoading={isLoadingRecommendations}
            hoveredIndex={hoveredImageIndex}
            onCategoryChange={handleCategoryChange}
            onViewMore={handleViewMore}
            onHover={setHoveredImageIndex}
            totalCount={totalCount}
          />
        </main>

        <Footer />
      </div>
    </div>
  )
}

