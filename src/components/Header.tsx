"use client"
import React from "react"
import { motion } from "motion/react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faLeaf, faRightToBracket, faUserPlus } from "@fortawesome/free-solid-svg-icons"

const Header: React.FC = () => {
  const router = useRouter()

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="sticky top-0 z-50 w-full bg-[#a16207]/95 backdrop-blur supports-[backdrop-filter]:bg-[#a16207]/60
        flex items-center justify-between p-4"
      >
        <motion.div
          onClick={() => {
            router.push("/")
          }}
          whileHover={{ scale: 1.05 }}
          className="flex items-center justify-center space-x-2 cursor-pointer"
        >
          <FontAwesomeIcon icon={faLeaf} className="h-8 w-8 text-primary-foreground" />
          <span className="text-xl font-bold text-primary-foreground">Krishikalp</span>
        </motion.div>

        {/* Navigation */}
        <motion.div className="hidden md:flex items-center space-x-4 text-background">
          <motion.div
            whileHover={{ scale: 1.05 }}
            onClick={() => {
              router.push("/")
            }}
            className="cursor-pointer text-lg transform-gpu will-change-transform hover:text-yellow-100"
          >
            Home
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.05 }}
            onClick={() => {
              router.push("/about")
            }}
            className="cursor-pointer text-lg transform-gpu will-change-transform hover:text-yellow-100"
          >
            About
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.05 }}
            onClick={() => {
              router.push("/contact")
            }}
            className="cursor-pointer text-lg transform-gpu will-change-transform hover:text-yellow-100"
          >
            Contact
          </motion.div>
        </motion.div>

        {/* Auth Buttons */}
        <div className="hidden md:flex items-center space-x-2">
          <Button
            className="cursor-pointer flex items-center gap-2 rounded-2xl"
            variant={"secondary"}
            onClick={() => {
              router.push("/login")
            }}
          >
            <FontAwesomeIcon icon={faRightToBracket} className="h-4 w-4" />
            Log In
          </Button>
          <Button
            className="cursor-pointer flex items-center gap-2 rounded-2xl"
            onClick={() => {
              router.push("/signup")
            }}
          >
            <FontAwesomeIcon icon={faUserPlus} className="h-4 w-4" />
            Sign Up
          </Button>
        </div>
      </motion.header>
    </>
  )
}

export default Header
