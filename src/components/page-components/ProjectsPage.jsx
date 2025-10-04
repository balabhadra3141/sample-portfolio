import React from 'react'
import Header from '../Header'
import Footer from '../Footer'
import ScrollToTop from '../ScrollToTop';

export default function SkillsPage() {

  const items = [
    {
      id: 1,
      title: "Elite Jet Escapes",
      image: "./assets/Elite-Jet-Escapes.png",
      short: "A premium airplane service website.",
      details:
        "Elite Jet Escapes is a luxury airline service website built with Plane JS. It features elegant UI, Customer Services Provided flight access functionalities etc.",
      link: "https://balabhadra3141.github.io/Elite-Jet-Escapes/"
    },
    {
      id: 2,
      title: "Aventador Car Website",
      image: "./assets/responsive-car-website.png",
      short: "A sleek and responsive car showcase site.",
      details:
        "Aventador Car Website is a high-performance car brand showcase built with the Plane JS and some JS libraries. It includes a modern UI for car browsing, spec comparison, image gallery etc.",
      link: "https://balabhadra3141.github.io/Lamborghini-Aventador/"
    },
    {
      id: 3,
      title: "ZAirzest 4.0 Clone Website",
      image: "./assets/Zairzest-4.0-clone.png",
      short: "A clone of a popular college fest website.",
      details:
        "ZAirzest 4.0 is a replica of a tech & cultural fest website for OUTR, developed using Plane JS and bootstrap. It includes sections for event listings, registration, and animated transitions for an engaging user experience.",
      link: "https://balabhadra3141.github.io/zairzest-4.0-clone/"
    },
  ];

  return (
    <div>
      <Header />

      <section className="bg-[var(--bg-color)] body-font pt-32 px-6 sm:px-16 md:px-24 lg:px-32">
        <h1 className="text-4xl sm:text-5xl font-bold mb-4 text-center">My Projects</h1>

        <div className="container px-4 pt-16 pb-24">
          <div className="-my-8 divide-y-2 divide-gray-100">
            {items.map((project) => (
              <div key={project.id} className="py-8 flex flex-wrap justify-center gap-0 md:gap-8 md:flex-nowrap">

                <div className="md:w-64 md:mb-0 mb-4 flex-shrink-0 flex flex-col items-center justify-center sm:items-start">
                  <img src={project.image} alt={project.title} className="w-full h-36 sm:h-40 object-cover rounded-lg mb-4" />
                </div>

                <div className="md:flex-grow text-center md:text-start">
                  <h2 className="text-2xl font-medium title-font mb-2">
                    {project.title}
                  </h2>
                  <p className="leading-relaxed text-[var(--secondary-text)] text-sm sm:text-base mb-4">{project.details}</p>
                  <button onClick={() => window.open(`${project.link}`, "_blank")} className="bg-blue-600 hover:bg-blue-700 text-white px-3 py-2 sm:px-4 sm:py-2 rounded-lg text-sm sm:text-base">
                    Host Link
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>


      <Footer />
      <ScrollToTop />
    </div>
  )
}
