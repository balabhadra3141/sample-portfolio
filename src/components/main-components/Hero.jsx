import React from 'react'

function Hero() {
  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = '/resume.pdf';
    link.download = 'Balabhadra_Resume.pdf';
    link.click();
  };
  return (
    <main className="bg-gradient-to-r from-indigo-600 to-indigo-400 text-[var(--text-color)] flex w-full h-[100vh] justify-center items-center flex-col-reverse mb-3 gap-0 sm:gap-8 md:flex-row md:gap-0" id="Home">
      <section className="main-about w-[80%] items-center text-center md:w-1/2 md:text-start md:items-start flex flex-col">
        <span className="inline-block text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">Hi, I'm
          Balabhadra 👋</span>
        <span className="inline-block max-w-[600px] mt-8 text-sm sm:text-base md:text-xl"> Web Developer &amp; Problem
          Solver. I love building things and helping people. I would love to connect with you.</span>
        <button
          onClick={handleDownload}
          className="main-page-cv-btn cursor-pointer w-40 sm:w-44 mt-4 px-6 py-2 rounded transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-md hover:opacity-90">
          Download CV
        </button>

      </section>
      <section className="main-profile-img w-[40%] h-[40%] sm:w-[30%] sm:h-[30%] flex justify-center items-center">
        <img src="./assets/profile-img.png" className="brightness-125 object-cover rounded-full" alt="profile img" />
      </section>
    </main>
  )
}

export default Hero
