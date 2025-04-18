"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import { FolderIcon, ImageIcon, PlusIcon, SearchIcon, X } from "lucide-react"
import { StyledButton, NavButton, SidebarButton } from "../components/ui/button-styles"
import { BackgroundShapes } from "../components/background-shapes"

// 模擬圖片數據
const mockImages = Array(12)
  .fill(null)
  .map((_, i) => ({
    id: `img-${i}`,
    imageUrl: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Epson.png-grdrTx9sOXGqIv5oGRMBMz946pjGqm.jpeg",
    title: `圖片 ${i + 1}`,
    date: "2025/1/2",
    tags: ["著色", "動物"],
  }))

export default function MomoRecordPage() {
  const router = useRouter()
  // 狀態
  const [selectedImages, setSelectedImages] = useState<string[]>([])
  const [showImageDetail, setShowImageDetail] = useState(false)
  const [currentImage, setCurrentImage] = useState<any>(null)

  // 處理圖片選擇
  const handleImageSelect = (imageId: string) => {
    setSelectedImages((prev) => {
      // 如果已經選擇了，則移除
      if (prev.includes(imageId)) {
        return prev.filter((id) => id !== imageId)
      }

      // 如果已經選擇了4張，則不能再選
      if (prev.length >= 4) {
        return prev
      }

      // 否則添加
      return [...prev, imageId]
    })
  }

  // 處理圖片點擊
  const handleImageClick = (image: any) => {
    setCurrentImage(image)
    setShowImageDetail(true)
  }

  // 關閉圖片詳情
  const closeImageDetail = () => {
    setShowImageDetail(false)
    setCurrentImage(null)
  }

  // 獲取圖片選擇序號
  const getImageSelectionNumber = (imageId: string) => {
    const index = selectedImages.indexOf(imageId)
    return index !== -1 ? index + 1 : null
  }

  // 處理產生紀念冊按鈕點擊
  const handleCreateMemory = () => {
    // 在實際應用中，這裡會將選擇的圖片ID傳遞給下一個頁面
    if (selectedImages.length > 0) {
      router.push("/memory/record")
    }
  }

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* 背景圖形 */}
      <BackgroundShapes />

      <div className="relative z-10">
        {/* Header - full width */}
        <header className="flex justify-between items-center px-6 py-6 mb-8">
          <div className="flex items-center">
            <Link href="/momo-record" className="flex items-center text-[#5a4ff3]">
              <div className="text-[#5a4ff3] mr-2">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="4" y="4" width="16" height="16" rx="2" stroke="#5a4ff3" strokeWidth="2" />
                  <rect x="8" y="2" width="8" height="4" rx="1" stroke="#5a4ff3" strokeWidth="2" />
                  <line x1="8" y1="10" x2="16" y2="10" stroke="#5a4ff3" strokeWidth="2" />
                  <line x1="8" y1="14" x2="16" y2="14" stroke="#5a4ff3" strokeWidth="2" />
                  <line x1="8" y1="18" x2="16" y2="18" stroke="#5a4ff3" strokeWidth="2" />
                </svg>
              </div>
              <span className="font-bold">墨墨相冊</span>
            </Link>
          </div>

          <div className="flex items-center gap-4">
            <Link href="/momo-creation" passHref>
              <NavButton>
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
                墨墨著色
              </NavButton>
            </Link>
            <NavButton isActive={true}>
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
              墨墨紀錄
            </NavButton>
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

        {/* Main content - with 120px padding */}
        <main className="max-w-[1200px] mx-auto px-[120px]">
          {/* Main content with sidebar */}
          <div className="flex gap-6">
            {/* Sidebar */}
            <div className="w-[150px] flex flex-col gap-4">
              <StyledButton variant="upload" className="justify-center">
                <PlusIcon className="w-5 h-5" />
                <span>上傳</span>
              </StyledButton>

              <SidebarButton>
                <ImageIcon className="w-5 h-5" />
                <span>檔案</span>
              </SidebarButton>

              <SidebarButton>
                <FolderIcon className="w-5 h-5" />
                <span>紀念冊</span>
              </SidebarButton>
            </div>

            {/* Main content */}
            <div className="flex-1">
              {/* Search and Create Album row */}
              <div className="flex justify-between items-center mb-4">
                <div className="relative">
                  <SearchIcon className="w-4 h-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-[#92929d]" />
                  <input
                    type="text"
                    placeholder="名稱・類型・日期..."
                    className="bg-white border border-gray-200 rounded-full pl-10 pr-4 py-2 text-sm w-[300px] outline-none"
                  />
                </div>

                <StyledButton
                  variant="primary"
                  disabled={selectedImages.length === 0}
                  className={selectedImages.length === 0 ? "opacity-50 cursor-not-allowed" : ""}
                  onClick={handleCreateMemory}
                >
                  產生紀念冊
                </StyledButton>
              </div>

              {/* 選擇提示 */}
              {selectedImages.length > 0 && (
                <div className="bg-[#5a4ff3] bg-opacity-10 rounded-lg p-3 mb-4 text-[#5a4ff3] text-sm flex justify-between items-center">
                  <div>已選擇 {selectedImages.length} 張圖片（最多可選 4 張）</div>
                  <button className="text-[#5a4ff3] hover:text-[#4840d1]" onClick={() => setSelectedImages([])}>
                    清除選擇
                  </button>
                </div>
              )}

              {/* Grid of images */}
              <div className="bg-white rounded-lg p-4 shadow-sm">
                <div className="grid grid-cols-3 gap-6">
                  {mockImages.map((image, i) => (
                    <div key={i} className="relative rounded-lg overflow-hidden cursor-pointer group">
                      {/* 選擇序號 */}
                      {getImageSelectionNumber(image.id) !== null && (
                        <div className="absolute top-2 left-2 w-6 h-6 bg-[#5a4ff3] rounded-full flex items-center justify-center text-white z-10">
                          {getImageSelectionNumber(image.id)}
                        </div>
                      )}

                      {/* 圖片 */}
                      <div className="relative" onClick={() => handleImageClick(image)}>
                        <Image
                          src={image.imageUrl || "/placeholder.svg"}
                          alt="Colorful patchwork image"
                          width={300}
                          height={300}
                          className="w-full aspect-square object-cover"
                        />

                        {/* 懸停時的操作按鈕 */}
                        <div className="absolute inset-0 bg-black bg-opacity-30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                          <div className="flex gap-2">
                            <button
                              className="bg-white text-[#696974] hover:bg-[#f1f1f5] text-xs px-2 py-1 rounded shadow-sm transition-colors duration-200"
                              onClick={(e) => {
                                e.stopPropagation()
                                handleImageClick(image)
                              }}
                            >
                              查看
                            </button>
                            <button
                              className="bg-white text-[#696974] hover:bg-[#f1f1f5] text-xs px-2 py-1 rounded shadow-sm transition-colors duration-200"
                              onClick={(e) => {
                                e.stopPropagation()
                                handleImageSelect(image.id)
                              }}
                            >
                              {selectedImages.includes(image.id) ? "取消選擇" : "選擇"}
                            </button>
                          </div>
                        </div>
                      </div>

                      {/* 藍點 */}
                      <div className="absolute top-2 right-2 w-5 h-5 bg-white rounded-full flex items-center justify-center shadow-sm">
                        <div className="w-1.5 h-1.5 bg-[#5a4ff3] rounded-full"></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </main>

        {/* Footer - with 120px padding */}
        <footer className="max-w-[1200px] mx-auto px-[120px] mt-20 py-4 flex justify-between text-sm text-[#696974]">
          <div>© 2025 Momo Company &nbsp;&nbsp; Terms &nbsp;&nbsp; Policy</div>
          <div>Support &nbsp;&nbsp; Contact Us</div>
        </footer>
      </div>

      {/* 圖片詳情模態框 */}
      {showImageDetail && currentImage && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg w-[800px] max-h-[90vh] overflow-hidden relative">
            {/* 關閉按鈕 */}
            <button className="absolute top-4 right-4 text-gray-500 hover:text-gray-700" onClick={closeImageDetail}>
              <X className="w-6 h-6" />
            </button>

            <div className="flex">
              {/* 圖片區域 */}
              <div className="w-2/3 bg-gray-100 p-4 flex items-center justify-center">
                <Image
                  src={currentImage.imageUrl || "/placeholder.svg"}
                  alt="Selected image"
                  width={500}
                  height={500}
                  className="max-w-full max-h-[70vh] object-contain"
                />
              </div>

              {/* 詳情區域 */}
              <div className="w-1/3 p-6">
                <h3 className="text-xl font-bold mb-2">圖像名稱</h3>
                <p className="text-gray-500 mb-4">{currentImage.date}</p>

                {/* 標籤 */}
                <div className="flex gap-2 mb-6">
                  {currentImage.tags.map((tag: string, index: number) => (
                    <span key={index} className="bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-sm">
                      {tag}
                    </span>
                  ))}

                  {/* 添加標籤按鈕 */}
                  <button className="w-6 h-6 rounded-full bg-gray-100 flex items-center justify-center">
                    <PlusIcon className="w-4 h-4 text-gray-500" />
                  </button>
                </div>

                {/* 操作按鈕 */}
                <div className="flex flex-col gap-3">
                  <StyledButton variant="primary" className="w-full justify-center">
                    列印
                  </StyledButton>

                  <button
                    className="w-full py-2 border border-gray-200 rounded-lg text-[#696974] hover:bg-gray-50"
                    onClick={() => handleImageSelect(currentImage.id)}
                  >
                    {selectedImages.includes(currentImage.id) ? "取消選擇" : "選擇此圖片"}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

