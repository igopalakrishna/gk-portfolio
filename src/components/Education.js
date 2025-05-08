// File: components/EducationSection.jsx

"use client";

import { motion } from "framer-motion";

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
  hover: { scale: 1.05, color: "#2563EB" },
};

const schools = [
  {
    period: "Sept 2024 – May 2026 (Expected)",
    name: "New York University, MS in Computer Engineering",
    details: [
      "<strong>CGPA:</strong> 4.0 / 4.0",
      "<strong>Relevant Coursework:</strong> High‑Performance ML, Deep Learning, Machine Learning, Big Data, Computer System Architecture, Real-Time Systems",
    ],
  },
  {
    period: "Nov 2020 – May 2024",
    name: "NIT Rourkela, B.Tech in Electronics & Communication Engineering",
    details: [
      "<strong>CGPA:</strong> 8.03 / 10",
      "<strong>Relevant Coursework:</strong> Probability & Statistics, Digital Signal Processing, Digital Image Processing, Machine Intelligence, Embedded Systems, IoT & Applications, Soft Computing, Information Theory & Coding, Data Communication Networks",
    ],
  },
];

export default function EducationSection() {
  return (
    <section
      id="education"
      className="w-full py-20 text-white flex flex-col items-center px-4"
    >
      {/* Animated Section Header */}
      <motion.div
        className="relative inline-block mb-12 mx-auto text-center"
        variants={itemVariants}
        whileHover="hover"
        transition={{ type: "spring", stiffness: 300 }}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.3 }}
      >
        <motion.h2
          className="text-5xl md:text-6xl font-heading font-bold tracking-tight text-white cursor-pointer"
          transition={{ type: "spring", stiffness: 300 }}
          variants={{ hover: { scale: 1.05, color: "#2563EB" } }}
        >
          Education
        </motion.h2>
        <motion.span
          className="absolute left-0 bottom-[-12px] h-[2px] w-full bg-current"
          style={{ transformOrigin: "center" }}
          initial={{ scaleX: 0 }}
          variants={{ hover: { scaleX: 1, transition: { duration: 0.3 } } }}
        />
      </motion.div>

      {/* School Cards */}
      <div className="space-y-12 max-w-4xl w-full relative">
        {schools.map((s, idx) => (
          <motion.div
            key={idx}
            className="relative space-y-3 border border-white/10 p-6 rounded-xl hover:shadow-xl hover:shadow-blue-500/10 backdrop-glass"
            initial={{ opacity: 0, x: idx % 2 === 0 ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.6, delay: idx * 0.2 }}
          >
            <div className="text-xl text-blue-300 font-semibold">{s.name}</div>
            <div className="text-sm text-gray-400 italic">{s.period}</div>
            <ul className="flex flex-wrap gap-3 pt-2">
              {s.details.map((d, i) => (
                <li
                  key={i}
                  className="bg-gray-800 text-gray-200 text-sm px-4 py-2 rounded-full"
                  dangerouslySetInnerHTML={{ __html: d }}
                />
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
