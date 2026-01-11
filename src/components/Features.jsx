import { ShieldCheck, Clock, Map, Truck } from 'lucide-react'
import { motion } from 'framer-motion'

export default function Features() {
  const features = [
    {
      icon: <ShieldCheck className="w-12 h-12 text-primary" />,
      title: "Safe Delivery",
      description: "Our trucks are equipped with advanced safety features to ensure your cargo arrives intact."
    },
    {
      icon: <Clock className="w-12 h-12 text-secondary" />,
      title: "On-Time Delivery",
      description: "We guarantee timely delivery with our efficient logistics system."
    },
    {
      icon: <Map className="w-12 h-12 text-accent" />,
      title: "Nationwide Coverage",
      description: "We operate across the country with a vast network of transportation hubs."
    },
    {
      icon: <Truck className="w-12 h-12 text-primary" />,
      title: "Modern Fleet",
      description: "Our fleet consists of modern, well-maintained trucks for reliable service."
    }
  ]

  return (
    <section className="py-24 bg-dark">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl font-bold text-center mb-12"
        >
          Why Choose Us?
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="bg-dark/50 p-8 rounded-2xl border border-dark/10 hover:border-primary/20 transition-colors"
            >
              <div className="text-center">
                <div className="flex justify-center mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                <p className="text-light/80">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}