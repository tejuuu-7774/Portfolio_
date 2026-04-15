"use client";

import { useMemo, useState } from "react";
import { ChevronDown } from "lucide-react";
import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/lib/projects";

const filters = ["All", "Personal Project", "Group Project", "Ongoing"] as const;

export default function ProjectsPage() {
  const [activeFilter, setActiveFilter] =
    useState<(typeof filters)[number]>("All");

  const filteredProjects = useMemo(() => {
    if (activeFilter === "All") {
      return projects;
    }

    return projects.filter((project) =>
      project.status?.includes(activeFilter)
    );
  }, [activeFilter]);

  return (
    <section className="mx-auto flex max-w-6xl flex-col gap-10 px-6 py-16">
      <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
        <div className="space-y-3">
          <h1 className="text-4xl font-serif italic text-[#221A18] md:text-5xl">
            Projects
          </h1>
          <p className="max-w-2xl text-sm leading-relaxed text-[#4A443F]">
            Filter by project type to quickly separate personal builds,
            collaborative work, and ongoing ideas.
          </p>
        </div>

        <label className="relative inline-flex w-full max-w-[270px] flex-col gap-2">
          <span className="text-[10px] font-black uppercase tracking-[0.24em] text-[#7C6E6A]">
            Filter Projects
          </span>
          <select
            value={activeFilter}
            onChange={(event) =>
              setActiveFilter(event.target.value as (typeof filters)[number])
            }
            className="w-full appearance-none rounded-[1.1rem] border border-[#221A18]/12 bg-[#FFF9F4] px-4 py-3 pr-11 text-[11px] font-black uppercase tracking-[0.22em] text-[#221A18] shadow-[0_18px_40px_-28px_rgba(34,26,24,0.35)] outline-none transition-all duration-300 hover:border-[#D7A3A1]/55 focus:border-[#221A18]/28"
          >
            {filters.map((filter) => (
              <option key={filter} value={filter}>
                {filter === "All" ? "All Projects" : filter}
              </option>
            ))}
          </select>
          <ChevronDown
            size={16}
            className="pointer-events-none absolute right-4 top-[2.45rem] text-[#7C6E6A]"
          />
        </label>
      </div>

      <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
        {filteredProjects.map((project) => (
          <ProjectCard key={project.id} {...project} interactivePreview />
        ))}
      </div>
    </section>
  );
}
