"use client"
import { useState } from "react"
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { toast } from "sonner"
import { CheckCircle, XCircle } from "lucide-react"

export default function ContactPage() {
  const [loading, setLoading] = useState(false)

  const handleSubmit = () => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)

      const success = Math.random() > 0.5

      if (success) {
        toast.success("Message sent successfully!", {
          duration: 3000,
          icon: <CheckCircle className="text-green-500" />,
        })
      } else {
        toast.error("Failed to send message!", {
          duration: 3000,
          icon: <XCircle className="text-red-500" />,
        })
      }
    }, 1000)
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2">
      <div className="flex items-center justify-center bg-amber-50">
        <Card className="w-full max-w-md bg-white border-amber-300 shadow-lg">
          <CardHeader>
            <CardTitle className="text-amber-600 text-xl font-semibold">Contact Us</CardTitle>
            <CardDescription className="text-amber-700">
              We'd love to hear from you! Fill out the form below and we’ll get back to you shortly.
            </CardDescription>
          </CardHeader>

          <CardContent className="space-y-4">
            <Input placeholder="Your Name" className="border-amber-300 focus:ring-amber-400" />
            <Input placeholder="Your Email" className="border-amber-300 focus:ring-amber-400" />
            <Textarea placeholder="Your Message" className="border-amber-300 focus:ring-amber-400" rows={4} />
          </CardContent>

          <CardFooter className="flex justify-end">
            <Button
              className="bg-amber-500 hover:bg-amber-600 text-white rounded-lg"
            >
              Send Message
            </Button>
          </CardFooter>
        </Card>
      </div>

      <div className="hidden md:block relative">
        <img src="/wheat-2391348.jpg" alt="Image" className="object-fill h-full w-full" />
      </div>
    </div>
  )
}
