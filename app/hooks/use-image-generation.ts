"use client"

import { useState } from "react"
import type { ImageItem } from "../data"

export function useImageGeneration() {
  const [generatedImages, setGeneratedImages] = useState<ImageItem[]>([])
  const [isGenerating, setIsGenerating] = useState(false)

  const generateImages = async (promptText: string, imageUrl: string | null) => {
    setIsGenerating(true)

    try {
      // 準備請求體
      const requestBody: {
        prompt: string
        image_url?: string
      } = {
        prompt: promptText,
      }

      // 如果有上傳圖片，加入 image_url
      if (imageUrl) {
        requestBody.image_url = imageUrl
      }

      // 呼叫生成 API
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

      // 將 API 回傳的圖片轉換為我們的格式
      const newImages: ImageItem[] = data.generated_images.map((img: any, index: number) => ({
        id: `gen-${img.id || index}`,
        title: `生成圖片 ${index + 1}`,
        description: data.prompt || "根據您的提示生成的圖片",
        imageUrl: img.image_url,
      }))

      setGeneratedImages(newImages)
      return newImages
    } catch (error) {
      console.error("Error generating images:", error)
      alert("生成失敗，請重試")
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

