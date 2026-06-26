import { FaShieldAlt, FaCode, FaBrain, FaServer } from "react-icons/fa";

const Skills = () => {
  return (
    <section id="skills" className="py-5 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        {/* HEADER */}
        <div className="mb-8">
          <p className="text-[#3776A1] font-semibold text-sm tracking-wider mb-1">
            SKILLS OVERVIEW
          </p>

          <h2 className="text-3xl md:text-5xl font-bold text-slate-900">
            Technical & Professional Skills
          </h2>
        </div>

        {/* 3 COLUMN LAYOUT */}
        <div className="grid md:grid-cols-3 gap-2 mb-4">
          {/* LEFT - SECURITY */}
          <div className="bg-gradient-to-r from-[#003A6B] to-[#3776A1] rounded-xl p-5 text-white relative overflow-hidden hover:scale-[1.01] transition">
            <div className="absolute -top-20 -right-20 w-72 h-72 bg-white/10 rounded-full blur-3xl"></div>

            <p className="text-xs uppercase tracking-wider text-blue-100 mb-1">
              Cybersecurity
            </p>

            <h3 className="text-lg font-bold mb-1">
              Security Operations & Monitoring
            </h3>

            <p className="text-xs text-blue-100 mb-4 leading-relaxed text-justify">
              Hands-on experience in SIEM (Wazuh), network security (OPNsense,
              WireGuard), log analysis, and infrastructure monitoring (Grafana,
              Zabbix) in Linux-based lab environments using VMware, including
              simulated attack detection, alert analysis, and system performance
              monitoring.
            </p>

            <div className="flex flex-wrap gap-2">
              {[
                "Wazuh",
                "OPNsense",
                "Grafana",
                "Zabbix",
                "Linux",
                "WMware",
                "Wireshark",
              ].map((skill) => (
                <span
                  key={skill}
                  className="px-1 py-1 text-xs bg-white/10 rounded-xl"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* MIDDLE - FRONTEND (STRONGEST) */}
          <div className="bg-[#F8FBFD] border border-[#D6EAF5] rounded-xl p-5 hover:-translate-y-1 hover:shadow-lg transition">
            <div className="flex items-center gap-2 mb-2">
              <FaCode className="text-[#3776A1]" />
              <h3 className="font-semibold text-lg">Frontend Development</h3>
            </div>

            <p className="text-xs text-slate-600 mb-4 leading-relaxed text-justify">
              Built responsive web applications using React.js during internship
              and academic projects, including reusable UI components, REST API
              integration, and dynamic data handling. Performed functional
              testing and API validation using Postman, and contributed to
              improving UI consistency and user experience across devices.
            </p>

            <div className="flex flex-wrap gap-2">
              {[
                "Frontend Developer",
                "React.js",
                "JavaScript",
                "HTML",
                "CSS",
                "Tailwind",
                "Postman",
                "API Integration",
              ].map((s) => (
                <span
                  key={s}
                  className="px-1 py-1 text-xs bg-[#EAF5FB] text-[#003A6B] rounded-xl"
                >
                  {s}
                </span>
              ))}
            </div>
          </div>

          {/* RIGHT - STACKED (AGILE + QA) */}
          <div className="flex flex-col gap-2">
            {/* AGILE */}
            <div className="bg-[#F8FBFD] border border-[#D6EAF5] rounded-xl p-4 hover:-translate-y-1 hover:shadow-lg transition">
              <div className="flex items-center gap-2 mb-2">
                <FaBrain className="text-[#3776A1]" />
                <h3 className="font-semibold">Product & Agile</h3>
              </div>

              <p className="text-xs text-slate-600 mb-2 text-justify">
                Experienced in Scrum workflows, backlog management, and sprint
                planning using Trello.
              </p>

              <div className="flex flex-wrap gap-2">
                {[
                  "Scrum Master",
                  "Product Owner",
                  "Product Backlog",
                  "Sprint",
                  "Trello",
                  "Stakeholder Communication",
                ].map((s) => (
                  <span
                    key={s}
                    className="px-1 py-1 text-xs bg-[#EAF5FB] text-[#003A6B] rounded-xl"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>

            {/* QA */}
            <div className="bg-[#F8FBFD] border border-[#D6EAF5] rounded-xl p-4 hover:-translate-y-1 hover:shadow-lg transition">
              <div className="flex items-center gap-2 mb-2">
                <FaServer className="text-[#3776A1]" />
                <h3 className="font-semibold">QA & Data</h3>
              </div>

              <p className="text-xs text-slate-600 mb-2 text-justify">
                Handled functional testing, UAT, API testing with Postman, and
                data validation tasks.
              </p>

              <div className="flex flex-wrap gap-2">
                {[
                  "UAT Testing",
                  "Functional Testing",
                  "Data Entry",
                  "LMS",
                ].map((s) => (
                  <span
                    key={s}
                    className="px-1 py-1 text-xs bg-[#EAF5FB] text-[#003A6B] rounded-xl"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* SOFT SKILLS */}
        <div className="bg-gradient-to-r from-[#003A6B] to-[#3776A1] rounded-xl p-5 text-white hover:scale-[1.01] transition">
          <div className="flex items-center gap-2 mb-3">
            <FaBrain />
            <h3 className="font-semibold text-sm">Professional Skills</h3>
          </div>

          {/* <p className="text-sm text-blue-100 mb-3">
            Strong collaboration, analytical thinking, problem solving, and
            Agile teamwork experience across development and cybersecurity
            projects.
          </p> */}

          <div className="flex flex-wrap gap-2">
            {[
              "Team Collaboration",
              "Communication",
              "Problem Solving",
              "Analytical Thinking",
              "Leadership",
              "Agile Collaboration",
              "Attention to Detail",
              "Adaptability",
              "Continuous Learning",
            ].map((s) => (
              <span
                key={s}
                className="px-3 py-1 text-xs bg-white/10 rounded-xl"
              >
                {s}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
