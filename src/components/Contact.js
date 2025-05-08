// // File: src/components/Contact.js
// "use client";

// import { Github, Linkedin } from "lucide-react";

// export default function Contact() {
//   return (
//     <section id="contact" className="text-center py-16">
//       <h2 className="text-3xl font-heading font-semibold mb-4">Get in Touch</h2>
//       <p className="text-lg mb-6">
//         Email me at{" "}
//         <a
//           href="mailto:yourname@example.com"
//           className="text-primary underline hover:text-primary-dark"
//         >
//           abbagopalakrishna@gmail.com
//         </a>
//       </p>

//       <div className="flex justify-center items-center gap-6 mb-6 text-gray-800 dark:text-gray-200">
//         <a
//           href="https://github.com/igopalakrishna"
//           aria-label="GitHub Profile"
//           target="_blank"
//           rel="noopener noreferrer"
//           className="hover:text-primary"
//         >
//           <Github size={24} />
//         </a>

//         <a
//           href="https://linkedin.com/in/igopalakrishna"
//           aria-label="LinkedIn Profile"
//           target="_blank"
//           rel="noopener noreferrer"
//           className="hover:text-primary"
//         >
//           <Linkedin size={24} />
//         </a>

//         <a
//           href="https://x.com/igopalakrishna"
//           aria-label="X Profile"
//           target="_blank"
//           rel="noopener noreferrer"
//           className="hover:text-primary"
//         >
//           {/* Use your downloaded X logo */}
//           <img
//             src="/logo-white.png"
//             alt="X logo"
//             className="h-6 w-6 inline-block"
//           />
//         </a>
//       </div>

//       <footer className="text-gray-500 text-sm">
//         © {new Date().getFullYear()} Gopala Krishna Abba
//       </footer>
//     </section>
//   );
// }
"use client";

import { motion } from "framer-motion";
import { Github, Linkedin } from "lucide-react";

export default function Contact() {
  return (
    <motion.section
      id="contact"
      className="text-center py-16 relative"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ type: "spring", stiffness: 300 }}
      viewport={{ once: true, amount: 0.3 }}
    >
      {/* Animated Glow Background */}
      <div className="absolute -z-10 left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-blue-500 opacity-10 blur-3xl rounded-full" />

      {/* Animated Heading */}
      <motion.h2
        className="text-4xl md:text-5xl font-heading font-bold text-white mb-4"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        Get in Touch
      </motion.h2>

      <p className="text-lg mb-6 text-gray-300">
        Email me at{" "}
        <span className="relative group inline-block">
          <span className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-600 blur-md opacity-0 group-hover:opacity-40 transition rounded-md" />
          <a
            href="mailto:abbagopalakrishna@gmail.com"
            className="relative z-10 text-blue-300 underline hover:text-blue-400"
          >
            abbagopalakrishna@gmail.com
          </a>
        </span>
      </p>

      {/* Social Icons with Animation */}
      <motion.div
        className="flex justify-center items-center gap-6 mb-6 text-gray-200"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.6 }}
      >
        <motion.a
          whileHover={{ scale: 1.3 }}
          whileTap={{ scale: 0.9 }}
          href="https://github.com/igopalakrishna"
          aria-label="GitHub Profile"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Github size={28} />
        </motion.a>

        <motion.a
          whileHover={{ scale: 1.3 }}
          whileTap={{ scale: 0.9 }}
          href="https://linkedin.com/in/igopalakrishna"
          aria-label="LinkedIn Profile"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Linkedin size={28} />
        </motion.a>

        <motion.a
          whileHover={{ scale: 1.3 }}
          whileTap={{ scale: 0.9 }}
          href="https://x.com/igopalakrishna_"
          aria-label="X Profile"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="/logo-white.png"
            alt="X logo"
            className="h-6 w-6 inline-block"
          />
        </motion.a>
      </motion.div>

      {/* Call-to-Action Button */}
      <a
        href="mailto:abbagopalakrishna@gmail.com"
        className="inline-block px-6 py-2 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg hover:shadow-xl transition-all hover:scale-105"
      >
        Say Hello 🚀
      </a>

      <footer className="mt-8 text-gray-500 text-sm">
        © {new Date().getFullYear()} Gopala Krishna Abba
      </footer>
    </motion.section>
  );
}
