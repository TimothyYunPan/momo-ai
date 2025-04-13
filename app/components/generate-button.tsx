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
      <button className="flex items-center justify-center gap-2  w-[100px] h-[42px] rounded-lg bg-[#a8a8c0] text-white transition-colors duration-200 cursor-default">
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
      className={`flex items-center justify-center gap-2 w-[100px] h-[42px] rounded-lg text-lg ${isEnabled
        ? "bg-[#5a4ff3] text-white hover:bg-[#4840d1] active:bg-[#4037c2]"
        : "bg-[#94a3b1] text-white cursor-not-allowed"
        } transition-colors duration-200`}
      onClick={onClick}
      disabled={!isEnabled}
    >
      <MomoSVG src='/image/sparkle.svg' width="24px" height="24px"></MomoSVG>

      產生
    </button>
  )
}

