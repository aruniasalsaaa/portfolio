import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaShieldAlt, FaLaptopCode, FaArrowRight } from "react-icons/fa";

import Navbar from "../components/Navbar";
import { projects } from "../data/projectsData";

const iconMap = {
  Cybersecurity: FaShieldAlt,
  "Web Development": FaLaptopCode,
};

const ProjectsPage = () => {
  const navigate = useNavigate();
  const [filter, setFilter] = useState("All");

  const categories = ["All", "Cybersecurity", "Web Development"];

  const filteredProjects = (
    filter === "All"
      ? projects
      : projects.filter((project) => project.category === filter)
  ).sort((a, b) => b.id - a.id);

  return (
    <>
      <Navbar />

      <section className="min-h-screen bg-gradient-to-b from-white to-[#F8FBFD] px-6 py-20">
        <div className="max-w-6xl mx-auto">
          {/* HERO */}
          <div className="text-center mb-14">
            <h1 className="text-3xl md:text-5xl font-bold text-slate-900">
              Building Solutions Through
              <span className="block text-[#3776A1]">
                Development & Security
              </span>
            </h1>

            <p className="mt-4 text-sm md:text-base text-slate-500 max-w-3xl mx-auto">
              A collection of academic, cybersecurity, and personal projects
              that demonstrate technical skills, problem-solving, and real-world
              implementation experience.
            </p>
          </div>

          {/* STATS */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
            <div className="bg-white rounded-2xl border border-[#EAF5FB] p-4 md:p-5 text-center shadow-sm">
              <h3 className="text-2xl md:text-3xl font-bold text-[#003A6B]">
                {projects.length}
              </h3>
              <p className="text-sm text-slate-500">Projects</p>
            </div>

            <div className="bg-white rounded-2xl border border-[#EAF5FB] p-4 md:p-5 text-center shadow-sm">
              <h3 className="text-2xl md:text-3xl font-bold text-[#003A6B]">
                {projects.filter((p) => p.category === "Cybersecurity").length}
              </h3>
              <p className="text-sm text-slate-500">Cybersecurity</p>
            </div>

            <div className="bg-white rounded-2xl border border-[#EAF5FB] p-4 md:p-5 text-center shadow-sm">
              <h3 className="text-2xl md:text-3xl font-bold text-[#003A6B]">
                {
                  projects.filter((p) => p.category === "Web Development")
                    .length
                }
              </h3>
              <p className="text-sm text-slate-500">Web Development</p>
            </div>

            <div className="bg-white rounded-2xl border border-[#EAF5FB] p-4 md:p-5 text-center shadow-sm">
              <h3 className="text-2xl md:text-3xl font-bold text-[#003A6B]">
                {[...new Set(projects.flatMap((p) => p.technologies))].length}
              </h3>
              <p className="text-sm text-slate-500">Technologies</p>
            </div>
          </div>

          {/* FILTER */}
          <div className="flex flex-wrap justify-center gap-3 mb-10">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all cursor-pointer
                  ${
                    filter === cat
                      ? "bg-[#003A6B] text-white shadow-md"
                      : "bg-white border border-[#D6EAF5] text-slate-600 hover:bg-[#EAF5FB]"
                  }
                `}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* PROJECT LIST */}
          <div className="grid md:grid-cols-2 gap-6">
            {filteredProjects.map((project) => {
              const Icon = iconMap[project.category] || FaLaptopCode;

              const categoryColor =
                project.category === "Cybersecurity"
                  ? "from-[#003A6B] to-[#3776A1]"
                  : "from-[#3776A1] to-[#89CFF1]";

              return (
                <div
                  key={project.id}
                  className="
                    group
                    bg-white
                    border
                    border-[#D6EAF5]
                    rounded-2xl
                    shadow-md
                    hover:shadow-xl
                    hover:-translate-y-1
                    transition-all
                    duration-300
                    overflow-hidden
                  "
                >
                  {/* TOP BAR */}
                  <div className={`h-1 bg-gradient-to-r ${categoryColor}`} />

                  <div className="p-5 sm:p-6">
                    {/* HEADER */}
                    <div className="flex gap-4 mb-4">
                      <div
                        className={`
                          w-12
                          h-12
                          rounded-xl
                          bg-gradient-to-br
                          ${categoryColor}
                          text-white
                          flex
                          items-center
                          justify-center
                          shrink-0
                        `}
                      >
                        <Icon />
                      </div>

                      <div className="min-w-0">
                        <div className="flex flex-wrap gap-2 mb-2">
                          <span className="px-3 py-1 rounded-full bg-[#EAF5FB] text-[#003A6B] text-[10px] font-semibold uppercase tracking-wide">
                            {project.projectType}
                          </span>

                          <span className="px-3 py-1 rounded-full bg-slate-100 text-slate-600 text-[10px]">
                            {project.category}
                          </span>

                          <span className="px-3 py-1 rounded-full bg-green-50 text-green-700 text-[10px]">
                            {project.status}
                          </span>
                        </div>

                        <h3 className="font-bold text-slate-900 text-lg sm:text-xl">
                          {project.title}
                        </h3>

                        <p className="text-[#3776A1] text-sm font-medium mt-1">
                          {project.organization}
                        </p>

                        <p className="text-xs text-slate-500 mt-1">
                          {project.period}
                        </p>
                      </div>
                    </div>

                    {/* SUBTITLE */}
                    <p className="text-sm text-[#3776A1] font-medium mb-3">
                      {project.subtitle}
                    </p>

                    {/* ROLE */}
                    <div className="mb-4">
                      <p className="text-[11px] uppercase tracking-wider text-slate-400">
                        Role
                      </p>

                      <p className="font-semibold text-slate-800 text-sm">
                        {project.role}
                      </p>
                    </div>

                    {/* DESCRIPTION */}
                    <p className="text-sm text-slate-600 line-clamp-3 mb-4 text-justify">
                      {project.description}
                    </p>

                    {/* TECHNOLOGIES */}
                    <div className="flex flex-wrap gap-2 mb-5">
                      {project.technologies.slice(0, 5).map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-1 text-xs rounded-lg bg-[#EAF5FB] text-[#003A6B]"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* BUTTON */}
                    <button
                      onClick={() => {
                        window.scrollTo(0, 0);
                        navigate(`/projects/${project.slug}`);
                      }}
                      className="
                        flex
                        items-center
                        gap-2
                        text-[#3776A1]
                        font-semibold
                        group-hover:gap-3
                        transition-all
                        cursor-pointer
                      "
                    >
                      View Details
                      <FaArrowRight className="text-sm" />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default ProjectsPage;