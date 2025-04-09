import type React from "react"
import { PencilIcon } from "lucide-react"

// Define color option types
export type ColorOption = {
  id: string
  label: string
  icon: React.ReactNode
}

// Define image data type
export type ImageItem = {
  id: string
  title: string
  description: string
  imageUrl: string
}

// Define recommendation category type
export type RecommendationCategory = {
  id: string
  label: string
}

// Define color options
export const colorOptions: ColorOption[] = [
  {
    id: "default",
    label: "著色",
    icon: <PencilIcon className="w-4 h-4" />,
  },
  {
    id: "color-weight",
    label: "著色重",
    icon: (
      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" />
        <circle cx="12" cy="12" r="6" fill="currentColor" />
      </svg>
    ),
  },
  {
    id: "dot-painting",
    label: "點繪點繪畫",
    icon: (
      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="8" cy="8" r="2" fill="currentColor" />
        <circle cx="16" cy="8" r="2" fill="currentColor" />
        <circle cx="8" cy="16" r="2" fill="currentColor" />
        <circle cx="16" cy="16" r="2" fill="currentColor" />
      </svg>
    ),
  },
  {
    id: "number-coloring",
    label: "數字填色畫",
    icon: (
      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="4" y="4" width="16" height="16" stroke="currentColor" strokeWidth="2" />
        <text x="9" y="15" fill="currentColor" fontSize="10">
          1
        </text>
      </svg>
    ),
  },
]

// Define recommendation categories
export const recommendationCategories: RecommendationCategory[] = [
  { id: "explore", label: "探索" },
  { id: "popular", label: "熱門" },
  { id: "trannsportatio", label: "交通" },
  { id: "anime", label: "動漫" },
  { id: "cartoon", label: "卡通" },
  { id: "animals", label: "動物" },
  { id: "people", label: "人物" },
  { id: "art", label: "藝術" },
  { id: "festival", label: "節慶" },
]

