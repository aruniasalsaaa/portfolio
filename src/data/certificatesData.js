import isc2CC from "../assets/certifications/cc-course-completion.jpg";
import ccnaSRWE from "../assets/certifications/ccna-srwe.jpg";
import ccnaITN from "../assets/certifications/ccna-introduction-to-networks.jpg";
import softskills from "../assets/certifications/softskill-greenskills.jpg";
import studiIndependen from "../assets/certifications/stupen.jpg";
import bestProject from "../assets/certifications/best-project.jpg";
import toeic from "../assets/certifications/toeic.jpg";
import ldkKahfi from "../assets/certifications/koordinator-media-kahfi.jpg";
import cybersecurityTraining from "../assets/certifications/cybersecurity-training.jpg";
import seminarHaji from "../assets/certifications/seminar-haji.jpg";
import panitiaIyrc from "../assets/certifications/panitia-iyrc.jpg";

export const certificatesData = [
  {
    id: 1,
    slug: "isc2-certified-in-cybersecurity-course-conclusion",
    title: "CC Course Conclusion & Final Assessment",
    issuer: "ISC2",
    issueDate: "2026-04-15",
    type: "Professional",
    category: "Cybersecurity",

    description:
      "Successfully completed the ISC2 Certified in Cybersecurity (CC) learning program and final assessment. The program provides a strong foundation in cybersecurity principles, security operations, risk management, access control, and incident response aligned with industry best practices.",

    skills: [
      "Cybersecurity Fundamentals",
      "Security Principles",
      "Access Control",
      "Network Security",
      "Risk Management",
      "Incident Response",
    ],

    outcomes: [
      "Completed the ISC2 Certified in Cybersecurity learning path.",
      "Passed the final assessment.",
      "Built a solid understanding of essential cybersecurity concepts.",
    ],

    credentialId: "",
    credentialUrl: "",

    image: isc2CC,

    preview: "",
    previewType: "",

    file: "",

    featured: true,
  },

  {
    id: 2,
    slug: "ccnav7-switching-routing-wireless-essentials",
    title: "CCNAv7: Switching, Routing, and Wireless Essentials",
    issuer: "Cisco Networking Academy",
    issueDate: "2024-06-26",
    type: "Networking",
    category: "Networking",

    description:
      "Completed Cisco Networking Academy's Switching, Routing, and Wireless Essentials course, focusing on configuring routers and switches, implementing VLANs, inter-VLAN routing, wireless networks, and network troubleshooting.",

    skills: [
      "Switch Configuration",
      "Routing",
      "VLAN",
      "Inter-VLAN Routing",
      "Wireless LAN",
      "Network Troubleshooting",
    ],

    outcomes: [
      "Configured switching and routing devices.",
      "Implemented VLAN segmentation.",
      "Learned enterprise wireless networking concepts.",
    ],

    credentialId: "",
    credentialUrl: "",

    image: ccnaSRWE,

    preview: "/documents/ccna-swre.pdf",
    previewType: "pdf",

    file: "/documents/ccna-swre.pdf",

    featured: true,
  },

  {
    id: 3,
    slug: "ccnav7-introduction-to-networks",
    title: "CCNAv7: Introduction to Networks",
    issuer: "Cisco Networking Academy",
    issueDate: "2024-08-24",
    type: "Networking",
    category: "Networking",

    description:
      "Completed the Introduction to Networks course covering networking fundamentals, IPv4/IPv6 addressing, Ethernet technologies, routing basics, and network security concepts.",

    skills: [
      "Networking Fundamentals",
      "IPv4",
      "IPv6",
      "Ethernet",
      "OSI Model",
      "TCP/IP",
    ],

    outcomes: [
      "Understood computer networking fundamentals.",
      "Configured basic network devices.",
      "Learned IP addressing and subnetting.",
    ],

    credentialId: "",
    credentialUrl: "",

    image: ccnaITN,

    preview: "/documents/ccna-introduction-to-networks.pdf",
    previewType: "pdf",

    file: "/documents/ccna-introduction-to-networks.pdf",

    featured: true,
  },

  {
    id: 4,
    slug: "softskills-greenskills-training",
    title: "Softskills & Greenskills Training",
    issuer: "Plan International Indonesia",
    issueDate: "2026-05-06",
    type: "Training",
    category: "Soft Skills",

    description:
      "Successfully completed the Softskills & Greenskills Training program organized by Plan International Indonesia. The program focused on career readiness through CV and cover letter optimization, interview preparation, and workplace communication, while also introducing sustainability concepts, environmental awareness, green lifestyles, and future green career opportunities.",

    skills: [
      "CV Optimization",
      "Cover Letter Writing",
      "Interview Preparation",
      "Workplace Communication",
      "Environmental Awareness",
      "Green Skills",
    ],

    outcomes: [
      "Improved CV and cover letter writing using keyword optimization techniques.",
      "Developed effective interview preparation strategies for job applications.",
      "Strengthened workplace communication skills for professional environments.",
      "Built awareness of environmental issues and sustainable lifestyle practices.",
      "Gained insight into emerging green careers and sustainability in the workplace.",
    ],

    credentialId: "",
    credentialUrl: "",

    image: softskills,

    preview: "/documents/softskills-greenskills.pdf",
    previewType: "pdf",

    file: "/documents/softskills-greenskills.pdf",

    featured: true,
  },

  {
    id: 5,
    slug: "independent-study-cybersecurity-soc-fundamentals",
    title: "Independent Study - Computer & Network Security",
    issuer: "Infinite Learning",
    issueDate: "2025-07-31",
    type: "Training",
    category: "Independent Study",

    description:
      "Successfully completed the Independent Study - Computer & Network Security program at Infinite Learning. The program provided hands-on learning in cybersecurity, computer networking, and network defense through practical labs covering Security Operations Center (SOC) fundamentals, network security, Linux, Python for security, firewall and VPN implementation, threat detection, incident response, and network troubleshooting.",

    skills: [
      "Cybersecurity Fundamentals",
      "Computer Networking",
      "Network Security",
      "Security Operations Center (SOC)",
      "Linux",
      "Python for Security",
      "Firewall & VPN",
      "Threat Detection",
      "Incident Response",
      "Network Troubleshooting",
      "OSI & TCP/IP",
      "IP Addressing & Subnetting",
    ],

    outcomes: [
      "Built a strong foundation in cybersecurity principles, security policies, cryptography, and Security Operations Center (SOC) concepts.",
      "Configured and managed network devices using IP addressing, subnetting, routing, switching, and TCP/IP networking concepts.",
      "Applied network security practices including firewall configuration, IDS/IPS, VPN, wireless security, and threat intelligence.",
      "Developed practical skills in Linux and Python for security-related tasks and basic security automation.",
      "Performed security monitoring, incident response, and network troubleshooting through hands-on laboratory activities.",
      "Strengthened communication, collaboration, and adaptability skills through team-based projects and presentations.",
    ],

    credentialId: "",
    credentialUrl: "",

    image: studiIndependen,

    preview: "/documents/stupen.pdf",
    previewType: "pdf",

    file: "/documents/stupen.pdf",

    featured: true,
  },
  {
    id: 6,
    slug: "best-project-award-security-monitoring-lab",
    title: "Best Project Award - Security Monitoring Lab",
    issuer: "Infinite Learning",
    issueDate: "2025-07-31",
    type: "Achievement",
    category: "Award",

    description:
      "Received the Best Project Award for successfully developing and presenting a Security Monitoring Lab project during the Independent Study program. The project demonstrated practical implementation of cybersecurity monitoring and team collaboration.",

    skills: [
      "Cybersecurity",
      "Security Monitoring",
      "Team Collaboration",
      "Project Presentation",
      "Problem Solving",
    ],

    outcomes: [
      "Recognized as Best Project among participating teams.",
      "Demonstrated practical cybersecurity implementation.",
      "Strengthened teamwork and presentation skills.",
    ],

    credentialId: "",
    credentialUrl: "",

    image: bestProject,

    preview: "/documents/best-project-stupen.pdf",
    previewType: "pdf",

    file: "/documents/best-project-stupen.pdf",

    featured: true,
  },

  {
    id: 7,
    slug: "toeic-listening-reading",
    title: "TOEIC Listening & Reading",
    issuer: "PT. International Test Center",
    issueDate: "2025-06-11",
    type: "Language",
    category: "English Proficiency",

    description:
      "Achieved a TOEIC Listening & Reading score of 800, demonstrating professional English proficiency in listening comprehension, reading comprehension, and workplace communication.",

    skills: [
      "English Communication",
      "Listening",
      "Reading",
      "Business English",
    ],

    outcomes: [
      "Obtained an official TOEIC score of 800.",
      "Demonstrated English proficiency suitable for professional environments.",
    ],

    score: "800",

    credentialId: "",
    credentialUrl: "",

    image: toeic,

    preview: "/documents/toeic.pdf",
    previewType: "pdf",

    file: "/documents/toeic.pdf",

    featured: true,
  },

  {
    id: 8,
    slug: "ldk-organization-membership",
    title: "Lembaga Dakwah Kampus (LDK) KAHFI",
    issuer: "LDK KAHFI",
    issueDate: "2026-02-04",
    type: "Organization",
    category: "Leadership",

    description:
      "Actively participated as a member of the campus Islamic organization (LDK), contributing to event organization, teamwork, communication, and leadership development through various campus activities.",

    skills: [
      "Leadership",
      "Team Management",
      "Communication",
      "Project Coordination",
      "Content Planning",
      "Event Management",
    ],

    outcomes: [
      "Progressed from Active Member to Media Department Coordinator.",
      "Led the Media Department in planning and coordinating content production.",
      "Managed team activities and ensured timely delivery of organizational media.",
      "Supported organizational events through effective communication and collaboration.",
    ],

    role: "Media Department Coordinator",

    credentialId: "",
    credentialUrl: "",

    image: ldkKahfi,

    preview: "/documents/ldk.pdf",
    previewType: "pdf",

    file: "/documents/ldk.pdf",

    featured: false,
  },

  {
  id: 9,
  slug: "futuremakers-cybersecurity-training",
  title: "Cybersecurity Training",
  issuer: "Plan International Indonesia & Standard Chartered Foundation",
  issueDate: "2026-07-02",
  type: "Training",
  category: "Cybersecurity",

  description:
    "Successfully completed the Cybersecurity Training under the Futuremakers Youth Employability Programme organized by Plan International Indonesia and Standard Chartered Foundation. The program covered essential security principles, network security fundamentals, endpoint security, vulnerability assessment, risk management, incident response, and a project-based cybersecurity implementation.",

  skills: [
    "Cybersecurity Fundamentals",
    "Network Security",
    "Endpoint Security",
    "Vulnerability Assessment",
    "Risk Management",
    "Incident Response",
    "Security Principles",
  ],

  outcomes: [
    "Completed 109 learning hours of cybersecurity training.",
    "Built practical knowledge of cybersecurity concepts and best practices.",
    "Completed a project-based cybersecurity implementation.",
  ],

  credentialId: "",
  credentialUrl: "",

  image: cybersecurityTraining,

  preview: "/documents/cybersecurity-training.pdf",
  previewType: "pdf",

  file: "/documents/cybersecurity-training.pdf",

  featured: true,
},

{
  id: 10,
  slug: "seminar-nasional-haji-committee",
  title: "Committee - National Hajj Seminar",
  issuer: "Universitas YARSI",
  issueDate: "2025-07-30",
  type: "Organization",
  category: "Committee",

  description:
    "Served as a committee member for the National Hajj Seminar organized by Universitas YARSI. Contributed to event coordination, communication, and operational support to ensure the successful execution of the national seminar.",

  skills: [
    "Event Management",
    "Communication",
    "Teamwork",
    "Coordination",
    "Problem Solving",
  ],

  outcomes: [
    "Supported the successful execution of a national seminar.",
    "Collaborated with committee members in organizing the event.",
    "Strengthened organizational and communication skills.",
  ],

  role: "Committee",

  credentialId: "",
  credentialUrl: "",

  image: seminarHaji,

  preview: "/documents/panitia-seminar-nasional-haji.pdf",
  previewType: "pdf",

  file: "/documents/panitia-seminar-nasional-haji.pdf",

  featured: true,
},

{
  id: 11,
  slug: "iyrc-committee",
  title: "Committee - Indonesia Youth Robot Competition",
  issuer: "Indonesia Youth Robot Federation & Universitas YARSI",
  issueDate: "2025-05-18",
  type: "Organization",
  category: "Committee",

  description:
    "Served as a committee member for the Indonesia Youth Robot Competition (IYRC), assisting in event organization, participant coordination, and operational activities throughout the competition.",

  skills: [
    "Event Coordination",
    "Teamwork",
    "Communication",
    "Organization",
    "Problem Solving",
  ],

  outcomes: [
    "Contributed to the successful implementation of the competition.",
    "Coordinated with committee members during event operations.",
    "Improved organizational and teamwork skills.",
  ],

  role: "Committee",

  credentialId: "",
  credentialUrl: "",

  image: panitiaIyrc,

  preview: "/documents/panitia-iyrc.pdf",
  previewType: "pdf",

  file: "/documents/panitia-iyrc.pdf",

  featured: true,
},
];
