import {
  mobile,
  backend,
  web,
  fullstack,
  javascript,
  java,
  // html,  // unused - not in Tech.jsx
  // css,   // unused - not in any array
  reactjs,
  ubuntu,
  tailwind,
  postgresql,
  // git,   // unused - not in any array
  otu,
  rhhs,
  wonderland,
  mackenziehealth,
  privcurity,
  staples,
  google,
  whmis,
  aws,
  python,
  cplusplus,
  typescript,
  axelotlanding,
  netdashlanding,
  securebankdashboard,
  sunnifyimage,
  knifethrowimage,
  // pythonanalysis,
  // password_generator,
  // wordsearch,
  powershell,
  cisco,
  connectwise,
  virtualbox,
  kalilinux,
  wireshark,
  nmap,
  // metasploit,  // unused - not in Tech.jsx
  johntheripper,
  // hydra,       // unused - not in Tech.jsx
  // aircrackng,  // unused - not in Tech.jsx
  photoshop,
  premiere,
  cinema4d,
  // blender,  // unused - not in Tech.jsx
  connectwisecert,
  awsdbcert,
  financialflowimage,
  // enterpriseapitester,
  github,
  mongodb,
  microsoft,
  ibm,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "education",
    title: "Education",
  },
  {
    id: "work",
    title: "About My School",
  },
  {
    id: "extracurricular",
    title: "Certifications",
  },
  {
    id: "projects",
    title: "Projects",
  },
];

const services = [
  {
    title: "Software Developer",
    icon: fullstack,
  },
  {
    title: "Systems Infrastructure",
    icon: backend,
  },
  {
    title: "Cloud Automation",
    icon: mobile,
  },
  {
    title: "Workflows",
    icon: web,
  },
];

const education = [
  {
    title: "Grades 4–6",
    company_name: "Al Ekhaa Private Schools",
    icon: rhhs,
    iconBg: "#fff",
    date: "2016 - 2022",
    points: [
      "Started my journey at Al Ekhaa Private Schools in Grade 4.",
      "Built strong academic foundations through Grades 5 and 6.",
      "Continued to grow with consistent performance and discipline.",
    ],
  },
  {
    title: "Grade 7",
    company_name: "Al Ekhaa Private Schools",
    icon: rhhs,
    iconBg: "#fff",
    date: "2022 - 2023",
    points: [
      "My first year at Al Ekhaa Private Schools, focused on building strong study habits.",
      "Year Grade: 99%",
    ],
  },
  {
    title: "Grade 8",
    company_name: "Al Ekhaa Private Schools",
    icon: rhhs,
    iconBg: "#fff",
    date: "2023 - 2024",
    points: [
      "Maintained excellent performance across all subjects at Al Ekhaa Private Schools.",
      "Year Grade: 99.48%",
    ],
    certificatesUrl: "/certificates-grade-8.html",
  },
  {
    title: "Grade 9",
    company_name: "Al Ekhaa Private Schools",
    icon: rhhs,
    iconBg: "#fff",
    date: "2024 - 2025",
    points: [
      "Consistently high results and steady improvement throughout the year.",
      "Year Grade: 99.58%",
    ],
    certificatesUrl: "/certificates-grade-9.html",
  },
  {
    title: "Grade 10",
    company_name: "Al Ekhaa Private Schools",
    icon: rhhs,
    iconBg: "#fff",
    date: "2025 - 2026 (Term 1)",
    points: [
      "Completed Term 1 at Al Ekhaa Private Schools with strong performance.",
      "Term 1 Grade: 99.85%",
    ],
    certificatesUrl: "/certificates-grade-10.html",
  },
];

const technologies = [
  {
    name: "Java",
    icon: java,
  },
  {
    name: "Python",
    icon: python,
  },
  {
    name: "C++",
    icon: cplusplus,
  },
    {
    name: "PowerShell",
    icon: powershell,
  },
  {
    name: "Kali Linux",
    icon: kalilinux,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "PostgreSQL",
    icon: postgresql,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  // {
  //   name: "HTML 5",
  //   icon: html,
  // },
    {
    name: "Tailwind CSS",
    icon: tailwind,
  }, 
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "AWS",
    icon: aws,
  },
];

