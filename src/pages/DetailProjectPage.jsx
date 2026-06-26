import {
  FaArrowLeft,
  FaCalendarAlt,
  FaBuilding,
  FaUserTie,
  FaCheckCircle,
  FaTools,
  FaBullseye,
  FaExclamationTriangle,
  FaLightbulb,
  FaTrophy,
  FaLaptopCode,
  FaShieldAlt,
  FaExternalLinkAlt,
} from "react-icons/fa";

import { useNavigate, useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import { projects } from "../data/projectsData";

const iconMap = {
  Cybersecurity: FaShieldAlt,
  "Web Development": FaLaptopCode,
};

const DetailProjectPage = () => {
  const navigate = useNavigate();
  const { slug } = useParams();

  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return (
      <div className="min-h-screen flex flex-col justify-center items-center">
        <h1 className="text-3xl font-bold mb-4">Project Not Found</h1>

        <button
          onClick={() => navigate("/projects")}
          className="px-6 py-3 rounded-xl bg-[#003A6B] text-white"
        >
          Back to Projects
        </button>
      </div>
    );
  }

  const Icon = iconMap[project.category] || FaLaptopCode;

  

  return (
    <section className="min-h-screen bg-gradient-to-b from-white to-[#F8FBFD]">
      <Navbar />

      <div className="max-w-6xl mx-auto px-6 lg:px-2 py-20">
        {/* BACK */}
        <button
          onClick={() => navigate("/projects")}
          className="
            flex
            items-center
            gap-2
            text-[#3776A1]
            hover:text-[#003A6B]
            mb-8
            transition
            cursor-pointer
          "
        >
          <FaArrowLeft />
          Back to Projects
        </button>

        {/* HERO */}
        <div
          className="
            relative
            overflow-hidden
            rounded-3xl
            bg-gradient-to-r
            from-[#003A6B]
            via-[#3776A1]
            to-[#89CFF1]
            text-white
            p-8
            md:p-10
            mb-8
          "
        >
          <div className="absolute right-0 top-0 w-72 h-72 bg-white/10 rounded-full blur-3xl" />

          <div className="relative">
            <div className="flex items-center gap-4 mb-5">
              <div className="w-16 h-16 rounded-2xl bg-white/20 flex items-center justify-center text-2xl">
                <Icon />
              </div>

              <div>
                <span className="px-3 py-1 rounded-full bg-white/20 text-xs font-semibold">
                  {project.projectType}
                </span>
              </div>
            </div>

            <h1 className="text-3xl md:text-5xl font-bold">{project.title}</h1>

            <p className="mt-4 text-blue-100 max-w-4xl">{project.subtitle}</p>
          </div>
        </div>

        {/* CONTENT */}
        <div className="grid lg:grid-cols-[2fr_1fr] gap-8">
          {/* MAIN */}
          <div className="space-y-8">
            {/* OVERVIEW */}
            <div className="bg-white rounded-3xl border border-[#D6EAF5] p-8 shadow-sm">
              <h2 className="text-2xl font-bold mb-4">Project Overview</h2>

              <p className="text-slate-600 leading-relaxed text-justify">
                {project.description}
              </p>
            </div>

            {/* PROBLEM + OBJECTIVE */}
            <div className="grid md:grid-cols-2 gap-6 text-justify">
              <div className="bg-white rounded-3xl border border-[#D6EAF5] p-6">
                <div className="flex items-center gap-3 mb-4">
                  <FaExclamationTriangle className="text-orange-500" />
                  <h3 className="font-bold text-lg">Problem Statement</h3>
                </div>

                <p className="text-slate-600 text-sm leading-relaxed">
                  {project.problemStatement}
                </p>
              </div>

              <div className="bg-white rounded-3xl border border-[#D6EAF5] p-6">
                <div className="flex items-center gap-3 mb-4">
                  <FaBullseye className="text-green-600" />
                  <h3 className="font-bold text-lg">Objective</h3>
                </div>

                <p className="text-slate-600 text-sm leading-relaxed">
                  {project.objective}
                </p>
              </div>
            </div>

            {/* CONTRIBUTIONS */}
            <div className="bg-white rounded-3xl border border-[#D6EAF5] p-8 text-justify">
              <h2 className="text-2xl font-bold mb-6">My Contributions</h2>

              <div className="space-y-3">
                {project.contributions.map((item, index) => (
                  <div key={index} className="flex gap-3">
                    <FaCheckCircle className="text-green-500 mt-1 shrink-0" />

                    <p className="text-slate-600">{item}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* FEATURES */}
            {/* FEATURES */}
            <div className="bg-white rounded-3xl border border-[#D6EAF5] p-8 text-justify">
              <h2 className="text-2xl font-bold mb-6">Key Features</h2>

              <div className="grid md:grid-cols-2 gap-4">
                {project.keyFeatures.map((feature, index) => (
                  <div
                    key={index}
                    className="
          bg-[#F8FBFD]
          border
          border-[#EAF5FB]
          rounded-2xl
          p-4
          hover:shadow-md
          transition-all
        "
                  >
                    <div className="flex gap-3 items-start">
                      <div
                        className="
              min-w-[36px]
              h-9
              rounded-xl
              bg-[#003A6B]
              text-white
              flex
              items-center
              justify-center
              text-sm
              font-semibold
            "
                      >
                        {String(index + 1).padStart(2, "0")}
                      </div>

                      <p
                        className="
              text-sm
              text-slate-600
              leading-relaxed
              pt-1
            "
                      >
                        {feature}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* CHALLENGE & SOLUTION */}
            <div className="grid md:grid-cols-2 gap-6 text-justify">
              <div className="bg-white rounded-3xl border border-[#D6EAF5] p-6">
                <div className="flex items-center gap-3 mb-5">
                  <FaExclamationTriangle className="text-red-500" />
                  <h3 className="font-bold text-lg">Challenges</h3>
                </div>

                <div className="space-y-3">
                  {project.challenges.map((item, index) => (
                    <div
                      key={index}
                      className="
          flex
          gap-3
          p-4
          rounded-2xl
          bg-red-50
          border
          border-red-100
        "
                    >
                      <span className="text-red-500 font-bold">⚠</span>

                      <p className="text-slate-700 text-sm">{item}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-white rounded-3xl border border-[#D6EAF5] p-6">
                <div className="flex items-center gap-3 mb-5">
                  <FaLightbulb className="text-yellow-500" />
                  <h3 className="font-bold text-lg">Solutions</h3>
                </div>

                <div className="space-y-3">
                  {project.solutions.map((item, index) => (
                    <div
                      key={index}
                      className="
          flex
          gap-3
          p-4
          rounded-2xl
          bg-green-50
          border
          border-green-100
        "
                    >
                      <span className="text-green-600 font-bold">✓</span>

                      <p className="text-slate-700 text-sm">{item}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* SIDEBAR */}
          <div className="space-y-6">
            <div className="bg-white rounded-3xl border border-[#D6EAF5] p-6 shadow-sm">
              <h3 className="font-bold text-lg mb-5">Project Information</h3>

              <div className="space-y-5">
                <div>
                  <div className="flex items-center gap-2 text-[#3776A1]">
                    <FaUserTie />
                    Role
                  </div>
                  <p className="text-sm mt-1">{project.role}</p>
                </div>

                <div>
                  <div className="flex items-center gap-2 text-[#3776A1]">
                    <FaBuilding />
                    Organization
                  </div>
                  <p className="text-sm mt-1">{project.organization}</p>
                </div>

                <div>
                  <div className="flex items-center gap-2 text-[#3776A1]">
                    <FaCalendarAlt />
                    Period
                  </div>
                  <p className="text-sm mt-1">{project.period}</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-3xl border border-[#D6EAF5] p-6 shadow-sm">
              <div className="flex items-center gap-2 mb-4">
                <FaTools className="text-[#3776A1]" />
                <h3 className="font-bold text-lg">Technologies</h3>
              </div>

              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="
                      px-3
                      py-2
                      rounded-xl
                      bg-[#EAF5FB]
                      text-[#003A6B]
                      text-sm
                    "
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {project.gallery?.length > 0 && (
              <div className="bg-white rounded-3xl border border-[#D6EAF5] p-6 shadow-sm">
                <div className="flex items-center justify-between mb-5">
                  <h3 className="font-bold text-lg">Project Documentation</h3>

                  <span className="text-xs text-slate-500">
                    {project.gallery.length} Images
                  </span>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                  {project.gallery.map((img, index) => (
                    <a
                      key={index}
                      href={img}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="
            group
            relative
            overflow-hidden
            rounded-2xl
            border
            border-[#EAF5FB]
            bg-[#F8FBFD]
            aspect-square
          "
                    >
                      <img
                        src={img}
                        alt={`Documentation ${index + 1}`}
                        className="
              w-full
              h-full
              object-cover
              transition-all
              duration-500
              group-hover:scale-110
            "
                      />

                      {/* overlay */}
                      <div
                        className="
              absolute
              inset-0
              bg-gradient-to-t
              from-[#003A6B]/70
              to-transparent
              opacity-0
              group-hover:opacity-100
              transition-all
              duration-300
              flex
              items-end
              p-3
            "
                      >
                        <span className="text-white text-xs font-medium">
                          View Image
                        </span>
                      </div>
                    </a>
                  ))}
                </div>

                <p className="mt-4 text-xs text-slate-500">
                  Click any image to open full size.
                </p>
              </div>
            )}

            {project.documents?.length > 0 && (
              <div className="bg-white rounded-3xl border border-[#D6EAF5] p-6 shadow-sm">
                <h3 className="font-bold text-lg mb-4">Project Documents</h3>

                <div className="space-y-3">
                  {project.documents.map((doc, index) => (
                    <a
                      key={index}
                      href={doc.file}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="
            flex
            items-center
            justify-between
            p-4
            rounded-2xl
            border
            border-[#EAF5FB]
            hover:border-[#89CFF1]
            hover:bg-[#F8FBFD]
            transition-all
          "
                    >
                      <div>
                        <p className="font-medium text-slate-800">
                          {doc.title}
                        </p>

                        <p className="text-xs text-slate-500">{doc.type}</p>
                      </div>

                      <FaExternalLinkAlt className="text-[#3776A1]" />
                    </a>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
        {/* OUTCOMES */}
        <div className="bg-gradient-to-r from-[#003A6B] to-[#3776A1] rounded-3xl p-8 text-white mt-10">
          <div className="mb-8">
            <span className="text-blue-100 text-sm uppercase tracking-widest">
              Results & Impact
            </span>

            <h2 className="text-3xl font-bold mt-2">Project Outcomes</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-5">
            {project.outcomes.map((item, index) => (
              <div
                key={index}
                className="
        bg-white/10
        backdrop-blur-sm
        border
        border-white/20
        rounded-3xl
        p-6
        hover:bg-white/15
        hover:-translate-y-1
        transition-all
      "
              >
                <span
                  className="
          block
          text-4xl
          font-bold
          text-white/30
          mb-4
        "
                >
                  0{index + 1}
                </span>

                <p className="text-sm leading-relaxed text-white">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default DetailProjectPage;