// Mock data for different categories
export const mockDataByCategory: Record<string, ImageItem[]> = {
  explore: [
    {
      id: "e1",
      title: "老飛車",
      description: "根據上方的飛車著色畫",
      imageUrl: "/placeholder.svg?height=200&width=200",
    },
    { id: "e2", title: "小貓咪", description: "可愛的貓咪線條畫", imageUrl: "/placeholder.svg?height=200&width=200" },
    { id: "e3", title: "海灘風景", description: "夏日海灘著色畫", imageUrl: "/placeholder.svg?height=200&width=200" },
    {
      id: "e4",
      title: "恐龍世界",
      description: "侏羅紀恐龍著色畫",
      imageUrl: "/placeholder.svg?height=200&width=200",
    },
    { id: "e5", title: "太空冒險", description: "宇宙飛船著色畫", imageUrl: "/placeholder.svg?height=200&width=200" },
    { id: "e6", title: "花園景色", description: "美麗花園著色畫", imageUrl: "/placeholder.svg?height=200&width=200" },
    { id: "e7", title: "城市風光", description: "現代城市著色畫", imageUrl: "/placeholder.svg?height=200&width=200" },
    { id: "e8", title: "海底世界", description: "海洋生物著色畫", imageUrl: "/placeholder.svg?height=200&width=200" },
    { id: "e9", title: "森林動物", description: "森林動物著色畫", imageUrl: "/placeholder.svg?height=200&width=200" },
    {
      id: "e10",
      title: "熱帶雨林",
      description: "熱帶雨林著色畫",
      imageUrl: "/placeholder.svg?height=200&width=200",
    },
    {
      id: "e11",
      title: "沙漠風景",
      description: "沙漠風景著色畫",
      imageUrl: "/placeholder.svg?height=200&width=200",
    },
    {
      id: "e12",
      title: "極地冰川",
      description: "極地冰川著色畫",
      imageUrl: "/placeholder.svg?height=200&width=200",
    },
    {
      id: "e13",
      title: "古代建築",
      description: "古代建築著色畫",
      imageUrl: "/placeholder.svg?height=200&width=200",
    },
    {
      id: "e14",
      title: "未來城市",
      description: "未來城市著色畫",
      imageUrl: "/placeholder.svg?height=200&width=200",
    },
    {
      id: "e15",
      title: "童話世界",
      description: "童話世界著色畫",
      imageUrl: "/placeholder.svg?height=200&width=200",
    },
    {
      id: "e16",
      title: "神話傳說",
      description: "神話傳說著色畫",
      imageUrl: "/placeholder.svg?height=200&width=200",
    },
    {
      id: "e17",
      title: "運動場景",
      description: "運動場景著色畫",
      imageUrl: "/placeholder.svg?height=200&width=200",
    },
    {
      id: "e18",
      title: "音樂主題",
      description: "音樂主題著色畫",
      imageUrl: "/placeholder.svg?height=200&width=200",
    },
    {
      id: "e19",
      title: "科學實驗",
      description: "科學實驗著色畫",
      imageUrl: "/placeholder.svg?height=200&width=200",
    },
    {
      id: "e20",
      title: "太空探索",
      description: "太空探索著色畫",
      imageUrl: "/placeholder.svg?height=200&width=200",
    },
    {
      id: "e21",
      title: "海洋探險",
      description: "海洋探險著色畫",
      imageUrl: "/placeholder.svg?height=200&width=200",
    },
    {
      id: "e22",
      title: "恐龍時代",
      description: "恐龍時代著色畫",
      imageUrl: "/placeholder.svg?height=200&width=200",
    },
    {
      id: "e23",
      title: "農場生活",
      description: "農場生活著色畫",
      imageUrl: "/placeholder.svg?height=200&width=200",
    },
    {
      id: "e24",
      title: "城市生活",
      description: "城市生活著色畫",
      imageUrl: "/placeholder.svg?height=200&width=200",
    },
  ],
  popular: [
    { id: "p1", title: "熱門山水", description: "中國風山水畫", imageUrl: "/placeholder.svg?height=200&width=200" },
    { id: "p2", title: "熱門花鳥", description: "傳統花鳥畫", imageUrl: "/placeholder.svg?height=200&width=200" },
    { id: "p3", title: "熱門人物", description: "古代人物畫", imageUrl: "/placeholder.svg?height=200&width=200" },
    { id: "p4", title: "熱門風景", description: "西方風景畫", imageUrl: "/placeholder.svg?height=200&width=200" },
    { id: "p5", title: "熱門動物", description: "可愛動物畫", imageUrl: "/placeholder.svg?height=200&width=200" },
    { id: "p6", title: "熱門建築", description: "世界建築畫", imageUrl: "/placeholder.svg?height=200&width=200" },
    { id: "p7", title: "熱門靜物", description: "精美靜物畫", imageUrl: "/placeholder.svg?height=200&width=200" },
    { id: "p8", title: "熱門抽象", description: "現代抽象畫", imageUrl: "/placeholder.svg?height=200&width=200" },
    { id: "p9", title: "熱門水墨", description: "傳統水墨畫", imageUrl: "/placeholder.svg?height=200&width=200" },
    { id: "p10", title: "熱門油畫", description: "西方油畫風格", imageUrl: "/placeholder.svg?height=200&width=200" },
    { id: "p11", title: "熱門素描", description: "精細素描畫", imageUrl: "/placeholder.svg?height=200&width=200" },
    { id: "p12", title: "熱門漫畫", description: "流行漫畫風格", imageUrl: "/placeholder.svg?height=200&width=200" },
    { id: "p13", title: "熱門插畫", description: "現代插畫風格", imageUrl: "/placeholder.svg?height=200&width=200" },
    { id: "p14", title: "熱門卡通", description: "可愛卡通風格", imageUrl: "/placeholder.svg?height=200&width=200" },
    { id: "p15", title: "熱門寫實", description: "寫實繪畫風格", imageUrl: "/placeholder.svg?height=200&width=200" },
    { id: "p16", title: "熱門印象派", description: "印象派風格", imageUrl: "/placeholder.svg?height=200&width=200" },
    { id: "p17", title: "熱門立體派", description: "立體派風格", imageUrl: "/placeholder.svg?height=200&width=200" },
    {
      id: "p18",
      title: "熱門波普藝術",
      description: "波普藝術風格",
      imageUrl: "/placeholder.svg?height=200&width=200",
    },
    {
      id: "p19",
      title: "熱門極簡主義",
      description: "極簡主義風格",
      imageUrl: "/placeholder.svg?height=200&width=200",
    },
    {
      id: "p20",
      title: "熱門超現實主義",
      description: "超現實主義風格",
      imageUrl: "/placeholder.svg?height=200&width=200",
    },
  ],
  transportation: [
    { id: "t1", title: "老爺車", description: "復古汽車著色畫", imageUrl: "/placeholder.svg?height=200&width=200" },
    { id: "t2", title: "火車", description: "蒸汽火車著色畫", imageUrl: "/placeholder.svg?height=200&width=200" },
    { id: "t3", title: "飛機", description: "客機著色畫", imageUrl: "/placeholder.svg?height=200&width=200" },
    { id: "t4", title: "船舶", description: "帆船著色畫", imageUrl: "/placeholder.svg?height=200&width=200" },
    { id: "t5", title: "摩托車", description: "摩托車著色畫", imageUrl: "/placeholder.svg?height=200&width=200" },
    { id: "t6", title: "自行車", description: "自行車著色畫", imageUrl: "/placeholder.svg?height=200&width=200" },
    { id: "t7", title: "太空船", description: "太空船著色畫", imageUrl: "/placeholder.svg?height=200&width=200" },
    { id: "t8", title: "潛水艇", description: "潛水艇著色畫", imageUrl: "/placeholder.svg?height=200&width=200" },
    { id: "t9", title: "直升機", description: "直升機著色畫", imageUrl: "/placeholder.svg?height=200&width=200" },
    { id: "t10", title: "賽車", description: "賽車著色畫", imageUrl: "/placeholder.svg?height=200&width=200" },
    { id: "t11", title: "公車", description: "公車著色畫", imageUrl: "/placeholder.svg?height=200&width=200" },
    { id: "t12", title: "卡車", description: "卡車著色畫", imageUrl: "/placeholder.svg?height=200&width=200" },
    { id: "t13", title: "遊艇", description: "遊艇著色畫", imageUrl: "/placeholder.svg?height=200&width=200" },
    { id: "t14", title: "熱氣球", description: "熱氣球著色畫", imageUrl: "/placeholder.svg?height=200&width=200" },
    { id: "t15", title: "滑板車", description: "滑板車著色畫", imageUrl: "/placeholder.svg?height=200&width=200" },
    { id: "t16", title: "雪橇", description: "雪橇著色畫", imageUrl: "/placeholder.svg?height=200&width=200" },
    { id: "t17", title: "坦克", description: "坦克著色畫", imageUrl: "/placeholder.svg?height=200&width=200" },
    { id: "t18", title: "消防車", description: "消防車著色畫", imageUrl: "/placeholder.svg?height=200&width=200" },
    { id: "t19", title: "救護車", description: "救護車著色畫", imageUrl: "/placeholder.svg?height=200&width=200" },
    { id: "t20", title: "警車", description: "警車著色畫", imageUrl: "/placeholder.svg?height=200&width=200" },
    { id: "t21", title: "挖土機", description: "挖土機著色畫", imageUrl: "/placeholder.svg?height=200&width=200" },
    { id: "t22", title: "推土機", description: "推土機著色畫", imageUrl: "/placeholder.svg?height=200&width=200" },
  ],
  anime: [
    {
      id: "a1",
      title: "動漫人物",
      description: "日式動漫人物著色畫",
      imageUrl: "/placeholder.svg?height=200&width=200",
    },
    { id: "a2", title: "動漫場景", description: "動漫場景著色畫", imageUrl: "/placeholder.svg?height=200&width=200" },
    { id: "a3", title: "動漫機器人", description: "機器人著色畫", imageUrl: "/placeholder.svg?height=200&width=200" },
    { id: "a4", title: "動漫魔法", description: "魔法場景著色畫", imageUrl: "/placeholder.svg?height=200&width=200" },
    { id: "a5", title: "動漫校園", description: "校園場景著色畫", imageUrl: "/placeholder.svg?height=200&width=200" },
    { id: "a6", title: "動漫戰鬥", description: "戰鬥場景著色畫", imageUrl: "/placeholder.svg?height=200&width=200" },
    { id: "a7", title: "動漫萌寵", description: "萌寵著色畫", imageUrl: "/placeholder.svg?height=200&width=200" },
    { id: "a8", title: "動漫科幻", description: "科幻場景著色畫", imageUrl: "/placeholder.svg?height=200&width=200" },
    { id: "a9", title: "動漫魔幻", description: "魔幻場景著色畫", imageUrl: "/placeholder.svg?height=200&width=200" },
    {
      id: "a10",
      title: "動漫冒險",
      description: "冒險場景著色畫",
      imageUrl: "/placeholder.svg?height=200&width=200",
    },
    {
      id: "a11",
      title: "動漫戀愛",
      description: "戀愛場景著色畫",
      imageUrl: "/placeholder.svg?height=200&width=200",
    },
    {
      id: "a12",
      title: "動漫日常",
      description: "日常場景著色畫",
      imageUrl: "/placeholder.svg?height=200&width=200",
    },
    {
      id: "a13",
      title: "動漫運動",
      description: "運動場景著色畫",
      imageUrl: "/placeholder.svg?height=200&width=200",
    },
    {
      id: "a14",
      title: "動漫音樂",
      description: "音樂場景著色畫",
      imageUrl: "/placeholder.svg?height=200&width=200",
    },
    {
      id: "a15",
      title: "動漫美食",
      description: "美食場景著色畫",
      imageUrl: "/placeholder.svg?height=200&width=200",
    },
    {
      id: "a16",
      title: "動漫偵探",
      description: "偵探場景著色畫",
      imageUrl: "/placeholder.svg?height=200&width=200",
    },
    {
      id: "a17",
      title: "動漫歷史",
      description: "歷史場景著色畫",
      imageUrl: "/placeholder.svg?height=200&width=200",
    },
    {
      id: "a18",
      title: "動漫奇幻",
      description: "奇幻場景著色畫",
      imageUrl: "/placeholder.svg?height=200&width=200",
    },
    {
      id: "a19",
      title: "動漫恐怖",
      description: "恐怖場景著色畫",
      imageUrl: "/placeholder.svg?height=200&width=200",
    },
    {
      id: "a20",
      title: "動漫喜劇",
      description: "喜劇場景著色畫",
      imageUrl: "/placeholder.svg?height=200&width=200",
    },
  ],
  cartoon: [
    { id: "c1", title: "卡通人物", description: "卡通人物著色畫", imageUrl: "/placeholder.svg?height=200&width=200" },
    { id: "c2", title: "卡通動物", description: "卡通動物著色畫", imageUrl: "/placeholder.svg?height=200&width=200" },
    { id: "c3", title: "卡通場景", description: "卡通場景著色畫", imageUrl: "/placeholder.svg?height=200&width=200" },
    { id: "c4", title: "卡通食物", description: "卡通食物著色畫", imageUrl: "/placeholder.svg?height=200&width=200" },
    { id: "c5", title: "卡通植物", description: "卡通植物著色畫", imageUrl: "/placeholder.svg?height=200&width=200" },
    { id: "c6", title: "卡通建築", description: "卡通建築著色畫", imageUrl: "/placeholder.svg?height=200&width=200" },
    { id: "c7", title: "卡通太空", description: "卡通太空著色畫", imageUrl: "/placeholder.svg?height=200&width=200" },
    { id: "c8", title: "卡通海洋", description: "卡通海洋著色畫", imageUrl: "/placeholder.svg?height=200&width=200" },
    { id: "c9", title: "卡通森林", description: "卡通森林著色畫", imageUrl: "/placeholder.svg?height=200&width=200" },
    {
      id: "c10",
      title: "卡通城市",
      description: "卡通城市著色畫",
      imageUrl: "/placeholder.svg?height=200&width=200",
    },
    {
      id: "c11",
      title: "卡通農場",
      description: "卡通農場著色畫",
      imageUrl: "/placeholder.svg?height=200&width=200",
    },
    {
      id: "c12",
      title: "卡通學校",
      description: "卡通學校著色畫",
      imageUrl: "/placeholder.svg?height=200&width=200",
    },
    {
      id: "c13",
      title: "卡通公園",
      description: "卡通公園著色畫",
      imageUrl: "/placeholder.svg?height=200&width=200",
    },
    {
      id: "c14",
      title: "卡通超市",
      description: "卡通超市著色畫",
      imageUrl: "/placeholder.svg?height=200&width=200",
    },
    {
      id: "c15",
      title: "卡通醫院",
      description: "卡通醫院著色畫",
      imageUrl: "/placeholder.svg?height=200&width=200",
    },
    {
      id: "c16",
      title: "卡通餐廳",
      description: "卡通餐廳著色畫",
      imageUrl: "/placeholder.svg?height=200&width=200",
    },
    {
      id: "c17",
      title: "卡通遊樂園",
      description: "卡通遊樂園著色畫",
      imageUrl: "/placeholder.svg?height=200&width=200",
    },
    {
      id: "c18",
      title: "卡通動物園",
      description: "卡通動物園著色畫",
      imageUrl: "/placeholder.svg?height=200&width=200",
    },
    {
      id: "c19",
      title: "卡通水族館",
      description: "卡通水族館著色畫",
      imageUrl: "/placeholder.svg?height=200&width=200",
    },
    {
      id: "c20",
      title: "卡通博物館",
      description: "卡通博物館著色畫",
      imageUrl: "/placeholder.svg?height=200&width=200",
    },
    {
      id: "c21",
      title: "卡通電影院",
      description: "卡通電影院著色畫",
      imageUrl: "/placeholder.svg?height=200&width=200",
    },
    {
      id: "c22",
      title: "卡通體育館",
      description: "卡通體育館著色畫",
      imageUrl: "/placeholder.svg?height=200&width=200",
    },
  ],
  animals: [
    { id: "an1", title: "貓咪", description: "可愛貓咪著色畫", imageUrl: "/placeholder.svg?height=200&width=200" },
    { id: "an2", title: "狗狗", description: "忠誠狗狗著色畫", imageUrl: "/placeholder.svg?height=200&width=200" },
    { id: "an3", title: "熊貓", description: "國寶熊貓著色畫", imageUrl: "/placeholder.svg?height=200&width=200" },
    { id: "an4", title: "獅子", description: "草原獅子著色畫", imageUrl: "/placeholder.svg?height=200&width=200" },
    { id: "an5", title: "大象", description: "非洲大象著色畫", imageUrl: "/placeholder.svg?height=200&width=200" },
    { id: "an6", title: "鳥類", description: "飛鳥著色畫", imageUrl: "/placeholder.svg?height=200&width=200" },
    {
      id: "an7",
      title: "海洋生物",
      description: "海洋生物著色畫",
      imageUrl: "/placeholder.svg?height=200&width=200",
    },
    { id: "an8", title: "昆蟲", description: "昆蟲著色畫", imageUrl: "/placeholder.svg?height=200&width=200" },
    { id: "an9", title: "老虎", description: "老虎著色畫", imageUrl: "/placeholder.svg?height=200&width=200" },
    { id: "an10", title: "長頸鹿", description: "長頸鹿著色畫", imageUrl: "/placeholder.svg?height=200&width=200" },
    { id: "an11", title: "猴子", description: "猴子著色畫", imageUrl: "/placeholder.svg?height=200&width=200" },
    { id: "an12", title: "兔子", description: "兔子著色畫", imageUrl: "/placeholder.svg?height=200&width=200" },
    { id: "an13", title: "鱷魚", description: "鱷魚著色畫", imageUrl: "/placeholder.svg?height=200&width=200" },
    { id: "an14", title: "蛇類", description: "蛇類著色畫", imageUrl: "/placeholder.svg?height=200&width=200" },
    { id: "an15", title: "青蛙", description: "青蛙著色畫", imageUrl: "/placeholder.svg?height=200&width=200" },
    { id: "an16", title: "烏龜", description: "烏龜著色畫", imageUrl: "/placeholder.svg?height=200&width=200" },
    { id: "an17", title: "蝴蝶", description: "蝴蝶著色畫", imageUrl: "/placeholder.svg?height=200&width=200" },
    { id: "an18", title: "蜜蜂", description: "蜜蜂著色畫", imageUrl: "/placeholder.svg?height=200&width=200" },
    { id: "an19", title: "螞蟻", description: "螞蟻著色畫", imageUrl: "/placeholder.svg?height=200&width=200" },
    { id: "an20", title: "蜘蛛", description: "蜘蛛著色畫", imageUrl: "/placeholder.svg?height=200&width=200" },
    { id: "an21", title: "恐龍", description: "恐龍著色畫", imageUrl: "/placeholder.svg?height=200&width=200" },
    { id: "an22", title: "海豚", description: "海豚著色畫", imageUrl: "/placeholder.svg?height=200&width=200" },
    { id: "an23", title: "鯨魚", description: "鯨魚著色畫", imageUrl: "/placeholder.svg?height=200&width=200" },
    { id: "an24", title: "章魚", description: "章魚著色畫", imageUrl: "/placeholder.svg?height=200&width=200" },
  ],
  people: [
    { id: "pe1", title: "兒童", description: "兒童著色畫", imageUrl: "/placeholder.svg?height=200&width=200" },
    { id: "pe2", title: "成人", description: "成人著色畫", imageUrl: "/placeholder.svg?height=200&width=200" },
    { id: "pe3", title: "老人", description: "老人著色畫", imageUrl: "/placeholder.svg?height=200&width=200" },
    { id: "pe4", title: "運動員", description: "運動員著色畫", imageUrl: "/placeholder.svg?height=200&width=200" },
    { id: "pe5", title: "藝術家", description: "藝術家著色畫", imageUrl: "/placeholder.svg?height=200&width=200" },
    { id: "pe6", title: "科學家", description: "科學家著色畫", imageUrl: "/placeholder.svg?height=200&width=200" },
    {
      id: "pe7",
      title: "歷史人物",
      description: "歷史人物著色畫",
      imageUrl: "/placeholder.svg?height=200&width=200",
    },
    {
      id: "pe8",
      title: "職業人物",
      description: "職業人物著色畫",
      imageUrl: "/placeholder.svg?height=200&width=200",
    },
    { id: "pe9", title: "醫生", description: "醫生著色畫", imageUrl: "/placeholder.svg?height=200&width=200" },
    { id: "pe10", title: "護士", description: "護士著色畫", imageUrl: "/placeholder.svg?height=200&width=200" },
    { id: "pe11", title: "老師", description: "老師著色畫", imageUrl: "/placeholder.svg?height=200&width=200" },
    { id: "pe12", title: "警察", description: "警察著色畫", imageUrl: "/placeholder.svg?height=200&width=200" },
    { id: "pe13", title: "消防員", description: "消防員著色畫", imageUrl: "/placeholder.svg?height=200&width=200" },
    { id: "pe14", title: "廚師", description: "廚師著色畫", imageUrl: "/placeholder.svg?height=200&width=200" },
    { id: "pe15", title: "農夫", description: "農夫著色畫", imageUrl: "/placeholder.svg?height=200&width=200" },
    { id: "pe16", title: "工程師", description: "工程師著色畫", imageUrl: "/placeholder.svg?height=200&width=200" },
    { id: "pe17", title: "宇航員", description: "宇航員著色畫", imageUrl: "/placeholder.svg?height=200&width=200" },
    { id: "pe18", title: "運動員", description: "運動員著色畫", imageUrl: "/placeholder.svg?height=200&width=200" },
    { id: "pe19", title: "音樂家", description: "音樂家著色畫", imageUrl: "/placeholder.svg?height=200&width=200" },
    { id: "pe20", title: "舞者", description: "舞者著色畫", imageUrl: "/placeholder.svg?height=200&width=200" },
  ],
  art: [
    {
      id: "ar1",
      title: "油畫風格",
      description: "油畫風格著色畫",
      imageUrl: "/placeholder.svg?height=200&width=200",
    },
    {
      id: "ar2",
      title: "水彩風格",
      description: "水彩風格著色畫",
      imageUrl: "/placeholder.svg?height=200&width=200",
    },
    {
      id: "ar3",
      title: "素描風格",
      description: "素描風格著色畫",
      imageUrl: "/placeholder.svg?height=200&width=200",
    },
    {
      id: "ar4",
      title: "抽象風格",
      description: "抽象風格著色畫",
      imageUrl: "/placeholder.svg?height=200&width=200",
    },
    {
      id: "ar5",
      title: "印象派風格",
      description: "印象派風格著色畫",
      imageUrl: "/placeholder.svg?height=200&width=200",
    },
    {
      id: "ar6",
      title: "立體派風格",
      description: "立體派風格著色畫",
      imageUrl: "/placeholder.svg?height=200&width=200",
    },
    {
      id: "ar7",
      title: "波普藝術風格",
      description: "波普藝術風格著色畫",
      imageUrl: "/placeholder.svg?height=200&width=200",
    },
    {
      id: "ar8",
      title: "極簡主義風格",
      description: "極簡主義風格著色畫",
      imageUrl: "/placeholder.svg?height=200&width=200",
    },
    {
      id: "ar9",
      title: "超現實主義風格",
      description: "超現實主義風格著色畫",
      imageUrl: "/placeholder.svg?height=200&width=200",
    },
    {
      id: "ar10",
      title: "表現主義風格",
      description: "表現主義風格著色畫",
      imageUrl: "/placeholder.svg?height=200&width=200",
    },
    {
      id: "ar11",
      title: "野獸派風格",
      description: "野獸派風格著色畫",
      imageUrl: "/placeholder.svg?height=200&width=200",
    },
    {
      id: "ar12",
      title: "達達主義風格",
      description: "達達主義風格著色畫",
      imageUrl: "/placeholder.svg?height=200&width=200",
    },
    {
      id: "ar13",
      title: "未來主義風格",
      description: "未來主義風格著色畫",
      imageUrl: "/placeholder.svg?height=200&width=200",
    },
    {
      id: "ar14",
      title: "浪漫主義風格",
      description: "浪漫主義風格著色畫",
      imageUrl: "/placeholder.svg?height=200&width=200",
    },
    {
      id: "ar15",
      title: "古典主義風格",
      description: "古典主義風格著色畫",
      imageUrl: "/placeholder.svg?height=200&width=200",
    },
    {
      id: "ar16",
      title: "巴洛克風格",
      description: "巴洛克風格著色畫",
      imageUrl: "/placeholder.svg?height=200&width=200",
    },
    {
      id: "ar17",
      title: "洛可可風格",
      description: "洛可可風格著色畫",
      imageUrl: "/placeholder.svg?height=200&width=200",
    },
    {
      id: "ar18",
      title: "新藝術運動風格",
      description: "新藝術運動風格著色畫",
      imageUrl: "/placeholder.svg?height=200&width=200",
    },
  ],
  festival: [
    { id: "f1", title: "春節", description: "春節著色畫", imageUrl: "/placeholder.svg?height=200&width=200" },
    { id: "f2", title: "中秋節", description: "中秋節著色畫", imageUrl: "/placeholder.svg?height=200&width=200" },
    { id: "f3", title: "端午節", description: "端午節著色畫", imageUrl: "/placeholder.svg?height=200&width=200" },
    { id: "f4", title: "聖誕節", description: "聖誕節著色畫", imageUrl: "/placeholder.svg?height=200&width=200" },
    { id: "f5", title: "萬聖節", description: "萬聖節著色畫", imageUrl: "/placeholder.svg?height=200&width=200" },
    { id: "f6", title: "復活節", description: "復活節著色畫", imageUrl: "/placeholder.svg?height=200&width=200" },
    { id: "f7", title: "感恩節", description: "感恩節著色畫", imageUrl: "/placeholder.svg?height=200&width=200" },
    { id: "f8", title: "新年", description: "新年著色畫", imageUrl: "/placeholder.svg?height=200&width=200" },
    { id: "f9", title: "元宵節", description: "元宵節著色畫", imageUrl: "/placeholder.svg?height=200&width=200" },
    { id: "f10", title: "清明節", description: "清明節著色畫", imageUrl: "/placeholder.svg?height=200&width=200" },
    { id: "f11", title: "七夕節", description: "七夕節著色畫", imageUrl: "/placeholder.svg?height=200&width=200" },
    { id: "f12", title: "重陽節", description: "重陽節著色畫", imageUrl: "/placeholder.svg?height=200&width=200" },
    { id: "f13", title: "情人節", description: "情人節著色畫", imageUrl: "/placeholder.svg?height=200&width=200" },
    { id: "f14", title: "母親節", description: "母親節著色畫", imageUrl: "/placeholder.svg?height=200&width=200" },
    { id: "f15", title: "父親節", description: "父親節著色畫", imageUrl: "/placeholder.svg?height=200&width=200" },
    { id: "f16", title: "兒童節", description: "兒童節著色畫", imageUrl: "/placeholder.svg?height=200&width=200" },
    { id: "f17", title: "教師節", description: "教師節著色畫", imageUrl: "/placeholder.svg?height=200&width=200" },
    { id: "f18", title: "勞動節", description: "勞動節著色畫", imageUrl: "/placeholder.svg?height=200&width=200" },
    { id: "f19", title: "國慶節", description: "國慶節著色畫", imageUrl: "/placeholder.svg?height=200&width=200" },
    { id: "f20", title: "光棍節", description: "光棍節著色畫", imageUrl: "/placeholder.svg?height=200&width=200" },
  ],
}

