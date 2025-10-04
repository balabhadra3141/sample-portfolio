import React from 'react'
import Header from '../Header'
import Hero from '../main-components/Hero'
import About from '../main-components/About'
import Skills from '../main-components/Skills'
import Contact from '../main-components/Contact'
import Footer from '../Footer'
import ScrollToTop from '../ScrollToTop'
import Projects from '../main-components/Projects'


export default function MainPage () {
  return (
    <div>
        <Header />
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact mssg="Contact Me"/>
        <Footer />
        <ScrollToTop />
    </div>
  )
}
