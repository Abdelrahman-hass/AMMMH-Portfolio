import React, { useEffect } from 'react'
import './App.css'
import { BrowserRouter } from 'react-router-dom'
import { Education, Experience, Extracurricular, Hero, Navbar, Works, SchoolCertificates } from './components' // if you want to use skills balls make sure to import tech and do the same for src\components\index.js
import Feedbacks from './components/Feedbacks'
import { SpeedInsights } from "@vercel/speed-insights/react"
import { useI18n } from "./i18n/useI18n"

function App() {
  const { lang, setLang, t } = useI18n()

  useEffect(() => {
    document.documentElement.lang = lang
    document.documentElement.dir = lang === "ar" ? "rtl" : "ltr"
  }, [lang])

  return (
      <BrowserRouter>
        <div className='relative z-0 bg-primary' dir={lang === "ar" ? "rtl" : "ltr"} lang={lang}>
          <div className="div bg-hero-pattern bg-cover bg-no-repeat bg-center">
            <Navbar lang={lang} setLang={setLang} t={t} />
            <Hero lang={lang} t={t} />
          </div>
          <Works lang={lang} t={t} />
          <Extracurricular lang={lang} t={t} />
          <SchoolCertificates lang={lang} t={t} />
          <Education lang={lang} t={t} />
          <Experience lang={lang} t={t} />
          {/* <Feedbacks /> */}
          <SpeedInsights />
          <div className="div relative z-0" />
        </div>
      </BrowserRouter>
  )
}

export default App
