"use client"

import type React from "react"

import { useState, useEffect, Dispatch, SetStateAction } from "react"
import { useRouter } from "next/navigation"
import { BackgroundShapes } from "../components/background-shapes"
import { Header } from "../components/header"
import StoryPreview from "../components/story-preview"
import StoryOutLineCheck from "../components/story-outline-check"
import MomoSVG from "./MomoSVG"

// 定義繪本風格選項
const illustrationStyles = [
  { id: "soft-watercolor", label: "柔和水彩", description: "色彩柔和溫暖，適合各年齡層" },
  { id: "childish-doodle", label: "童趣塗鴉", description: "簡約圖畫，富有趣味性，適合低齡故事" },
  { id: "collage", label: "拼貼紙藝", description: "視覺手工拼貼，帶有層次感，適合探索、自然主題的故事" },
  { id: "digital", label: "數位插畫", description: "線條明亮，色彩鮮明，適合情節豐富、角色表現力較強的故事" },
  { id: "simple-geo", label: "簡單幾何", description: "簡單造型與線條，色彩鮮明，適合低齡層" },
]

// 定義年齡層選項
const ageGroups = [
  { id: "lessThanThree", label: "0-3 歲" },
  { id: "fourToSix", label: "4-6 歲" },
  { id: "sevenToTwelve", label: "7-12 歲" },
]

interface StoryData {
  concept: string
  ageGroup: string
  characters: string
  style: string
  pageCount: number
}

interface StorySettingProps {
  setStoryStep: Dispatch<SetStateAction<number>>
  storyData: StoryData
  setStoryData: (data: StoryData) => void
}

export default function StorySetting({ setStoryStep, storyData, setStoryData, }: StorySettingProps) {
  const router = useRouter()

  // 檢查表單是否有效
  const isFormValid = storyData.concept.trim() !== "" && storyData.characters.trim() !== ""

  // 處理表單提交
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    if (!isFormValid) return

    // 在實際應用中，這裡會將所有數據發送到後端
    console.log("提交的故事數據:", storyData)

    // 然後導航到下一個頁面
    setStoryStep(2)
  }

  return (
    <main className="max-w-[1200px] mx-auto">
      <div className="mb-12">
        <h2 className="text-3xl font-bold mb-12 text-[#323343]">您今天想製作什麼樣的繪本？</h2>

        {/* 進度指示器 - 修改顏色 */}
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
              placeholder="一隻好奇的浣熊，叫做小米，喜歡在花園玩耍，認識新朋友..."
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
            <label className="block text-xl font-bold text-[#323343] mb-4">5. 繪本頁數</label>
            <div className="px-4">
              <div className="relative">
                <div className="w-full h-2 bg-[#e4e4ea] rounded-lg"></div>
                <div
                  className="absolute top-0 left-0 h-2 bg-[#5a4ff3] rounded-lg"
                  style={{ width: `${((storyData.pageCount - 5) / 5) * 100}%` }}
                ></div>
                <div
                  className="absolute top-[-8px] left-0 w-6 h-6 bg-[#5a4ff3] rounded-full border-2 border-white"
                  style={{ left: `calc(${((storyData.pageCount - 5) / 5) * 100}% - 12px)` }}
                ></div>
                <input
                  type="range"
                  min="5"
                  max="10"
                  step="1"
                  value={storyData.pageCount}
                  onChange={(e) => setStoryData({ ...storyData, pageCount: Number.parseInt(e.target.value) })}
                  className="absolute top-0 left-0 w-full h-2 opacity-0 cursor-pointer"
                />
              </div>
              <div className="flex justify-between mt-4 text-[#696974]">
                <span>5頁</span>
                <span>10頁</span>
              </div>
            </div>
          </div>
        </form>

        {/* 提交按鈕 - 移到表單外面，根據表單有效性決定是否可點擊 */}
        <div className="flex justify-end mt-6">
          <button
            onClick={handleSubmit}
            disabled={!isFormValid}
            className={`px-6 py-2 rounded-lg flex items-center gap-2 ${isFormValid
              ? "bg-[#5a4ff3] text-white hover:bg-[#4840d1]"
              : "bg-[#a8a8c0] text-white cursor-not-allowed"
              }`}
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
            生成故事
          </button>
        </div>
      </div>
    </main>
  )
}

