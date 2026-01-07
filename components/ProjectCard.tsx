type Project = {
  title: string;
  description: string;
  techStack: string[];
  githubUrl: string;
  liveUrl?: string;
};

export default function ProjectCard({
  title,
  description,
  techStack,
  githubUrl,
  liveUrl,
}: Project) {
  return (
    <div className="border rounded-lg p-5 flex flex-col gap-3">
      <h2 className="text-xl font-semibold">{title}</h2>

      <p className="text-gray-600 text-sm">{description}</p>

      <div className="flex gap-2 flex-wrap text-xs text-gray-500">
        {techStack.map((tech) => (
          <span key={tech}>#{tech}</span>
        ))}
      </div>

      <div className="flex gap-4 text-sm mt-2">
        <a href={githubUrl} target="_blank">GitHub</a>
        {liveUrl && <a href={liveUrl} target="_blank">Live</a>}
      </div>
    </div>
  );
}
