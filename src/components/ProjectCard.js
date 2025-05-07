import { motion } from "framer-motion";

export default function ProjectCard({ title, description, tech, link }) {
  return (
    <motion.a
      href={link}
      className="block p-6 bg-white/90 backdrop-blur-lg rounded-xl shadow hover:shadow-xl transition"
      whileHover={{ scale: 1.02 }}
    >
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-700 mb-4">{description}</p>
      <div className="text-sm text-gray-500">{tech.join(" • ")}</div>
    </motion.a>
  );
}
