"use client"
import { motion } from "motion/react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faEnvelope,
  faPhone,
  faLocationDot,
  faMessage,
  faLeaf,
  faPaperPlane
} from "@fortawesome/free-solid-svg-icons"
import { Button } from "../ui/button"
import { Input } from "../ui/input"
import { Textarea } from "../ui/textarea"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card"
import { SendHorizonal } from "lucide-react"
import { Label } from "../ui/label"

export default function Contact() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-amber-50 to-white px-8 py-16">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-4xl w-full text-center"
      >
        {/* Heading */}
        <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6 flex items-center justify-center gap-3">
          <FontAwesomeIcon icon={faMessage} className="h-8 w-8 text-primary" />
          Contact Us
        </h1>

        <p className="text-lg text-gray-700 leading-relaxed mb-12">
          Have questions or suggestions? We’d love to hear from you!
          Reach out to us anytime and we’ll get back as soon as possible.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="shadow-xl hover:shadow-2xl transition-shadow duration-200">
            <CardHeader>
              <CardTitle>
                <div className="flex items-center justify-center space-x-2">
                  <FontAwesomeIcon icon={faLeaf} className="h-8 w-8 text-sidebar-accent" />
                  <span className="text-xl font-bold text-sidebar-foreground">Contact Us</span>
                </div>
                <CardDescription className="text-sm text-muted-foreground font-light">
                  We usually respond in 1-2 business days.
                </CardDescription>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <motion.form
                whileHover={{ scale: 1.001 }}
                className="flex flex-col gap-y-6"
              >
                <div className="grid gap-1">
                  <Label className="text-sm text-muted-foreground">Name</Label>
                  <Input
                    type="text"
                    placeholder="Your Name"
                    className="caret-primary bg-background rounded-lg border border-text-foreground focus:outline-none focus:ring-2 focus:ring-amber-400"
                    required
                  />
                </div>
                <div className="grid gap-1">
                  <Label className="text-sm text-muted-foreground">Email</Label>
                  <Input
                    type="email"
                    placeholder="Your Email"
                    className="caret-primary bg-background rounded-lg border border-text-foreground focus:outline-none focus:ring-2 focus:ring-amber-400"
                    required
                  />
                </div>
                <div className="grid gap-1">
                  <Label className="text-sm text-muted-foreground">Message</Label>
                  <Textarea
                    placeholder="Your Message"
                    rows={5}
                    className="caret-primary min-h-[140px] bg-background rounded-lg border-text-foreground focus:outline-none focus:ring-2 focus:ring-amber-400"
                    required
                  />
                </div>
                <Button
                  type="submit"
                  className="font-semibold transition"
                >
                  <motion.span whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.98 }} transition={{ duration: 0.2 }}>
                    <FontAwesomeIcon icon={faPaperPlane} />
                  </motion.span>
                  Send Message
                </Button>
              </motion.form>
            </CardContent>
          </Card>
          {/* Contact Info */}
          <div className="flex flex-col gap-6">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="p-5 bg-amber-100 rounded-xl shadow-md flex items-center gap-4"
            >
              <FontAwesomeIcon
                icon={faEnvelope}
                className="h-6 w-6 text-amber-700"
              />
              <span className="text-gray-700">support@KrishiKalp.com</span>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              className="p-5 bg-amber-100 rounded-xl shadow-md flex items-center gap-4"
            >
              <FontAwesomeIcon
                icon={faPhone}
                className="h-6 w-6 text-amber-700"
              />
              <span className="text-gray-700">+91 9064926904</span>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              className="p-5 bg-amber-100 rounded-xl shadow-md flex items-center gap-4"
            >
              <FontAwesomeIcon
                icon={faLocationDot}
                className="h-6 w-6 text-amber-700"
              />
              <span className="text-gray-700">
                Kolkata, West Bengal, India
              </span>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  )
}
