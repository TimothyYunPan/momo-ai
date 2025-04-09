"use client"

import { useState, useEffect } from "react"
import type { ImageItem } from "../data"

interface ApiResponse {
  total: number
  items: Array<{
    id: number | string
    image_url: string
    sequence_number: number
    created_at: string
    generation_record_id: number
    prompt: string
  }>
}

export function useRecommendations() {
  const [activeCategory, setActiveCategory] = useState("explore")
  const [isLoadingRecommendations, setIsLoadingRecommendations] = useState(false)
  const [recommendedImages, setRecommendedImages] = useState<ImageItem[]>([])
  const [displayCount, setDisplayCount] = useState(8)
  const [totalCount, setTotalCount] = useState(0)

  const fetchRecommendations = async (category: string) => {
    setIsLoadingRecommendations(true)
    setDisplayCount(8)

    try {
      let url = "/api/proxy/api/v1/images/images?limit=20&skip=0"
      if (category !== "explore") {
        url += `&tag=${encodeURIComponent(category)}`
      }

      const response = await fetch(url)
      if (!response.ok) throw new Error("Failed to fetch recommendations")

      const data: ApiResponse = await response.json()
      const images: ImageItem[] = data.items.map((item) => ({
        id: String(item.id),
        title: `圖片 ${item.sequence_number}`,
        description: item.prompt || "推薦圖片",
        imageUrl: item.image_url,
      }))

      setRecommendedImages(images)
      setTotalCount(data.total)
    } catch (error) {
      console.error("Error fetching recommendations:", error)
      setRecommendedImages([])
    } finally {
      setIsLoadingRecommendations(false)
    }
  }

  const handleCategoryChange = (categoryId: string) => {
    if (categoryId === activeCategory) return
    setActiveCategory(categoryId)
    fetchRecommendations(categoryId)
  }

  const handleViewMore = () => {
    const nextCount = Math.min(displayCount + 8, recommendedImages.length)
    if (nextCount > recommendedImages.length - 4 && recommendedImages.length < totalCount) {
      loadMoreImages()
    } else {
      setDisplayCount(nextCount)
    }
  }

  const loadMoreImages = async () => {
    if (isLoadingRecommendations) return
    setIsLoadingRecommendations(true)

    try {
      let url = `/api/proxy/api/v1/images/images?limit=8&skip=${recommendedImages.length}`
      if (activeCategory !== "explore") {
        url += `&tag=${encodeURIComponent(activeCategory)}`
      }

      const response = await fetch(url)
      if (!response.ok) throw new Error("Failed to fetch more recommendations")

      const data: ApiResponse = await response.json()
      const newImages: ImageItem[] = data.items.map((item) => ({
        id: String(item.id),
        title: `圖片 ${item.sequence_number}`,
        description: item.prompt || "推薦圖片",
        imageUrl: item.image_url,
      }))

      setRecommendedImages((prev) => [...prev, ...newImages])
      setTotalCount(data.total)
      setDisplayCount((prev) => prev + newImages.length)
    } catch (error) {
      console.error("Error fetching more recommendations:", error)
    } finally {
      setIsLoadingRecommendations(false)
    }
  }

  useEffect(() => {
    fetchRecommendations(activeCategory)
  }, [])

  return {
    activeCategory,
    isLoadingRecommendations,
    recommendedImages,
    displayCount,
    handleCategoryChange,
    handleViewMore,
    totalCount,
  }
}

