import type React from "react"
import HeaderSignup from "@/components/HeaderSignup"

export default function LoginLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative min-h-screen">
      <HeaderSignup />
      {children}
    </div>
  )
}