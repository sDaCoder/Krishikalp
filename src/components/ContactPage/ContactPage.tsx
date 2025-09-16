"use client"
import { motion } from "framer-motion"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faEnvelope,
  faPhone,
  faLocationDot,
  faMessage
} from "@fortawesome/free-solid-svg-icons"

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
        <h1 className="text-4xl md:text-5xl font-bold text-amber-800 mb-6 flex items-center justify-center gap-3">
          <FontAwesomeIcon icon={faMessage} className="h-8 w-8 text-amber-700" />
          Contact Us
        </h1>

        <p className="text-lg text-gray-700 leading-relaxed mb-12">
          Have questions or suggestions? We’d love to hear from you!  
          Reach out to us anytime and we’ll get back as soon as possible.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.form
            whileHover={{ scale: 1.01 }}
            className="bg-white shadow-lg rounded-2xl border border-amber-200 p-6 flex flex-col gap-4"
          >
            <input
              type="text"
              placeholder="Your Name"
              className="p-3 border border-amber-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-400"
              required
            />
            <input
              type="email"
              placeholder="Your Email"
              className="p-3 border border-amber-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-400"
                required
            />
            <textarea
              placeholder="Your Message"
              rows={5}
              className="p-3 border border-amber-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-400"
              required
            />
            <button
              type="submit"
              className="bg-amber-700 hover:bg-amber-800 text-white font-semibold py-3 rounded-lg transition"
            >
              Send Message
            </button>
          </motion.form>

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
              <span className="text-gray-700">support@agriconnect.com</span>
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
