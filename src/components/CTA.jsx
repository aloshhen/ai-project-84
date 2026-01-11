import { motion } from 'framer-motion'

export default function CTA() {
  return (
    <section className="py-24 bg-dark">
      <div className="container mx-auto px-4 text-center">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl font-bold mb-6"
        >
          Ready to Ship?
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-xl mb-8"
        >
          Get started with our reliable truck transportation services today!
        </motion.p>
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex justify-center"
        >
          <button className="bg-primary text-white px-8 py-3 rounded-full hover:bg-primary/90 transition-colors">
            Request a Quote
          </button>
        </motion.div>
      </div>
    </section>
  )
}