// File: components/ExperienceTimeline.jsx

"use client";

import { motion } from "framer-motion";

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0 },
  hover: { scale: 1.02, color: "#2563EB" },
};

const experiences = [
  {
    date: "Sept 2025 – Dec 2025 (Expected)",
    title: "Incoming Graduate ML Researcher – NYU VIP (M&A Outcome Prediction)",
    company: "New York University · Part-time",
    location: "Brooklyn, NY · On-site",
    bullets: [
      "Accepted into NYU Tandon’s VIP team to research ML-driven M&A outcome prediction using real financial data.",
      "Developing an ML pipeline (EDA to deployment) and experimenting with Random Forests, Deep Learning, and HMMs.",
      "Leading evaluations, simulations, and competition prep for IAQF/RITC alongside academic & industry presentations.",
    ],
  },
  {
    date: "May 2023 – Jul 2023",
    title: "Graduate Engineering Trainee Intern – (B.H.E.L)",
    company: "Bharat Heavy Electricals Limited · Internship",
    location: "Hyderabad, India · On-site",
    bullets: [
      "Leveraged Python-based analytics to model and optimize the GE SPEEDTRONIC™ Mark VIe system, increasing fuel efficiency by 10%.",
      "Developed predictive maintenance models for the Auxiliary Pump Module, reducing maintenance costs by 15%.",
      "Collaborated with cross-functional teams and gained hands-on exposure to industrial automation and real-time control applications.",
    ],
  },
];

export default function ExperienceTimeline() {
  return (
    <section
      id="experience"
      className="w-full py-20 text-white px-0 text-center "
    >
      {/* Animated Section Header */}
      <motion.div
        className="relative inline-block mb-16 mx-auto text-center"
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
          Experience
        </motion.h2>
        <motion.span
          className="absolute left-0 bottom-[-12px] h-[2px] w-full bg-current"
          style={{ transformOrigin: "center" }}
          initial={{ scaleX: 0 }}
          variants={{
            hover: { scaleX: 1, transition: { duration: 0.3 } },
          }}
        />
      </motion.div>

      {/* Timeline Container */}
      <div className="relative max-w-7xl mx-auto">
        {/* Vertical timeline line */}
        <div className="absolute left-1/2 top-0 bottom-0 w-[2px] bg-blue-500/30 -translate-x-1/2 z-0" />

        {/* Experience Cards */}
        {experiences.map((exp, idx) => (
          <motion.div
            key={idx}
            className={`relative w-full mb-20 flex ${
              idx % 2 === 0 ? "justify-start" : "justify-end"
            }`}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.6, delay: idx * 0.2 }}
            variants={itemVariants}
          >
            {/* Date Label */}
            <div
              className={`absolute top-2 text-sm text-gray-400 w-48 ${
                idx % 2 === 0 ? "-left-56 text-right" : "-right-56 text-left"
              }`}
            >
              {exp.date}
            </div>

            {/* Timeline Dot */}
            <div className="absolute left-1/2 top-4 -translate-x-1/2 w-3 h-3 bg-blue-500 rounded-full z-10 shadow-md" />

            {/* Experience Card */}
            <motion.div
              className={`w-[calc(50%-2rem)] p-2 rounded-xl backdrop-blur-md bg-white/5 shadow-md hover:shadow-blue-400/40 transition-all duration-300 ${
                idx % 2 === 0 ? "ml-8" : "mr-8"
              }`}
              whileHover={{ scale: 1.02 }}
            >
              <h3 className="text-xl font-bold mb-1">{exp.title}</h3>
              <p className="text-sm text-gray-400">{exp.company}</p>
              <p className="text-sm text-gray-400 mb-3">{exp.location}</p>
              <ul className="list-disc list-inside space-y-2 text-gray-300 text-[1rem]">
                {exp.bullets.map((b, i) => (
                  <li key={i}>{b}</li>
                ))}
              </ul>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
