"use client"

import type React from "react"
import Image from "next/image"
import { useState, useRef } from "react"
import IconPhotoAdd from "@/public/image/photo-add.svg"
import MomoSVG from "./MomoSVG"

interface ImageUploaderProps {
  uploadedImage: string | null
  uploadSuccess: boolean
  onUpload: (file: File) => Promise<void>
  onRemove: () => void
}

export function ImageUploader({ uploadedImage, uploadSuccess, onUpload, onRemove }: ImageUploaderProps) {
  const fileInputRef = useRef<HTMLInputElement>(null)
  const [isHovered, setIsHovered] = useState(false)
  const [isUploading, setIsUploading] = useState(false)

  const triggerFileInput = () => {
    fileInputRef.current?.click()
  }

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      setIsUploading(true)
      try {
        await onUpload(file)
      } finally {
        setIsUploading(false)
      }
    }
  }

  return (
    <div className="relative">
      <input type="file" ref={fileInputRef} onChange={handleFileChange} accept="image/*" className="hidden" disabled={isUploading} />

      {uploadedImage ? (
        // 上傳成功狀態
        <button
          className="flex items-center gap-1.5 px-[12px] py-[8px] bg-white text-green-600 rounded-full text-sm transition-colors shadow-sm border border-[#E5E5EA] rounded-lg"
          disabled
        >
          {/* <div className="text-[#5A4FF3]">
            <Image src={IconPhotoAdd} alt="upload" width={16} height={16} />
          </div> */}
          <div className="text-green-600">
            <MomoSVG src="/image/photo-add.svg" width="24px" height="24px"></MomoSVG>
          </div>
          上傳成功
        </button>
      ) : (
        // 默認狀態、懸停狀態和點擊狀態
        <button
          className={`flex items-center gap-1.5 px-[12px] py-[8px] ${isHovered ? "bg-gray-100" : "bg-white"
            } hover:bg-gray-100 text-[#000] rounded-lg shadow-sm text-sm transition-colors relative border border-[#E5E5EA]`}
          onClick={triggerFileInput}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          disabled={isUploading}
        >
          {!isUploading &&
            <Image src={IconPhotoAdd} alt="upload" width={24} height={24} />
          }
          {isUploading ? <div className="flex justify-center items-center">
            上傳中
            <div className="flex space-x-2 p-2 h-[24px] items-center">
              <div className="w-[3px] h-[3px] bg-[#696974] rounded-full animate-bounce" style={{ animationDelay: "0ms" }}></div>
              <div className="w-[3px] h-[3px] bg-[#696974] rounded-full animate-bounce" style={{ animationDelay: "150ms" }}></div>
              <div className="w-[3px] h-[3px] bg-[#696974] rounded-full animate-bounce" style={{ animationDelay: "300ms" }}></div>
            </div>
          </div> : "新增影像"}
          {/* 懸停時顯示的提示 */}
          {isHovered && !isUploading && (
            <div className="absolute left-0 bottom-full mb-2 bg-gray-800 text-white text-xs px-2 py-1 rounded whitespace-nowrap">
              上傳影像作為圖畫指引
            </div>
          )}
        </button>
      )}
    </div>
  )
}

