"use client"

import { useState, useEffect } from "react"

interface ServerWakeupProps {
  apiUrl: string
  onReady: () => void
  pollingInterval?: number
}

export default function ServerWakeup({ apiUrl, onReady, pollingInterval = 3000 }: ServerWakeupProps) {
  const [isPolling, setIsPolling] = useState(true)
  const [attempts, setAttempts] = useState(0)

  useEffect(() => {
    if (!isPolling) return

    const controller = new AbortController()
    const { signal } = controller

    const checkServer = async () => {
      try {
        const response = await fetch(apiUrl, {
          method: "GET",
          signal,
          cache: "no-store",
        })

        if (response.ok) {
          setIsPolling(false)
          onReady()
        } else {
          setAttempts((prev) => prev + 1)
        }
      } catch (error) {
        if (!(error instanceof DOMException && error.name === "AbortError")) {
          setAttempts((prev) => prev + 1)
        }
      }
    }

    checkServer()
    const interval = setInterval(checkServer, pollingInterval)

    return () => {
      controller.abort()
      clearInterval(interval)
    }
  }, [apiUrl, isPolling, onReady, pollingInterval])

  return (
    <div className="flex min-h-screen items-center justify-center bg-[#f8f5f2]">
      <div className="relative overflow-hidden rounded-xl bg-white p-8 shadow-lg">
        <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-[#f9b248]/10"></div>
        <div className="absolute -bottom-16 -left-16 h-40 w-40 rounded-full bg-[#f9b248]/10"></div>

        <div className="relative z-10 flex flex-col items-center">
          <div className="mb-6 flex items-center justify-center">
            <div className="relative h-16 w-16">
              <div className="absolute inset-0 animate-spin rounded-full border-b-2 border-t-2 border-[#f9b248]"></div>
              <div className="absolute inset-2 rounded-full border-2 border-dashed border-[#f9b248] opacity-30"></div>
            </div>
          </div>

          <h2 className="mb-2 text-2xl font-light tracking-wide text-[#2d3748]">
            Waking up the server<span className="animate-pulse">...</span>
          </h2>

          <p className="text-center text-sm font-light text-[#718096]">We're preparing your culinary experience</p>

          <div className="mt-6 h-0.5 w-full max-w-[200px] overflow-hidden rounded-full bg-gray-100">
            <div
              className="h-full animate-pulse bg-gradient-to-r from-[#f9b248] to-[#f8c78e]"
              style={{
                width: `${Math.min(attempts * 10, 100)}%`,
                transition: "width 0.5s ease-in-out",
              }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  )
}