const itTools = [
  {
    name: "Powershell",
    icon: powershell,
  },
  {
    name: "Cisco",
    icon: cisco,
  },
  {
    name: "ConnectWise",
    icon: connectwise,
  },
  {
    name: "VirtualBox",
    icon: virtualbox,
  },
];

const cybersecurityTools = [
  {
    name: "Kali Linux",
    icon: kalilinux,
  },
  {
    name: "Wireshark",
    icon: wireshark,
  },
  {
    name: "Nmap",
    icon: nmap,
  },
  // {
  //   name: "Metasploit",
  //   icon: metasploit,
  // },
  {
    name: "John the Ripper",
    icon: johntheripper,
  },
  // {
  //   name: "Hydra",
  //   icon: hydra,
  // },
  // {
  //   name: "Aircrack-ng",
  //   icon: aircrackng,
  // },
];

const designTools = [
  {
    name: "Photoshop",
    icon: photoshop,
  },
  {
    name: "Premiere",
    icon: premiere,
  },
  {
    name: "Cinema 4D",
    icon: cinema4d,
  },
  // {
  //   name: "Blender",
  //   icon: blender,
  // },
];

const experiences = [
  {
    title: "Software Engineer Intern",
    company_name: "IBM",
    icon: ibm,
    iconBg: "#fff",
    date: "Jan. 2026 - Present",
    points: [
      "Full-Stack AI Engineering • watsonx Workshop 🤖",
    ],
  },
  {
    title: "IT Technician",
    company_name: "Canada's Wonderland",
    icon: wonderland,
    iconBg: "#fff",
    date: "Jun. 2023 - Jan. 2026",
    points: [
      "Provisioned Windows PCs with MDT, and deployed scripting via PowerShell and ConnectWise.",
      "Managed AD accounts to propagate ACLs and unified access across in-house apps, Exchange, and SharePoint.",
      "Configured Cisco CUCM, Unity, and Finesse for stable call routing and voicemail services.",
      "Handled switch patching and VLAN/routing via PuTTY & SecureCRT, ensuring stable network performance.",
      "Deployed Oracle POS/KDS/Debit solutions (EMC, Simphony), tracking updates in Jira & Confluence.",
    ],
  },
  {
    title: "System Support Specialist",
    company_name: "Mackenzie Health",
    icon: mackenziehealth,
    iconBg: "#fff",
    date: "Jan. 2023 - Aug. 2023",
    points: [
      "Overhauled 400+ Surface tablets to bedside iPads, deploying the in-house 'Get Well Soon' app with Intune to hospital systems.",
      "Developed and refined an admin portal for managing app services, user roles, and subscription expirations.",
      "Utilized Jamf Pro for MDM, securely deploying iPads/iPhones across clinical departments.",
      "Implemented Vocera VOIP on iPhones, enabling real-time communication among nurses and ER staff.",
      "Performed in-room checks, resolved device issues, and collaborated with vendors on bug logs and system updates.",
    ],
  },
  {
    title: "Tech Sales Associate",
    company_name: "Staples Canada (Co-op)",
    icon: staples,
    iconBg: "#1294C8",
    date: "Sep. 2020 - Feb. 2021",
    points: [
      "Provided specialized support for Windows, Mac, and Linux, performing on-site installations, repairs, and optimizations.",
      "Streamlined inventory processes by handling SKUs and POs, maintaining a well-organized sales floor.",
      "Maintained accurate sales and inventory data in IBM AS/400, improving workflows and operational efficiency.",
      "Resolved complex technical inquiries, delivering tailored solutions that ensured high customer satisfaction.",
      "Facilitated e-commerce transactions, merging in-store and online channels.",
    ],
  },
];


