"use client"
import { useState } from "react"
import { usePathname } from "next/navigation"
import { Button } from "../ui/button"
import { MessageCircleQuestionMark } from "lucide-react"

export default function HelpButton() {
  const [open, setOpen] = useState(false)
  const pathname = usePathname()

  const isAuthPage =
    pathname.startsWith("/signup")

  return (
    <>
      <div className="fixed bottom-6 right-6 z-50">
        <Button
          onClick={() => setOpen(true)}
          className={`cursor-pointer text-white font-semibold py-2 px-6 rounded-3xl shadow-lg flex items-center justify-center 
            ${isAuthPage 
              ? "bg-green-500 hover:bg-green-600" 
              : "backdrop-blur"
            }`}
        >
          <span className="text-base">
          <MessageCircleQuestionMark className="h-4 w-4"/>
          </span>
          Help
        </Button>
      </div>

      {open && (
        <div
          className={`fixed bottom-20 right-6 w-60 bg-white rounded-lg shadow-lg p-4 z-50 
            ${isAuthPage ? "border border-green-400" : "border border-yellow-300"}`}
        >
          <div className="flex justify-between items-center mb-3">
            <h4
              className={`font-bold 
                ${isAuthPage ? "text-green-800" : "text-yellow-900"}`}
            >
              Contact us
            </h4>
            <button
              onClick={() => setOpen(false)}
              className={`cursor-pointer 
                ${isAuthPage 
                  ? "text-green-600 hover:text-green-800" 
                  : "text-yellow-700 hover:text-yellow-900"}`}
            >
              ✕
            </button>
          </div>
          <div
            className={`text-sm mb-4 
              ${isAuthPage ? "text-green-700" : "text-yellow-800"}`}
          >
            How can we help you today?
          </div>
          <input
            type="text"
            placeholder="Type a message"
            className={`w-full px-3 py-2 rounded focus:outline-none focus:ring-2 
              ${isAuthPage 
                ? "border border-green-400 focus:ring-green-400" 
                : "border border-yellow-300 focus:ring-yellow-400"}`}
          />
        </div>
      )}
    </>
  )
}