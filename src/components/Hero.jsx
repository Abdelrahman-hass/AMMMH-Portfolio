import { motion } from "framer-motion";
import { styles } from "../styles";

const Hero = ({ lang }) => {
  const highlightClasses = {
    Harvard: "text-red-300",
    "6+": "text-blue-300",
    Projects: "text-indigo-200",
    Certificates: "text-violet-200",
    "99.5%+": "text-purple-300",
    "Target:": "text-purple-200",
    "99%+": "text-purple-300",
    Consistency: "text-purple-200",
    "الاستمرارية": "text-purple-200",
    "الهدف:": "text-purple-200",
    Cybersecurity: "text-cyan-300",
    Cyber: "text-cyan-300",
    Robotics: "text-emerald-300",
    Web: "text-sky-300",
    "8": "text-amber-300",
    "24": "text-amber-300",
    "4": "text-amber-300",
    "2.5": "text-amber-300",
    "(avg 2.5h)": "text-amber-300",
    AI: "text-purple-300",
    Systems: "text-indigo-300",
    intelligent: "text-purple-300",
    "2": "text-amber-300",
    "save time": "text-emerald-300",
    "useful systems": "text-cyan-300",
    improvement: "text-teal-300",
    "~4 months": "text-amber-300",
    assignments: "text-amber-200",
    lectures: "text-amber-200",
    "professional certificates": "text-pink-300",
    "الشهادات": "text-violet-200",
    "شهادات احترافية": "text-pink-300",
    "مشاريع": "text-indigo-200",
    "الذكاء الاصطناعي": "text-purple-300",
    "الأمن السيبراني": "text-cyan-300",
    "الروبوتات": "text-emerald-300",
    "الويب": "text-sky-300",
    "توفير الوقت": "text-emerald-300",
    "أنظمة مفيدة": "text-cyan-300",
    "تحسن": "text-teal-300",
    "ميدالية ذهبية": "text-amber-300",
    "برنامجين": "text-amber-300",
    "أشهر": "text-amber-200",
    "مهمة": "text-amber-200",
    "محاضرة": "text-amber-200",
    "ذكية": "text-purple-300",
    "ذكاء": "text-purple-300",
    "أمن": "text-cyan-300",
    "أنظمة": "text-indigo-300",
  };

  const numberRegex = /(\d+(?:\.\d+)?%?\+?)/g;

  const renderWithHighlights = (text, highlights = []) => {
    if (!text) return null;
    let parts = [text];
    highlights.forEach((word) => {
      parts = parts.flatMap((part) =>
        typeof part === "string" ? part.split(new RegExp(`(${word})`, "gi")) : part
      );
    });

    return parts.flatMap((part, idx) => {
      if (typeof part !== "string") return part;

      const highlightMatch = highlights.find(
        (word) => part.toLowerCase() === word.toLowerCase()
      );
      if (highlightMatch) {
        const highlightClass = highlightClasses[highlightMatch] || "text-purple-300";
        return (
          <span key={`hl-${text}-${idx}`} className={`${highlightClass} font-extrabold`}>
            {part}
          </span>
        );
      }

      const numberParts = part.split(numberRegex);
      return numberParts.map((numPart, numIdx) => {
        if (!numPart) return null;
        if (numberRegex.test(numPart)) {
          return (
            <span key={`num-${text}-${idx}-${numIdx}`} className="text-amber-300 font-extrabold">
              {numPart}
            </span>
          );
        }
        return <span key={`txt-${text}-${idx}-${numIdx}`}>{numPart}</span>;
      });
    });
  };

  const scrollToId = (id) => {
    const target = document.getElementById(id);
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const isArabic = lang === "ar";

  const dashboardCards = isArabic
    ? [
        {
          title: "اعتمادات Harvard",
          logo: "/Logos/Harvard_logo.png",
          main: "8\u00A0الشهادات",
          mainHighlights: ["8", "الشهادات"],
          lines: [
            {
              text: "أكملت خلال ~4 أشهر • 24 مهمة • 24 محاضرة",
              highlights: ["~4", "24", "أشهر", "مهمة", "محاضرة"],
            },
            { text: "2 شهادات احترافية", highlights: ["2", "شهادات احترافية"] },
            { text: "أنجزت 3 مشاريع خلال البرنامج", highlights: ["3", "مشاريع"] },
          ],
          button: "عرض الشهادات",
          target: "certifications",
        },
        {
          title: "النتائج الأكاديمية",
          logo: "/Logos/Qyem_logo.png",
          main: "99%+\u00A0الاستمرارية",
          mainHighlights: ["99%+", "الاستمرارية"],
          lines: [
            { text: "الهدف: 99.5%+ متوسط سنوي", highlights: ["الهدف:", "99.5%+"] },
            { text: "دراسة مركزة وتحسن مستمر", highlights: ["تحسن"] },
          ],
          button: "عرض الشهادات المدرسية",
          target: "school-certificates",
        },
        {
          title: "الإنتاج التقني",
          logo: "/Logos/AMMMH_logo.png",
          main: "6+\u00A0مشاريع",
          mainHighlights: ["6+", "مشاريع"],
          lines: [
            {
              text: "الذكاء الاصطناعي • الأمن السيبراني • الروبوتات • الويب",
              highlights: ["الذكاء الاصطناعي", "الأمن السيبراني", "الروبوتات", "الويب"],
            },
            { text: "بناء مشاريع طلابية حقيقية", highlights: ["مشاريع"] },
          ],
          button: "عرض المشاريع",
          target: "projects",
        },
        {
          title: "خارطة التعلم (2026)",
          logo: "/Logos/AMMMH_logo.png",
          main: "المحطات القادمة",
          lines: [
            { text: "إكمال برنامجين إضافيين من Harvard/edX", highlights: ["برنامجين", "Harvard"] },
            { text: "الهدف: ميدالية ذهبية في مسابقة الكنغر الرياضي", highlights: ["ميدالية ذهبية"] },
          ],
        },
        {
          title: "المسار المهني",
          logo: "/Logos/AMMMH_logo.png",
          main: "ذكاء اصطناعي • أمن • أنظمة",
          mainHighlights: ["ذكاء", "أمن", "أنظمة"],
          lines: [
            { text: "الهدف: بناء منصات تعلم ذكية", highlights: ["ذكية"] },
            { text: "التركيز على أنظمة آمنة ومفيدة", highlights: ["أنظمة مفيدة"] },
          ],
        },
        {
          title: "مميزاتي",
          logo: "/Logos/AMMMH_logo.png",
          main: "تعلم وبحث ذكي",
          lines: [
            { text: "أستخدم الذكاء الاصطناعي للبحث عن معلومات موثوقة بسرعة", highlights: ["الذكاء الاصطناعي"] },
            { text: "أطبق الذكاء الاصطناعي لتوفير الوقت أثناء التعلم", highlights: ["توفير الوقت"] },
          ],
        },
      ]
    : [
        {
          title: "Harvard Credentials",
          logo: "/Logos/Harvard_logo.png",
          main: "8\u00A0Certificates",
          mainHighlights: ["8", "Certificates"],
          lines: [
            {
              text: "Completed in ~4 months • 24 assignments • 24 lectures",
              highlights: ["~4 months", "24", "assignments", "lectures"],
            },
            { text: "2 professional certificates", highlights: ["2", "professional certificates"] },
            { text: "Built 3 projects during the program", highlights: ["projects"] },
          ],
          button: "View Certificates",
          target: "certifications",
        },
        {
          title: "Academic Results",
          logo: "/Logos/Qyem_logo.png",
          main: "99%+\u00A0Consistency",
          mainHighlights: ["99%+", "Consistency"],
          lines: [
            { text: "Target: 99.5%+ yearly average", highlights: ["Target:", "99.5%+"] },
            { text: "Focused study and steady improvement", highlights: ["improvement"] },
          ],
          button: "View School Certificates",
          target: "school-certificates",
        },
        {
          title: "Tech Output",
          logo: "/Logos/AMMMH_logo.png",
          main: "6+\u00A0Projects",
          mainHighlights: ["6+", "Projects"],
          lines: [
            {
              text: "AI • Cybersecurity • Robotics • Web",
              highlights: ["Cybersecurity", "Robotics", "Web"],
            },
            { text: "Building real student projects", highlights: ["projects"] },
          ],
          button: "View Projects",
          target: "projects",
        },
        {
          title: "Learning Roadmap (2026)",
          logo: "/Logos/AMMMH_logo.png",
          main: "Next Milestones",
          lines: [
            { text: "Complete 2 additional Harvard/edX programs", highlights: ["2", "Harvard"] },
            { text: "Aim for Gold Medal in Math Kangaroo competitions", highlights: ["Gold Medal"] },
          ],
        },
        {
          title: "Career Path",
          logo: "/Logos/AMMMH_logo.png",
          main: "AI • Cyber • Systems",
          mainHighlights: ["AI", "Cyber", "Systems"],
          lines: [
            { text: "Goal: Build intelligent learning platforms", highlights: ["intelligent"] },
            { text: "Focus on safe, useful systems", highlights: ["useful systems"] },
          ],
        },
        {
          title: "My Strengths",
          logo: "/Logos/AMMMH_logo.png",
          main: "Smart Learning",
          lines: [
            { text: "Use AI to research and find reliable information faster", highlights: ["AI"] },
            { text: "Apply AI to real tasks and save time while learning", highlights: ["save time"] },
          ],
        },
      ];

  return (
    <section
      id="executive-summary"
      className="relative w-full min-h-screen mx-auto pb-24 pt-[140px] sm:pt-[160px]"
    >
      <div className={`max-w-7xl mx-auto ${styles.paddingX}`}>
        <div className={`flex flex-col gap-6 ${isArabic ? "text-right" : "text-left"}`}>
          <div className="flex flex-wrap items-center gap-3">
            <span
              className={`text-[12px] text-secondary font-semibold ${
                isArabic ? "" : "uppercase tracking-[0.3em]"
              }`}
            >
              {isArabic ? "الملخص التنفيذي" : "Executive Summary"}
            </span>
            <span className="text-[12px] text-secondary border border-white/10 px-3 py-1 rounded-full bg-tertiary/40">
              {isArabic ? "الصف العاشر • مدارس الإخاء (جدة)" : "Grade 10 • Al Ekhaa Private Schools (Jeddah)"}
            </span>
          </div>

          <h1 className="text-white text-[30px] sm:text-[40px] md:text-[48px] font-bold leading-tight max-w-4xl">
            {isArabic
              ? "عبدالرحمن حسانين — أتعلم المهارات الحديثة والمهمة منذ سن مبكرة."
              : "Abdelrahman Hassanein — learning modern, important skills at an early age."}
          </h1>

          <p className="text-white-100 text-[15px] sm:text-[17px] max-w-3xl">
            {isArabic ? "الذكاء الاصطناعي • الأمن السيبراني • الروبوتات • الويب" : "AI • Cybersecurity • Robotics • Web"}
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
                <div className="flex justify-center items-center mb-3 h-32">
                  <img
                    src={card.logo}
                    alt={`${card.title} logo`}
                    className={`${
                      card.title === "Academic Results"
                        ? "h-22 md:h-24"
                        : "h-36 md:h-40"
                    } w-auto object-contain`}
                    loading="lazy"
                    decoding="async"
                  />
                </div>
                <h3 className="text-white text-[16px] md:text-[18px] font-semibold h-[28px] flex items-center justify-center text-center leading-none tracking-wide w-full truncate">
                  {card.title}
                </h3>
              </div>

              <div className="text-white text-[24px] md:text-[26px] font-bold text-center h-[64px] flex items-center justify-center whitespace-nowrap truncate">
                {renderWithHighlights(card.main, card.mainHighlights || [])}
              </div>

              <div className="flex flex-col justify-between min-h-[130px]">
                <ul
                  className={`space-y-4 text-secondary text-[15px] md:text-[16px] list-disc leading-relaxed ${
                    isArabic ? "pr-6 text-right" : "pl-6 text-left"
                  }`}
                >
                  {card.lines.map((line) => {
                    if (typeof line === "string") {
                      return (
                        <li key={line} className="break-words">
                          {renderWithHighlights(line)}
                        </li>
                      );
                    }

                    const { text, highlights = [] } = line;

                    return (
                      <li key={text} className="break-words">
                        {renderWithHighlights(text, highlights)}
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
