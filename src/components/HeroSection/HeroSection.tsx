"use client"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import BallCanvas from "@/components/ui/Ball" 
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowRight } from "@fortawesome/free-solid-svg-icons"

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/hero.jpg"
          alt="Modern farm landscape"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-primary/60" />
      </div>

      {/* Content */}
      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-[1400px]">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mx-auto"
        >
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-2xl md:text-4xl lg:text-6xl font-bold text-primary-foreground mb-6 text-center lg:whitespace-nowrap"
          >
            Growing Together in Modern Agriculture
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-xl md:text-2xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto text-pretty"
          >
            Join thousands of farmers and agricultural professionals sharing knowledge, resources, and building the
            future of sustainable farming.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
          >
            <Button size="lg" variant="secondary" className="group cursor-pointer rounded-2xl">
              Join Our Community
              <FontAwesomeIcon
                icon={faArrowRight}
                className="ml-2 h-9 w-9 group-hover:translate-x-1 transition-transform"
              />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="bg-transparent rounded-2xl cursor-pointer border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
            >
              Explore Resources
            </Button>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-15 max-w-3xl mx-auto"
          >
            <div className="flex flex-col items-center h-60 w-60">
              <BallCanvas icon="/plant.png" />
            </div>

            <div className="flex flex-col items-center h-60 w-60">
              <BallCanvas icon="/drone.png" />
            </div>

            <div className="flex flex-col items-center h-60 w-60">
              <BallCanvas icon="/handshake.png" />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default HeroSection
