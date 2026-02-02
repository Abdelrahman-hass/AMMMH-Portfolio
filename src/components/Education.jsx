import React, { useRef, useEffect } from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { motion, useAnimation, useInView } from "framer-motion";

import "react-vertical-timeline-component/style.min.css";

import { styles } from "../styles";
import { education } from "../constants";
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";

const EducationCard = ({ education, index, lang }) => {
  const isLeft = index % 2 === 0;
  const title = lang === "ar" ? education.titleAr || education.title : education.title;
  const company = lang === "ar" ? education.company_nameAr || education.company_name : education.company_name;
  const date = lang === "ar" ? education.dateAr || education.date : education.date;
  const points = lang === "ar" ? education.pointsAr || education.points : education.points;
  return (
    <div className="relative">
      <VerticalTimelineElement
        position={isLeft ? "left" : "right"}
        contentStyle={{
          background: "#1d1836",
          color: "#fff",
          minHeight: "240px",
        }}
        contentArrowStyle={{ borderRight: "7px solid  #232631" }}
        date={date}
        iconStyle={{
          background: education.iconBg,
          width: "60px",
          height: "60px",
          borderRadius: "50%",
          boxShadow: "0 0 0 4px #fff, inset 0 2px 0 rgba(0,0,0,.08), 0 3px 0 4px rgba(0,0,0,.05)",
        }}
        icon={
          <div className="flex justify-center items-center w-full h-full">
            <img
              src={education.icon}
              alt={education.company_name}
              className="w-[60%] h-[60%] object-contain"
              loading="lazy"
              decoding="async"
            />
          </div>
        }
      >
        <div>
          <h3 className="text-white text-[24px] font-bold">{title}</h3>
          <p className="text-secondary text-[16px] font-semibold" style={{ margin: 0 }}>
            {company}
          </p>
        </div>

        <ul className={`mt-5 list-disc space-y-2 ${lang === "ar" ? "mr-5 text-right" : "ml-5 text-left"}`}>
          {points.map((point, index) => (
            <li
              key={`experience-point-${index}`}
              className="text-white-100 text-[14px] pl-1 tracking-wider"
            >
              {point}
            </li>
          ))}
        </ul>

        {education.certificatesUrl && (
          <div className="mt-6">
            <a
              href={education.certificatesUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center px-5 py-2 font-semibold text-white bg-gradient-to-r from-blue-500 to-purple-500 rounded-md shadow-[0_5px_0_0_rgba(0,0,0,0.6)] transition-all duration-100 ease-in-out hover:shadow-[0_3px_0_0_rgba(0,0,0,0.6)] hover:translate-y-[2px] active:translate-y-1 active:shadow-none select-none"
            >
              {lang === "ar" ? "عرض الشهادات" : "View Certificates"}
            </a>
          </div>
        )}
      </VerticalTimelineElement>

    </div>
  );
};

const Education = ({ lang }) => {
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
          {lang === "ar" ? "ما درسته حتى الآن" : "What I have Studied so far"}
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
          {lang === "ar" ? "التعليم" : "Education."}
        </h2>
      </motion.div>

      <div className="mt-20 flex flex-col" dir={lang === "ar" ? "ltr" : undefined}>
        <VerticalTimeline>
          {education.map((education, index) => (
            <EducationCard key={`experience-${index}`} education={education} index={index} lang={lang} />
          ))}
        </VerticalTimeline>
      </div>

      <style>{`
        .vertical-timeline-element {
          margin: 32px 0;
        }
        .vertical-timeline-element:last-child {
          margin-bottom: 0;
        }
        @media (min-width: 1170px) {
          .vertical-timeline-element {
            margin: 36px 0;
          }
        }
      `}</style>
    </div>
  );
};

export default SectionWrapper(Education, "education");
