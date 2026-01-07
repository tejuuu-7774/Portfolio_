import ProjectCard from "@/components/ProjectCard";

type Project = {
  id: number;
  title: string;
  description: string;
  techStack: string[];
  githubUrl: string;
  liveUrl?: string;
};

async function getProjects(): Promise<Project[]> {
  const res = await fetch("http://localhost:3000/api/projects", {
    cache: "no-store",
  });

  return res.json();
}

export default async function ProjectsPage() {
  const projects = await getProjects();

  return (
    <section className="flex flex-col gap-6 max-w-4xl">
      <h1 className="text-3xl font-bold">Projects</h1>

      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((project) => (
          <ProjectCard key={project.id} {...project} />
        ))}
      </div>
    </section>
  );
}
