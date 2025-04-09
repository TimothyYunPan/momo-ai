"use client"

import { useRef } from "react"
import Image from "next/image"
import { X } from "lucide-react"

interface PromptInputProps {
  promptText: string
  uploadedImage: string | null
  onPromptChange: (text: string) => void
  onRemoveImage: () => void
}

export function PromptInput({ promptText, uploadedImage, onPromptChange, onRemoveImage }: PromptInputProps) {
  const textareaRef = useRef<HTMLTextAreaElement>(null)

  return (
    <div className="bg-white rounded-xl shadow-sm mb-4 border border-[#E5E5EA]">
      <div className="p-4">
        {uploadedImage && (
          <div className="mb-3 relative inline-block">
            <div className="relative rounded-lg overflow-hidden border border-gray-100">
              <Image
                src={uploadedImage || "/placeholder.svg"}
                alt="Uploaded image"
                width={150}
                height={150}
                className="max-h-[150px] w-auto object-contain border"
              />
              <button onClick={onRemoveImage} className="absolute top-1 right-1 bg-white rounded-full p-1 shadow-md">
                <X className="w-3 h-3 text-[#696974]" />
              </button>
            </div>
          </div>
        )}
        <textarea
          ref={textareaRef}
          className="w-full resize-none outline-none text-[#696974]"
          placeholder="用簡短描述你想描繪的圖畫內容..."
          rows={4}
          maxLength={300}
          onChange={(e) => onPromptChange(e.target.value)}
          value={promptText}
        ></textarea>
      </div>
      <div className="flex justify-end p-2 text-sm text-[#92929d]">{promptText.length} / 300</div>
    </div>
  )
}

