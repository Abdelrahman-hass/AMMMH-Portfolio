import React, { useEffect, useState } from 'react'
import './App.css'
import { BrowserRouter } from 'react-router-dom'
import { Education, Experience, Extracurricular, Hero, Navbar, Works, SchoolCertificates } from './components' // if you want to use skills balls make sure to import tech and do the same for src\components\index.js
import Feedbacks from './components/Feedbacks'
import { SpeedInsights } from "@vercel/speed-insights/react"

function App() {
  const [lang, setLang] = useState(() => localStorage.getItem("lang") || "ar")

  useEffect(() => {
    localStorage.setItem("lang", lang)
  }, [lang])

  return (
      <BrowserRouter>
        <div className='relative z-0 bg-primary' dir={lang === "ar" ? "rtl" : "ltr"}>
          <div className="div bg-hero-pattern bg-cover bg-no-repeat bg-center">
            <Navbar lang={lang} setLang={setLang} />
            <Hero lang={lang} />
          </div>
          <Works lang={lang} />
          <Extracurricular lang={lang} />
          <SchoolCertificates lang={lang} />
          <Education lang={lang} />
          <Experience lang={lang} />
          {/* <Feedbacks /> */}
          <SpeedInsights />
          <div className="div relative z-0" />
        </div>
      </BrowserRouter>
  )
}

export default App