const extracurricular = [
  {
    title: "Award Certificate",
    type: "School Award",
    icon: "/Logos/Qyem_logo.png",
    iconBg: "#1b1f3a",
    date: "Issued: See certificate",
    points: [
      "Official award certificate.",
      "Recognizes academic effort and achievement.",
    ],
    credential: "/certificate-award.html",
  },
  {
    title: "Award Certificate 2",
    type: "School Award",
    icon: "/Logos/Qyem_logo.png",
    iconBg: "#1b1f3a",
    date: "Issued: See certificate",
    points: [
      "Official award certificate.",
      "Recognizes continued excellence and performance.",
    ],
    credential: "/certificate-award-2.html",
  },
  {
    title: "Award Certificate 3",
    type: "School Award",
    icon: "/Logos/Qyem_logo.png",
    iconBg: "#1b1f3a",
    date: "Issued: See certificate",
    points: [
      "Official award certificate.",
      "Recognizes outstanding academic results.",
    ],
    credential: "/certificate-award-3.html",
  },
  {
    title: "CS50P Certificate",
    type: "HarvardX / edX",
    icon: "/Logos/Harvard_logo.png",
    iconBg: "#0b1f2a",
    date: "Issued: See certificate",
    points: [
      "Certificate of completion for CS50P.",
      "Focus on Python programming fundamentals.",
    ],
    credential: "/certificate-cs50p.html",
  },
  {
    title: "CS50x Certificate",
    type: "HarvardX / edX",
    icon: "/Logos/Harvard_logo.png",
    iconBg: "#0b1f2a",
    date: "Issued: See certificate",
    points: [
      "Certificate of completion for CS50x.",
      "Covers core computer science concepts.",
    ],
    credential: "/certificate-cs50x.html",
  },
  {
    title: "CS50 Cybersecurity Certificate",
    type: "HarvardX / edX",
    icon: "/Logos/Harvard_logo.png",
    iconBg: "#0b1f2a",
    date: "Issued: See certificate",
    points: [
      "Cybersecurity course completion certificate.",
      "Covers security concepts and best practices.",
    ],
    credential: "/certificate-cs50-cybersecurity.html",
  },
  {
    title: "CS50P Certificate (edX)",
    type: "HarvardX / edX",
    icon: "/Logos/Harvard_logo.png",
    iconBg: "#0b1f2a",
    date: "Issued: See certificate",
    points: [
      "edX credential for CS50P.",
      "Verifies completion and achievement.",
    ],
    credential: "/certificate-cs50p-edx.html",
  },
  {
    title: "CS50x Certificate (edX)",
    type: "HarvardX / edX",
    icon: "/Logos/Harvard_logo.png",
    iconBg: "#0b1f2a",
    date: "Issued: See certificate",
    points: [
      "edX credential for CS50x.",
      "Verifies completion and achievement.",
    ],
    credential: "/certificate-cs50x-edx.html",
  },
  {
    title: "Mawhiba Hub Certificate",
    type: "Mawhiba Hub",
    icon: "/Logos/Mawhiba_logo.png",
    iconBg: "#050C18",
    date: "Issued: See certificate",
    points: [
      "Official Mawhiba Hub certificate.",
      "Recognizes participation and achievement.",
    ],
    credential: "/certificate-mawhiba-hub.html",
  },
  {
    title: "Professional Certificate (edX)",
    type: "edX Professional Certificate",
    icon: "/Logos/Harvard_logo.png",
    iconBg: "#0b1f2a",
    date: "Issued: See certificate",
    points: [
      "Professional certificate credential.",
      "Issued and verified by edX.",
    ],
    credential: "/certificate-professional-edx.html",
  },
  {
    title: "Professional Certificate (Cybersecurity)",
    type: "edX Professional Certificate",
    icon: "/Logos/Harvard_logo.png",
    iconBg: "#0b1f2a",
    date: "Issued: See certificate",
    points: [
      "Cybersecurity professional certificate.",
      "Issued and verified by edX.",
    ],
    credential: "/certificate-professional-cybersecurity.html",
  },
  {
    title: "Steam Certificate",
    type: "Certificate",
    icon: "/Logos/Qyem_logo.png",
    iconBg: "#1b1f3a",
    date: "Issued: See certificate",
    points: [
      "Official certificate document.",
      "Recognizes completion or participation.",
    ],
    credential: "/certificate-steam.html",
  },
];

