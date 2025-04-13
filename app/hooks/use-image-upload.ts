"use client"

import { useState } from "react"

export function useImageUpload() {
  const [uploadedImage, setUploadedImage] = useState<string | null>(null)
  const [uploadSuccess, setUploadSuccess] = useState(false)

  const uploadImage = async (file: File) => {
    try {
      setUploadSuccess(false)

      const presignedResponse = await fetch("/api/proxy/api/v1/s3/presigned-url", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          file_name: file.name,
          expires_in: 3600,
          http_method: "put",
        }),
      })

      if (!presignedResponse.ok) {
        throw new Error("Failed to get presigned URL")
      }

      const { url } = await presignedResponse.json()

      const uploadResponse = await fetch(url, {
        method: "PUT",
        body: file,
      })

      if (!uploadResponse.ok) {
        throw new Error("Failed to upload file")
      }

      const imageUrl = url.split("?")[0]
      setUploadedImage(imageUrl)
      setUploadSuccess(true)

      setTimeout(() => setUploadSuccess(false), 3000)

      return imageUrl
    } catch (error) {
      console.error("Error uploading file:", error)
      alert("上傳失敗，請重試")
      return null
    }
  }

  const removeUploadedImage = () => {
    setUploadedImage(null)
  }

  return {
    uploadedImage,
    uploadSuccess,
    uploadImage,
    removeUploadedImage,
  }
}

