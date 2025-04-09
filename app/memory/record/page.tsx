"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import { BackgroundShapes } from "../../components/background-shapes"

export default function MemoryRecordPage() {
  const router = useRouter()
  const [collageType, setCollageType] = useState("")
  const [collagePurpose, setCollagePurpose] = useState("")
  const [collageStyle, setCollageStyle] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // 在實際應用中，這裡會發送數據到後端
    // 然後導航到預覽頁面
    router.push("/memory/preview")
  }

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* 背景圖形 */}
      <BackgroundShapes />

      <div className="relative z-10">
        {/* Header */}
        <header className="flex justify-between items-center px-6 py-6">
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
            <h1 className="text-xl font-bold text-[#5a4ff3]">墨墨 AI 紀念拼貼</h1>
          </div>

          <div className="flex items-center gap-4">
            <Link
              href="/momo-creation"
              className="flex items-center gap-1 text-[#696974] px-3 py-1.5 rounded-full bg-white"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" />
                <path d="M12 8V16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                <path d="M8 12H16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              </svg>
              墨墨創作
            </Link>
            <Link
              href="/momo-record"
              className="flex items-center gap-1 text-[#696974] px-3 py-1.5 rounded-full bg-white"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="4" y="4" width="16" height="16" rx="2" stroke="currentColor" strokeWidth="2" />
                <path d="M8 10H16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                <path d="M8 14H16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              </svg>
              墨墨紀錄
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

        {/* Progress Steps */}
        <div className="max-w-[800px] mx-auto mt-8 mb-12">
          <div className="flex items-center justify-between">
            <div className="flex flex-col items-center">
              <div className="w-10 h-10 rounded-full bg-[#5a4ff3] text-white flex items-center justify-center">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="4" y="4" width="16" height="16" rx="2" stroke="currentColor" strokeWidth="2" />
                  <path d="M8 10H16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                  <path d="M8 14H16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                </svg>
              </div>
              <span className="text-sm text-[#5a4ff3] mt-2">挑選圖像</span>
            </div>
            <div className="flex-1 h-[2px] bg-[#e4e4ea] mx-4 relative">
              <div className="absolute inset-0 bg-[#5a4ff3] w-1/3"></div>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-10 h-10 rounded-full bg-[#e4e4ea] text-[#92929d] flex items-center justify-center">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16Z"
                    stroke="currentColor"
                    strokeWidth="2"
                  />
                  <path
                    d="M12 2C13.3132 2 14.6136 2.25866 15.8268 2.7612C17.0401 3.26375 18.1425 4.00035 19.0711 4.92893C19.9997 5.85752 20.7362 6.95991 21.2388 8.17317C21.7413 9.38642 22 10.6868 22 12"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
              </div>
              <span className="text-sm text-[#92929d] mt-2">製作</span>
            </div>
            <div className="flex-1 h-[2px] bg-[#e4e4ea] mx-4"></div>
            <div className="flex flex-col items-center">
              <div className="w-10 h-10 rounded-full bg-[#e4e4ea] text-[#92929d] flex items-center justify-center">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M5 12L10 17L19 8"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <span className="text-sm text-[#92929d] mt-2">預覽</span>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <main className="max-w-[800px] mx-auto bg-white rounded-xl shadow-sm p-8 mb-12">
          <h2 className="text-2xl font-bold mb-8 text-[#323343]">你想製作什麼樣的紀念拼貼？</h2>

          <form onSubmit={handleSubmit}>
            <div className="mb-6">
              <label className="block text-[#323343] font-medium mb-2">紀念拼貼類型</label>
              <input
                type="text"
                className="w-full p-3 border border-gray-200 rounded-lg"
                placeholder="例如：賀卡、明信片、回憶拼貼"
                value={collageType}
                onChange={(e) => setCollageType(e.target.value)}
              />
            </div>

            <div className="mb-6">
              <label className="block text-[#323343] font-medium mb-2">紀念拼貼用途</label>
              <input
                type="text"
                className="w-full p-3 border border-gray-200 rounded-lg"
                placeholder="例如：感謝他人、紀錄生活、祝賀生日、慶祝聖誕節 等"
                value={collagePurpose}
                onChange={(e) => setCollagePurpose(e.target.value)}
              />
            </div>

            <div className="mb-8">
              <label className="block text-[#323343] font-medium mb-2">紀念拼貼風格</label>
              <textarea
                className="w-full p-3 border border-gray-200 rounded-lg resize-none"
                rows={5}
                placeholder="用簡短語句字描述紀念冊風格..."
                value={collageStyle}
                onChange={(e) => setCollageStyle(e.target.value)}
              ></textarea>
            </div>

            <div className="flex justify-between">
              <Link
                href="/momo-record"
                className="px-4 py-2 text-[#696974] hover:bg-gray-50 rounded-lg border border-gray-200"
              >
                上一頁
              </Link>
              <button
                type="submit"
                className="px-6 py-2 bg-[#5a4ff3] text-white rounded-lg hover:bg-[#4840d1] flex items-center gap-2"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M12 2L14.5 9H22L16 13.5L18 21L12 17L6 21L8 13.5L2 9H9.5L12 2Z"
                    fill="currentColor"
                    stroke="currentColor"
                    strokeWidth="1"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                生成
              </button>
            </div>
          </form>
        </main>

        {/* Footer */}
        <footer className="max-w-[1200px] mx-auto px-6 py-4 flex justify-between text-sm text-[#696974]">
          <div>© 2025 Momo Company &nbsp;&nbsp; Terms &nbsp;&nbsp; Policy</div>
          <div>Support &nbsp;&nbsp; Contact Us</div>
        </footer>
      </div>
    </div>
  )
}

