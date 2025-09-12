"use client"
import React from 'react'
import { motion } from 'motion/react'
import { Leaf } from 'lucide-react'
import { useRouter } from 'next/navigation'
import { Button } from '@/components/ui/button'

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
                <motion.div onClick={() => {router.push("/")}} whileHover={{ scale: 1.05 }} className="flex items-center justify-center space-x-2 cursor-pointer">
                    <Leaf className="h-8 w-8 text-primary-foreground" />
                    <span className="text-xl font-bold text-primary-foreground">AgriConnect</span>
                </motion.div>

                <motion.div className='hidden md:flex items-center space-x-4 text-background'>
                    <motion.div whileHover={{ scale: 1.05 }} onClick={() => {router.push("/")}} className="cursor-pointer hover:text-primary-foreground">Home</motion.div>
                    <motion.div whileHover={{ scale: 1.05 }} onClick={() => {router.push("/about")}} className="cursor-pointer">About</motion.div>
                    <motion.div whileHover={{ scale: 1.05 }} onClick={() => {router.push("/contact")}} className="cursor-pointer">Contact</motion.div>
                </motion.div>

                <div className='hidden md:flex items-center space-x-2'>
                    <Button variant={'secondary'} onClick={() => {router.push("/login")}}>Log In</Button>
                    <Button onClick={() => {router.push("/signup")}}>Sign Up</Button>
                </div>

            </motion.header>
        </>
    )
}

export default Header
