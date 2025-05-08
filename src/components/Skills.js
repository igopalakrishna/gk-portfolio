// File: src/components/Skills.js
"use client";

import { motion, useReducedMotion } from "framer-motion";

// Unified skill categories, reordered and updated:
const skillCategories = [
  {
    title: "Programming Languages",
    items: ["Python", "C/C++", "Java", "SQL", "JavaScript", "HTML/CSS"],
  },
  {
    title: "MLOps & Model Deployment",
    items: [
      "MLflow",
      "Data Version Control",
      "DagsHub",
      "Apache Airflow",
      "ONNX",
      "FastAPI",
      "Flask",
      "Kubeflow",
    ],
  },
  {
    title: "Cloud & DevOps",
    items: [
      "Docker",
      "Kubernetes",
      "Azure ML",
      "AWS SageMaker",
      "Microsoft Azure",
      "Jenkins",
    ],
  },
  {
    title: "Big Data & Distributed Computing",
    items: [
      "Apache Spark",
      "Apache Kafka",
      "PySpark",
      "Spark MLlib",
      "Hadoop",
      "Hive",
      "MapReduce",
    ],
  },
  {
    title: "ML/DL Frameworks",
    items: [
      "TensorFlow",
      "Keras",
      "PyTorch",
      "Scikit-Learn",
      "OpenCV",
      "NumPy",
      "Pandas",
      "SciPy",
      "Matplotlib",
    ],
  },
  {
    title: "Developer Tools",
    items: ["Git", "GitHub", "VS Code", "MATLAB", "Jupyter"],
  },
  {
    title: "Databases",
    items: ["MySQL", "MongoDB", "Azure Cosmos DB"],
  },
  {
    title: "Operating Systems",
    items: ["macOS", "Windows", "Linux (Ubuntu)"],
  },
  {
    title: "Creative Tools",
    items: [
      "Canva",
      "Figma",
      "Adobe Illustrator (basic)",
      "Microsoft PowerPoint",
    ],
  },
  {
    title: "Management Tools",
    items: [
      "Google Workspace",
      "Microsoft Office (Excel, Word, Outlook)",
      "Notion",
    ],
  },
  {
    title: "Soft Skills",
    items: [
      "Event Planning",
      "Team Coordination",
      "Public Speaking",
      "Content Writing",
      "Presentation Design",
    ],
  },
  {
    title: "Other Skills",
    items: [
      "Fast Learner",
      "Detail-Oriented",
      "Cross-Cultural Communication",
      "Multitasking",
    ],
  },
];

const containerVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.15 } },
};
const itemVariants = {
  hidden: { opacity: 0, y: 10 },
  show: { opacity: 1, y: 0 },
};

export default function Skills() {
  const reduceMotion = useReducedMotion();

  return (
    <motion.section
      id="skills"
      className="scroll-mt-12 space-y-4 py-12 text-center"
      initial={reduceMotion ? false : "hidden"}
      whileInView={reduceMotion ? false : "show"}
      viewport={{ once: false, amount: 0.2 }}
      variants={containerVariants}
    >
      {/*  Technical & Management Skills */}

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
          className="text-5xl md:text-5xl font-heading font-bold tracking-tight text-white cursor-pointer"
          transition={{ type: "spring", stiffness: 300 }}
          variants={{ hover: { scale: 1.05, color: "#2563EB" } }}
        >
          Technical & Management Skills
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

      {/* <motion.div
        className="relative inline-block mb-16 mx-auto text-center"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ type: "spring", stiffness: 300, damping: 15 }}
        whileHover="hover"
        viewport={{ once: false, amount: 0.3 }}
      >
        <motion.h2
          className="text-5xl md:text-6xl font-heading font-bold tracking-tight text-white cursor-pointer"
          variants={{ hover: { scale: 1.05, color: "#2563EB" } }}
        >
          Technical & Management Skills
        </motion.h2>
        <motion.span
          className="absolute left-0 bottom-[-12px] h-[2px] w-full bg-current"
          style={{ transformOrigin: "center" }}
          initial={{ scaleX: 0 }}
          variants={{ hover: { scaleX: 1, transition: { duration: 0.3 } } }}
        />
      </motion.div> */}

      <div className="space-y-4">
        {skillCategories.map(({ title, items }) => (
          <motion.div
            key={title}
            className="space-y-2"
            variants={itemVariants}
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <motion.h3
              className="text-xl font-semibold"
              variants={itemVariants}
              whileHover={{ scale: 1.03 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              {title}
            </motion.h3>

            <motion.div
              className="flex flex-wrap justify-center gap-3"
              variants={containerVariants}
            >
              {items.map((s) => (
                <motion.span
                  key={s}
                  tabIndex={0}
                  className="px-3 py-1 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-full text-sm cursor-pointer focus:outline-none focus:ring-2 focus:ring-primary"
                  variants={itemVariants}
                  whileHover={{
                    scale: 1.1,
                    backgroundColor: "#2563EB",
                    color: "#FFFFFF",
                  }}
                  transition={{
                    type: "tween",
                    ease: "anticipate",
                    duration: 0.4,
                  }}
                >
                  {s}
                </motion.span>
              ))}
            </motion.div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}
