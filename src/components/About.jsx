import { FaUserShield, FaGraduationCap, FaAward } from "react-icons/fa";

const About = () => {
  return (
    <section id="about" className="relative py-8 px-6 bg-white overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-[#89CFF1]/20 blur-3xl rounded-full"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#3776A1]/10 blur-3xl rounded-full"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Heading */}
        <div className="mb-8">
          <p className="text-[#3776A1] font-semibold tracking-wider mb-2">
            ABOUT ME
          </p>

          <h2 className="text-3xl md:text-5xl font-bold text-slate-900">
            Driven by Technology, Focused on Cybersecurity
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-3">
          {/* LEFT CARD */}
          <div
            className="
            bg-gradient-to-br
            from-[#003A6B]
            to-[#3776A1]
            rounded-2xl
            p-6
            text-white
            shadow-xl
            hover:-translate-y-2
            transition-all
            duration-500
          "
          >
            <div className="flex items-center gap-3">
              <div className="bg-white/20 p-3 rounded-xl">
                <FaUserShield className="text-xl" />
              </div>

              <h3 className="text-xl font-bold">Who Am I?</h3>
            </div>

            <p className="text-blue-100 text-xs leading-relaxed mb-2 text-justify mt-5">
              I'm Arunia Salsanur Fais, a fresh graduate in Informatics
              Engineering who completed my degree in 3.5 years. Throughout my
              academic journey, I gained experience as a Frontend Developer, Scrum Master, Product Owner, and Quality Assurance, building both
              technical expertise and collaborative skills through various
              software development projects.
            </p>

            <p className="text-blue-100 text-xs leading-relaxed mb-2 text-justify">
              Beyond software development, I developed a strong interest in
              cybersecurity through hands-on training and projects focused on
              network security, SIEM implementation, threat monitoring, and
              system monitoring. Working with technologies such as Wazuh,
              Grafana, Zabbix, OPNsense, and WireGuard strengthened my
              understanding of securing and monitoring digital environments.
            </p>

            <p className="text-blue-100 text-xs leading-relaxed text-justify">
              I enjoy solving problems, learning new technologies, and
              collaborating with diverse teams to deliver meaningful solutions.
              My goal is to build a career as a SOC Analyst, helping
              organizations detect, analyze, and respond to security threats
              while continuously growing my cybersecurity expertise.
            </p>
          </div>

          {/* RIGHT SIDE */}
          <div className="grid gap-3">
            {/* EDUCATION + INTEREST */}
            <div className="grid md:grid-cols-2 gap-3">
              {/* EDUCATION */}
              <div
                className="
      bg-white
      border
      border-[#D6EAF5]
      rounded-2xl
      p-3
      shadow-lg
      hover:-translate-y-2
      transition-all
      duration-300
      "
              >
                <div className="flex items-center gap-3 mb-2">
                  <div className="bg-[#EAF5FB] p-3 rounded-xl">
                    <FaGraduationCap className="text-[#3776A1]" />
                  </div>

                  <p className="text-[#3776A1] text-sm font-semibold">
                    EDUCATION
                  </p>
                </div>

                <h3 className="text-base font-bold text-slate-900">
                  Informatics Engineering
                </h3>

                <p className="text-slate-500 text-sm">YARSI University</p>
              </div>

              {/* INTEREST */}
              <div
                className="
      bg-white
      border
      border-[#D6EAF5]
      rounded-2xl
      p-3
      shadow-lg
      hover:-translate-y-2
      transition-all
      duration-300
      "
              >
                <div className="flex items-center gap-3 mb-2">
                  <div className="bg-[#EAF5FB] p-3 rounded-xl">
                    <FaUserShield className="text-[#3776A1]" />
                  </div>

                  <p className="text-[#3776A1] text-sm font-semibold">
                    INTERESTS
                  </p>
                </div>

                <h3 className="text-base font-bold text-slate-900">
                  Cybersecurity
                </h3>

                <p className="text-slate-500 text-sm">Aspiring SOC Analyst</p>
              </div>
            </div>

            {/* GPA + TOEIC + AWARD */}
            <div className="grid grid-cols-3 gap-3">
              <div
                className="
      bg-gradient-to-br
      from-[#003A6B]
      to-[#3776A1]
      rounded-2xl
      p-3
      text-white
      shadow-lg
      "
              >
                <FaAward className="text-lg mb-2" />

                <p className="text-xs text-blue-100">GPA</p>

                <h3 className="text-2xl font-bold">3.93</h3>
              </div>

              <div
                className="
      bg-gradient-to-br
      from-[#89CFF1]
      to-[#B8E3F7]
      rounded-2xl
      p-3
      text-[#003A6B]
      shadow-lg
      "
              >
                <FaAward className="text-lg mb-2" />

                <p className="text-xs">TOEIC</p>

                <h3 className="text-2xl font-bold">800</h3>
              </div>

              <div
                className="
      bg-white
      border
      border-[#D6EAF5]
      rounded-2xl
      p-3
      shadow-lg
      "
              >
                <FaAward className="text-lg mb-2 text-[#3776A1]" />

                <p className="text-xs text-[#3776A1]">AWARD</p>

                <h3 className="text-sm font-bold text-slate-900">
                  Best Project
                </h3>

                <p className="text-xs text-slate-500">Infinite Learning</p>
              </div>
            </div>

            {/* FOCUS AREAS */}
            <div
              className="
    bg-white
    border
    border-[#D6EAF5]
    rounded-2xl
    p-3
    shadow-lg
    "
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-[#EAF5FB] p-3 rounded-xl">
                  <FaUserShield className="text-[#3776A1]" />
                </div>

                <p className="text-[#3776A1] font-semibold">FOCUS AREAS</p>
              </div>

              <div className="flex flex-wrap gap-2">
                {[
                  "SIEM",
                  "Network Security",
                  "Threat Monitoring",
                  "Incident Response",
                  "Linux",
                  "React.js",
                  "Frontend Development",
                  "Agile Scrum",
                ].map((item) => (
                  <span
                    key={item}
                    className="
          px-3
          py-1
          text-xs
          rounded-xl
          bg-[#EAF5FB]
          text-[#003A6B]
          font-medium
          "
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
