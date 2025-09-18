"use client"
import React from "react"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faLeaf } from "@fortawesome/free-solid-svg-icons"
import { CanvasRevealEffect } from "@/components/ui/CanvasRevealEffect"

// 🔹 Card Component
const Card = ({
  title,
  des,
  href,
  children,
}: {
  title: string
  des: string
  href: string
  children?: React.ReactNode
}) => {
  const [hovered, setHovered] = React.useState(false)

  return (
    <Link href={href} className="block">
      <div
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        className="border border-black/[0.2] group/canvas-card flex items-center justify-center
          dark:border-white/[0.2] max-w-sm w-full mx-auto p-4 relative lg:h-[28rem] rounded-3xl"
        style={{
          background: "linear-gradient(to top, #fff8dc 20%, #fef9c3 60%, #d9f99d 100%)",
        }}
      >
        {/* Decorative Icons */}
        <Icon className="absolute h-8 w-8 -top-2 -left-2 text-yellow-600 opacity-70" />
        <Icon className="absolute h-8 w-8 -bottom-2 -left-2 text-yellow-600 opacity-70" />
        <Icon className="absolute h-8 w-8 -top-2 -right-2 text-yellow-600 opacity-70" />
        <Icon className="absolute h-8 w-8 -bottom-2 -right-2 text-yellow-600 opacity-70" />

        {/* Hover Effect Background */}
        <AnimatePresence>
          {hovered && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="h-full w-full absolute inset-0"
            >
              {children}
            </motion.div>
          )}
        </AnimatePresence>

        {/* Content */}
        <div className="relative z-20 px-6 text-center">
          {!hovered && (
            <div className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
              <div className="relative inline-flex rounded-full p-[2px]">
                <span
                  className="relative rounded-full bg-white/80 px-8 py-2 font-bold text-green-600 whitespace-nowrap text-lg"
                >
                  {title}
                </span>
              </div>
            </div>
          )}

          {hovered && (
            <p
              className="text-lg text-[#f5aa42] font-medium px-4 cursor-pointer"
            >
              {des}
            </p>
          )}
        </div>
      </div>
    </Link>
  )
}

// Decorative Icon
const Icon = ({ className, ...rest }: any) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth="2"
    stroke="currentColor"
    className={className}
    {...rest}
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
  </svg>
)

// 🔹 About Page
export default function About() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-amber-50 to-white px-8 py-16">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-5xl text-center"
      >
        {/* Heading */}
        <h1 className="text-4xl md:text-5xl font-bold text-green-700 mb-6 flex items-center justify-center gap-2 md:gap-3">
          <FontAwesomeIcon icon={faLeaf} className="h-7 w-7 md:h-8 md:w-8 text-[#bff542]" />
          <span className="whitespace-nowrap text-[#f5aa42]">Features</span>
        </h1>

        {/* Paragraph */}
        <p className="text-lg text-yellow-700 leading-relaxed mb-12">
          <span className="font-semibold text-yellow-800">KrishiKalp</span> is a
          smart agriculture and weather platform designed to help farmers and
          communities make informed decisions. Our goal is to provide real-time
          weather updates, crop recommendations, irrigation insights, and
          sustainable farming practices—all in one place.
        </p>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card
            title="Weather Advisory"
            des="Get real-time weather forecasts and early warnings for rainfall, drought, and storms."
            href="/weather"
          >
            <CanvasRevealEffect
              animationSpeed={3}
              containerClassName="bg-yellow-100 rounded-3xl overflow-hidden"
              colors={[
                [255, 239, 184],
                [200, 230, 150],
                [220, 240, 200],
              ]}
              dotSize={3}
            />
          </Card>

          <Card
            title="Crop Disease Prediction"
            des="AI-powered crop disease prediction based on images provided."
            href="/recommendation"
          >
            <CanvasRevealEffect
              animationSpeed={3}
              containerClassName="bg-yellow-100 rounded-3xl overflow-hidden"
              colors={[
                [255, 239, 184],
                [200, 230, 150],
                [220, 240, 200],
              ]}
              dotSize={3}
            />
          </Card>

          <Card
            title="Sustainable Farming"
            des="Learn best practices to improve yield while keeping farming eco-friendly and sustainable."
            href="/sustainable-farming"
          >
            <CanvasRevealEffect
              animationSpeed={3}
              containerClassName="bg-yellow-100 rounded-3xl overflow-hidden"
              colors={[
                [255, 239, 184],
                [200, 230, 150],
                [220, 240, 200],
              ]}
              dotSize={3}
            />
          </Card>

          <Card
            title="Market Insights"
            des="Stay updated on crop prices, market demand, and yield predictions to maximize profits."
            href="/market-insights"
          >
            <CanvasRevealEffect
              animationSpeed={3}
              containerClassName="bg-yellow-100 rounded-3xl overflow-hidden"
              colors={[
                [255, 239, 184],
                [200, 230, 150],
                [220, 240, 200],
              ]}
              dotSize={3}
            />
          </Card>

          <Card
            title="Instant Alerts"
            des="Receive instant SMS/WhatsApp notifications for weather changes, advisory updates, and emergencies."
            href="/instant-alerts"
          >
            <CanvasRevealEffect
              animationSpeed={3}
              containerClassName="bg-yellow-100 rounded-3xl overflow-hidden"
              colors={[
                [255, 239, 184],
                [200, 230, 150],
                [220, 240, 200],
              ]}
              dotSize={3}
            />
          </Card>

          <Card
            title="Smart Irrigation"
            des="Get water usage insights and irrigation schedules based on soil moisture and rainfall predictions."
            href="/smart-irrigation"
          >
            <CanvasRevealEffect
              animationSpeed={3}
              containerClassName="bg-yellow-100 rounded-3xl overflow-hidden"
              colors={[
                [255, 239, 184],
                [200, 230, 150],
                [220, 240, 200],
              ]}
              dotSize={3}
            />
          </Card>
        </div>
      </motion.div>
    </section>
  )
}