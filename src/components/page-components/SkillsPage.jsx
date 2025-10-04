import React from 'react'
import Header from '../Header'
import Footer from '../Footer'
import ScrollToTop from '../ScrollToTop'

export default function ProjectsPage() {
  const skills = [
    { name: "C Language", desc: "Procedural Programming", img: "./assets/c.png" },
    { name: "C++", desc: "Object-Oriented Programming", img: "./assets/c++.png" },
    { name: "Java", desc: "Backend & App Development", img: "./assets/java.png" },
    { name: "Python", desc: "Scripting & Data Handling", img: "./assets/python.png" },
    { name: "HTML, CSS", desc: "Root Web Dev", img: "./assets/html_css.png" },
    { name: "JavaScript", desc: "Frontend & Dynamic Logic", img: "./assets/javascript.png" },
    { name: "Bootstrap", desc: "Responsive Design", img: "./assets/bootstrap.png.png" },
    { name: "Tailwind CSS", desc: "Utility-First Styling", img: "./assets/tailwind.png" },
    { name: "React JS", desc: "Component-Based UI", img: "./assets/react-js.png" },
  ];

  return (
    <div>
      <Header />


      <section className="bg-[var(--bg-color)] text-[var(--secondary-text)] body-font items-center pt-8">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-20">
            <h1 className="text-4xl my-4 sm:my-8 sm:text-5xl font-bold text-[var(--text-color)] text-center">
              My Skills
            </h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
              Here are the technologies and languages I’ve worked with across projects, development, and learning.
            </p>
          </div>
          <div className="flex flex-wrap -m-2">
            {skills.map((skill, index) => (
              <div key={index} className="p-2 lg:w-1/3 md:w-1/2 w-full">
                <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                  <img alt={skill.name} className="w-16 h-16 bg-transparent object-cover object-center scale-75 flex-shrink-0 rounded-full mr-4" src={skill.img}/>
                  <div className="flex-grow">
                    <h2 className="text-[var(--text-color)] title-font font-medium">{skill.name}</h2>
                    <p className="text-gray-500">{skill.desc}</p>
                  </div>
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
