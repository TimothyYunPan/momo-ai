"use client"

import type React from "react"

import { useState, useEffect, Dispatch, SetStateAction } from "react"
import { useRouter } from "next/navigation"
import { BackgroundShapes } from "../components/background-shapes"
import { Header } from "../components/header"
import StoryPreview from "../components/story-preview"
import StoryOutLineCheck from "../components/story-outline-check"
import MomoSVG from "./MomoSVG"
import { StoryOutlineType } from "../storybook/page"

const illustrationStyles = [
  { id: "SOFT_WATERCOLOR", label: "柔和水彩", description: "色彩柔和溫暖，適合各年齡層" },
  { id: "PLAYFUL_DOODLE", label: "童趣塗鴉", description: "簡約圖畫，富有趣味性，適合低齡故事" },
  { id: "COLLAGE_CUTOUT", label: "拼貼紙藝", description: "視覺手工拼貼，帶有層次感，適合探索、自然主題的故事" },
  { id: "MODERN_DIGITAL_ILLUSTRATION", label: "數位插畫", description: "線條明亮，色彩鮮明，適合情節豐富、角色表現力較強的故事" },
  { id: "MINIMALIST_GEOMETRIC", label: "簡單幾何", description: "簡單造型與線條，色彩鮮明，適合低齡層" },
]

const ageGroups = [
  { id: "FIRST_GRADE", label: "0-3 歲" },
  { id: "SECOND_GRADE", label: "4-7 歲" },
  { id: "THIRD_GRADE", label: "8-12 歲" },
]

interface StoryData {
  concept: string
  ageGroup: string
  style: string
  pageCount: number
  characters: string
  generatedStory?: {
    title: string
    story: string
    id: number
  }
}

interface StorySettingProps {
  setStoryStep: Dispatch<SetStateAction<number>>
  storyData: StoryData
  setStoryData: (data: StoryData) => void
  setStoryOutline: (data: StoryOutlineType) => void
}

