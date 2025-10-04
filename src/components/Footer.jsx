import React from 'react'

function Footer() {
    return (
        <footer className="bg-[var(--footer-bg)] text-[var(--secondary-text)] body-font">
            <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
                <a className="flex items-end font-medium text-[var(--text-color)] mb-4 md:mb-0">
                    <img src="./assets/logo-wobg.png" className="w-10 h-10 object-bottom" alt="footer-logo" />
                    <span className="tracking-wider text-2xl font-semibold">alabhadra</span>
                </a>
                <p className="text-sm text-[var(--secondary-text)] sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-[var(--border-color)] sm:py-2 sm:mt-0 mt-4">
                    © 2025 Portfolio —
                    <a href="#" className="text-[var(--secondary-text)] ml-1" rel="noopener noreferrer" target="_blank">@Balabhadra</a>
                </p>
                <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start lg:gap-1">
                    <a href='https://www.github.com/balabhadra123' target="_blank" className="text-[var(--secondary-text)] hover:text-[var(--text-color)] transition duration-300 text-xl ml-0 cursor-pointer">
                        <i className="fab fa-github"></i>
                    </a>
                    <a href='https://www.linkedin.com/in/balabhadra-padhi' target="_blank" className="text-[var(--secondary-text)] hover:text-[var(--text-color)] transition duration-300 text-xl ml-3 cursor-pointer">
                        <i className="fab fa-linkedin-in"></i>
                    </a>
                    <a href='https://www.instagram.com/iam_balia_2025' target="_blank" className="text-[var(--secondary-text)] hover:text-[var(--text-color)] transition duration-300 text-xl ml-3 cursor-pointer">
                        <i className="fab fa-instagram"></i>
                    </a>
                    <a href='https://www.x.com/Balabhadra76388' target="_blank" className="text-[var(--secondary-text)] hover:text-[var(--text-color)] transition duration-300 text-xl ml-3 cursor-pointer">
                        <i className="fab fa-x-twitter"></i>
                    </a>
                </span>
            </div>
        </footer>
    )
}

export default Footer
