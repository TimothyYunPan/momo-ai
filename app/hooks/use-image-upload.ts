"use client"

import { useState } from "react"

export function useImageUpload() {
  const [uploadedImage, setUploadedImage] = useState<string | null>(null)
  const [uploadSuccess, setUploadSuccess] = useState(false)

  const uploadImage = async (file: File) => {
    try {
      setUploadSuccess(false)

      // 1. 獲取 presigned URL
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

      // 2. 使用 presigned URL 上傳文件
      const uploadResponse = await fetch(url, {
        method: "PUT",
        body: file,
      })

      if (!uploadResponse.ok) {
        throw new Error("Failed to upload file")
      }

      // 3. 設置上傳的圖片 URL (從 S3 URL 中提取)
      const imageUrl = url.split("?")[0]
      setUploadedImage(imageUrl)
      setUploadSuccess(true)

      // 顯示成功訊息 3 秒
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

