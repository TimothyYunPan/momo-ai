"use client"

import MomoSVG from "./MomoSVG"

interface GenerateButtonProps {
  isGenerating: boolean
  isEnabled: boolean
  onClick: () => void
}

export function GenerateButton({ isGenerating, isEnabled, onClick }: GenerateButtonProps) {
  if (isGenerating) {
    return (
      <button className="flex items-center justify-center gap-2  px-[20px] py-[12px] h-[56px] w-[128px] rounded-lg bg-[#5a4ff3] text-white transition-colors duration-200">
        <div className="flex space-x-1">
          <div className="w-2 h-2 bg-white rounded-full animate-bounce" style={{ animationDelay: "0ms" }}></div>
          <div className="w-2 h-2 bg-white rounded-full animate-bounce" style={{ animationDelay: "150ms" }}></div>
          <div className="w-2 h-2 bg-white rounded-full animate-bounce" style={{ animationDelay: "300ms" }}></div>
        </div>
      </button>
    )
  }

  return (
    <button
      className={`flex items-center justify-center gap-2 px-[20px] py-[12px] w-[128px] rounded-sm text-xl ${isEnabled
        ? "bg-[#5a4ff3] text-white hover:bg-[#4840d1] active:bg-[#4037c2]"
        : "bg-[#94a3b1] text-white cursor-not-allowed"
        } transition-colors duration-200`}
      onClick={onClick}
      disabled={!isEnabled}
    >
      <MomoSVG src='/image/sparkle.svg' width="32px" height="32px"></MomoSVG>

      生成
    </button>
  )
}

