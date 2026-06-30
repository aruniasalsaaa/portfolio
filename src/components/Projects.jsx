import { FaShieldAlt, FaLaptopCode, FaArrowRight } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { projects } from "../data/projectsData";

const gradientMap = {
  "security-monitoring-lab": "bg-gradient-to-br from-[#003A6B] to-[#3776A1]",
  "koneksi-alumni": "bg-gradient-to-br from-[#3776A1] to-[#5D9BC5]",
  "phishing-investigation": "bg-gradient-to-br from-[#89CFF1] to-[#B8E3F7]",
};

const iconMap = {
  "security-monitoring-lab": FaShieldAlt,
  "koneksi-alumni": FaLaptopCode,
  "phishing-investigation": FaShieldAlt,
};

const Projects = () => {
  const navigate = useNavigate();

  return (
    <section
      id="projects"
      className="py-6 px-5 bg-gradient-to-b from-[#F8FBFD] to-white"
    >
      <div className="max-w-6xl mx-auto">
        {/* HEADER (lebih compact) */}
        <div className="text-center mb-5">
          <p className="text-[#3776A1] font-semibold tracking-wider mb-1 text-xs">
            FEATURED PROJECTS
          </p>

          <h2 className="text-3xl md:text-5xl font-bold text-slate-900">
            What I've Been Building
          </h2>

          <p className="mt-2 text-slate-500 max-w-xl mx-auto text-xs md:text-sm">
            Cybersecurity, academic, and personal projects.
          </p>
        </div>

        {/* GRID lebih rapat */}
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-4">
          {projects.map((project) => {
            const Icon = iconMap[project.slug];

            return (
              <div
                key={project.id}
                className="
                  group
                  rounded-2xl
                  overflow-hidden
                  bg-white
                  border
                  border-[#D6EAF5]
                  shadow-md
                  hover:shadow-xl
                  hover:-translate-y-1
                  transition-all
                  duration-300
                "
              >
                {/* HEADER */}
                <div className={`${gradientMap[project.slug]} p-4 text-white`}>
                  <div className="flex items-start justify-between mb-2">
                    <div className="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center text-lg">
                      {Icon && <Icon />}
                    </div>

                    <span className="px-2 py-0.5 rounded-full bg-white/20 text-white text-[10px] font-semibold">
                      {project.projectType}
                    </span>
                  </div>

                  <h3 className="text-base font-bold leading-snug">
                    {project.title}
                  </h3>
                </div>

                {/* CONTENT */}
                <div className="p-4">
                  <p className="text-slate-600 text-xs leading-relaxed mb-3 line-clamp-2 text-justify">
                    {project.description}
                  </p>

                  {/* TECH max 3 */}
                  <div className="flex flex-wrap gap-1.5">
                    {project.technologies.slice(0, 3).map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-0.5 rounded-md bg-[#EAF5FB] text-[#003A6B] text-[10px] font-medium"
                      >
                        {tech}
                      </span>
                    ))}

                    {project.technologies.length > 3 && (
                      <span className="px-2 py-0.5 rounded-md bg-slate-100 text-slate-500 text-[10px] font-medium">
                        +{project.technologies.length - 3}
                      </span>
                    )}
                  </div>

                  {/* FOOTER */}
                  <div className="mt-3 flex items-center justify-between border-t border-[#EAF5FB] pt-2">
                    <button
                      onClick={() => navigate(`/projects/${project.slug}`)}
                      className="
      text-[#3776A1]
      font-semibold
      text-xs
      hover:text-[#003A6B]
      transition
      cursor-pointer
    "
                    >
                      View Details
                    </button>

                    <button
                      onClick={() => navigate(`/projects/${project.slug}`)}
                      className="
      text-[#3776A1]
      text-sm
      cursor-pointer
      hover:text-[#003A6B]
      hover:translate-x-1
      transition-all
    "
                    >
                      <FaArrowRight />
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* VIEW ALL lebih kecil */}
        <div className="mt-4 text-center">
          <button
            onClick={() => navigate("/projects")}
            className="inline-flex items-center gap-2 text-[#003A6B] font-semibold text-sm group cursor-pointer"
          >
            <span>Explore All Projects</span>
            <span className="w-7 h-7 rounded-full bg-[#EAF5FB] flex items-center justify-center group-hover:bg-[#3776A1] group-hover:text-white transition-all">
              <FaArrowRight size={11} />
            </span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
