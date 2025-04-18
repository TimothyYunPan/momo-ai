"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { BackgroundShapes } from "../components/background-shapes"
import { Header } from "../components/header"
import StoryPreview from "../components/story-preview"
import StoryOutLineCheck from "../components/story-outline-check"
import StorySetting from "../components/story-setting"

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
  { id: "0-3", label: "0-3 歲" },
  { id: "4-7", label: "4-7 歲" },
  { id: "9-12", label: "9-12 歲" },
]

const defaultStoryData = {
  concept: "",
  ageGroup: "FIRST_GRADE",
  characters: "",
  style: "SOFT_WATERCOLOR",
  pageCount: 11,
}

const defaultStoryOutline = {
  title: "",
  story: "",
  id: 1
}

export interface StoryOutlineType {
  title: string,
  story: string,
  id: number
}

const defaultCompletedStory = {
  overall_story_text: "",
  story_segments: [],
  story_images: [],
  composed_images: [],
  page_length: 0,
  grade_level: "",
  style: "",
  title: ""
}

export default function StorybookPage() {


  const [storyStep, setStoryStep] = useState(1)
  const [storyData, setStoryData] = useState(defaultStoryData)
  const [storyOutline, setStoryOutline] = useState(defaultStoryOutline)
  const [completedStory, setCompletedStory] = useState(defaultCompletedStory)


  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* 背景圖形 */}
      <BackgroundShapes />

      <div className="relative z-10">
        <Header />

        {storyStep == 1 ? (
          <StorySetting
            setStoryStep={setStoryStep}
            storyData={storyData}
            setStoryData={setStoryData}
            setStoryOutline={setStoryOutline}
          />
        ) : storyStep == 2 ? (
          <StoryOutLineCheck
            setStoryStep={setStoryStep}
            storyOutline={storyOutline}
            setCompletedStory={setCompletedStory}
          />
        ) : (
          <StoryPreview completedStory={completedStory} setStoryStep={setStoryStep} storyId={storyOutline.id} />
        )}
        {/* Main content */}


        {/* Footer */}
        <footer className="max-w-[1200px] mx-auto px-[120px] mt-20 py-4 flex justify-between text-sm text-[#696974]">
          <div>© 2025 Momo Company &nbsp;&nbsp; Terms &nbsp;&nbsp; Policy</div>
          <div>Support &nbsp;&nbsp; Contact Us</div>
        </footer>
      </div>
    </div>
  )
}

