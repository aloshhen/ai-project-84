import { ArrowRight, Truck } from 'lucide-react'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="min-h-screen relative flex items-center justify-center bg-[url('https://source.unsplash.com/1920x1080/?truck')] bg-cover bg-center">
      <div className="absolute inset-0 bg-dark/60" />
      <div className="relative z-10 container mx-auto px-4 text-center">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-7xl font-bold mb-6"
        >
          Reliable Truck Transportation
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-xl md:text-2xl mb-8"
        >
          Fast, safe and efficient cargo delivery across the country
        </motion.p>
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex gap-4 justify-center"
        >
          <button className="bg-primary text-white px-8 py-3 rounded-full flex items-center gap-2 hover:bg-primary/90 transition-colors">
            Get Started <ArrowRight className="w-5 h-5" />
          </button>
          <button className="bg-secondary text-white px-8 py-3 rounded-full flex items-center gap-2 hover:bg-secondary/90 transition-colors">
            Learn More
          </button>
        </motion.div>
      </div>
    </section>
  )
}