import {
  FaArrowLeft,
  FaCalendarAlt,
  FaBuilding,
  FaTools,
  FaTrophy,
  FaShieldAlt,
  FaLaptopCode,
  FaUsersCog,
  FaDatabase,
  FaUsers,
  FaCheckCircle,
} from "react-icons/fa";

import { useNavigate, useParams } from "react-router-dom";
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

const DetailExperiencePage = () => {
  const navigate = useNavigate();
  const { slug } = useParams();

  const experience = experiences.find((exp) => exp.slug === slug);

  if (!experience) {
    return (
      <div className="min-h-screen flex flex-col justify-center items-center">
        <h1 className="text-3xl font-bold mb-4">Experience Not Found</h1>

        <button
          onClick={() => {
            window.scrollTo(0, 0);
            navigate("/experience");
          }}
          className="px-6 py-3 rounded-xl bg-[#003A6B] text-white"
        >
          Back
        </button>
      </div>
    );
  }

  const Icon = iconMap[experience.icon] || FaLaptopCode;

  return (
    <section className="min-h-screen bg-gradient-to-b from-white to-[#F8FBFD]">
      <Navbar />

      <div className="max-w-6xl mx-auto px-6 lg:px-2 py-20">
        {/* BACK BUTTON */}
        <button
          onClick={() => navigate("/experience")}
          className="mb-8 flex items-center gap-2 text-[#3776A1] hover:text-[#003A6B] font-medium transition cursor-pointer"
        >
          <FaArrowLeft />
          Back to Experience
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-6 lg:gap-8">
          {/* MAIN CONTENT */}
          <div className="bg-white rounded-3xl shadow-lg border border-[#D6EAF5] overflow-hidden">
            {/* TOP BAR */}
            <div className="h-2 bg-gradient-to-r from-[#003A6B] via-[#3776A1] to-[#89CFF1]" />

            <div className="p-5 md:p-8">
              {/* HEADER */}
              <div className="flex flex-col md:flex-row gap-5 mb-8">
                <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-[#003A6B] to-[#3776A1] text-white flex items-center justify-center text-3xl shrink-0">
                  <Icon />
                </div>

                <div>
                  <span className="inline-block px-4 py-1 rounded-full bg-[#EAF5FB] text-[#3776A1] text-xs font-semibold uppercase tracking-wide mb-3">
                    {experience.type}
                  </span>

                  <h1 className="text-2xl md:text-3xl font-bold text-slate-900">
                    {experience.title}
                  </h1>

                  <p className="text-lg text-[#3776A1] font-medium mt-2">
                    {experience.organization}
                  </p>

                  <p className="text-slate-500 mt-2 flex items-center gap-2">
                    <FaCalendarAlt />
                    {experience.period}
                  </p>
                </div>
              </div>

              {/* ABOUT */}
              <div className="mb-10">
                <h2 className="text-xl font-bold text-slate-900 mb-4 text-justify">
                  Overview
                </h2>

                <p className="text-slate-600 leading-relaxed text-justify">
                  {experience.description}
                </p>
              </div>

              {/* RESPONSIBILITIES */}
              <div className="mb-10">
                <h2 className="text-xl font-bold text-slate-900 mb-4 text-justify">
                  Key Achievements & Responsibilities
                </h2>

                <div className="space-y-4">
                  {experience.achievements.map((item, index) => (
                    <div key={index} className="flex gap-3">
                      <FaCheckCircle className="text-green-500 mt-1 shrink-0" />

                      <p className="text-slate-600">{item}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* TECHNOLOGIES */}
              <div>
                <h2 className="text-xl font-bold text-slate-900 mb-4">
                  Technologies & Skills
                </h2>

                <div className="flex flex-wrap gap-3">
                  {experience.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="px-4 py-2 rounded-xl bg-[#EAF5FB] text-[#003A6B] text-sm font-medium border border-[#D6EAF5]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* SIDEBAR */}
          <div className="space-y-6">
            {/* SUMMARY */}
            <div className="bg-white rounded-3xl shadow-lg border border-[#D6EAF5] p-6">
              <h3 className="font-bold text-lg mb-5">Experience Summary</h3>

              <div className="space-y-5">
                <div>
                  <div className="flex items-center gap-2 text-[#3776A1] mb-1">
                    <FaBuilding />
                    Organization
                  </div>

                  <p className="text-slate-700 text-sm">
                    {experience.organization}
                  </p>
                </div>

                <div>
                  <div className="flex items-center gap-2 text-[#3776A1] mb-1">
                    <FaCalendarAlt />
                    Period
                  </div>

                  <p className="text-slate-700 text-sm">{experience.period}</p>
                </div>

                <div>
                  <div className="flex items-center gap-2 text-[#3776A1] mb-1">
                    <FaTools />
                    Technologies
                  </div>

                  <p className="text-slate-700 text-sm">
                    {experience.technologies.length} Skills & Tools
                  </p>
                </div>
              </div>
            </div>

            {/* HIGHLIGHT */}
            <div className="bg-gradient-to-br from-[#003A6B] to-[#3776A1] text-white rounded-3xl p-6 shadow-lg">
              <h3 className="font-bold text-lg mb-3">Professional Growth</h3>

              <p className="text-sm leading-relaxed text-blue-100 text-justify">
                {experience.professionalGrowth}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DetailExperiencePage;