const projects = [
  {
    name: "AIST (Advanced Intelligent Smart Desk)",
    description:
      "AIST (Advanced Intelligent Smart Desk) is a next-generation interactive desktop system inspired by futuristic HUD technology. It combines AI, gesture control, 3D visualization, voice interaction, and advanced UI into one intelligent platform.",
    tags: [
      { name: "AI", color: "blue-text-gradient" },
      { name: "HUD", color: "green-text-gradient" },
      { name: "3D UI", color: "pink-text-gradient" },
    ],
    image:
      "/Projects/AIST_Project/WhatsApp%20Unknown%202026-01-26%20at%2015.18.04/WhatsApp%20Unknown%202026-01-26%20at%2015.18.04%20(1)/MAIN.jpeg",
    source_code_link: "",
    live_project_link: "/project-aist.html",
  },
  {
    name: "ELEGOO Smart Car",
    description:
      "The ELEGOO Smart Car is an autonomous vehicle powered by an UNO R3 microcontroller. It uses DC motors and servo steering to move and navigate its environment.",
    tags: [
      { name: "Robotics", color: "blue-text-gradient" },
      { name: "Arduino", color: "green-text-gradient" },
      { name: "Automation", color: "pink-text-gradient" },
    ],
    image:
      "/Projects/Car_project/WhatsApp%20Unknown%202026-01-26%20at%2015.20.42/WhatsApp%20Unknown%202026-01-26%20at%2015.20.44/MAIN2.jpeg",
    source_code_link: "",
    live_project_link: "/project-car.html",
  },
  {
    name: "CS50x Project — ARNcode Web Designed App",
    description:
      "A web-designed application project built for CS50x, showcased in the demo with its interface flow, core pages, and main functionality.",
    tags: [
      { name: "CS50x", color: "blue-text-gradient" },
      { name: "Web App", color: "green-text-gradient" },
    ],
    image: "https://img.youtube.com/vi/tAm0Aluw5mg/hqdefault.jpg",
    source_code_link: "",
    live_project_link: "/project-video-1.html",
  },
  {
    name: "CS50 Cyber Security Project",
    description:
      "A cybersecurity project demo highlighting security concepts, testing flow, and results presented in the video.",
    tags: [
      { name: "Security", color: "blue-text-gradient" },
      { name: "CS50", color: "green-text-gradient" },
    ],
    image: "https://img.youtube.com/vi/SAXQMy7NPiE/hqdefault.jpg",
    source_code_link: "",
    live_project_link: "/project-video-2.html",
  },
  {
    name: "CS50P Project",
    description:
      "A CS50P Python project demo showing the program workflow, outputs, and key features from the video.",
    tags: [
      { name: "Python", color: "blue-text-gradient" },
      { name: "CS50P", color: "green-text-gradient" },
    ],
    image: "https://img.youtube.com/vi/rfRNsY1Uw0M/hqdefault.jpg",
    source_code_link: "",
    live_project_link: "/project-video-3.html",
  },
  // {
  //   name: "Enterprise API Tester 🌐",
  //   description:
  //     "Comprehensive API testing tool with support for all major HTTP methods, authentication, and CORS-friendly proxy. Features include request import/export, real-world samples, and local storage for data persistence. Built with Next.js, and TypeScript for optimal performance and developer experience.",
  //   tags: [
  //     {
  //       name: "Typescript",
  //       color: "blue-text-gradient",
  //     },
  //     {
  //       name: "Tailwind CSS",
  //       color: "green-text-gradient",
  //     },
  //     {
  //       name: "Next.js",
  //       color: "pink-text-gradient",
  //     },
  //     {
  //       name: "Authentication-Body",
  //       color: "blue-text-gradient",
  //     },
  //   ],
  //   image: enterpriseapitester,
  //   source_code_link: "https://github.com/sunnypatell/enterprise-api-request-tester",
  //   live_project_link: "https://enterprise-api-request-tester.vercel.app/",
  // },
  {
    name: "My Protoflio",
    description:
      "My Protoflio is the personal portfolio website you are viewing now. It highlights my projects, certifications, education, and 3D work in a clean, interactive layout.",
    tags: [
      { name: "Portfolio", color: "blue-text-gradient" },
      { name: "Three.js", color: "green-text-gradient" },
      { name: "React", color: "pink-text-gradient" },
    ],
    image: "/Projects/Protoflio.jpeg",
    source_code_link: "",
    live_project_link: "",
  },
  // {
  //   name: "COVID-19 GTA Cases Data Analysis 🧪",
  //   description:
  //     "A deep dive into ongoing COVID-19 outbreaks in the Greater Toronto Area (GTA), Ontario. Using data from a government-licensed dataset called Outbreaks by Public Health Unit (PHU) to explore trends and patterns in these outbreaks. This data analysis integrates the essential aspects of the data science workflow (Filesize: 3.5 MiB, 62699 lines of raw dataset)",
  //   tags: [
  //     {
  //       name: "python",
  //       color: "blue-text-gradient",
  //     },
  //     {
  //       name: "tensorflow",
  //       color: "green-text-gradient",
  //     },
  //     {
  //       name: "scikit-learn",
  //       color: "pink-text-gradient",
  //     },
  //     {
  //       name: "pandas",
  //       color: "green-text-gradient",
  //     },
  //     {
  //       name: "matplotlib",
  //       color: "pink-text-gradient",
  //     },
  //     {
  //       name: "numpy",
  //       color: "blue-text-gradient",
  //     },
  //   ],
  //   image: pythonanalysis,
  //   source_code_link: "https://drive.google.com/drive/folders/1cTbp-6-flypV-kj3-q606UwwWEralu11",
  //   live_project_link: "https://drive.google.com/drive/folders/1cTbp-6-flypV-kj3-q606UwwWEralu11",
  // },
  // {
  //   name: "Secure Password Generator 🔐",
  //   description:
  //     "Secure Password Generator is a Java-based tool designed to generate and manage secure passwords, prioritizing simplicity, security, and user-friendliness. It employs industry-standard encryption algorithms to create strong, unique passwords resistant to common hacking attempts.",
  //   tags: [
  //     {
  //       name: "java",
  //       color: "blue-text-gradient",
  //     },
  //     {
  //       name: "sha-256",
  //       color: "green-text-gradient",
  //     },
  //     {
  //       name: "encryption/decryption",
  //       color: "pink-text-gradient",
  //     },
  //     {
  //       name: "data-algorithms",
  //       color: "blue-text-gradient",
  //     },
  //   ],
  //   image: password_generator,
  //   source_code_link: "https://github.com/sunnypatell/SecurePasswordGenerator",
  //   live_project_link: "https://github.com/sunnypatell/SecurePasswordGenerator",
  // },
];

