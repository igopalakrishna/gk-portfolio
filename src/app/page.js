import ProjectCard from "@/components/ProjectCard";

const projects = [
  {
    title: "Real‑Time Subway Traffic Prediction",
    description: "Kafka → Spark Streaming → MongoDB, <5% error",
    tech: ["Kafka", "Spark", "MongoDB", "Python"],
    link: "/projects/subway",
  },
  {
    title: "Fine‑Tuning LLMs Without Norms",
    description: "Dynamic Tanh vs LayerNorm on Pythia",
    tech: ["PyTorch", "LoRA", "Transformers"],
    link: "/projects/dyt-llm",
  },
  // …add your other projects here
];

export default function HomePage() {
  return (
    <>
      <header className="text-center py-12">
        <h1 className="text-5xl font-bold mb-2">Hi, I’m Gopala</h1>
        <p className="text-xl">Aspiring AI/ML Engineer @ NYU</p>
      </header>

      <section
        id="projects"
        className="max-w-4xl mx-auto grid gap-8 sm:grid-cols-2 px-4"
      >
        {projects.map((p) => (
          <ProjectCard key={p.title} {...p} />
        ))}
      </section>

      <footer id="contact" className="mt-16 text-center text-gray-600">
        © {new Date().getFullYear()} Gopala Krishna Abba •
        <a href="mailto:ga2664@nyu.edu" className="underline ml-1">
          ga2664@nyu.edu
        </a>
      </footer>
    </>
  );
}
