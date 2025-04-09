"use client"

import type React from "react"
import { Dispatch, SetStateAction } from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import MomoSVG from "./MomoSVG"

// 模擬從上一頁獲取的數據
const mockStoryData = {
  title: "小米的紅臉日",
  content: `小米是一隻好奇又活潑的小浣熊，最喜歡在森林花園裡跟朋友們玩耍。某天，她和好朋友阿兔玩捉迷藏，因為藏得太認真的關係小米錯過了午餐，小米覺得肚子餓了，很煩躁走了。

她跑去找貓頭鷹爺爺傾訴，貓頭鷹給她一片「情緒鏡」，教她觀察自己的感受，像是「火山要爆發一樣的生氣」、「像下雨一樣的委屈」，這一起經歷讓她學會了情緒。

小米懂得懂用語言表達：「我覺得真的好餓喔，因為我錯過午餐被忽略了」。隔天，她跑勇敢再去找阿兔，兩人一起說出自己的感受，重新和好。

最後，小米在花園裡下一顆「情緒樹」，告訴新來的朋友：「我們可以一起練習，怎麼好好說出心裡的話。」`,
}

interface StoryOutLineCheckProps {
  setStoryStep: Dispatch<SetStateAction<number>>
}

export default function StoryOutLineCheck({ setStoryStep }: StoryOutLineCheckProps) {
  const router = useRouter()

  // 狀態
  const [storyTitle, setStoryTitle] = useState(mockStoryData.title)
  const [storyContent, setStoryContent] = useState(mockStoryData.content)
  const [isEditing, setIsEditing] = useState({ title: false, content: false })
  const [tempTitle, setTempTitle] = useState(storyTitle)
  const [tempContent, setTempContent] = useState(storyContent)

  // 開始編輯
  const startEditing = (field: "title" | "content") => {
    if (field === "title") {
      setTempTitle(storyTitle)
    } else {
      setTempContent(storyContent)
    }
    setIsEditing({ ...isEditing, [field]: true })
  }

  // 確認編輯
  const confirmEdit = (field: "title" | "content") => {
    if (field === "title") {
      setStoryTitle(tempTitle)
    } else {
      setStoryContent(tempContent)
    }
    setIsEditing({ ...isEditing, [field]: false })
  }

  // 取消編輯
  const cancelEdit = (field: "title" | "content") => {
    setIsEditing({ ...isEditing, [field]: false })
  }

  // 修改 handleSubmit 函數，確保所有資訊一起傳送到 API
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    // 在實際應用中，這裡會將數據發送到後端
    const finalStoryData = {
      title: storyTitle,
      content: storyContent,
      // 這裡可以添加從上一頁傳過來的其他數據
    }

    console.log("提交的最終故事數據:", finalStoryData)

    // 然後導航到下一個頁面
    setStoryStep(3)
  }

  return (
    <main className="max-w-[1200px] mx-auto">
      <div className="mb-12">
        <h2 className="text-3xl font-bold mb-12 text-[#323343]">已根據您的設定生成故事大綱</h2>

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
            {/* <div className="w-10 h-10 rounded-full bg-[#5a4ff3] text-white flex items-center justify-center">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M11 4H4C3.46957 4 2.96086 4.21071 2.58579 4.58579C2.21071 4.96086 2 5.46957 2 6V20C2 20.5304 2.21071 21.0391 2.58579 21.4142C2.96086 21.7893 3.46957 22 4 22H18C18.5304 22 19.0391 21.7893 19.4142 21.4142C19.7893 21.0391 20 20.5304 20 20V13"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M18.5 2.50001C18.8978 2.10219 19.4374 1.87869 20 1.87869C20.5626 1.87869 21.1022 2.10219 21.5 2.50001C21.8978 2.89784 22.1213 3.4374 22.1213 4.00001C22.1213 4.56262 21.8978 5.10219 21.5 5.50001L12 15L8 16L9 12L18.5 2.50001Z"
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
          <div className="flex-1 h-[1px] bg-[#e4e4ea] mx-4 mb-6"></div>
          <div className="flex flex-col items-center">
            {/* <div className="w-10 h-10 rounded-full bg-[#f1f1f5] text-[#a8a8c0] flex items-center justify-center">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16Z"
                  stroke="currentColor"
                  strokeWidth="2"
                />
              </svg>
            </div> */}
            <div className="text-[#a8a8c0] mb-1">
              <MomoSVG src='/image/done.svg' width="32px" height="32px"></MomoSVG>
            </div>
            <span className="text-sm text-[#a8a8c0] mt-2">預覽繪本</span>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-grey-30 p-8">
          <p className="text-[#000] mb-10 text-2xl font-bold ">請確認或直接修改內容，確認完成後將開始製作您的繪本</p>

          <form onSubmit={handleSubmit}>
            {/* 故事標題 */}
            <div className="mb-8">
              <label className="block text-xl font-bold text-[#323343] mb-2">故事標題</label>
              {isEditing.title ? (
                <div className="flex flex-col gap-2">
                  <input
                    type="text"
                    className="w-full p-3 border border-gray-200 rounded-lg"
                    value={tempTitle}
                    onChange={(e) => setTempTitle(e.target.value)}
                  />
                  <div className="flex justify-end gap-2">
                    <button
                      type="button"
                      className="px-3 py-1 text-[#696974] hover:bg-gray-50 rounded border border-gray-200"
                      onClick={() => cancelEdit("title")}
                    >
                      取消
                    </button>
                    <button
                      type="button"
                      className="px-3 py-1 bg-[#5a4ff3] text-white rounded hover:bg-[#4840d1]"
                      onClick={() => confirmEdit("title")}
                    >
                      確認
                    </button>
                  </div>
                </div>
              ) : (
                <div className="p-3 bg-[#f8f9fa] rounded-lg flex justify-between items-center">
                  <span>{storyTitle}</span>
                  <button
                    type="button"
                    className="text-[#5a4ff3] hover:text-[#4840d1] ml-4 flex-shrink-0"
                    onClick={() => startEditing("title")}
                  >
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M11 4H4C3.46957 4 2.96086 4.21071 2.58579 4.58579C2.21071 4.96086 2 5.46957 2 6V20C2 20.5304 2.21071 21.0391 2.58579 21.4142C2.96086 21.7893 3.46957 22 4 22H18C18.5304 22 19.0391 21.7893 19.4142 21.4142C19.7893 21.0391 20 20.5304 20 20V13"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M18.5 2.50001C18.8978 2.10219 19.4374 1.87869 20 1.87869C20.5626 1.87869 21.1022 2.10219 21.5 2.50001C21.8978 2.89784 22.1213 3.4374 22.1213 4.00001C22.1213 4.56262 21.8978 5.10219 21.5 5.50001L12 15L8 16L9 12L18.5 2.50001Z"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </button>
                </div>
              )}
            </div>

            {/* 故事簡介 - 添加確認按鈕 */}
            <div className="mb-8">
              <label className="block text-xl font-bold text-[#323343] mb-2">故事簡介</label>
              {isEditing.content ? (
                <div className="flex flex-col gap-2">
                  <textarea
                    className="w-full p-3 border border-gray-200 rounded-lg resize-none"
                    rows={8}
                    value={tempContent}
                    onChange={(e) => setTempContent(e.target.value)}
                  />
                  <div className="flex justify-end gap-2">
                    <button
                      type="button"
                      className="px-3 py-1 text-[#696974] hover:bg-gray-50 rounded border border-gray-200"
                      onClick={() => cancelEdit("content")}
                    >
                      取消
                    </button>
                    <button
                      type="button"
                      className="px-3 py-1 bg-[#5a4ff3] text-white rounded hover:bg-[#4840d1]"
                      onClick={() => confirmEdit("content")}
                    >
                      確認
                    </button>
                  </div>
                </div>
              ) : (
                <div className="p-3 bg-[#f8f9fa] rounded-lg flex">
                  <div className="flex-grow whitespace-pre-line">{storyContent}</div>
                  <button
                    type="button"
                    className="text-[#5a4ff3] hover:text-[#4840d1] ml-4 flex-shrink-0 self-start"
                    onClick={() => startEditing("content")}
                  >
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M11 4H4C3.46957 4 2.96086 4.21071 2.58579 4.58579C2.21071 4.96086 2 5.46957 2 6V20C2 20.5304 2.21071 21.0391 2.58579 21.4142C2.96086 21.7893 3.46957 22 4 22H18C18.5304 22 19.0391 21.7893 19.4142 21.4142C19.7893 21.0391 20 20.5304 20 20V13"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M18.5 2.50001C18.8978 2.10219 19.4374 1.87869 20 1.87869C20.5626 1.87869 21.1022 2.10219 21.5 2.50001C21.8978 2.89784 22.1213 3.4374 22.1213 4.00001C22.1213 4.56262 21.8978 5.10219 21.5 5.50001L12 15L8 16L9 12L18.5 2.50001Z"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </button>
                </div>
              )}
            </div>
          </form>

        </div>
        {/* 提交按鈕 - 移到表單外面 */}
        <div className="flex justify-between mt-6">
          <button
            onClick={() => setStoryStep(1)}
            className="px-4 py-2 text-[#696974] hover:bg-gray-50 rounded-lg border border-gray-200"
          >
            上一頁
          </button>
          <button
            onClick={handleSubmit}
            className="px-6 py-2 bg-[#5a4ff3] text-white rounded-lg hover:bg-[#4840d1]"
          >
            製作繪本
          </button>
        </div>
      </div>
    </main>
  )
}

