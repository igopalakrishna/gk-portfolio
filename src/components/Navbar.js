import Link from "next/link";
import { motion } from "framer-motion";

export default function Navbar() {
  return (
    <motion.nav
      className="fixed top-0 w-full bg-white/80 backdrop-blur shadow"
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-4xl mx-auto flex justify-between p-4">
        <Link href="/">
          <a className="text-2xl font-bold">GK</a>
        </Link>
        <div className="space-x-4">
          <Link href="#projects">
            <a>Projects</a>
          </Link>
          <Link href="#about">
            <a>About</a>
          </Link>
          <Link href="#contact">
            <a>Contact</a>
          </Link>
        </div>
      </div>
    </motion.nav>
  );
}
