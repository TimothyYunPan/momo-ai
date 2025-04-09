"use client"

import { Dispatch, SetStateAction, useState } from "react"
import { useRouter } from "next/navigation"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Header } from "@/app/components/header"
import MomoSVG from "./MomoSVG"

// 模擬生成的繪本頁面
const mockStoryPages = [
  {
    id: "page-1",
    imageUrl: "/placeholder.svg?height=400&width=600",
    text: "小米是一隻好奇又活潑的小浣熊，最喜歡在森林花園裡跟朋友們玩耍。",
  },
  {
    id: "page-2",
    imageUrl: "/placeholder.svg?height=400&width=600",
    text: "某天，她和好朋友阿兔玩捉迷藏，因為藏得太認真的關係小米錯過了午餐。",
  },
  {
    id: "page-3",
    imageUrl: "/placeholder.svg?height=400&width=600",
    text: "小米覺得肚子餓了，很煩躁走了。",
  },
  {
    id: "page-4",
    imageUrl: "/placeholder.svg?height=400&width=600",
    text: "她跑去找貓頭鷹爺爺傾訴，貓頭鷹給她一片「情緒鏡」。",
  },
  {
    id: "page-5",
    imageUrl: "/placeholder.svg?height=400&width=600",
    text: "教她觀察自己的感受，像是「火山要爆發一樣的生氣」、「像下雨一樣的委屈」。",
  },
  {
    id: "page-6",
    imageUrl: "/placeholder.svg?height=400&width=600",
    text: "小米懂得懂用語言表達：「我覺得真的好餓喔，因為我錯過午餐被忽略了」。",
  },
  {
    id: "page-7",
    imageUrl: "/placeholder.svg?height=400&width=600",
    text: "隔天，她跑勇敢再去找阿兔，兩人一起說出自己的感受，重新和好。",
  },
  {
    id: "page-8",
    imageUrl: "/placeholder.svg?height=400&width=600",
    text: "最後，小米在花園裡下一顆「情緒樹」，告訴新來的朋友：「我們可以一起練習，怎麼好好說出心裡的話。」",
  },
]
interface StoryPreviewProps {
  setStoryStep: Dispatch<SetStateAction<number>>
}


export default function StoryPreview({ setStoryStep }: StoryPreviewProps) {
  const router = useRouter()
  const [currentPage, setCurrentPage] = useState(0)
  const [pageCount, setPageCount] = useState(8) // 默認8頁，實際應用中應從上一頁獲取

  const handleNextPage = () => {
    if (currentPage < pageCount - 1) {
      setCurrentPage(currentPage + 1)
    }
  }

  const handlePrevPage = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1)
    }
  }

  const handlePrint = () => {
    // 在實際應用中，這裡會處理列印功能
    alert("繪本列印功能將在此處實現")
  }

  return (

    <main className="max-w-[1200px] mx-auto">
      <div className="mb-12">
        <h2 className="text-3xl font-bold mb-6 text-[#323343]">您的繪本已完成！</h2>

        {/* 進度指示器 - 修改顏色 */}
        <div className="flex items-center justify-center mb-12 max-w-[456px] mx-auto">
          <div className="flex flex-col items-center">
            {/* <div className="w-10 h-10 rounded-full bg-[#e8eafd] text-[#5a4ff3] flex items-center justify-center">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M5 12L10 17L19 8"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div> */}
            <div className="text-[#5a4ff3] mb-1">
              <MomoSVG src='/image/setting-outlined.svg' width="32px" height="32px"></MomoSVG>
            </div>
            <span className="text-sm text-[#5a4ff3] mt-2">設定故事</span>
          </div>
          <div className="flex-1 h-[1px] bg-[#5a4ff3] mx-4 mb-6"></div>
          <div className="flex flex-col items-center">
            {/* <div className="w-10 h-10 rounded-full bg-[#e8eafd] text-[#5a4ff3] flex items-center justify-center">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M5 12L10 17L19 8"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div> */}
            <div className="text-[#5a4ff3] mb-1">
              <MomoSVG src='/image/edit.svg' width="32px" height="32px"></MomoSVG>
            </div>
            <span className="text-sm text-[#5a4ff3] mt-3">確認大綱</span>
          </div>
          <div className="flex-1 h-[1px] bg-[#5a4ff3] mx-4 mb-6"></div>
          <div className="flex flex-col items-center">
            {/* <div className="w-10 h-10 rounded-full bg-[#5a4ff3] text-white flex items-center justify-center">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16Z"
                  stroke="currentColor"
                  strokeWidth="2"
                />
              </svg>
            </div> */}
            <div className="text-[#5a4ff3] mb-1">
              <MomoSVG src='/image/done.svg' width="32px" height="32px"></MomoSVG>
            </div>
            <span className="text-sm text-[#5a4ff3] mt-3">預覽繪本</span>
          </div>
        </div>

        {/* 繪本預覽 */}
        <div className="bg-white rounded-xl shadow-sm p-8 flex flex-col items-center border border-grey-30">
          <div className="relative w-full max-w-[600px] aspect-[4/3] mb-8">
            <Image
              src={mockStoryPages[currentPage].imageUrl || "/placeholder.svg"}
              alt={`Page ${currentPage + 1}`}
              fill
              className="object-contain"
            />

            {/* 翻頁按鈕 */}
            {currentPage > 0 && (
              <button
                onClick={handlePrevPage}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 w-10 h-10 bg-white rounded-full shadow-md flex items-center justify-center"
              >
                <ChevronLeft className="w-6 h-6 text-gray-600" />
              </button>
            )}

            {currentPage < pageCount - 1 && (
              <button
                onClick={handleNextPage}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 w-10 h-10 bg-white rounded-full shadow-md flex items-center justify-center"
              >
                <ChevronRight className="w-6 h-6 text-gray-600" />
              </button>
            )}
          </div>

          {/* 頁面文字 */}
          <div className="text-center mb-8 max-w-[600px]">
            <p className="text-lg text-[#323343]">{mockStoryPages[currentPage].text}</p>
          </div>

          {/* 頁碼指示器 */}
          <div className="flex justify-center gap-2 mb-8">
            {mockStoryPages.slice(0, pageCount).map((_, index) => (
              <button
                key={index}
                className={`w-3 h-3 rounded-full ${index === currentPage ? "bg-[#5a4ff3]" : "bg-gray-200 hover:bg-gray-300"
                  }`}
                onClick={() => setCurrentPage(index)}
              ></button>
            ))}
          </div>
        </div>

        {/* 導航按鈕 - 統一放在外面 */}
        <div className="flex justify-between mt-6">
          <button
            onClick={() => setStoryStep(2)}
            className="px-4 py-2 text-[#696974] hover:bg-gray-50 rounded-lg border border-gray-200"
          >
            上一頁
          </button>
          <button onClick={handlePrint} className="px-6 py-2 bg-[#5a4ff3] text-white rounded-lg hover:bg-[#4840d1]">
            列印繪本
          </button>
        </div>
      </div>
    </main>

  )
}

