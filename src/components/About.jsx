import { motion } from 'framer-motion'

export default function About() {
  return (
    <section className="py-24 bg-dark/50">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl font-bold text-center mb-12"
        >
          How It Works
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              title: "Request a Quote",
              description: "Fill out our simple form to get an instant quote for your shipment."
            },
            {
              title: "Schedule Pickup",
              description: "Choose a convenient time for us to pick up your cargo."
            },
            {
              title: "Track & Deliver",
              description: "Track your shipment in real-time until it reaches its destination."
            }
          ].map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="bg-dark/50 p-8 rounded-2xl border border-dark/10 hover:border-primary/20 transition-colors"
            >
              <div className="text-center">
                <span className="text-primary text-2xl font-bold mb-2 block">Step {index + 1}</span>
                <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                <p className="text-light/80">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}