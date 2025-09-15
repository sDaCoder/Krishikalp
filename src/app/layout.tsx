"use client"
import { usePathname } from "next/navigation"
import Header from "@/components/Header"
import HeaderLogin from "@/components/HeaderLogin"
import HeaderSignup from "@/components/HeaderSignup"
import Footer from "@/components/Footer/Footer"
import "./globals.css"

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  const isLoginPage = pathname.startsWith("/login")
  const isSignupPage = pathname.startsWith("/signup")

  let header
  if (isLoginPage) header = <HeaderLogin />
  else if (isSignupPage) header = <HeaderSignup />
  else header = <Header />

  return (
    <html lang="en">
      <body>
        {header}
        {children}
        <Footer />
      </body>
    </html>
  )
}
