import React, { useState, useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Autoplay, Pagination } from "swiper/modules";

import { styles } from "../styles";
import { schoolCertificates } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn } from "../utils/motion";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

const SchoolCertificateCard = ({ id, icon, credential, lang, t }) => {
  const safeT = typeof t === "function" ? t : (key) => key;
  const displayTitle = safeT(`schoolCertificates.items.${id}.title`);
  const displayType = safeT(`schoolCertificates.items.${id}.type`);
  const displayDate = safeT(`schoolCertificates.items.${id}.date`);
  const displayPoints = safeT(`schoolCertificates.items.${id}.points`);

  return (
  <div className="certification-card bg-tertiary p-6 rounded-2xl w-full h-full flex flex-col justify-between no-select" dir={lang === "ar" ? "rtl" : "ltr"}>
    <div>
      <div className="relative w-full h-[70px] mb-4 flex items-center justify-center">
        <img
          src={icon}
          alt={displayTitle}
          className="w-auto h-full object-contain no-select"
          loading="lazy"
          decoding="async"
        />
      </div>
      <h3 className={`text-white font-bold text-[20px] mb-2 no-select ${lang === "ar" ? "text-right" : "text-left"}`}>{displayTitle}</h3>
      <p className={`text-secondary text-[12px] mb-1 no-select ${lang === "ar" ? "text-right" : "text-left"}`}>{displayType}</p>
      <p className={`text-secondary text-[12px] mb-3 no-select ${lang === "ar" ? "text-right" : "text-left"}`}>{displayDate}</p>
      <ul className={`list-disc space-y-1 ${lang === "ar" ? "mr-5 text-right" : "ml-5 text-left"}`}>
        {displayPoints.slice(0, 2).map((point, index) => (
          <li
            key={`school-cert-point-${index}`}
            className="text-white-100 text-[12px] pl-1 tracking-wider no-select"
          >
            {point}
          </li>
        ))}
      </ul>
    </div>
    <div className="mt-4 flex justify-end no-select">
      <a
        href={credential}
        target="_blank"
        rel="noopener noreferrer"
        className="black-gradient text-secondary py-2 px-4 rounded-lg outline-none w-fit text-[12px] font-bold shadow-md shadow-primary transition-all hover:scale-105 hover:shadow-[0_0_10px_rgba(128,0,128,0.7)] no-select"
      >
        {safeT("buttons.viewCertificate")}
      </a>
    </div>
  </div>
  );
};

const SchoolCertificates = ({ lang, t }) => {
  const safeT = typeof t === "function" ? t : (key) => key;
  const [isMobile, setIsMobile] = useState(false);
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });
  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
  }, [isInView, mainControls]);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => {
      window.removeEventListener("resize", checkMobile);
    };
  }, []);

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
          {safeT("sections.schoolCertificates.sub")}
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
          {safeT("sections.schoolCertificates.title")}
        </h2>
      </motion.div>

      <motion.div
        variants={fadeIn("up", "spring", 0.5, 0.75)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className="mt-20 flex flex-col items-center"
        dir="ltr"
      >
        <Swiper
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={"auto"}
          loop={true}
          spaceBetween={0}
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: false,
          }}
          pagination={{
            clickable: true,
          }}
          modules={[EffectCoverflow, Pagination, Autoplay]}
          className="mySwiper"
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          breakpoints={{
            1024: {
              slidesPerView: 3,
            },
          }}
        >
          {schoolCertificates.map((certification, index) => (
            <SwiperSlide key={`school-cert-${index}`}>
              <SchoolCertificateCard {...certification} lang={lang} t={t} />
            </SwiperSlide>
          ))}
        </Swiper>
      </motion.div>

      <style>{`
        .mySwiper {
          width: 100%;
          padding-top: 50px;
          padding-bottom: 50px;
        }
        .swiper-slide {
          background-position: center;
          background-size: cover;
          width: 280px;
          height: 380px;
        }
        .swiper-slide-active {
          transform: scale(1.1) !important;
        }
        .swiper-slide img {
          display: block;
          width: 100%;
        }
        .swiper-pagination-bullet {
          background: #915eff;
        }
        .certification-card {
          background-color: rgba(30, 30, 60, 0.8);
          backdrop-filter: blur(10px);
          box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
          border: 1px solid rgba(255, 255, 255, 0.18);
          transition: all 0.3s ease-in-out;
        }
        .black-gradient {
          background: #000000;
          background: -webkit-linear-gradient(to right, #434343, #000000);
          background: linear-gradient(to right, #434343, #000000);
        }
        @media (max-width: 768px) {
          .swiper-slide {
            width: 90vw;
            max-width: 300px;
            height: auto;
            min-height: 340px;
            opacity: 1 !important;
            transform: scale(1) !important;
          }
          .swiper-slide-active {
            transform: scale(1) !important;
          }
          .mySwiper {
            padding-left: 5vw;
            padding-right: 5vw;
          }
          .certification-card {
            background-color: rgba(30, 30, 60, 0.8);
            box-shadow: 0 4px 16px 0 rgba(31, 38, 135, 0.37);
          }
          .swiper-slide-next,
          .swiper-slide-prev {
            opacity: 0 !important;
            visibility: hidden;
          }
        }
      `}</style>
    </div>
  );
};

export default SectionWrapper(SchoolCertificates, "school-certificates");
