import {
  FaEnvelope,
  FaLinkedin,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaArrowRight,
} from "react-icons/fa";

const Contact = () => {
  return (
    <section
      id="contact"
      className="py-10 px-6 bg-gradient-to-b from-[#F8FBFD] to-white relative overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-[#89CFF1]/20 blur-3xl rounded-full"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#3776A1]/10 blur-3xl rounded-full"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-[#3776A1] font-semibold tracking-wider mb-2">
            CONTACT
          </p>

          <h2 className="text-3xl md:text-5xl font-bold text-slate-900">
            Let's Connect
          </h2>

          <p className="text-slate-500 mt-3 max-w-2xl mx-auto">
            Open to cybersecurity, frontend development, and technology-related
            opportunities. Feel free to reach out for collaboration or career
            discussions.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 items-center">
          {/* Left Side */}
          <div>
            <div className="inline-flex items-center gap-2 px-4  rounded-full bg-[#EAF5FB] text-[#003A6B] font-medium mb-3">
              🟢 Open to Work
            </div>

            <h3 className="text-3xl font-bold text-slate-900 mb-4">
              Looking for opportunities in Cybersecurity & Frontend Development
            </h3>

            <p className="text-slate-600 leading-relaxed mb-6">
              As a fresh graduate in Informatics Engineering, I am interested
              in roles related to cybersecurity, security operations, frontend
              development, and technology projects where I can continue growing
              my skills while contributing to meaningful solutions.
            </p>

            <a
              href="mailto:aruniasalsaaa@gmail.com"
              className="
                inline-flex
                items-center
                gap-3
                text-[#003A6B]
                font-semibold
                group
              "
            >
              <span>Send Me an Email</span>

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
            </a>
          </div>

          {/* Right Side */}
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="bg-white border border-[#D6EAF5] rounded-3xl p-5 shadow-md hover:-translate-y-1 transition-all">
              <div className="bg-[#EAF5FB] w-12 h-12 rounded-xl flex items-center justify-center mb-4">
                <FaEnvelope className="text-[#3776A1]" />
              </div>

              <h4 className="font-bold text-slate-900 mb-1">Email</h4>

              <p className="text-sm text-slate-600 break-all">
                aruniasalsaaa@gmail.com
              </p>
            </div>

            <div className="bg-white border border-[#D6EAF5] rounded-3xl p-5 shadow-md hover:-translate-y-1 transition-all">
              <div className="bg-[#EAF5FB] w-12 h-12 rounded-xl flex items-center justify-center mb-4">
                <FaLinkedin className="text-[#3776A1]" />
              </div>

              <h4 className="font-bold text-slate-900 mb-1">LinkedIn</h4>

              <a
                href="https://www.linkedin.com/in/arunia-salsanur-fais-21b625333"
                target="_blank"
                rel="noreferrer"
                className="text-sm text-[#3776A1]"
              >
                View Profile
              </a>
            </div>

            <div className="bg-white border border-[#D6EAF5] rounded-3xl p-5 shadow-md hover:-translate-y-1 transition-all">
              <div className="bg-[#EAF5FB] w-12 h-12 rounded-xl flex items-center justify-center mb-4">
                <FaPhoneAlt className="text-[#3776A1]" />
              </div>

              <h4 className="font-bold text-slate-900 mb-1">Phone</h4>

              <p className="text-sm text-slate-600">
                +62 813-9323-5006
              </p>
            </div>

            <div className="bg-white border border-[#D6EAF5] rounded-3xl p-5 shadow-md hover:-translate-y-1 transition-all">
              <div className="bg-[#EAF5FB] w-12 h-12 rounded-xl flex items-center justify-center mb-4">
                <FaMapMarkerAlt className="text-[#3776A1]" />
              </div>

              <h4 className="font-bold text-slate-900 mb-1">Location</h4>

              <p className="text-sm text-slate-600">
                Jakarta, Indonesia
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;