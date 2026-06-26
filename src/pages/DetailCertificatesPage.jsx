import {
  FaAward,
  FaCalendarAlt,
  FaBuilding,
  FaTag,
  FaArrowLeft,
  FaCheckCircle,
  FaExternalLinkAlt,
  FaMedal,
} from "react-icons/fa";

import { Link, useParams } from "react-router-dom";
import { certificatesData } from "../data/certificatesData";
import Navbar from "../components/Navbar";

const CertificateDetailPage = () => {
  const { slug } = useParams();

  const certificate = certificatesData.find((item) => item.slug === slug);

  if (!certificate) {
    return (
      <>
        <Navbar />

        <section className="min-h-screen flex flex-col justify-center items-center bg-[#F8FBFD] px-6">
          <h1 className="text-3xl font-bold text-slate-900">
            Certificate Not Found
          </h1>

          <Link
            to="/certificates"
            className="mt-6 bg-[#003A6B] hover:bg-[#00284d] text-white px-6 py-3 rounded-xl transition"
          >
            Back to Certificates
          </Link>
        </section>
      </>
    );
  }

  return (
    <>

      <section className="min-h-screen bg-gradient-to-b from-white to-[#F8FBFD]">
        <Navbar />

        <div className="max-w-6xl mx-auto px-6 lg:px-2 py-20">
          {/* Back */}

          <Link
            to="/certificates"
            className="inline-flex items-center gap-2 text-[#3776A1] hover:text-[#003A6B] font-medium transition mb-8"
          >
            <FaArrowLeft />
            Back to Certificates
          </Link>

          {/* HERO */}

          <div className="bg-white rounded-[32px] overflow-hidden border border-[#D6EAF5] shadow-xl">
            <div className="grid lg:grid-cols-[1.15fr_0.85fr]">
              {/* LEFT */}

              <div className="relative overflow-hidden bg-gradient-to-br from-[#003A6B] via-[#145C94] to-[#3776A1] p-8 md:p-10 text-white">
                <div className="absolute -top-24 -right-24 w-72 h-72 rounded-full bg-white/10 blur-2xl"></div>

                <div className="relative z-10">
                  <div className="flex items-center gap-5">
                    <div className="w-20 h-20 rounded-3xl bg-white/15 backdrop-blur-sm flex items-center justify-center shadow-lg">
                      <FaAward className="text-4xl" />
                    </div>

                    <div>
                      <span className="inline-flex items-center rounded-full bg-white/20 backdrop-blur-sm px-4 py-1.5 text-sm font-semibold">
                        {certificate.type}
                      </span>
                    </div>
                  </div>

                  <h1 className="mt-8 text-3xl md:text-4xl font-bold leading-tight">
                    {certificate.title}
                  </h1>

                  <p className="mt-5 text-white/90 leading-relaxed max-w-2xl text-justify">
                    {certificate.description}
                  </p>

                  <div className="flex flex-wrap gap-3 mt-8">
                    <span className="bg-white/15 backdrop-blur-sm px-4 py-2 rounded-xl text-sm">
                      {certificate.issuer}
                    </span>

                    <span className="bg-white/15 backdrop-blur-sm px-4 py-2 rounded-xl text-sm">
                      {certificate.category}
                    </span>

                    <span className="bg-white/15 backdrop-blur-sm px-4 py-2 rounded-xl text-sm">
                      {certificate.issueDate}
                    </span>
                  </div>
                </div>
              </div>

              {/* RIGHT */}

              <div className="p-8 md:p-10 bg-white">
                <div className="flex items-center justify-between mb-7">
                  <h2 className="text-2xl font-bold text-slate-900">
                    Certificate Details
                  </h2>

                  <div className="w-10 h-10 rounded-xl bg-[#EAF5FB] flex items-center justify-center">
                    <FaAward className="text-[#3776A1]" />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="rounded-2xl border border-[#D6EAF5] bg-[#FBFDFF] p-5 hover:shadow-md transition">
                    <div className="flex items-center gap-3">
                      <div className="w-11 h-11 rounded-xl bg-[#EAF5FB] flex items-center justify-center">
                        <FaBuilding className="text-[#3776A1]" />
                      </div>

                      <div>
                        <p className="text-xs text-slate-500 uppercase">
                          Issuer
                        </p>

                        <p className="font-semibold text-slate-800">
                          {certificate.issuer}
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="rounded-2xl border border-[#D6EAF5] bg-[#FBFDFF] p-5 hover:shadow-md transition">
                    <div className="flex items-center gap-3">
                      <div className="w-11 h-11 rounded-xl bg-[#EAF5FB] flex items-center justify-center">
                        <FaCalendarAlt className="text-[#3776A1]" />
                      </div>

                      <div>
                        <p className="text-xs text-slate-500 uppercase">
                          Issue Date
                        </p>

                        <p className="font-semibold text-slate-800">
                          {certificate.issueDate}
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="rounded-2xl border border-[#D6EAF5] bg-[#FBFDFF] p-5 hover:shadow-md transition">
                    <div className="flex items-center gap-3">
                      <div className="w-11 h-11 rounded-xl bg-[#EAF5FB] flex items-center justify-center">
                        <FaTag className="text-[#3776A1]" />
                      </div>

                      <div>
                        <p className="text-xs text-slate-500 uppercase">
                          Category
                        </p>

                        <p className="font-semibold text-slate-800">
                          {certificate.category}
                        </p>
                      </div>
                    </div>
                  </div>

                  {certificate.score && (
                    <div className="rounded-2xl border border-yellow-200 bg-yellow-50 p-5 hover:shadow-md transition">
                      <div className="flex items-center gap-3">
                        <div className="w-11 h-11 rounded-xl bg-yellow-100 flex items-center justify-center">
                          <FaMedal className="text-yellow-500" />
                        </div>

                        <div>
                          <p className="text-xs text-slate-500 uppercase">
                            TOEIC Score
                          </p>

                          <p className="font-bold text-green-600 text-lg">
                            {certificate.score}
                          </p>
                        </div>
                      </div>
                    </div>
                  )}

                  {certificate.role && (
                    <div className="rounded-2xl border border-[#D6EAF5] bg-[#FBFDFF] p-5 hover:shadow-md transition">
                      <div className="flex items-center gap-3">
                        <div className="w-11 h-11 rounded-xl bg-[#EAF5FB] flex items-center justify-center">
                          <FaAward className="text-[#3776A1]" />
                        </div>

                        <div>
                          <p className="text-xs text-slate-500 uppercase">
                            Role
                          </p>

                          <p className="font-semibold">{certificate.role}</p>
                        </div>
                      </div>
                    </div>
                  )}

                  {certificate.credentialId && (
                    <div className="sm:col-span-2 rounded-2xl border border-[#D6EAF5] bg-[#FBFDFF] p-5">
                      <p className="text-xs uppercase text-slate-500 mb-2">
                        Credential ID
                      </p>

                      <p className="font-semibold break-all">
                        {certificate.credentialId}
                      </p>
                    </div>
                  )}

                  {certificate.credentialUrl && (
                    <div className="sm:col-span-2 mt-1">
                      <a
                        href={certificate.credentialUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="w-full inline-flex justify-center items-center gap-3 bg-[#003A6B] hover:bg-[#00284d] text-white py-4 rounded-2xl font-semibold transition shadow-lg hover:shadow-xl"
                      >
                        Verify Credential
                        <FaExternalLinkAlt />
                      </a>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* CONTENT */}

          <div className="grid lg:grid-cols-5 gap-8 mt-10">
            {/* Skills */}

            <div className="lg:col-span-2 bg-white rounded-[28px] border border-[#D6EAF5] shadow-lg p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-2xl bg-[#EAF5FB] flex items-center justify-center">
                  <FaAward className="text-[#3776A1]" />
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-slate-900">
                    Skills Gained
                  </h2>

                  <p className="text-sm text-slate-500">
                    Competencies acquired from this certificate.
                  </p>
                </div>
              </div>

              <div className="flex flex-wrap gap-3">
                {certificate.skills.map((skill, index) => (
                  <span
                    key={index}
                    className="px-5 py-2.5 rounded-full bg-[#EAF5FB] border border-[#D6EAF5] text-[#003A6B] font-medium text-sm hover:bg-[#3776A1] hover:text-white hover:border-[#3776A1] transition-all duration-300 cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Outcomes */}

            <div className="lg:col-span-3 bg-white rounded-[28px] border border-[#D6EAF5] shadow-lg p-8">
              <div className="mb-7">
                <h2 className="text-2xl font-bold text-slate-900">
                  Learning Outcomes
                </h2>

                <p className="text-sm text-slate-500 mt-1">
                  Key knowledge and practical abilities obtained.
                </p>
              </div>

              <div className="space-y-5">
                {certificate.outcomes.map((item, index) => (
                  <div key={index} className="flex gap-4 group">
                    <div className="flex flex-col items-center">
                      <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center group-hover:scale-110 transition">
                        <FaCheckCircle className="text-green-600" />
                      </div>

                      {index !== certificate.outcomes.length - 1 && (
                        <div className="w-[2px] flex-1 bg-[#D6EAF5] mt-2"></div>
                      )}
                    </div>

                    <div className="pb-5">
                      <p className="text-slate-700 leading-relaxed">{item}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* CERTIFICATE PREVIEW */}

{(certificate.image || certificate.file) && (
  <div className="mt-10 space-y-8">

    {/* IMAGE */}
    {certificate.image && (
      <div className="bg-white rounded-[30px] border border-[#D6EAF5] shadow-xl overflow-hidden">
        <div className="px-8 py-6 border-b border-[#EEF5FA] flex items-center justify-between flex-wrap gap-3">
          <div>
            <h2 className="text-2xl font-bold text-slate-900">
              Certificate Image
            </h2>

            <p className="text-slate-500 text-sm mt-1">
              Certificate preview in image format.
            </p>
          </div>

          <div className="px-4 py-2 rounded-full bg-[#EAF5FB] text-[#003A6B] font-semibold text-sm">
            Image
          </div>
        </div>

        <div className="bg-gradient-to-br from-slate-50 via-white to-[#F8FBFD] p-8 flex justify-center">
          <img
            src={certificate.image}
            alt={certificate.title}
            className="w-full max-w-5xl rounded-2xl border border-[#D6EAF5] shadow-xl object-contain"
          />
        </div>
      </div>
    )}

    {/* PDF */}
    {certificate.file && (
      <div className="bg-white rounded-[30px] border border-[#D6EAF5] shadow-xl overflow-hidden">

        <div className="px-8 py-6 border-b border-[#EEF5FA] flex items-center justify-between flex-wrap gap-3">
          <div>
            <h2 className="text-2xl font-bold text-slate-900">
              Official Certificate (PDF)
            </h2>

            <p className="text-slate-500 text-sm mt-1">
              View the original certificate document.
            </p>
          </div>

          <a
            href={certificate.file}
            target="_blank"
            rel="noreferrer"
            className="bg-[#003A6B] hover:bg-[#00284d] text-white px-5 py-2 rounded-xl font-medium transition"
          >
            Open PDF
          </a>
        </div>

        <div className="p-6 bg-[#F8FBFD]">
          <iframe
            src={certificate.file}
            title={certificate.title}
            className="w-full h-[900px] rounded-xl border"
          />
        </div>

      </div>
    )}

  </div>
)}
        </div>
      </section>
    </>
  );
};

export default CertificateDetailPage;
