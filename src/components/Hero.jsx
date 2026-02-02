import { motion } from "framer-motion";
import { styles } from "../styles";

const Hero = () => {
  const highlightClasses = {
    Harvard: "text-red-300",
    "6+": "text-blue-300",
    Projects: "text-blue-300",
    "99.5%+": "text-purple-300",
    Cybersecurity: "text-cyan-300",
    Robotics: "text-emerald-300",
    Web: "text-sky-300",
    "8": "text-violet-300",
    Certificates: "text-violet-300",
    "24": "text-amber-300",
    "(avg 2.5h)": "text-amber-300",
  };

  const scrollToId = (id) => {
    const target = document.getElementById(id);
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const dashboardCards = [
    {
      title: "Harvard Credentials",
      logo: "/Logos/Harvard_logo.png",
      main: "8 Certificates",
      lines: [
        {
          text: "Completed in ~4 months • 24 assignments • 24 lectures (avg 2.5h)",
          highlights: ["24", "(avg 2.5h)"],
        },
        { text: "Built 3 projects during the program", highlights: ["projects"] },
      ],
      highlight: "8",
      button: "View Certificates",
      target: "certifications",
    },
    {
      title: "Tech Output",
      logo: "/Logos/AMMMH_logo.png",
      main: "6+ Projects",
      lines: [
        {
          text: "AI • Cybersecurity • Robotics • Web",
          highlights: ["Cybersecurity", "Robotics", "Web"],
        },
        { text: "Building real student projects", highlights: ["projects"] },
      ],
      highlight: "6+",
      button: "View Projects",
      target: "projects",
    },
    {
      title: "Academic Results",
      logo: "/Logos/Qyem_logo.png",
      main: "99%+\u00A0Consistency",
      lines: [
        { text: "Target: 99.5%+ yearly average", highlights: ["99.5%+"] },
        { text: "Focused study and steady improvement" },
      ],
      highlight: "99%+",
      button: "View School Certificates",
      target: "school-certificates",
    },
    {
      title: "Learning Roadmap (2026)",
      logo: "/Logos/AMMMH_logo.png",
      main: "Next Milestones",
      lines: [
        { text: "Complete 2 additional Harvard/edX programs", highlights: ["Harvard"] },
        { text: "Aim for Gold Medal in Math Kangaroo competitions", highlights: ["Gold Medal"] },
      ],
      highlight: "MIT",
    },
    {
      title: "Career Path",
      logo: "/Logos/AMMMH_logo.png",
      main: "AI • Cyber • Systems",
      lines: [
        { text: "Goal: Build intelligent learning platforms", highlights: ["AI"] },
        { text: "Focus on safe, useful systems" },
      ],
      highlight: "AI",
    },
    {
      title: "My Strengths",
      logo: "/Logos/AMMMH_logo.png",
      main: "Smart Learning",
      lines: [
        { text: "Use AI to research and find reliable information faster", highlights: ["AI"] },
        { text: "Apply AI to real tasks and save time while learning" },
      ],
      highlight: "AI",
    },
  ];

  return (
    <section
      id="executive-summary"
      className="relative w-full min-h-screen mx-auto pb-24 pt-[140px] sm:pt-[160px]"
    >
      <div className={`max-w-7xl mx-auto ${styles.paddingX}`}>
        <div className="flex flex-col gap-6">
          <div className="flex flex-wrap items-center gap-3">
            <span className="uppercase tracking-[0.3em] text-[12px] text-secondary font-semibold">
              Executive Summary
            </span>
            <span className="text-[12px] text-secondary border border-white/10 px-3 py-1 rounded-full bg-tertiary/40">
              Grade 10 • Al Ekhaa Private Schools (Jeddah)
            </span>
          </div>

          <h1 className="text-white text-[30px] sm:text-[40px] md:text-[48px] font-bold leading-tight max-w-4xl">
            Abdelrahman Hassanein — learning modern, important skills at an early age.
          </h1>

          <p className="text-white-100 text-[15px] sm:text-[17px] max-w-3xl">
            AI • Cybersecurity • Robotics • Web
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-7">
          {dashboardCards.map((card, index) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="bg-tertiary/80 backdrop-blur-xl p-7 rounded-2xl border border-white/10 shadow-[0_8px_30px_rgba(0,0,0,0.35)] transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_0_30px_rgba(145,94,255,0.35)] flex flex-col justify-between min-h-[380px]"
            >
              <div className="flex flex-col items-center text-center min-h-[104px]">
                <div className="flex justify-center mb-3">
                  <img
                    src={card.logo}
                    alt={`${card.title} logo`}
                    className="h-20 w-auto object-contain"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
                <h3 className="text-white text-[16px] md:text-[18px] font-semibold h-[28px] flex items-center justify-center text-center leading-none tracking-wide w-full truncate">
                  {card.title}
                </h3>
              </div>

              <div className="text-white text-[22px] md:text-[24px] font-bold text-center h-[64px] flex items-center justify-center whitespace-nowrap truncate">
                {card.main.split(card.highlight || "").map((part, idx, arr) => (
                  <span key={`${card.title}-main-${idx}`}>
                    {part}
                    {idx < arr.length - 1 && (
                      <span className="text-purple-300 font-extrabold">{card.highlight}</span>
                    )}
                  </span>
                ))}
              </div>

              <div className="flex flex-col justify-between min-h-[130px]">
                <ul className="space-y-4 text-secondary text-[15px] md:text-[16px] list-disc pl-6 leading-relaxed">
                  {card.lines.map((line) => {
                    if (typeof line === "string") {
                      return (
                        <li key={line} className="break-words">
                          {line}
                        </li>
                      );
                    }

                    const { text, highlights = [] } = line;
                    let parts = [text];
                    highlights.forEach((word) => {
                      parts = parts.flatMap((part) =>
                        typeof part === "string"
                          ? part.split(new RegExp(`(${word})`, "gi"))
                          : part
                      );
                    });

                    return (
                      <li key={text} className="break-words">
                        {parts.map((part, idx) => {
                          const match = highlights.find(
                            (word) => typeof part === "string" && part.toLowerCase() === word.toLowerCase()
                          );
                          if (match) {
                            const highlightClass = highlightClasses[match] || "text-purple-300";
                            return (
                              <span key={`${text}-${idx}`} className={`${highlightClass} font-bold`}>
                                {part}
                              </span>
                            );
                          }
                          return <span key={`${text}-${idx}`}>{part}</span>;
                        })}
                      </li>
                    );
                  })}
                </ul>

                {card.button && (
                  <div className="pt-6">
                    <button
                      type="button"
                      onClick={() => scrollToId(card.target)}
                      className="w-full inline-flex items-center justify-center px-4 py-2 text-white text-[14px] font-semibold bg-gradient-to-r from-purple-500 to-blue-500 rounded-md shadow-[0_5px_0_0_rgba(0,0,0,0.6)] transition-all duration-100 ease-in-out hover:shadow-[0_3px_0_0_rgba(0,0,0,0.6)] hover:translate-y-[2px] active:translate-y-1 active:shadow-none"
                    >
                      {card.button}
                    </button>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
