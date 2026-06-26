import profilePhoto from "../assets/images/arunia-outline.png";
import { FaServer, FaAward } from "react-icons/fa";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";
import Navbar from "./Navbar";

const Hero = () => {
  return (
    <section
      id="hero"
      className="min-h-screen bg-white flex items-center px-6 py-10 overflow-hidden"
    >
      <div className="max-w-6xl mx-auto w-full">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          {/* LEFT SIDE */}
          <div className="pt-10 md:pt-10 lg:pt-0">
            <Navbar />

            {/* Heading */}
            <h1 className="text-5xl md:text-7xl font-bold mb-5 text-slate-900">
              Hi, I'm
              <br />
              <span
                className="
                  bg-gradient-to-r
                  from-[#003A6B]
                  to-[#3776A1]
                  bg-clip-text
                  text-transparent
                  "
              >
                Arunia Salsanur Fais
              </span>
            </h1>

            {/* Subtitle */}
            <h2 className="text-xl md:text-2xl text-slate-700 mb-3">
              Cybersecurity Enthusiast
            </h2>

            {/* Description */}
            <p className="text-sm text-slate-600 leading-relaxed max-w-xl mb-3 text-justify">
              Passionate about cybersecurity, threat monitoring, and incident
              detection, with hands-on experience in SIEM implementation,
              network monitoring, and security-focused projects. Supported by a
              strong foundation in web development and collaborative Agile
              environments.
            </p>

            {/* Tech Stack */}
            <div className="flex flex-wrap gap-3 mb-5">
              {["Wazuh", "Zabbix", "Grafana", "OPNSense", "React.js"].map(
                (tech) => (
                  <span
                    key={tech}
                    className="
                    px-5 py-1.5
                    rounded-xl
                    bg-[#F8FBFD]
                    border
                    border-[#D6EAF5]
                    text-[#003A6B]
                    text-sm
                    font-medium
                    hover:bg-[#3776A1]
                    hover:text-white
                    hover:scale-105
                    transition-all
                    duration-300
                    cursor-default
                    shadow-sm
                    "
                  >
                    {tech}
                  </span>
                ),
              )}
            </div>

            {/* Buttons */}
            <div className="flex flex-wrap gap-4">
              <a
                href="#projects"
                className="
                  px-6
                  py-3
                  rounded-xl
                  bg-gradient-to-r
                  from-[#003A6B]
                  to-[#3776A1]
                  text-white
                  font-semibold
                  shadow-lg
                  hover:-translate-y-1
                  hover:shadow-xl
                  transition-all
                  duration-300
                  "
              >
                View Projects
              </a>

              <a
                href="https://www.linkedin.com/in/arunia-salsanur-fais-21b625333"
                target="_blank"
                rel="noreferrer"
                className="
                  px-6
                  py-3
                  rounded-xl
                  border
                  border-[#3776A1]
                  text-[#3776A1]
                  hover:bg-[#F0F8FC]
                  hover:-translate-y-1
                  transition-all
                  duration-300
                  flex
                  items-center
                  gap-2
                  "
              >
                LinkedIn
                <FaArrowUpRightFromSquare className="text-sm" />
              </a>
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="flex flex-col gap-0">
            {/* PHOTO */}
            <div className="relative flex justify-center items-center h-[420px]">
              {/* Main Glow */}
              <div className="absolute w-[320px] h-[320px] rounded-full bg-[#89CFF1]/30 blur-[90px]" />

              {/* Gradient Circle Background */}
              <div
                className="
    absolute
    w-[310px]
    h-[310px]
    rounded-full
    bg-gradient-to-br
    from-[#003A6B]
    via-[#3776A1]
    to-[#89CFF1]
    shadow-[0_0_60px_rgba(55,118,161,0.4)]
    "
              />

              {/* Ring 1 */}
              <div
                className="
    absolute
    w-[340px]
    h-[340px]
    rounded-full
    border
    border-[#89CFF1]/30
    animate-spin
    "
                style={{ animationDuration: "25s" }}
              />

              {/* Ring 2 */}
              <div
                className="
    absolute
    w-[370px]
    h-[370px]
    rounded-full
    border
    border-dashed
    border-[#3776A1]/20
    animate-spin
    "
                style={{
                  animationDirection: "reverse",
                  animationDuration: "35s",
                }}
              />

              {/* Floating Security Icon */}
              {/* <div
                className="
    absolute
    top-12
    right-8
    w-16
    h-16
    rounded-2xl
    bg-white
    shadow-xl
    flex
    items-center
    justify-center
    backdrop-blur-md
    animate-bounce
    "
              >
                🛡️
              </div> */}

              {/* Floating Dot */}
              <div
                className="
    absolute
    bottom-20
    left-10
    w-8
    h-8
    rounded-full
    bg-[#89CFF1]
    shadow-lg
    "
              />

              {/* Floating Dot */}
              <div
                className="
    absolute
    top-24
    left-12
    w-5
    h-5
    rounded-full
    bg-[#3776A1]
    "
              />

              {/* PHOTO */}
              <img
                src={profilePhoto}
                alt="Arunia Salsanur Fais"
                className="
relative
z-20
w-[250px]
md:w-[270px]
lg:w-[285px]
-translate-y-6.5
drop-shadow-[0_30px_50px_rgba(0,58,107,0.35)]
hover:scale-105
transition-all
duration-500
"
              />

              {/* Name Card */}
              <div
                className="
    absolute
    bottom-10
    min-w-[320px]
text-center
    z-30
    bg-[#003A6B]/90
    backdrop-blur-xl
    px-6
    py-2
    rounded-2xl
    shadow-2xl
    "
              >
                <p className="text-white font-semibold text-lg">
                  Arunia Salsanur Fais, S.Kom.
                </p>

                <p className="text-[#89CFF1] text-sm">
                  Cybersecurity Enthusiast
                </p>
              </div>
            </div>
            {/* STATS */}
            <div className="grid grid-cols-3 gap-4">
              {/* Projects */}
              <div
                className="
                  bg-gradient-to-br
                  from-[#003A6B]
                  to-[#3776A1]
                  rounded-2xl
                  p-3
                  text-center
                  text-white
                  shadow-lg
                  hover:-translate-y-2
                  transition-all
                  duration-300
                  "
              >
                <FaServer className="mx-auto mb-3 text-xl" />

                <h3 className="text-3xl font-bold">2+</h3>

                <p className="text-sm text-blue-100">Projects</p>
              </div>

              {/* GPA */}
              <div
                className="
                  bg-gradient-to-br
                  from-[#3776A1]
                  to-[#5D9BC5]
                  rounded-2xl
                  p-3
                  text-center
                  text-white
                  shadow-lg
                  hover:-translate-y-2
                  transition-all
                  duration-300
                  "
              >
                <FaAward className="mx-auto mb-3 text-xl" />

                <h3 className="text-3xl font-bold">3.93</h3>

                <p className="text-sm text-blue-50">GPA</p>
              </div>

              {/* TOEIC */}
              <div
                className="
                  bg-gradient-to-br
                  from-[#89CFF1]
                  to-[#B8E3F7]
                  rounded-2xl
                  p-3
                  text-center
                  text-[#003A6B]
                  shadow-lg
                  hover:-translate-y-2
                  transition-all
                  duration-300
                  "
              >
                <FaAward className="mx-auto mb-3 text-xl" />

                <h3 className="text-3xl font-bold">800</h3>

                <p className="text-sm">TOEIC</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
