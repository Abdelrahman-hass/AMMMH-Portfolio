import React from 'react'
import './App.css'
import { BrowserRouter } from 'react-router-dom'
import { Education, Experience, Extracurricular, Hero, Navbar, Works, SchoolCertificates } from './components' // if you want to use skills balls make sure to import tech and do the same for src\components\index.js
import Feedbacks from './components/Feedbacks'
import { SpeedInsights } from "@vercel/speed-insights/react"

function App() {
  return (
      <BrowserRouter>
        <div className='relative z-0 bg-primary'>
          <div className="div bg-hero-pattern bg-cover bg-no-repeat bg-center">
            <Navbar />
            <Hero />
          </div>
          <Works />
          <Extracurricular />
          <SchoolCertificates />
          <Education />
          <Experience />
          {/* <Feedbacks /> */}
          <SpeedInsights />
          <div className="div relative z-0" />
        </div>
      </BrowserRouter>
  )
}

export default App
