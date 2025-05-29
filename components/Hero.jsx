import { motion } from "framer-motion";


export default function Hero() {
  return (
    <section className="relative w-full h-screen flex items-center justify-between px-6 md:px-20 bg-base text-text">
      {/* Left Content */}
      <div className="max-w-xl z-10">
        <motion.h1 
          className="text-4xl md:text-6xl font-heading font-bold leading-tight mb-4"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Robert Muyanja
        </motion.h1>

        <motion.p 
          className="text-lg md:text-xl mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          Digital Marketing, Market Intelligence & Brand Communications Consultant.
        </motion.p>

        <motion.div 
          className="flex gap-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          <a href="#portfolio" className="px-6 py-3 bg-primary text-base font-semibold rounded-md hover:opacity-90">
            View Portfolio
          </a>
          <a href="#contact" className="px-6 py-3 border border-primary text-primary font-semibold rounded-md hover:bg-primary hover:text-black transition">
            Contact Me
          </a>
        </motion.div>
      </div>

      {/* Placeholder for 3D or Illustration */}
      <div className="hidden md:block w-1/2 h-full">
        {/* Placeholder – replace with 3D Canvas later */}
        <div className="w-full h-full bg-gradient-to-br from-indigo-900 via-black to-indigo-700 rounded-lg shadow-lg flex items-center justify-center">
          <span className="text-primary text-2xl">3D Canvas Here</span>
        </div>
      </div>
    </section>
  );
}