const testimonials = [
  {
    testimonial:
      "I highly recommend Sunny for his outstanding technical proficiency and professional approach as a System Support specialist at Mackenzie Hospital. His deep knowledge of iPad systems and troubleshooting abilities were instrumental in ensuring seamless operations and user satisfaction. Sunny's proactive attitude and problem-solving skills made him a reliable asset to our team, and he consistently exceeded expectations in resolving complex issues. I have no hesitation in endorsing him for any tech-related position, as I am confident he will excel in any challenge he takes on.",
    name: "Feda Abukhadrah, BIT | SaaS | Health Tech | MDM | ABM | POS | ITIL®V4 | CompTIA A+",
    designation: "Senior Service Desk Specialist",
    company: "Px Solutions LTD.",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "Sunny Patel's expertise in the technological domain is truly remarkable. Proficient in programming languages like Java, Python, and C++, and highly skilled in Microsoft's suite of tools, Sunny's grasp of networking concepts is extensive. What sets him apart is his experience in handling over 1000 devices remotely and on-site, along with a successful track record in troubleshooting and deploying various software and hardware upgrades. His dedication to tackling complex challenges, grounded in a strong foundation in software design and a rich academic background in computer science, positions Sunny as a valuable asset to any tech-driven team.",
    name: "Sanjay Sharma, MBA, CISSP, CISA, PMP®",
    designation: "Senior Vice-President and Head of Cybersecurity Services",
    company: "Pathway Communications / ex-Toronto Hydro",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "Sunny's proficiency in data entry was impeccable, displaying meticulous attention to detail and accuracy. His commitment to maintaining organized and error-free records significantly improved our operational efficiency. In customer service, Sunny's phone etiquette was truly commendable. He communicated with a warm and professional demeanour, leaving customers with a positive impression and ensuring their needs were met. His ability to multitask and handle multiple customers simultaneously was impressive, showcasing his excellent time management and interpersonal skills. Sunny's dedication to his role and adeptness in data entry, customer service, and managing simultaneous customer interactions made him a valuable asset to our team at Lazer Runner.",
    name: "Michelle Ilizirov",
    designation: "Manager",
    company: "Lazer Runner",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

export {
  services,
  technologies,
  itTools,
  cybersecurityTools,
  designTools,
  experiences,
  extracurricular,
  projects,
  education,
  testimonials
};
