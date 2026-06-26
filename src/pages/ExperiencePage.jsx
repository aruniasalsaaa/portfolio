import {
  FaShieldAlt,
  FaLaptopCode,
  FaUsersCog,
  FaDatabase,
  FaUsers,
  FaArrowRight,
} from "react-icons/fa";

import { useNavigate } from "react-router-dom";
import { experiences } from "../data/experienceData";
import Navbar from "../components/Navbar";

const iconMap = {
  cybersecurity: FaShieldAlt,
  code: FaLaptopCode,
  leadership: FaUsers,
  users: FaUsersCog,
  data: FaDatabase,
  excel: FaDatabase,
};

// Convert month string → number
const monthMap = {
  Jan: 0,
  Feb: 1,
  Mar: 2,
  Apr: 3,
  May: 4,
  Jun: 5,
  Jul: 6,
  Aug: 7,
  Sep: 8,
  Oct: 9,
  Nov: 10,
  Dec: 11,
};

// ambil tanggal "terbaru" dari field period
const getLatestEndDate = (period) => {
  if (!period) return new Date(0);

  // kalau ada multiple (•), ambil semua segment
  const segments = period.split("•");

  let latest = new Date(0);

  segments.forEach((seg) => {
    const cleaned = seg.trim();

    // ambil bagian akhir setelah "–" atau "-"
    const parts = cleaned.split("–");
    const endPart = (parts[1] || parts[0]).trim();

    const [mon, year] = endPart.split(" ");
    const date = new Date(parseInt(year), monthMap[mon] ?? 0, 1);

    if (date > latest) {
      latest = date;
    }
  });

  return latest;
};

const ExperiencePage = () => {
  const navigate = useNavigate();

  // 🔥 SORT dari terbaru ke terlama
  const sortedExperiences = [...experiences].sort((a, b) => {
    return getLatestEndDate(b.period) - getLatestEndDate(a.period);
  });

  return (
    <section className="min-h-screen bg-gradient-to-b from-white to-[#F8FBFD] px-6 py-20">
      <div className="max-w-6xl mx-auto">
        <Navbar />

        {/* HEADER */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900">
            Professional Experience
          </h1>

          <p className="mt-3 text-slate-500 max-w-2xl mx-auto text-sm">
            Explore my journey across cybersecurity, development, Agile
            leadership, and organizational roles.
          </p>
        </div>

        {/* EXPERIENCE CARDS */}
        <div className="grid md:grid-cols-2 gap-6">
          {sortedExperiences.map((exp, index) => {
            const Icon = iconMap[exp.icon] || FaLaptopCode;

            return (
              <div
                key={index}
                className="group bg-white border border-[#D6EAF5] rounded-2xl shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 overflow-hidden"
              >
                {/* TOP BAR */}
                <div className="h-1 bg-gradient-to-r from-[#003A6B] via-[#3776A1] to-[#89CFF1]" />

                <div className="p-6">
                  {/* HEADER */}
                  <div className="flex gap-4 mb-4">
                    <div className="w-12 h-12 mt-1 rounded-xl bg-gradient-to-br from-[#003A6B] to-[#3776A1] text-white flex items-center justify-center shrink-0">
                      <Icon />
                    </div>

                    <div>
                      <span className="inline-block px-3 py-1 rounded-full bg-[#EAF5FB] text-[#3776A1] text-[10px] font-semibold uppercase tracking-wide mb-2">
                        {exp.type}
                      </span>

                      <h3 className="font-bold text-slate-900 text-lg">
                        {exp.title}
                      </h3>

                      <p className="text-[#3776A1] text-sm font-medium">
                        {exp.organization}
                      </p>

                      <p className="text-xs text-slate-500 mt-1">
                        {exp.period}
                      </p>
                    </div>
                  </div>

                  {/* DESCRIPTION */}
                  <p className="text-sm text-slate-600 line-clamp-3 mb-4 text-justify">
                    {exp.description}
                  </p>

                  {/* TECHNOLOGIES */}
                  <div className="flex flex-wrap gap-2 mb-5">
                    {exp.technologies.slice(0, 4).map((tech) => (
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
                      navigate(`/experience/${exp.slug}`);
                    }}
                    className="flex items-center gap-2 text-[#3776A1] font-semibold group-hover:gap-3 transition-all cursor-pointer"
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
  );
};

export default ExperiencePage;