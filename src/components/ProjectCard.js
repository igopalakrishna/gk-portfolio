"use client";

export default function ProjectCard({ title, date, description, tech, repo }) {
  return (
    <div className="rounded-2xl bg-white/10 backdrop-blur-md border border-white/10 text-white p-8 transition-all duration-300 transform hover:scale-105 hover:shadow-blue-500/30 hover:shadow-xl">
      <h3 className="text-2xl font-bold mb-1">{title}</h3>
      <p className="text-sm text-gray-300 mb-4">{date}</p>
      <ul className="list-disc pl-5 text-sm text-gray-200 space-y-2">
        {description.map((line, i) => (
          <li key={i}>{line}</li>
        ))}
      </ul>
      <div className="flex flex-wrap gap-2 mt-4">
        {tech.map((t, i) => (
          <span
            key={i}
            className="px-3 py-1 bg-gray-700/60 text-xs rounded-full text-gray-100"
          >
            {t}
          </span>
        ))}
      </div>
      <a
        href={repo}
        target="_blank"
        rel="noopener noreferrer"
        className="block mt-4 text-sm font-medium text-blue-400 hover:underline"
      >
        View on GitHub →
      </a>
    </div>
  );
}
