import { FaArrowRight } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { certificatesData } from "../data/certificatesData";

const Certificates = () => {
  const navigate = useNavigate();

  const featuredCertificates = certificatesData
    .filter((item) => item.featured)
    .slice(0, 4);

  return (
    <section
      id="certificates"
      className="py-10 px-6 bg-gradient-to-b from-white to-[#F8FBFD]"
    >
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-8">
          <p className="text-[#3776A1] font-semibold tracking-wider mb-2 text-sm">
            CERTIFICATES
          </p>

          <h2 className="text-3xl md:text-5xl font-bold text-slate-900">
            Certifications & Training
          </h2>

          <p className="mt-3 text-slate-500 max-w-2xl mx-auto text-sm">
            Certifications, networking courses, and professional development
            programs that support my journey.
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-5">
          {featuredCertificates.map((cert) => (
            <div
              key={cert.id}
              onClick={() => navigate(`/certificates/${cert.slug}`)}
              className="
                group
                bg-white
                border
                border-[#D6EAF5]
                rounded-3xl
                overflow-hidden
                shadow-md
                hover:shadow-xl
                hover:-translate-y-1.5
                transition-all
                duration-300
                cursor-pointer
              "
            >
              {/* Thumbnail */}
              <div className="h-32 bg-[#F8FBFD] overflow-hidden">
                <img
                  src={cert.image}
                  alt={cert.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                />
              </div>

              {/* Content */}
              <div className="p-4">
                <div className="flex items-center justify-between mb-3">
                  <span className="px-2.5 py-1 rounded-full bg-[#EAF5FB] text-[#003A6B] text-[10px] font-semibold">
                    {cert.type}
                  </span>

                  <span className="text-[11px] text-[#3776A1] font-medium">
                    {cert.issueDate}
                  </span>
                </div>

                <h3 className="font-semibold text-[15px] text-slate-900 leading-5 line-clamp-2 min-h-[40px]">
                  {cert.title}
                </h3>

                <p className="text-xs text-slate-500 mt-2 line-clamp-1">
                  {cert.issuer}
                </p>

                <div className="mt-3 pt-3 border-t border-[#EEF5FA] flex justify-end">
                  <div
                    className="
                      w-8
                      h-8
                      rounded-full
                      bg-[#EAF5FB]
                      flex
                      items-center
                      justify-center
                      text-[#3776A1]
                      group-hover:bg-[#3776A1]
                      group-hover:text-white
                      group-hover:translate-x-1
                      transition-all
                    "
                  >
                    <FaArrowRight size={12} />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All */}
        <div className="mt-5 text-center">
          <button
            onClick={() => navigate("/certificates")}
            className="
              inline-flex
              items-center
              gap-3
              text-[#003A6B]
              font-semibold
              group
            "
          >
            <span>Explore All Certifications</span>

            <span
              className="
                w-8
                h-8
                rounded-full
                bg-[#EAF5FB]
                flex
                items-center
                justify-center
                group-hover:bg-[#3776A1]
                group-hover:text-white
                transition-all
              "
            >
              <FaArrowRight size={12} />
            </span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Certificates;