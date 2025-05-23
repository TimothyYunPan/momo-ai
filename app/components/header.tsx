"use client"

import { useState, useEffect, Suspense } from "react"
import Image from "next/image"
import Link from "next/link"
import { usePathname, useSearchParams, useRouter } from "next/navigation"
import { NavButton } from "./ui/button-styles"
import MomoSVG from "./MomoSVG"

function EpsonLoginHandler() {
  const searchParams = useSearchParams()
  const code = searchParams.get('code')
  console.log(code)

  const fetchDevices = async (accessToken: string) => {
    try {
      const response = await fetch('/api/proxy/api/v1/epson/devices', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          access_token: accessToken
        })
      })

      if (!response.ok) {
        throw new Error('獲取設備列表失敗')
      }

      const data = await response.json()
      console.log(data)
      if (data.serialNumber && data.serialNumber.length > 0) {
        console.log(data.serialNumber)
        localStorage.setItem('epson_device_id', data.serialNumber)
      }
    } catch (error) {
      console.error('獲取設備列表錯誤:', error)
      alert('獲取設備列表失敗，請重試')
    }
  }

  useEffect(() => {
    if (code) {
      const handleTokenExchange = async () => {
        try {
          const response = await fetch(`/api/proxy/api/v1/epson/token?code=${code}`, {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json',
            },
          })

          if (!response.ok) {
            throw new Error('Token 交換失敗')
          }

          const data = await response.json()
          if (data.access_token) {
            localStorage.setItem('epson_access_token', data.access_token)
            fetchDevices(data.access_token)
            window.history.replaceState({}, '', window.location.pathname)
          }
        } catch (error) {
          console.error('Token 交換錯誤:', error)
          alert('登入失敗，請重試')
        }
      }

      handleTokenExchange()
    }
  }, [code])

  return null
}

export function Header() {
  const pathname = usePathname()
  const router = useRouter()

  const handleEpsonLogin = async () => {
    try {
      const response = await fetch('/api/proxy/api/v1/epson/login', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      })

      if (!response.ok) {
        throw new Error('登入請求失敗')
      }

      const data = await response.json()
      if (data.auth_url) {
        window.open(data.auth_url, '_blank')
      }
    } catch (error) {
      console.error('Epson 登入錯誤:', error)
      alert('登入失敗，請重試')
    }
  }

  return (
    <header className="flex justify-between items-center px-[120px] py-6 mb-[6px]">
      <div
        className="flex items-center cursor-pointer"
        onClick={() => router.push('/momo-creation')}
      >
        <MomoSVG src="/image/logo.svg" width="139px"></MomoSVG>
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
              墨墨著色
            </div>
          </NavButton>
        </Link>
        <Link href="/storybook" passHref>
          <NavButton isActive={pathname === "/storybook"}>
            <MomoSVG
              src="/image/book.svg"
              width="24px"
              height="24px"
            />
            <div className="ml-2">
              墨墨繪本
            </div>
          </NavButton>
        </Link>
        <button
          onClick={handleEpsonLogin}
          className="rounded-full flex items-center justify-center overflow-hidden hover:opacity-80 transition-opacity"
        >
          <MomoSVG
            src="/image/profile.svg"
            width="40px"
            height="40px"
          />
        </button>
      </div>
      <Suspense fallback={null}>
        <EpsonLoginHandler />
      </Suspense>
    </header>
  )
}

