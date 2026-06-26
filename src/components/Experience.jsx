import {
  FaShieldAlt,
  FaLaptopCode,
  FaDatabase,
  FaExternalLinkAlt,
  FaUsersCog,
  FaArrowRight,
  FaUsers,
} from "react-icons/fa";

import { useNavigate } from "react-router-dom";
import { experiences } from "../data/experienceData";

const iconMap = {
  cybersecurity: FaShieldAlt,
  code: FaLaptopCode,
  users: FaUsersCog,
  excel: FaDatabase,
  leadership: FaUsers,
  data: FaDatabase,
};

// MONTH MAP
const monthMap = {
  Jan: 0, Feb: 1, Mar: 2, Apr: 3, May: 4, Jun: 5,
  Jul: 6, Aug: 7, Sep: 8, Oct: 9, Nov: 10, Dec: 11,
};

// GET LATEST DATE
const getLatestEndDate = (period) => {
  if (!period) return new Date(0);

  const segments = period.split("•");
  let latest = new Date(0);

  segments.forEach((seg) => {
    const cleaned = seg.trim();
    const parts = cleaned.split("–");
    const endPart = (parts[1] || parts[0]).trim();

    const [mon, year] = endPart.split(" ");
    const date = new Date(parseInt(year), monthMap[mon] ?? 0, 1);

    if (date > latest) latest = date;
  });

  return latest;
};

const Experience = () => {
  const navigate = useNavigate();

  // SORT + TAKE 4
  const featured = [...experiences]
    .sort((a, b) => getLatestEndDate(b.period) - getLatestEndDate(a.period))
    .slice(0, 4);

  return (
    <section
      id="experience"
      className="py-10 px-6 bg-gradient-to-b from-white via-[#F8FBFD] to-white"
    >
      <div className="max-w-6xl mx-auto">

        {/* HEADER */}
        <div className="text-center mb-8">
          <p className="text-[#3776A1] text-xs tracking-[0.2em] font-semibold">
            EXPERIENCE
          </p>

          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mt-2">
            Experience & Growth
          </h2>

          <p className="text-slate-500 text-sm mt-2 max-w-xl mx-auto">
            A summary of my journey in cybersecurity, development, and leadership roles.
          </p>
        </div>

        {/* GRID */}
        <div className="grid md:grid-cols-2 gap-3">

          {featured.map((exp) => {
            const Icon = iconMap[exp.icon] || FaLaptopCode;
            const isCyber = exp.icon === "cybersecurity";

            return (
              <div
                key={exp.slug}
                className={`
                  group relative rounded-2xl p-4 transition-all duration-300
                  hover:-translate-y-1 hover:shadow-lg

                  ${
                    isCyber
                      ? "bg-gradient-to-br from-[#003A6B] to-[#3776A1] text-white shadow-md"
                      : "bg-white border border-[#D6EAF5]"
                  }
                `}
              >

                {/* subtle glow */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition bg-[#3776A1]/5 rounded-2xl" />

                {/* TOP */}
                <div className="flex items-start justify-between mb-2 relative">

                  <div className="flex items-center gap-2">
                    <div
                      className={`
                        w-8 h-8 rounded-lg flex items-center justify-center
                        ${isCyber ? "bg-white/10" : "bg-[#EAF5FB]"}
                      `}
                    >
                      <Icon
                        className={isCyber ? "text-white" : "text-[#3776A1]"}
                        size={14}
                      />
                    </div>

                    <div>
                      <h3 className="text-sm font-semibold leading-tight">
                        {exp.title}
                      </h3>

                      <p className={`text-[11px] ${
                        isCyber ? "text-white/70" : "text-slate-500"
                      }`}>
                        {exp.organization}
                      </p>
                    </div>
                  </div>

                  <button
                    onClick={() => {
                      window.scrollTo(0, 0);
                      navigate(`/experience/${exp.slug}`);
                    }}
                    className={`text-xs transition ${
                      isCyber
                        ? "text-white/60 hover:text-white"
                        : "text-slate-400 hover:text-[#003A6B]"
                    }`}
                  >
                    <FaExternalLinkAlt size={12} />
                  </button>

                </div>

                {/* DESCRIPTION */}
                <p
                  className={`text-[11.5px] leading-relaxed mb-3 text-justify ${
                    isCyber ? "text-blue-100" : "text-slate-600"
                  }`}
                >
                  {exp.description}
                </p>

                {/* TECH */}
                <div className="flex flex-wrap gap-1.5">
                  {exp.technologies.slice(0, 3).map((tech) => (
                    <span
                      key={tech}
                      className={`
                        text-[10px] px-2 py-[2px] rounded-md
                        ${
                          isCyber
                            ? "bg-white/10 text-white"
                            : "bg-[#EAF5FB] text-[#003A6B]"
                        }
                      `}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}

        </div>

        {/* FOOTER CTA */}
        <div className="mt-6 text-center">
          <button
            onClick={() => navigate("/experience")}
            className="inline-flex items-center gap-2 text-[#003A6B] text-sm font-semibold group"
          >
            View All Experience
            <FaArrowRight
              className="group-hover:translate-x-1 transition"
              size={12}
            />
          </button>
        </div>

      </div>
    </section>
  );
};

export default Experience;