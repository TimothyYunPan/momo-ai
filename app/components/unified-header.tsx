"use client"

import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"

export function UnifiedHeader() {
  const pathname = usePathname()

  // 檢查當前路徑來決定哪個導航項目是活躍的
  const isCreationActive = pathname.includes("/momo-creation")
  const isStorybookActive = pathname.includes("/storybook") || pathname.includes("/memory")

  return (
    <header className="max-w-[1200px] mx-auto px-[120px] py-6 mb-8 flex justify-between items-center">
      <div className="flex items-center">
        <div className="text-[#5a4ff3] mr-2">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M12 2L3 7L12 12L21 7L12 2Z"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M3 17L12 22L21 17"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M3 12L12 17L21 12"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
        <h1 className="text-xl font-bold text-[#323343]">
          {isCreationActive ? "墨墨 AI 創作" : isStorybookActive ? "墨墨陪伴" : "墨墨 AI"}
        </h1>
      </div>

      <div className="flex items-center gap-4">
        <Link
          href="/momo-creation"
          className={`flex items-center gap-1 px-3 py-1.5 rounded-full ${
            isCreationActive
              ? "bg-[#f1f1f5] text-[#5a4ff3] font-medium"
              : "bg-white text-[#696974] hover:text-[#5a4ff3]"
          }`}
        >
          <svg className="w-4 h-4 mr-1" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16Z"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M3 16V8C3 5.23858 5.23858 3 8 3H16C18.7614 3 21 5.23858 21 8V16C21 18.7614 18.7614 21 16 21H8C5.23858 21 3 18.7614 3 16Z"
              stroke="currentColor"
              strokeWidth="2"
            />
          </svg>
          墨墨創作
        </Link>
        <Link
          href="/storybook"
          className={`flex items-center gap-1 px-3 py-1.5 rounded-full ${
            isStorybookActive
              ? "bg-[#f1f1f5] text-[#5a4ff3] font-medium"
              : "bg-white text-[#696974] hover:text-[#5a4ff3]"
          }`}
        >
          <svg className="w-4 h-4 mr-1" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M4 19.5V4.5C4 3.67157 4.67157 3 5.5 3H18.5C19.3284 3 20 3.67157 20 4.5V19.5C20 20.3284 19.3284 21 18.5 21H5.5C4.67157 21 4 20.3284 4 19.5Z"
              stroke="currentColor"
              strokeWidth="2"
            />
            <path d="M8 7H16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            <path d="M8 12H16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            <path d="M8 17H12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          </svg>
          墨墨繪本
        </Link>
        <div className="w-8 h-8 rounded-full bg-[#f1f1f5] flex items-center justify-center overflow-hidden">
          <Image
            src="/placeholder.svg?height=32&width=32"
            alt="User avatar"
            width={32}
            height={32}
            className="object-cover"
          />
        </div>
      </div>
    </header>
  )
}

