"use client";

import { motion } from "framer-motion";

const itemVariants = {
  hidden: { opacity: 0, y: -10 },
  show: { opacity: 1, y: 0 },
  hover: { scale: 1.05, color: "#2563EB" },
};

export default function About() {
  return (
    <section id="about" className="w-full py-20 text-center px-0">
      <motion.div
        className="relative inline-block mb-10 mx-auto text-center"
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
          About Me
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

      {/* About Paragraphs */}
      <div className="w-full max-w-[95%] text-2xl text-gray-300 leading-relaxed space-y-10 mx-auto px-0">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.4 }}
          viewport={{ once: false, amount: 0.3 }}
        >
          I’m a graduate student in Computer Engineering with a focus on Machine
          Learning, Deep Learning, and AI. I specialize in training and
          deploying scalable models using Python, PyTorch, TensorFlow, and MLOps
          tools. I have hands-on experience in benchmarking, optimization, and
          real-world inference workflows.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.4 }}
          viewport={{ once: false, amount: 0.3 }}
        >
          Beyond technical expertise, I bring a strong track record in
          leadership, communication, and creative content design. My strength
          lies in blending engineering skills with a collaborative,
          fast-learning mindset, driving both innovation and impact across
          academic, institutional, and real-world settings.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.4 }}
          viewport={{ once: false, amount: 0.3 }}
        >
          I’m passionate about solving complex problems at scale and turning
          cutting-edge research into accessible, high-impact solutions.
        </motion.p>
      </div>
    </section>
  );
}
