"use client"

import { cn } from "@/lib/utils"
import type { ReactNode } from "react"

interface ButtonProps {
  children: ReactNode
  variant?: "primary" | "secondary" | "outline" | "print" | "upload" | "viewMore"
  disabled?: boolean
  className?: string
  onClick?: () => void
}

export function StyledButton({ children, variant = "primary", disabled = false, className, onClick }: ButtonProps) {
  const baseStyles = "flex items-center justify-center gap-1 transition-colors duration-200"

  const variantStyles = {
    primary: "bg-[#5a4ff3] hover:bg-[#4840d1] text-white rounded-lg px-6 py-2",
    secondary: "bg-[#94a3b1] hover:bg-[#8596a5] text-white rounded-lg px-6 py-2",
    outline: "bg-white hover:bg-[#f1f1f5] text-[#696974] rounded-full px-3 py-1.5 text-sm",
    print: "bg-[#5a4ff3] hover:bg-[#4840d1] text-white text-xs px-2 py-0.5 rounded",
    upload: "bg-[#f1f1f5] hover:bg-[#e4e4ea] text-[#696974] flex items-center gap-1 rounded-lg px-4 py-2",
    viewMore: "bg-[#f1f1f5] hover:bg-[#e4e4ea] text-[#696974] px-4 py-2 rounded-lg text-sm",
  }

  const disabledStyles = "opacity-60 cursor-not-allowed"

  return (
    <button
      className={cn(baseStyles, variantStyles[variant], disabled && disabledStyles, className)}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </button>
  )
}

interface NavButtonProps {
  children: ReactNode
  isActive?: boolean
  className?: string
  href?: string
}

export function NavButton({ children, isActive = false, className, href }: NavButtonProps) {
  const baseStyles = "flex items-center text-lg px-3 py-1.5 rounded-full transition-colors duration-200"
  const activeStyles = "text-[#5a4ff3] font-medium"
  const inactiveStyles = "text-[#696974] hover:text-[#5a4ff3]"

  const Component = href ? "a" : "button"

  return (
    <Component
      className={cn(baseStyles, isActive ? activeStyles : inactiveStyles, className)}
      {...(href ? { href } : {})}
    >
      {children}
    </Component>
  )
}

interface SidebarButtonProps {
  children: ReactNode
  isActive?: boolean
  className?: string
  onClick?: () => void
}

export function SidebarButton({ children, isActive = false, className, onClick }: SidebarButtonProps) {
  const baseStyles = "flex items-center gap-2 p-3 transition-colors duration-200"
  const activeStyles = "text-[#5a4ff3]"
  const inactiveStyles = "text-[#696974] hover:text-[#5a4ff3]"

  return (
    <button className={cn(baseStyles, isActive ? activeStyles : inactiveStyles, className)} onClick={onClick}>
      {children}
    </button>
  )
}

