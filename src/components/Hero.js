"use client";

import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";

export default function Hero() {
  return (
    <motion.section
      className="min-h-screen w-full flex flex-col justify-center items-center text-white text-center relative px-4"
      initial="hidden"
      animate="show"
    >
      {/* Large Typewriter Greeting */}
      <motion.h1
        className="whitespace-nowrap text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold font-mono text-blue-400 mb-6"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <Typewriter
          words={["Hi there!", "I'm Gopala Krishna"]}
          loop={1}
          cursor
          cursorStyle="|"
          typeSpeed={70}
          deleteSpeed={40}
          delaySpeed={1000}
        />
      </motion.h1>

      {/* Larger Subtitle */}
      <motion.p
        className="mt-4 text-3xl md:text-4xl font-semibold"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 3.5, duration: 0.6 }}
      >
        An Aspiring AI/ML Engineer @ NYU
      </motion.p>

      {/* Scroll Down Indicator */}
      <motion.div
        className="absolute bottom-20 flex flex-col items-center space-y-2 animate-bounce"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 5, duration: 0.8 }}
      >
        <span className="text-sm uppercase">Scroll</span>
        <svg
          className="h-6 w-6 text-white"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </motion.div>
    </motion.section>
  );
}
