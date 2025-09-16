"use client"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faLeaf, faRightToBracket } from "@fortawesome/free-solid-svg-icons"
import { motion } from "framer-motion"

export default function Navbar() {
  return (
    <header className="absolute top-0 left-0 w-full z-20">
      <div className="absolute inset-0 h-24 bg-gradient-to-b from-black/70 to-transparent pointer-events-none" />

      <nav className="relative flex items-center justify-between px-8 py-4">
        <Link href="/" className="flex items-center gap-2 cursor-pointer">
          <FontAwesomeIcon icon={faLeaf} className="h-6 w-6 text-white" />
          <span className="text-xl font-bold text-white">Krishikalp</span>
        </Link>

        <div className="flex items-center gap-6">
            <motion.div 
            whileHover={{ scale: 1.05 }}
            className="transform-gpu will-change-transform"
            >
            <Link href="/" className="text-white hover:text-green-400 transition">
                Home
            </Link>
            </motion.div>
            <motion.div 
            whileHover={{ scale: 1.05 }}
            className="transform-gpu will-change-transform"
            >
            <Link href="/about" className="text-white hover:text-green-400 transition">
                About
            </Link>
            </motion.div>
            <motion.div 
            whileHover={{ scale: 1.05 }}
            className="transform-gpu will-change-transform"
            >
            <Link href="/contact" className="text-white hover:text-green-400 transition">
                Contact
            </Link>
            </motion.div>
        </div>

        <div className="flex items-center gap-3">
          <Link href="/login">
            <Button className="bg-green-500 hover:bg-green-600 text-white rounded-2xl cursor-pointer">
              <FontAwesomeIcon icon={faRightToBracket} className="h-4 w-4" />
              Log In
            </Button>
          </Link>
        </div>
      </nav>
    </header>
  )
}