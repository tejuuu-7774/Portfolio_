import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/lib/projects";

export default function ProjectsPage() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-16 flex flex-col gap-10">

      <h1 className="text-4xl md:text-5xl font-serif italic text-[#221A18]">
        Projects
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {projects.map((project) => (
          <ProjectCard key={project.id} {...project} />
        ))}
      </div>

    </section>
  );
}