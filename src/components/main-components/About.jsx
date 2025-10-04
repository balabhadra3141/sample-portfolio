import React from 'react'

function About() {
    return (
        <section id="about" className="about bg-[var(--bg-color)] text-[var(--text-color)] flex flex-col h-[600px] justify-center items-center px-4 sm:px-12 md:px-6 sm:p-10">
            <div>
                <h1 className="text-4xl sm:text-5xl font-bold text-[var(--text-color)] mb-8 text-center"> About me </h1>
            </div>
            <div className="max-w-3xl text-center space-y-6 text-[var(--secondary-text)] text-sm sm:text-base md:text-lg leading-relaxed">
                <p>Hi there! 👋 I'm a passionate and curious tech explorer, currently pursuing my B.Tech in Computer Science
                    &amp; Engineering at OUTR, Bhubaneswar.</p>
                <p>I specialize in full-stack web development and problem solving. Whether it's writing clean code, building
                    impactful projects, or staying up-to-date with the latest tech trends, I’m always eager to challenge
                    myself and grow.</p>
                <p>I believe in continuous improvement — Learning, Building, and Evolving every step of the way. Let’s
                    connect and grow together!</p>
            </div>
        </section>
    )
}

export default About
