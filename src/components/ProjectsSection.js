"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ProjectCard from "./ProjectCard";

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 300, damping: 24 },
  },
  hover: { scale: 1.05, color: "#2563EB" },
};

const projects = [
  {
    title: "Real‑Time Subway Traffic Prediction",
    date: "Apr 2025",
    description: [
      "Designed & deployed full‑stack real‑time pipeline for MTA turnstile data using Kafka → Spark → MongoDB.",
      "Trained Spark MLlib Random Forest model (RMSE ≈ 2700) for predicting NYC subway foot traffic.",
      "Stored live predictions in MongoDB, supporting adaptive scheduling dashboards.",
    ],
    tech: ["Kafka", "Spark", "MongoDB", "Python"],
    repo: "https://github.com/igopalakrishna/nyc-subway-foot-traffic-prediction-and-forecasting",
  },
  {
    title: "Colorectal Cancer Survival Prediction",
    date: "Apr 2025",
    description: [
      "Built full MLOps pipeline with Kubeflow, MLflow, Flask UI on 167K patient records.",
      "Achieved 82% feature reduction and ROC-AUC 0.4996 using Gradient Boosting.",
      "Reduced clinical processing time by 60% through automation.",
    ],
    tech: ["Scikit‑Learn", "MLflow", "Kubeflow", "Docker", "Flask"],
    repo: "https://github.com/igopalakrishna/colorectal-cancer-prediction",
  },
  {
    title: "TorchScript‑Optimized AI Chatbot",
    date: "Mar 2025",
    description: [
      "Built GPU‑accelerated Seq2Seq chatbot with Luong attention (2.88 loss after 4K iters).",
      "18.2% loss reduction via W&B hyperparameter sweeps.",
      "TorchScript conversion reduced latency 25%, 1.25× faster inference.",
    ],
    tech: ["PyTorch", "TorchScript", "W&B", "GRU", "Seq2Seq"],
    repo: "https://github.com/igopalakrishna/high-perf-chatbot-torchscript",
  },
  {
    title: "Personal AI Knowledge Worker (RAG)",
    date: "Dec 2024",
    description: [
      "Built Retrieval-Augmented Generation system (LangChain + FAISS + ChromaDB).",
      "Achieved 2.3× retrieval speedup with optimized chunking + vector indexing.",
      "Improved Q&A coherence by 30.8% via ConversationalRetrievalChain.",
    ],
    tech: ["LangChain", "FAISS", "ChromaDB", "OpenAI", "Gradio"],
    repo: "https://github.com/igopalakrishna/AI_knowledge_Worker",
  },
];

export default function ProjectsSection() {
  const [index, setIndex] = useState(0);
  const [bounceKey, setBounceKey] = useState(0);

  useEffect(() => {
    const handleHashChange = () => {
      if (window.location.hash === "#projects") {
        setBounceKey((prev) => prev + 1);
      }
    };
    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  const handlePrev = () => {
    setIndex((prev) => (prev - 1 + projects.length) % projects.length);
  };

  const handleNext = () => {
    setIndex((prev) => (prev + 1) % projects.length);
  };

  return (
    <motion.section
      id="projects"
      className="w-full py-32 scroll-mt-24 text-white text-center relative"
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.3 }}
      variants={{
        hidden: { opacity: 0, y: 40 },
        show: {
          opacity: 1,
          y: 0,
          transition: { type: "spring", stiffness: 300 },
        },
      }}
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
          Projects
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

      {/* Carousel */}
      <div className="relative w-full max-w-5xl mx-auto flex items-center justify-center px-4">
        <button
          onClick={handlePrev}
          className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-black/50 text-white rounded-full w-10 h-10 flex items-center justify-center hover:bg-black/70 transition"
        >
          ◀
        </button>

        <AnimatePresence mode="wait">
          <motion.div
            key={projects[index].title}
            className="w-full md:w-[95%] lg:w-[80%]"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.4 }}
          >
            <ProjectCard {...projects[index]} />
          </motion.div>
        </AnimatePresence>

        <button
          onClick={handleNext}
          className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-black/50 text-white rounded-full w-10 h-10 flex items-center justify-center hover:bg-black/70 transition"
        >
          ▶
        </button>
      </div>

      <div className="mt-6 flex justify-center space-x-3">
        {projects.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            className={`w-3 h-3 rounded-full transition ${
              i === index ? "bg-blue-400" : "bg-white/30"
            }`}
          />
        ))}
      </div>
    </motion.section>
  );
}
