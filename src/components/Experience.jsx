import React, { useRef, useEffect } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import { FaGlobe, FaInstagram, FaFacebook, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn } from "../utils/motion";

const platformLinks = [
  {
    label: "Website",
    href: "https://alekhaaschools.com/",
    Icon: FaGlobe,
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/alekhaaschools?igsh=MW80Y3g5ejN0eXlmZw==",
    Icon: FaInstagram,
  },
  {
    label: "Facebook",
    href: "https://www.facebook.com/EKHAASCHOOLS",
    Icon: FaFacebook,
  },
  {
    label: "YouTube",
    href: "https://www.youtube.com/@ekhaaele",
    Icon: FaYoutube,
  },
  {
    label: "X",
    href: "https://x.com/alekhaa_schools",
    Icon: FaXTwitter,
  },
];

const Experience = ({ lang, t }) => {
  const isArabic = lang === "ar";
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });
  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
  }, [isInView, mainControls]);

  return (
    <div ref={sectionRef}>
      <motion.div
        initial="hidden"
        animate={mainControls}
        variants={{
          hidden: { opacity: 0, y: -20 },
          visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
        }}
      >
        <p className={`${styles.sectionSubText} text-center`}>
          {t("sections.aboutMySchool.sub")}
        </p>
      </motion.div>

      <motion.div
        initial="hidden"
        animate={mainControls}
        variants={{
          hidden: { opacity: 0, y: -20 },
          visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
        }}
      >
        <h2 className={`${styles.sectionHeadText} text-center`}>
          {t("sections.aboutMySchool.title")}
        </h2>
      </motion.div>

      <div className="mt-16 flex justify-center">
        <div className="w-full max-w-5xl flex flex-col lg:flex-row items-stretch justify-center gap-8">
          <motion.div
            variants={fadeIn("left", "spring", 0.1, 0.6)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            className={`flex-1 bg-tertiary/80 backdrop-blur-xl p-8 rounded-2xl border border-white/10 shadow-[0_8px_30px_rgba(0,0,0,0.35)] transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_0_30px_rgba(145,94,255,0.35)] ${
              isArabic ? "text-right" : "text-left"
            }`}
          >
            <h3 className="text-white text-[24px] font-bold">{t("aboutMySchool.title")}</h3>
            <p className="text-secondary text-[16px] mt-2">{t("aboutMySchool.subtitle")}</p>
            <p className="text-white-100 text-[15px] mt-6 leading-7">
              {t("aboutMySchool.description")}
            </p>
          </motion.div>

          <motion.div
            variants={fadeIn("right", "spring", 0.2, 0.6)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            className="w-full lg:w-[320px] bg-tertiary/80 backdrop-blur-xl p-8 rounded-2xl border border-white/10 shadow-[0_8px_30px_rgba(0,0,0,0.35)] transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_0_30px_rgba(145,94,255,0.35)]"
          >
            <h3 className="text-white text-[20px] font-bold text-center">
              {t("aboutMySchool.platforms")}
            </h3>
            <div className="mt-6 flex flex-wrap items-center justify-center gap-5">
              {platformLinks.map(({ label, href, Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={label}
                  className="w-14 h-14 rounded-xl bg-primary border border-white/10 flex items-center justify-center text-secondary hover:text-white hover:border-purple-400/60 transition-all duration-300 hover:shadow-[0_0_20px_rgba(145,94,255,0.35)]"
                >
                  <Icon className="text-[26px]" />
                </a>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default SectionWrapper(Experience, "about-my-school");
