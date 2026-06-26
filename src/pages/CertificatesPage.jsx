import { useState } from "react";
import { FaAward, FaArrowRight } from "react-icons/fa";
import { certificatesData } from "../data/certificatesData";
import Navbar from "../components/Navbar";
import { useNavigate } from "react-router-dom";

const CertificatesPage = () => {
  const [filter, setFilter] = useState("All");
  const navigate = useNavigate();
  const categories = [
    "All",
    "Cybersecurity",
    "Networking",
    "Soft Skills",
    "Independent Study",
    "Award",
    "English Proficiency",
    "Leadership",
  ];

  const filteredData = (
    filter === "All"
      ? certificatesData
      : certificatesData.filter((c) => c.category === filter)
  ).sort((a, b) => Number(b.issueDate) - Number(a.issueDate));

  return (
    <section className="min-h-screen bg-gradient-to-b from-[#F8FBFD] to-white py-20 px-6">
      <Navbar />
      <div className="max-w-6xl mx-auto">
        {/* HEADER */}
        <div className="text-center mb-10">
          <h1 className="text-3xl md:text-5xl font-bold text-slate-900">
            All Certifications & Training
          </h1>

          <p className="mt-3 text-slate-500 max-w-2xl mx-auto text-sm">
            A collection of certifications, training programs, achievements, and
            professional development activities.
          </p>
        </div>

        {/* FILTER */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`
                px-4 py-2 rounded-full text-sm font-medium transition-all cursor-pointer
                ${
                  filter === cat
                    ? "bg-[#003A6B] text-white"
                    : "bg-white border border-[#D6EAF5] text-slate-600 hover:bg-[#EAF5FB]"
                }
              `}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* GRID */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {filteredData.map((cert) => (
            <div
              key={cert.id}
              className="
                group
                bg-white
                border
                border-[#D6EAF5]
                rounded-3xl
                p-5
                shadow-md
                hover:shadow-2xl
                hover:-translate-y-2
                transition-all
                duration-500
              "
            >
              {/* ICON */}
              <div className="flex items-start justify-between mb-4">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#003A6B] to-[#3776A1] text-white flex items-center justify-center">
                  <FaAward />
                </div>

                <span className="px-3 py-1 rounded-full bg-[#EAF5FB] text-[#003A6B] text-[11px] font-semibold">
                  {cert.type}
                </span>
              </div>

              {/* TITLE */}
              <h3 className="font-bold text-slate-900 mb-2 leading-tight">
                {cert.title}
              </h3>

              {/* ISSUER */}
              <p className="text-sm text-slate-600">{cert.issuer}</p>

              {/* YEAR */}
              <p className="text-xs text-[#3776A1] font-medium mt-1">
                {cert.issueDate}
              </p>

              {/* EXTRA INFO */}
              {cert.score && (
                <p className="text-xs text-green-600 mt-1 font-semibold">
                  Score: {cert.score}
                </p>
              )}

              {cert.role && (
                <p className="text-xs text-slate-500 mt-1">Role: {cert.role}</p>
              )}

              {/* FOOTER */}
              <div className="mt-4 border-t border-[#EAF5FB] pt-3 flex justify-end">
                <button
                  onClick={() => navigate(`/certificates/${cert.slug}`)}
                  className="cursor-pointer"
                >
                  <FaArrowRight className="text-[#3776A1] group-hover:translate-x-2 transition-all duration-300" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CertificatesPage;
