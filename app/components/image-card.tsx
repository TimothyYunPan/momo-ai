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
  const handlePrint = async () => {
    const accessToken = localStorage.getItem('epson_access_token')
    const deviceId = localStorage.getItem('epson_device_id')

    if (!accessToken || !deviceId) {
      alert('請先登入帳號')
      return
    }

    try {
      const response = await fetch('/api/proxy/api/v1/epson/print', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          file_url: image.imageUrl,
          access_token: accessToken,
          device_id: deviceId
        }),
      })

      if (!response.ok) {
        throw new Error('列印請求失敗')
      }

      alert('列印請求已發送')
    } catch (error) {
      console.error('列印錯誤:', error)
      alert('列印失敗，請重試')
    }
  }

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
        className={`absolute inset-0 bg-[#94a3b1] bg-opacity-90 flex flex-col justify-between p-3 transition-opacity duration-200 ${isHovered ? "opacity-100" : "opacity-0"
          }`}
      >
        <div className="self-end">
          <StyledButton variant="print" onClick={handlePrint}>列印</StyledButton>
        </div>
        <div className="text-white">
          {/* <div className="font-medium">{image.title}</div> */}
          <div className="text-xs">{image.description}</div>
        </div>
      </div>
    </div>
  )
}

