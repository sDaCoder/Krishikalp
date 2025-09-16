"use client"
import { motion } from "framer-motion"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

import { faLeaf,faDroplet, faCloudSunRain, faSeedling, faChartLine, faBell } from "@fortawesome/free-solid-svg-icons"

export default function About() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-amber-50 to-white px-8 py-16">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-3xl text-center"
      >
        {/* Heading */}
        <h1 className="text-3xl md:text-5xl font-bold text-green-700 mb-6 flex items-center justify-center gap-2 md:gap-3">
          <FontAwesomeIcon icon={faLeaf} className="h-7 w-7 md:h-8 md:w-8 text-[#bff542]" />
          <span className="whitespace-nowrap text-[#f5aa42]">About Krishikalp</span>
        </h1>

        {/* Paragraph */}
        <p className="text-lg text-[#8b5c2a] leading-relaxed mb-8">
          <span className="font-semibold text-[#8b5c2a]">Krishikalp</span> is a
          smart agriculture and weather platform designed to help farmers and
          communities make informed decisions. Our goal is to provide real-time
          weather updates, crop recommendations, irrigation insights, and
          sustainable farming practices—all in one place.
        </p>

        {/* Features Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="p-6 bg-amber-100 rounded-2xl shadow-lg border border-green-100"
          >
            <FontAwesomeIcon
              icon={faCloudSunRain}
              className="h-10 w-10 text-green-500 mb-4"
            />
            <h3 className="text-xl font-semibold text-black">Weather Alerts</h3>
            <p className="text-gray-600 mt-2">
              Get real-time weather forecasts and early warnings for rainfall,
              drought, and storms.
            </p>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05 }}
            className="p-6 bg-amber-100 rounded-2xl shadow-lg border border-green-100"
          >
            <FontAwesomeIcon
              icon={faSeedling}
              className="h-10 w-10 text-green-500 mb-4"
            />
            <h3 className="text-xl font-semibold text-black">Crop Advisory</h3>
            <p className="text-gray-600 mt-2">
              AI-powered crop recommendations based on soil health, climate, and
              market trends.
            </p>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05 }}
            className="p-6 bg-amber-100 rounded-2xl shadow-lg border border-green-100"
          >
            <FontAwesomeIcon
              icon={faLeaf}
              className="h-10 w-10 text-green-500 mb-4"
            />
            <h3 className="text-xl font-semibold text-black">Sustainable Farming</h3>
            <p className="text-gray-600 mt-2">
              Learn best practices to improve yield while keeping farming
              eco-friendly and sustainable.
            </p>
          </motion.div>
           {/* Yield & Market Insights */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="p-6 bg-amber-100 rounded-2xl shadow-lg border border-green-100"
          >
            <FontAwesomeIcon
              icon={faChartLine}
              className="h-10 w-10 text-green-500 mb-4"
            />
            <h3 className="text-xl font-semibold text-black">Market Insights</h3>
            <p className="text-gray-600 mt-2">
              Stay updated on crop prices, market demand, and yield predictions
              to maximize profits.
            </p>
          </motion.div>

          {/* Notifications */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="p-6 bg-amber-100 rounded-2xl shadow-lg border border-green-100"
          >
            <FontAwesomeIcon
              icon={faBell}
              className="h-10 w-10 text-green-500 mb-4"
            />
            <h3 className="text-xl font-semibold text-black">Instant Alerts</h3>
            <p className="text-gray-600 mt-2">
              Receive instant SMS/WhatsApp notifications for weather changes,
              advisory updates, and emergencies.
            </p>
          </motion.div>
          
          {/* Smart Irrigation */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="p-6 bg-amber-100 rounded-2xl shadow-lg border border-green-100"
          >
            <FontAwesomeIcon
              icon={faDroplet}
              className="h-10 w-10 text-green-500 mb-4"
            />
            <h3 className="text-xl font-semibold text-black">Smart Irrigation</h3>
            <p className="text-gray-600 mt-2">
              Get water usage insights and irrigation schedules based on soil
              moisture and rainfall predictions.
            </p>
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}
