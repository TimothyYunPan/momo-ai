// import { ImageCard } from "./image-card";
import Image from "next/image"
import LightBlueBlock from "@/public/image/light-blue-block.svg"
import LightYellowBlock from "@/public/image/light-yellow-block.svg"
import LightRedBlock from "@/public/image/light-red-block.svg"

export function BackgroundShapes() {
  return (
    <div className="fixed inset-0 w-full h-full overflow-hidden pointer-events-none">
      {/* 白色背景 */}
      <div className="absolute inset-0 bg-white"></div>

      {/* 右上角淺藍色形狀 */}
      <Image
        src={LightBlueBlock || "/placeholder.svg"}
        alt=""
        width={200}
        height={200}
        className="absolute top-0 right-0 w-[300px] h-[300px]"
      />
      {/* 左下角淺粉色形狀 */}
      <Image
        src={LightRedBlock || "/placeholder.svg"}
        alt=""
        width={200}
        height={200}
        className="absolute top-1/2 left-0 transform -translate-y-1/2 w-[250px] h-[350px]"
      />

      {/* 右下角淺黃色形狀 */}
      <Image
        src={LightYellowBlock || "/placeholder.svg"}
        alt=""
        width={200}
        height={200}
        className="absolute bottom-0 right-[-10px] w-[300px] h-[300px]"
      />
    </div>
  )
}

