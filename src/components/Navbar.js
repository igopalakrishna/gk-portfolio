"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function Navbar() {
  return (
    <motion.nav
      className="fixed top-0 w-full z-50 bg-white/10 backdrop-blur-md shadow-md text-white"
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Left side - Welcome only */}
          <div className="text-sm text-gray-300 tracking-widest uppercase">
            Welcome to my portfolio
          </div>

          {/* Right side - Navigation Links */}
          <div className="space-x-6 text-sm font-medium text-gray-200">
            <Link href="#about" className="hover:text-blue-400 transition">
              About
            </Link>
            <Link href="#experience" className="hover:text-blue-400 transition">
              Experience
            </Link>
            <Link href="#education" className="hover:text-blue-400 transition">
              Education
            </Link>
            <Link href="#projects" className="hover:text-blue-400 transition">
              Projects
            </Link>
            <Link href="#skills" className="hover:text-blue-400 transition">
              Skills
            </Link>

            <Link href="#contact" className="hover:text-blue-400 transition">
              Contact
            </Link>
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-300 hover:underline"
            >
              View Résumé
            </a>
          </div>
        </div>
      </div>
    </motion.nav>
  );
}
