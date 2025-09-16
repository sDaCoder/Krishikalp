"use client"
import { useState } from "react"
import type React from "react"
import Link from "next/link"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faUser,
  faLock,
  faLeaf,
  faEye,
  faEyeSlash,
  faEnvelope,
  faPhone,
  faUserPlus,
} from "@fortawesome/free-solid-svg-icons"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Separator } from "@/components/ui/separator"
import { toast } from "sonner"
import { userSignupSchema } from "@/lib/validations/userSchema"
import { useRouter } from "next/navigation"
import { authClient } from "../../../lib/auth-client"

export default function SignupForm() {
  const router = useRouter()
  const [name, setName] = useState<string>("")
  const [email, setEmail] = useState<string>("")
  const [phone, setPhone] = useState<string>("")
  const [password, setPassword] = useState<string>("")
  const [confirmPassword, setConfirmPassword] = useState<string>("")
  const [showPassword, setShowPassword] = useState<boolean>(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState<boolean>(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (password !== confirmPassword) {
      toast.error("Passwords do not match!")
      return
    }

    const parsed = userSignupSchema.safeParse({ name, email, phone, password })
    if (!parsed.success) {
      const firstError = parsed.error.issues[0]
      toast.error(firstError?.message || "Please check your inputs")
      return
    }

    try {
      await authClient.signUp.email({
        name,
        email,
        password,
      })
      toast.success("Signup successful!")
      setName("")
      setEmail("")
      setPhone("")
      setPassword("")
      setConfirmPassword("")
      setShowPassword(false)
      setShowConfirmPassword(false)
      router.push("/dashboard")
    } catch (error: any) {
      const apiMessage = error?.response?.data?.message || "Signup failed"
      toast.error(apiMessage || error?.message || "Signup failed")
    }
  }

  return (
    <div className="w-full max-w-md mx-4">
      {/* Transparent signup box */}
      <div className="bg-white/20 backdrop-blur-sm rounded-lg shadow-xl p-8 border border-white/80">
        {/* Section 1: Logo and Brand Name */}
        <div className="flex items-center justify-center gap-2 mb-6">
          <FontAwesomeIcon icon={faLeaf} className="h-16 w-16" />
          <span className="text-2xl font-bold">KrishiKalp</span>
        </div>

        <Separator className="mb-6" />

        {/* Section 2: Signup Form */}
        <form onSubmit={handleSubmit} className="space-y-4 mb-6">
          <div className="space-y-4">
            <Label htmlFor="name" className="text-gray-700 font-medium">
              Full Name
            </Label>
            <div className="relative">
              <FontAwesomeIcon icon={faUser} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
              <Input
                id="name"
                type="text"
                placeholder="Full Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="pl-10 bg-white/80 border-gray-300 focus:border-green-500 focus:ring-green-500 focus:outline-none"
                required
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="email" className="text-gray-700 font-medium">
              Email
            </Label>
            <div className="relative">
              <FontAwesomeIcon icon={faEnvelope} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
              <Input
                id="email"
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="pl-10 bg-white/80 border-gray-300 focus:border-green-500 focus:ring-green-500 focus:outline-none"
                required
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="phone" className="text-gray-700 font-medium">
              Phone Number
            </Label>
            <div className="relative">
              <FontAwesomeIcon icon={faPhone} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
              <Input
                id="phone"
                type="tel"
                placeholder="Phone Number"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="pl-10 bg-white/80 border-gray-300 focus:border-green-500 focus:ring-green-500 focus:outline-none"
                required
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="password" className="text-gray-700 font-medium">
              Create Password
            </Label>
            <div className="relative">
              <FontAwesomeIcon icon={faLock} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
              <Input
                id="password"
                type={showPassword ? "text" : "password"}
                placeholder="Create Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="pl-10 pr-10 bg-white/80 border-gray-300 focus:border-green-500 focus:ring-green-500"
                required
              />
              <button
                title="Show/Hide Password"
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
              >
                <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} />
              </button>
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="confirmPassword" className="text-gray-700 font-medium">
              Confirm Password
            </Label>
            <div className="relative">
              <FontAwesomeIcon icon={faLock} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
              <Input
                id="confirmPassword"
                type={showConfirmPassword ? "text" : "password"}
                placeholder="Confirm Password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="pl-10 pr-10 bg-white/80 border-gray-300 focus:border-green-500 focus:ring-green-500"
                required
              />
              <button
                title="Show/Hide Password"
                type="button"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
              >
                <FontAwesomeIcon icon={showConfirmPassword ? faEyeSlash : faEye} />
              </button>
            </div>
          </div>

          <Button type="submit" className="w-full bg-green-500 hover:bg-green-600 text-white font-medium py-2.5">
            <FontAwesomeIcon icon={faUserPlus} className="mr-2" />
            Sign Up
          </Button>
        </form>

        <Separator className="mb-6" />

        {/* Section 3: Login Link */}
        <div className="text-center">
          <p className="text-gray-900">
            {"Already have an account? "}
            <Link href="/login" className="text-green-500 hover:text-green-600 font-medium hover:underline">
              Log In
            </Link>
          </p>
        </div>
      </div>
    </div>
  )
}
