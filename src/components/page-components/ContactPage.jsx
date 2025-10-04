import React from "react";
import Header from "../Header";
import Footer from "../Footer";
import ScrollToTop from "../ScrollToTop";
import Contact from "../main-components/Contact";

export default function ContactPage () {
  return (
    <div>
      <Header />

      <section className="contact pt-32 pb-0 bg-[var(--bg-color)] text-[var(--text-color)] flex flex-col items-center justify-center px-6 sm:px-12 md:px-20 py-16">

        <div className="mb-10 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-[var(--text-color)]">
            Contact Me
          </h1>
          <p className="text-[var(--secondary-text)] mt-4 text-sm sm:text-base md:text-lg">
            Let’s connect and create something amazing together 🚀
          </p>
        </div>

        <div className="flex gap-6 mb-12 text-[var(--text-color)]">
          <a href="https://www.github.com/balabhadra3141" target="_blank" rel="noopener noreferrer" className="text-2xl text-[var(--secondary-text)] hover:text-[var(--text-color)] transition-colors">
            <i className="fab fa-github"></i>
          </a>
          <a href="https://www.linkedin.com/in/balabhadra-padhi" target="_blank" rel="noopener noreferrer" className="text-2xl text-[var(--secondary-text)] hover:text-blue-600 transition-colors">
            <i className="fab fa-linkedin-in"></i>
          </a>
          <a href="https://www.instagram.com/its_balabhadra_01" target="_blank" rel="noopener noreferrer" className="text-2xl text-[var(--secondary-text)] hover:text-pink-500 transition-colors">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="https://www.x.com/Balabhadra76388" target="_blank" rel="noopener noreferrer" className="text-2xl text-[var(--secondary-text)] hover:text-[var(--text-color)] transition-colors">
            <i className="fab fa-x-twitter"></i>
          </a>
        </div>


      </section>
      <Contact mssg="Message Me" />
      <Footer />
      <ScrollToTop />
    </div>
  );
};