export default function StorySetting({ setStoryStep, storyData, setStoryData, setStoryOutline }: StorySettingProps) {
  const [isGenerating, setIsGenerating] = useState(false)
  const [pageCountIndex, setPageCountIndex] = useState(0);
  const isFormValid = storyData.concept.trim() !== "" && storyData.characters.trim() !== ""

  const getProgressPercent = (pageCount: number) => {
    if (pageCount <= 11) return 0;
    if (pageCount <= 13) return 25;
    if (pageCount <= 15) return 50;
    if (pageCount <= 17) return 75;
    return 100;
  };

  const pageCountMap = [11, 13, 15, 17, 19];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!isFormValid) return

    setIsGenerating(true)
    try {
      const response = await fetch('/api/proxy/api/v1/picture_book/generate_overall_story', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          user_input: storyData.concept,
          grade_level: storyData.ageGroup,
          page_length: storyData.pageCount,
          style: storyData.style,
          character_context: storyData.characters
        }),
      })

      if (!response.ok) {
        throw new Error('產生故事失敗')
      }

      const data = await response.json()
      console.log('產生的故事數據:', data)

      // 保存產生的故事數據
      setStoryOutline(data)

      // 導航到下一個頁面
      setStoryStep(2)
    } catch (error) {
      console.error('產生故事時發生錯誤:', error)
      alert('產生故事失敗，請重試')
    } finally {
      setIsGenerating(false)
    }
  }

  console.log(storyData.pageCount)
  return (
    <main className="max-w-[1200px] mx-auto">
      <div className="mb-12">
        <h2 className="text-3xl font-bold mb-12 text-[#323343] mt-10">你今天想產生什麼樣的繪本？</h2>

        <div className="flex items-center justify-center mb-12 max-w-[456px] mx-auto">
          <div className="flex flex-col items-center ">
            {/* <div className="w-10 h-10 rounded-full bg-[#5a4ff3] text-white flex items-center justify-center"> */}
            {/* <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16Z"
                  stroke="currentColor"
                  strokeWidth="2"
                />
              </svg> */}
            <div className="text-[#5a4ff3] mb-1">
              <MomoSVG src='/image/setting-outlined.svg' width="32px" height="32px"></MomoSVG>
            </div>
            {/* </div> */}
            <span className="text-sm text-[#5a4ff3] mt-2">設定故事</span>
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
              <MomoSVG src='/image/edit.svg' width="32px" height="32px"></MomoSVG>
            </div>
            <span className="text-sm text-[#a8a8c0] mt-3">確認大綱</span>
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
            <span className="text-sm text-[#a8a8c0] mt-3">預覽繪本</span>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="bg-white rounded-xl shadow-sm border border-grey-30 p-10">
          {/* 故事概念 */}
          <div className="mb-8">
            <label className="block text-xl font-bold text-[#323343] mb-4 mr-4">1. 故事概念</label>
            <textarea
              className="w-full p-4 border border-gray-200 rounded-lg resize-none ml-auto"
              rows={4}
              placeholder="透過和朋友的事件教導孩子理解、管理情緒的重要性..."
              value={storyData.concept}
              onChange={(e) => setStoryData({ ...storyData, concept: e.target.value })}
              required
            ></textarea>
          </div>

          {/* 適用年齡層 */}
          <div className="mb-8">
            <label className="block text-xl font-bold text-[#323343] mb-4">2. 適用年齡層</label>
            <div className="flex gap-4">
              {ageGroups.map((age) => (
                <button
                  key={age.id}
                  type="button"
                  className={`flex-1 py-3 px-4 rounded-lg border ${storyData.ageGroup === age.id
                    ? "bg-[#5a4ff3] text-white border-[#5a4ff3]"
                    : "bg-white text-[#696974] border-gray-200 hover:bg-gray-50"
                    }`}
                  onClick={() => setStoryData({ ...storyData, ageGroup: age.id })}
                >
                  {age.label}
                </button>
              ))}
            </div>
          </div>

          {/* 主要角色 */}
          <div className="mb-8">
            <label className="block text-xl font-bold text-[#323343] mb-4">3. 主要角色</label>
            <textarea
              className="w-full p-4 border border-gray-200 rounded-lg resize-none"
              rows={3}
              placeholder="主角是叫東東的小浣熊，住在森林裡..."
              value={storyData.characters}
              onChange={(e) => setStoryData({ ...storyData, characters: e.target.value })}
              required
            ></textarea>
          </div>

          {/* 圖畫風格 */}
          <div className="mb-10">
            <label className="block text-xl font-bold text-[#323343] mb-4">4. 圖畫風格</label>
            <div className="grid grid-cols-5 gap-4">
              {illustrationStyles.map((style) => (
                <div key={style.id} className="relative group">
                  <button
                    type="button"
                    className={`w-full p-3 rounded-lg border text-center transition-colors ${storyData.style === style.id
                      ? "bg-[#5a4ff3] text-white border-[#5a4ff3]"
                      : "bg-[#f8f9fa] text-[#696974] border-gray-200 hover:bg-gray-100"
                      }`}
                    onClick={() => setStoryData({ ...storyData, style: style.id })}
                  >
                    {style.label}
                  </button>
                  <div className="absolute left-1/2 bottom-[-50px] transform -translate-x-1/2 bg-[#323343] text-white text-xs p-3 rounded opacity-0 group-hover:opacity-100 transition-opacity z-10 whitespace-nowrap min-w-max">
                    {style.description}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* 繪本頁數 */}
          <div className="mb-8">
            <label className="block text-xl font-bold text-[#323343] mb-4">5. 繪本面數（含封面） </label>
            <div className="px-2">
              <div className="relative">
                <div className="w-full h-2 bg-[#e4e4ea] rounded-lg"></div>
                <div
                  className="absolute top-0 left-0 h-2 bg-[#5a4ff3] rounded-lg"
                  style={{ width: `${getProgressPercent(storyData.pageCount)}%` }}
                ></div>
                <div
                  className="absolute top-[-8px] left-0 w-6 h-6 bg-[#5a4ff3] rounded-full border-2 border-white"
                  style={{ left: `calc(${getProgressPercent(storyData.pageCount)}% - 12px)` }}
                ></div>
                <input
                  type="range"
                  min="0"
                  max="4"
                  step={1}
                  value={pageCountIndex}
                  onChange={(e) => {
                    const index = Number.parseInt(e.target.value);
                    setPageCountIndex(index);
                    setStoryData({ ...storyData, pageCount: pageCountMap[index] });
                  }}
                  // onChange={(e) => setStoryData({ ...storyData, pageCount: Number.parseInt(e.target.value) })}
                  className="absolute top-0 left-0 w-full h-2 opacity-0 cursor-pointer"
                />
              </div>
              <div className="flex justify-between mt-4 text-[#696974] mr-[-13px] ml-[-5px]">
                <div className="flex flex-col items-center ml-[-24px]">
                  <span>24 面</span>
                  <span className="text-sm text-[#a8a8c0]">（6 張紙）</span>
                </div>
                <div className="flex flex-col items-center">
                  <span>28 面</span>
                  <span className="text-sm text-[#a8a8c0]">（7 張紙）</span>
                </div>
                <div className="flex flex-col items-center">
                  <span>32 面</span>
                  <span className="text-sm text-[#a8a8c0]">（8 張紙）</span>
                </div>
                <div className="flex flex-col items-center">
                  <span>36 面</span>
                  <span className="text-sm text-[#a8a8c0]">（9 張紙）</span>
                </div>
                <div className="flex flex-col items-center  mr-[-24px]">
                  <span>40 面</span>
                  <span className="text-sm text-[#a8a8c0]">（10 張紙）</span>
                </div>
              </div>
            </div>
          </div>
        </form>

        {/* 提交按鈕 - 移到表單外面，根據表單有效性決定是否可點擊 */}
        <div className="flex justify-end mt-6">
          <button
            onClick={handleSubmit}
            disabled={!isFormValid || isGenerating}
            className={`px-6 py-2 w-[136px] h-[40px] rounded-lg flex items-center gap-2 ${isFormValid && !isGenerating
              ? "bg-[#5a4ff3] text-white hover:bg-[#4840d1]"
              : "bg-[#a8a8c0] text-white cursor-default"
              }`}
          >
            {isGenerating ? (
              <div className="flex space-x-1 mx-auto">
                <div className="w-2 h-2 bg-white rounded-full animate-bounce" style={{ animationDelay: "0ms" }}></div>
                <div className="w-2 h-2 bg-white rounded-full animate-bounce" style={{ animationDelay: "150ms" }}></div>
                <div className="w-2 h-2 bg-white rounded-full animate-bounce" style={{ animationDelay: "300ms" }}></div>
              </div>
            ) : (
              <>
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
                產生故事
              </>
            )}
          </button>
        </div>
      </div>
    </main>
  )
}

