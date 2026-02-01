"use client"

import { motion } from "framer-motion"

import { styles } from "../styles"
import { SectionWrapper } from "../hoc"
import { slideIn } from "../utils/motion"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons"

const Contact = () => {
  return (
    <div className="xl:mt-12 relative z-10 flex flex-col xl:flex-row gap-10 overflow-hidden no-select">
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className="xl:flex-[0.75] bg-tertiary/80 backdrop-blur-xl p-8 rounded-2xl border border-white/10 shadow-[0_8px_32px_0_rgba(0,0,0,0.4)]"
      >
        <div className="flex justify-between items-center mb-4">
          <p className={styles.sectionSubText}>Get in touch</p>
          <a
            href="tel:+996570736588"
            className="text-purple-400 hover:text-purple-300 transition-all duration-300 flex items-center gap-2 hover:gap-3 group"
          >
            <FontAwesomeIcon icon={faPhone} className="group-hover:rotate-12 transition-transform duration-300" />
            <span className="font-medium">+996 570736588</span>
          </a>
        </div>
        <h3 className={styles.sectionHeadText}>Contact.</h3>

        <div className="mt-12 flex flex-col gap-8">
          <div className="flex flex-col gap-8">
            <div className="flex flex-col">
              <span className="text-white font-medium mb-4 flex items-center gap-2">
                <FontAwesomeIcon icon={faPhone} className="text-purple-400" />
                Phone
              </span>
              <div className="bg-black-100/50 backdrop-blur-sm py-4 px-6 text-white rounded-xl border-2 border-white/20 font-medium">
                +996 570736588
              </div>
            </div>
            <div className="flex flex-col">
              <span className="text-white font-medium mb-4 flex items-center gap-2">
                <FontAwesomeIcon icon={faEnvelope} className="text-purple-400" />
                Email
              </span>
              <div className="bg-black-100/50 backdrop-blur-sm py-4 px-6 text-white rounded-xl border-2 border-white/20 font-medium break-all">
                abdelrahmanhassanein2@gmail.com
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className="xl:flex-1 xl:h-auto md:h-[550px] h-[420px] min-h-[420px]"
      />
    </div>
  )
}

export default SectionWrapper(Contact, "contact")
