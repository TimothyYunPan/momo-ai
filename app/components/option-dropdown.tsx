"use client"

import type React from "react"

import { useRef, useState, useEffect } from "react"

interface OptionDropdownProps {
  options: Array<{ id: string; label: string; icon?: React.ReactNode }>
  selectedOption: { id: string; label: string; icon?: React.ReactNode }
  onSelect: (option: any) => void
  tooltipText: string
  type: "color" | "size"
}

export function OptionDropdown({ options, selectedOption, onSelect, tooltipText, type }: OptionDropdownProps) {
  const [showOptions, setShowOptions] = useState(false)
  const [isHovered, setIsHovered] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setShowOptions(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [])

  // 根據類型選擇圖標
  const getIcon = () => {
    if (type === "color") {
      return (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M12 2L2 7L12 12L22 7L12 2Z"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M2 17L12 22L22 17"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M2 12L12 17L22 12"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      )
    } else {
      return (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="3" y="3" width="18" height="18" rx="2" stroke="currentColor" strokeWidth="2" />
          <line x1="3" y1="9" x2="21" y2="9" stroke="currentColor" strokeWidth="2" />
          <line x1="3" y1="15" x2="21" y2="15" stroke="currentColor" strokeWidth="2" />
          <line x1="9" y1="3" x2="9" y2="21" stroke="currentColor" strokeWidth="2" />
          <line x1="15" y1="3" x2="15" y2="21" stroke="currentColor" strokeWidth="2" />
        </svg>
      )
    }
  }

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        className={`flex items-center gap-1.5 px-3 py-1.5 ${
          showOptions ? "bg-gray-100" : isHovered ? "bg-gray-100" : "bg-white"
        } hover:bg-gray-100 text-[#696974] rounded-full text-sm transition-colors relative`}
        onClick={() => setShowOptions(!showOptions)}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {getIcon()}
        {selectedOption.label}

        {/* 懸停時顯示的提示 */}
        {isHovered && !showOptions && (
          <div className="absolute left-0 bottom-full mb-2 bg-gray-800 text-white text-xs px-2 py-1 rounded whitespace-nowrap">
            {tooltipText}
          </div>
        )}
      </button>

      {showOptions && (
        <div className="absolute top-full left-0 mt-1 bg-white rounded-lg shadow-lg z-10 w-[160px] overflow-hidden">
          <div className="px-3 py-2 text-sm font-medium text-[#323343] border-b border-gray-100 text-center">
            {type === "color" ? "圖畫樣式" : "尺寸大小"}
          </div>
          <div className="max-h-[200px] overflow-y-auto">
            {options.map((option) => (
              <button
                key={option.id}
                className={`flex items-center gap-2 w-full px-3 py-2 text-sm ${
                  selectedOption.id === option.id ? "bg-gray-100 text-[#5a4ff3]" : "text-[#696974] hover:bg-gray-50"
                }`}
                onClick={() => {
                  onSelect(option)
                  setShowOptions(false)
                }}
              >
                {option.icon}
                {option.label}
                {selectedOption.id === option.id && (
                  <svg className="w-4 h-4 ml-auto" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M5 12L10 17L19 8"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                )}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

