"use client"
import { useState } from "react"
import Link from "next/link"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faUser, faLock, faSignInAlt, faLeaf, faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Separator } from "@/components/ui/separator"
import { userLoginSchema } from "@/lib/validations/userSchema"
import { toast } from "sonner"
import { useRouter } from "next/navigation"
import { authClient } from "../../../lib/auth-client"

export default function LoginForm() {
  const router = useRouter()
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [showPassword, setShowPassword] = useState(false)

  const handleSubmit = async(e: React.FormEvent) => {
    e.preventDefault()
    console.log("Login attempt:", { email, password })

    const parsed = userLoginSchema.safeParse({ email, password })
    if (!parsed.success) {
      const firstError = parsed.error.issues[0]
      toast.error(firstError?.message || "Please check your inputs")
      return
    }

    try {
      await authClient.signIn.email({
        email,
        password,
      })
      toast.success("Login successful!")
      setEmail("")
      setPassword("")
      setShowPassword(false)
      router.push("/")
    } catch (error: any) {
        const apiMessage = error?.response?.data?.message
        toast.error(apiMessage || error?.message || "Login failed")
    }
  }

  return (
    <div className="w-full max-w-md mx-4">
      <div className="bg-white/20 backdrop-blur-sm rounded-lg shadow-xl p-8 border border-white/80">
        <div className="flex items-center justify-center gap-2 mb-6">
          <FontAwesomeIcon icon={faLeaf} className="h-16 w-16" />
          <span className="text-2xl font-bold">KrishiKalp</span>
        </div>

        <Separator className="mb-6" />

        <form onSubmit={handleSubmit} className="space-y-4 mb-6">
          <div className="space-y-2">
            <Label htmlFor="email" className="text-gray-700 font-medium">
              Username/Email
            </Label>
            <div className="relative">
              <FontAwesomeIcon icon={faUser} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
              <Input
                id="email"
                type="email"
                placeholder="Username/Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="pl-10 bg-white/80 border-gray-300 focus:border-green-500 focus:ring-green-500 focus:outline-none"
                required
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="password" className="text-gray-700 font-medium">
              Password
            </Label>
            <div className="relative">
              <FontAwesomeIcon icon={faLock} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
              <Input
                id="password"
                type={showPassword ? "text" : "password"}
                placeholder="Password"
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

          <div className="flex justify-end">
            <Link href="/forgot-password" className="text-sm text-green-500 hover:text-green-600 hover:underline">
              Forgot Password?
            </Link>
          </div>

          <Button type="submit" className="w-full bg-green-500 hover:bg-green-600 text-white font-medium py-2.5">
            <FontAwesomeIcon icon={faSignInAlt} className="mr-2" />
            Log In
          </Button>
        </form>

        <Separator className="mb-6" />

        <div className="text-center">
          <p className="text-gray-900">
            {"Don't have an account? "}
            <Link href="/signup" className="text-green-500 hover:text-green-600 font-medium hover:underline">
              Sign Up
            </Link>
          </p>
        </div>
      </div>
    </div>
  )
}
