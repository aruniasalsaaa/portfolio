import {
  FaEnvelope,
  FaLinkedin,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaArrowRight,
} from "react-icons/fa";
import Navbar from "../components/Navbar";

const ContactPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#F8FBFD] to-white relative overflow-hidden">
      <Navbar />

      {/* BACKGROUND */}
      <div className="absolute top-24 left-10 w-80 h-80 bg-[#89CFF1]/20 blur-3xl rounded-full"></div>
      <div className="absolute bottom-0 right-0 w-[30rem] h-[30rem] bg-[#3776A1]/10 blur-3xl rounded-full"></div>

      {/* HERO */}
      <section className="pt-28 pb-8 px-6 relative z-10">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-10 items-start">

          {/* LEFT */}
          <div>
            <p className="text-[#3776A1] font-semibold tracking-widest mb-3">
              GET IN TOUCH
            </p>

            <h1 className="text-4xl md:text-6xl font-bold text-slate-900 leading-tight">
              Let’s Build Something Meaningful Together
            </h1>

            <p className="mt-8 text-slate-500 leading-relaxed">
              Open to full-time roles, internship, freelance, and collaboration opportunities in
              cybersecurity and frontend development. I enjoy building real-world projects and continuously improving my skills.
            </p>
          </div>

          {/* RIGHT - AVAILABLE CARD */}
          <div className="bg-white border border-[#D6EAF5] rounded-3xl shadow-xl p-7 hover:-translate-y-1 transition">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#EAF5FB] text-[#003A6B] font-medium mb-5">
              🟢 Open to Opportunities
            </div>

            <h3 className="text-xl font-bold text-slate-900 mb-3">
              Cybersecurity & Frontend Developer
            </h3>

            <p className="text-slate-600 text-sm leading-relaxed">
              I’m currently open to full-time roles, internships, freelance work,
              and project-based collaboration in cybersecurity and frontend development.
            </p>

            <div className="mt-6 text-xs text-slate-500">
              Based in Indonesia • Open to Remote / On-site
            </div>

            {/* CTA MOVED HERE (SEJAJAR DENGAN CARD) */}
            <a
              href="mailto:aruniasalsaaa@gmail.com"
              className="mt-6 inline-flex items-center gap-2 bg-[#003A6B] text-white px-5 py-2.5 rounded-full hover:bg-[#3776A1] transition"
            >
              Contact Me <FaArrowRight size={12} />
            </a>
          </div>

        </div>
      </section>

      {/* CONTACT INFORMATION - MOVED UP */}
      <section className="px-6 pb-24 relative z-10 -mt-2">
        <div className="max-w-6xl mx-auto">

          {/* TITLE */}
          <div className="mb-8 text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900">
              Contact Information
            </h2>
            <p className="text-slate-500 mt-2 text-sm">
              Choose your preferred way to reach me
            </p>
          </div>

          {/* GRID */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">

            {/* EMAIL */}
            <div className="group bg-white/70 backdrop-blur-md border border-[#D6EAF5] rounded-2xl p-5 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all">
              <div className="w-11 h-11 bg-[#EAF5FB] rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition">
                <FaEnvelope className="text-[#3776A1]" />
              </div>
              <h3 className="font-semibold text-slate-900 text-sm">Email</h3>
              <p className="text-xs text-slate-600 break-all mt-1">
                aruniasalsaaa@gmail.com
              </p>
            </div>

            {/* LINKEDIN */}
            <div className="group bg-white/70 backdrop-blur-md border border-[#D6EAF5] rounded-2xl p-5 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all">
              <div className="w-11 h-11 bg-[#EAF5FB] rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition">
                <FaLinkedin className="text-[#3776A1]" />
              </div>
              <h3 className="font-semibold text-slate-900 text-sm">LinkedIn</h3>
              <a
                href="https://www.linkedin.com/in/arunia-salsanur-fais-21b625333"
                target="_blank"
                rel="noreferrer"
                className="text-xs text-[#3776A1] hover:underline"
              >
                View Profile
              </a>
            </div>

            {/* PHONE */}
            <div className="group bg-white/70 backdrop-blur-md border border-[#D6EAF5] rounded-2xl p-5 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all">
              <div className="w-11 h-11 bg-[#EAF5FB] rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition">
                <FaPhoneAlt className="text-[#3776A1]" />
              </div>
              <h3 className="font-semibold text-slate-900 text-sm">Phone</h3>
              <p className="text-xs text-slate-600 mt-1">
                +62 813-9323-5006
              </p>
            </div>

            {/* LOCATION */}
            <div className="group bg-white/70 backdrop-blur-md border border-[#D6EAF5] rounded-2xl p-5 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all">
              <div className="w-11 h-11 bg-[#EAF5FB] rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition">
                <FaMapMarkerAlt className="text-[#3776A1]" />
              </div>
              <h3 className="font-semibold text-slate-900 text-sm">Location</h3>
              <p className="text-xs text-slate-600 mt-1">
                Indonesia
              </p>
            </div>

          </div>

        </div>
      </section>
    </div>
  );
};

export default ContactPage;