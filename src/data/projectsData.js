import monitoring1 from "../assets/projects/topologi.png";
import monitoring2 from "../assets/projects/opnsense.png";
import monitoring3 from "../assets/projects/grafana-dasbor.png";
import monitoring4 from "../assets/projects/zabbix.png";
import monitoring5 from "../assets/projects/cmd.png";
import koneksi1 from "../assets/projects/koneksi-beranda.png";
import koneksi2 from "../assets/projects/koneksi-tracer-study.png";
import koneksi3 from "../assets/projects/koneksi-dasbor.png";
import koneksi4 from "../assets/projects/koneksi-chat.png";
import koneksi5 from "../assets/projects/koneksi-data-alumni.png";
import koneksi6 from "../assets/projects/koneksi-profil.png";
import phisingAnalysis1 from "../assets/projects/phisingAnalysis1.png";
import phisingAnalysis2 from "../assets/projects/phisingAnalysis2.png";
import phisingAnalysis3 from "../assets/projects/phisingAnalysis3.png";
import phisingAnalysis4 from "../assets/projects/phisingAnalysis4.png";

export const projects = [
  {
    id: 1,

    slug: "security-monitoring-lab",

    title: "Security Monitoring & Network Security Lab",

    subtitle:
      "Integrated Security Monitoring Infrastructure with SIEM, Network Segmentation, VPN Security, and Threat Detection",

    category: "Cybersecurity",

    projectType: "Capstone Project",

    status: "Completed",

    period: "Mar 2025 – Jul 2025",

    organization: "Infinite Learning (Kampus Merdeka Mandiri)",

    role: "Security Analyst & Security Monitoring Engineer",

    description:
      "Designed and implemented an integrated cybersecurity laboratory environment combining network segmentation, secure remote access, SIEM monitoring, threat detection, and infrastructure observability. The solution leveraged OPNsense, WireGuard, Wazuh, Grafana, and Zabbix to provide centralized visibility, proactive monitoring, and incident detection across the network.",

    problemStatement:
      "Organizations require centralized visibility into network activity, system performance, and security events while ensuring secure access controls and effective threat detection capabilities.",

    objective:
      "Build a secure and observable network infrastructure that integrates network segmentation, VPN access, SIEM monitoring, threat detection, and real-time performance monitoring within a centralized platform.",

    contributions: [
      "Designed and implemented network segmentation architecture using OPNsense",
      "Configured firewall policies and access control mechanisms",
      "Deployed WireGuard VPN for secure remote access",
      "Implemented Multi-Factor Authentication (MFA) on OPNsense administration access",
      "Integrated Wazuh SIEM for centralized log collection and threat detection",
      "Configured Zabbix and Grafana for infrastructure monitoring and visualization",
      "Performed attack simulations including SQL Injection, Brute Force, and DDoS scenarios",
      "Analyzed security alerts and validated detection capabilities",
      "Contributed to technical documentation, testing, and final presentation",
    ],

    responsibilities: [
      "Security monitoring implementation",
      "SIEM deployment and log analysis",
      "Network security configuration",
      "Threat detection validation",
      "Attack simulation testing",
      "Infrastructure monitoring",
      "Technical documentation",
    ],

    keyFeatures: [
      "Network segmentation using OPNsense",
      "WireGuard VPN secure remote access",
      "Multi-Factor Authentication (MFA)",
      "Centralized log collection and SIEM monitoring",
      "Real-time threat detection and alerting",
      "Infrastructure performance monitoring",
      "Grafana monitoring dashboards",
      "Zabbix host and service monitoring",
      "Fail2ban automated attack mitigation",
    ],

    challenges: [
      "Integrating multiple open-source security platforms into a unified environment",
      "Ensuring reliable log forwarding and event visibility",
      "Reducing alert noise while maintaining detection accuracy",
      "Coordinating network segmentation, monitoring, and security controls simultaneously",
    ],

    solutions: [
      "Implemented centralized monitoring architecture using Wazuh, Zabbix, and Grafana",
      "Applied structured log collection and event correlation workflows",
      "Configured firewall policies and network segmentation through OPNsense",
      "Implemented VPN access and MFA to strengthen administrative security",
      "Used attack simulations to validate detection and mitigation effectiveness",
    ],

    outcomes: [
      "Successfully deployed an integrated security monitoring and network security infrastructure",
      "Achieved centralized visibility into network, system, and security events",
      "Validated detection of SQL Injection, Brute Force, and DDoS attack scenarios",
      "Implemented secure remote access using WireGuard VPN",
      "Improved network observability through Grafana and Zabbix dashboards",
      "Received Best Project Award during the final project showcase",
    ],

    learnings: [
      "Security Operations Center (SOC) fundamentals",
      "SIEM deployment and security monitoring",
      "Threat detection and incident analysis",
      "Network segmentation and firewall administration",
      "VPN implementation and secure remote access",
      "Multi-Factor Authentication deployment",
      "Infrastructure observability and monitoring",
      "Cybersecurity project implementation lifecycle",
    ],

    technologies: [
      "Wazuh",
      "Grafana",
      "Zabbix",
      "OPNsense",
      "WireGuard",
      "Fail2ban",
      "Google Authenticator",
      "Wireshark",
      "Ubuntu Server",
      "VMware",
      "Kali Linux",
    ],

    gallery: [monitoring1, monitoring2, monitoring3, monitoring4, monitoring5],
    documents: [
      {
        title: "Final Project Report",
        file: "/documents/laporan-massive-project.pdf",
        type: "PDF",
      },
    ],

    github: "",
    demo: "",
  },

  {
    id: 2,
    slug: "koneksi-alumni",

    title: "KONEKSI",

    subtitle:
      "Integrated Alumni Information System for Alumni Management, Tracer Study, Career Information, and Alumni Networking",

    category: "Web Development",

    projectType: "Academic Project",

    status: "Completed",

    period: "Sep 2025 – Jan 2026",

    organization: "YARSI University (PUSKAKA-UY)",

    role: "Frontend Web Developer",

    description:
      "Contributed to the development of KONEKSI, a web-based Alumni Information System designed to centralize alumni data management, tracer study activities, information dissemination, career services, alumni networking, and administrative operations. The platform supports multiple user roles, including Alumni, Study Program Administrators, and University Administrators, while providing an interactive and user-friendly experience through a modern React-based frontend.",

    problemStatement:
      "Alumni management processes were previously handled through multiple disconnected platforms, resulting in inefficient data collection, fragmented communication, difficulties in tracer study management, and limited interaction between alumni and the university.",

    objective:
      "Develop a centralized and scalable Alumni Information System that improves alumni data management, supports tracer study activities, facilitates communication, and enhances alumni engagement through digital services and information accessibility.",

    contributions: [
      "Developed responsive and reusable frontend interfaces using React.js and Tailwind CSS",
      "Implemented user-facing pages for alumni management, profile management, and information services",
      "Integrated frontend components with REST API services",
      "Implemented authentication and role-based access control (RBAC) features",
      "Collaborated closely with Product Owner, Scrum Master, UI/UX Designer, Backend Developers, and QA team using Scrum methodology",
      "Participated in sprint planning, daily scrum, sprint review, and retrospective activities",
      "Performed frontend testing, debugging, and feature validation",
      "Contributed to system refinement and usability improvements throughout development iterations",
    ],

    responsibilities: [
      "Frontend development",
      "API integration",
      "Responsive UI implementation",
      "Role-based interface development",
      "Bug fixing and optimization",
      "Sprint collaboration",
      "Feature testing and validation",
      "Technical documentation support",
    ],

    keyFeatures: [
      "Alumni Profile Management",
      "Tracer Study Management",
      "Digital Alumni Card Generation",
      "Career Information & Job Vacancy Portal",
      "Alumni Achievement Information",
      "News and Event Management",
      "Public Document Repository",
      "Email-based Notifications",
      "Alumni-to-Alumni Chat System",
      "Role-Based Access Control (RBAC)",
      "Administrative Dashboard & Statistics",
      "Search and Filtering of Alumni Data",
    ],

    challenges: [
      "Ensuring consistency across numerous frontend pages and user roles",
      "Managing complex API integrations for multiple system modules",
      "Implementing responsive layouts for various devices",
      "Maintaining scalability while handling diverse feature requirements",
      "Coordinating development activities within Agile Scrum sprints",
    ],

    solutions: [
      "Implemented reusable React component architecture to improve maintainability",
      "Applied structured API integration and state management practices",
      "Developed responsive layouts using Tailwind CSS",
      "Conducted iterative testing and debugging during each sprint cycle",
      "Collaborated continuously with stakeholders through Scrum ceremonies",
    ],

    outcomes: [
      "Successfully delivered a centralized Alumni Information System for YARSI University",
      "Improved efficiency of alumni data management and tracer study processes",
      "Enhanced accessibility to alumni information, career opportunities, and university announcements",
      "Enabled digital alumni services through alumni cards and document repositories",
      "Provided interactive communication features that strengthen alumni engagement",
      "Contributed to the successful completion of the KONEKSI Final Project",
    ],

    learnings: [
      "Frontend architecture and scalable React development",
      "REST API integration and client-server communication",
      "Role-Based Access Control (RBAC) implementation",
      "Agile Scrum software development practices",
      "Cross-functional team collaboration",
      "Responsive web design principles",
      "Software testing and debugging",
      "Large-scale information system development",
    ],

    technologies: [
      "React.js",
      "JavaScript",
      "Tailwind CSS",
      "REST API",
      "Axios",
      "Postman",
      "HTML",
      "CSS",
      "Git",
      "GitHub",
    ],

    gallery: [koneksi1, koneksi2, koneksi3, koneksi4, koneksi5, koneksi6],

    // documents: [
    //   {
    //     title: "Final Project Report",
    //     file: "/documents/laporan-akhir-koneksi.pdf",
    //     type: "PDF",
    //   },
    // ],

    github: "",
    demo: "",
  },

  {
    id: 3,

    slug: "phishing-investigation",

    title: "Phishing URL Threat Investigation",

    subtitle:
      "SOC-style phishing analysis using URL intelligence, threat classification, and social engineering assessment",

    category: "Cybersecurity",

    projectType: "Personal Project",

    status: "Completed",

    period: "June 2025",

    organization: "Independent Security Research",

    role: "Cybersecurity Analyst (SOC Simulation)",

    description:
      "Performed structured phishing investigation using a real-world malicious URL obtained from PhishTank. The analysis focused on identifying indicators of compromise (IOC), domain impersonation techniques, hosting infrastructure, and social engineering tactics. Threat intelligence tools such as VirusTotal and URLScan.io were used to validate malicious behavior and classify the phishing attempt.",

    problemStatement:
      "Phishing campaigns increasingly use trusted platforms such as Blogspot to host deceptive pages, making detection more difficult for end users and basic security filters.",

    objective:
      "To analyze a real phishing URL, identify malicious indicators, understand attacker techniques, and produce a SOC-style incident report for threat classification and mitigation recommendations.",

    contributions: [
      "Collected real phishing URL from PhishTank threat intelligence platform",
      "Performed URL reputation analysis using VirusTotal",
      "Conducted sandbox-style behavior inspection using URLScan.io",
      "Identified hosting infrastructure and domain impersonation patterns",
      "Analyzed social engineering techniques (Reward, Familiarity)",
      "Extracted indicators of compromise (domain, IP, TLS, metadata)",
      "Documented findings in SOC-style incident report format",
    ],

    responsibilities: [
      "Threat intelligence collection and validation",
      "Malicious URL analysis and reputation checking",
      "IOC extraction and classification",
      "Social engineering analysis",
      "Security reporting and documentation",
    ],

    keyFeatures: [
      "Real-world phishing URL investigation",
      "VirusTotal multi-engine reputation analysis",
      "URLScan.io sandbox behavior analysis",
      "IOC extraction (domain, IP, TLS, metadata)",
      "Social engineering classification framework",
      "SOC-style incident reporting",
    ],

    challenges: [
      "Detecting phishing hosted on legitimate platforms like Blogspot",
      "Distinguishing deceptive branding from legitimate services",
      "Analyzing fast-changing malicious domains (low-age domains ~18 hours old)",
      "Correlating multiple threat intelligence sources into one conclusion",
    ],

    solutions: [
      "Cross-validated URL using VirusTotal and URLScan.io",
      "Analyzed domain age, hosting provider, and certificate metadata",
      "Identified impersonation pattern targeting Shopee branding",
      "Applied structured SOC methodology (IOC → behavior → classification)",
    ],

    outcomes: [
      "Successfully identified Blogspot-hosted phishing campaign impersonating Shopee",
      "Extracted key indicators of compromise including domain, IP, and TLS metadata",
      "Classified attack using social engineering techniques (Reward + Familiarity)",
      "Produced structured SOC-style incident report",
      "Improved practical skills in threat intelligence and phishing analysis",
    ],

    learnings: [
      "Phishing detection and analysis methodology",
      "SOC workflow and incident reporting structure",
      "Threat intelligence platform usage (VirusTotal, URLScan)",
      "IOC extraction and correlation techniques",
      "Social engineering attack patterns",
      "Domain impersonation and lookalike analysis",
    ],

    technologies: [
      "VirusTotal",
      "URLScan.io",
      "PhishTank",
      "WHOIS Lookup",
      "Threat Intelligence Analysis",
      "SOC Methodology",
      "IOC Analysis",
      "Web Security Analysis",
    ],

    gallery: [
      phisingAnalysis1,
      phisingAnalysis2,
      phisingAnalysis3,
      phisingAnalysis4,
    ],

    documents: [
      {
        title: "Phising Analysis Report",
        file: "/documents/phising-analysis-report.pdf",
        type: "PDF",
      },
    ],

    github: "",
    demo: "",
  },
];
