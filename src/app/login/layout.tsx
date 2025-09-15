import type React from "react"
import HeaderLogin from "@/components/HeaderLogin"

export default function LoginLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative min-h-screen">
      <HeaderLogin />
      {children}
    </div>
  )
}