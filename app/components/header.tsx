"use client"

import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { NavButton } from "./ui/button-styles"
import IconColorLens from "@/public/image/outline-color-lens.svg"
import IconCamera from "@/public/image/camera-line.svg"
import MomoSVG from "./MomoSVG"

export function Header() {
  const pathname = usePathname()

  return (
    <header className="flex justify-between items-center px-[120px] py-6 mb-[6px]">
      <div className="flex items-center">

      </div>
      <div className="flex items-center gap-1">
        <Link href="/momo-creation" passHref>
          <NavButton isActive={pathname === "/momo-creation"}>
            <MomoSVG
              src="/image/outline-color-lens.svg"
              width="24px"
              height="24px"
            />
            <div className="ml-2">
              墨墨創作
            </div>
          </NavButton>
        </Link>
        <Link href="/storybook" passHref>
          <NavButton isActive={pathname === "/storybook"}>
            <MomoSVG
              src="/image/camera-line.svg"
              width="24px"
              height="24px"
            />
            <div className="ml-2">
              墨墨繪本
            </div>
          </NavButton>
        </Link>
        <div className="rounded-full flex items-center justify-center overflow-hidden">
          <MomoSVG
            src="/image/profile.svg"
            width="40px"
            height="40px"
          />
        </div>
      </div>
    </header>
  )
}

