"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import { X, ChevronLeft, ChevronRight } from "lucide-react"
import { BackgroundShapes } from "../../components/background-shapes"

// 模擬產生的紀念冊選項
const generatedOptions = [
  {
    id: "option-1",
    imageUrl: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Epson.png-grdrTx9sOXGqIv5oGRMBMz946pjGqm.jpeg",
  },
  {
    id: "option-2",
    imageUrl: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Epson.png-grdrTx9sOXGqIv5oGRMBMz946pjGqm.jpeg",
  },
  {
    id: "option-3",
    imageUrl: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Epson.png-grdrTx9sOXGqIv5oGRMBMz946pjGqm.jpeg",
  },
]

export default function MemoryPreviewPage() {
  const router = useRouter()
  const [selectedOption, setSelectedOption] = useState("option-1")
  const [showDetailView, setShowDetailView] = useState(false)
  const [currentDetailIndex, setCurrentDetailIndex] = useState(0)
  const [isCompleted, setIsCompleted] = useState(false)

  const handleOptionSelect = (optionId: string) => {
    setSelectedOption(optionId)
  }

  const handleViewDetail = (index: number) => {
    setCurrentDetailIndex(index)
    setShowDetailView(true)
  }

  const handleCloseDetail = () => {
    setShowDetailView(false)
  }

  const handleNextDetail = () => {
    setCurrentDetailIndex((prev) => (prev + 1) % generatedOptions.length)
  }

  const handlePrevDetail = () => {
    setCurrentDetailIndex((prev) => (prev - 1 + generatedOptions.length) % generatedOptions.length)
  }

  const handleConfirmOrder = () => {
    // 在實際應用中，這裡會發送確認訂單的請求
    setIsCompleted(true)
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
                  <path
                    d="M5 12L10 17L19 8"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <span className="text-sm text-[#5a4ff3] mt-2">挑選圖像</span>
            </div>
            <div className="flex-1 h-[2px] bg-[#5a4ff3] mx-4"></div>
            <div className="flex flex-col items-center">
              <div className="w-10 h-10 rounded-full bg-[#5a4ff3] text-white flex items-center justify-center">
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
              <span className="text-sm text-[#5a4ff3] mt-2">產生</span>
            </div>
            <div className="flex-1 h-[2px] bg-[#e4e4ea] mx-4 relative">
              <div className="absolute inset-0 bg-[#5a4ff3] w-1/2"></div>
            </div>
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
          {isCompleted ? (
            // 完成頁面
            <div className="text-center py-8">
              <h2 className="text-2xl font-bold mb-8 text-[#323343]">紀念冊已完成！請前往墨墨相冊</h2>
              <div className="mb-8">
                <Image
                  src="/placeholder.svg?height=300&width=200"
                  alt="Completed album"
                  width={200}
                  height={300}
                  className="mx-auto"
                />
              </div>
              <Link
                href="/momo-record"
                className="px-6 py-2 bg-[#5a4ff3] text-white rounded-lg hover:bg-[#4840d1] inline-block"
              >
                前往相冊
              </Link>
            </div>
          ) : (
            // 預覽選擇頁面
            <>
              <h2 className="text-2xl font-bold mb-8 text-[#323343]">已為你產生以下三種紀念冊，請挑選最適合的版本</h2>

              <div className="grid grid-cols-3 gap-6 mb-8">
                {generatedOptions.map((option, index) => (
                  <div
                    key={option.id}
                    className={`relative rounded-lg overflow-hidden cursor-pointer ${selectedOption === option.id ? "ring-4 ring-[#5a4ff3] ring-opacity-30" : ""
                      }`}
                    onClick={() => handleOptionSelect(option.id)}
                  >
                    {selectedOption === option.id && (
                      <div className="absolute top-2 left-2 w-6 h-6 bg-[#5a4ff3] rounded-full flex items-center justify-center text-white z-10">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path
                            d="M5 12L10 17L19 8"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </div>
                    )}
                    <div onClick={() => handleViewDetail(index)}>
                      <Image
                        src={option.imageUrl || "/placeholder.svg"}
                        alt={`Option ${index + 1}`}
                        width={200}
                        height={200}
                        className="w-full aspect-square object-cover"
                      />
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex justify-between">
                <Link
                  href="/memory/record"
                  className="px-4 py-2 text-[#696974] hover:bg-gray-50 rounded-lg border border-gray-200"
                >
                  上一頁
                </Link>
                <button
                  onClick={handleConfirmOrder}
                  className="px-6 py-2 bg-[#5a4ff3] text-white rounded-lg hover:bg-[#4840d1]"
                >
                  確認相片排序
                </button>
              </div>
            </>
          )}
        </main>

        {/* Footer */}
        <footer className="max-w-[1200px] mx-auto px-6 py-4 flex justify-between text-sm text-[#696974]">
          <div>© 2025 Momo Company &nbsp;&nbsp; Terms &nbsp;&nbsp; Policy</div>
          <div>Support &nbsp;&nbsp; Contact Us</div>
        </footer>
      </div>

      {/* 詳情查看模態框 */}
      {showDetailView && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg max-w-[90%] max-h-[90vh] overflow-hidden relative">
            {/* 關閉按鈕 */}
            <button className="absolute top-4 right-4 text-gray-500 hover:text-gray-700" onClick={handleCloseDetail}>
              <X className="w-6 h-6" />
            </button>

            <div className="p-8 flex items-center justify-center">
              {/* 上一張按鈕 */}
              <button
                className="absolute left-4 top-1/2 transform -translate-y-1/2 w-10 h-10 bg-white rounded-full shadow-md flex items-center justify-center"
                onClick={handlePrevDetail}
              >
                <ChevronLeft className="w-6 h-6 text-gray-600" />
              </button>

              {/* 圖片 */}
              <Image
                src={generatedOptions[currentDetailIndex].imageUrl || "/placeholder.svg"}
                alt={`Detail view ${currentDetailIndex + 1}`}
                width={600}
                height={600}
                className="max-w-full max-h-[70vh] object-contain"
              />

              {/* 下一張按鈕 */}
              <button
                className="absolute right-4 top-1/2 transform -translate-y-1/2 w-10 h-10 bg-white rounded-full shadow-md flex items-center justify-center"
                onClick={handleNextDetail}
              >
                <ChevronRight className="w-6 h-6 text-gray-600" />
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

