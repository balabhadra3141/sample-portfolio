import React from 'react'
import Header from '../Header'
import Footer from '../Footer'
import ScrollToTop from '../ScrollToTop'

export default function AboutPage () {
  return (
    <div>
      <Header />

      <section id="about" className="about pt-32 bg-[var(--bg-color)] text-[var(--text-color)] flex flex-col md:flex-row items-center justify-center gap-16 px-6 sm:px-12 md:px-15 py-16">
        <div className="flex-shrink-0 w-52 h-52 sm:w-56 sm:h-56 rounded-full overflow-hidden shadow-lg">
          <img src="./assets/IMG_20250110_181038.jpg" alt="Your Name" className="w-full h-full object-cover brightness-110 scale-150"/>
        </div>
        <div className="max-w-3xl text-center md:text-left space-y-6 text-[var(--secondary-text)] text-sm sm:text-base  leading-relaxed">
          <h1 className="text-4xl sm:text-5xl font-bold text-[var(--text-color)]">
            About Me
          </h1>
          <p>
            Hey there! 👋 I’m <span className="font-semibold">Balabhadra</span>, a
            passionate and curious tech enthusiast currently pursuing my B.Tech in
            Computer Science &amp; Engineering at OUTR, Bhubaneswar. My journey into
            technology began with a simple curiosity about how websites and apps
            work, and over time, it’s grown into a full-fledged passion for building
            impactful digital solutions.
          </p>
          <p>
            I specialize in full-stack web development, blending creativity with
            technical precision to craft seamless and user-friendly experiences.
            Whether it’s writing clean, efficient code, designing intuitive
            interfaces, or exploring the latest frameworks, I’m always looking for
            ways to push boundaries and improve my craft. Alongside development, I’m
            deeply interested in problem-solving, constantly honing my skills through
            competitive programming and logical challenges.
          </p>
          <p>
            My philosophy is simple: <span className="italic">Learn, Build, Evolve</span>.
            I believe in continuous growth — adapting to new technologies, embracing
            challenges, and contributing to meaningful projects. Outside of coding,
            I enjoy exploring design trends, collaborating with like-minded people,
            and staying inspired by the ever-changing tech landscape.
          </p>
          <p>
            If you’re as excited about innovation as I am, let’s connect and create
            something remarkable together!
          </p>
        </div>
      </section>

      <Footer />
      <ScrollToTop />
    </div>
  )
}
