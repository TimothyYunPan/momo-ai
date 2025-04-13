"use client"

import { useState } from "react"
import type { ImageItem } from "../data"

export function useImageGeneration() {
  const [generatedImages, setGeneratedImages] = useState<ImageItem[]>([])
  const [isGenerating, setIsGenerating] = useState(false)

  const generateImages = async (promptText: string, imageUrl: string | null) => {
    setIsGenerating(true)

    try {
      const requestBody: {
        prompt: string
        image_url?: string
      } = {
        prompt: promptText,
      }

      if (imageUrl) {
        requestBody.image_url = imageUrl
      }

      const response = await fetch("/api/proxy/api/v1/images/generate", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(requestBody),
      })

      if (!response.ok) {
        throw new Error("Failed to generate images")
      }

      const data = await response.json()

      const newImages: ImageItem[] = data.generated_images.map((img: any, index: number) => ({
        id: `gen-${img.id || index}`,
        title: `產生圖片 ${index + 1}`,
        description: data.prompt || "根據您的提示產生的圖片",
        imageUrl: img.image_url,
      }))

      setGeneratedImages(newImages)
      return newImages
    } catch (error) {
      console.error("Error generating images:", error)
      alert("產生失敗，請重試")
      return []
    } finally {
      setIsGenerating(false)
    }
  }

  return {
    generatedImages,
    isGenerating,
    generateImages,
  }
}

