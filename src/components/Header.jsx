import React, { useEffect, useRef, useContext } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ThemeContext } from './ThemeContext';

function Header() {
    const { theme, toggleTheme } = useContext(ThemeContext);
    const location = useLocation();

    const iconRef = useRef(null);
    const toggleBtnRef = useRef(null);
    const toggleCloseRef = useRef(null);
    const toggleContainerRef = useRef(null);

    useEffect(() => {
        const toggleBtn = toggleBtnRef.current;
        const toggleClose = toggleCloseRef.current;
        const toggleContainer = toggleContainerRef.current;
        const navLinks = document.querySelectorAll('.nav-link');

        const openMenu = () => toggleContainer.classList.add('active');
        const closeMenu = () => toggleContainer.classList.remove('active');

        toggleBtn?.addEventListener('click', openMenu);
        toggleClose?.addEventListener('click', closeMenu);

        const linkAction = () => toggleContainer.classList.remove('active');
        navLinks.forEach((link) => link.addEventListener('click', linkAction));

        return () => {
            toggleBtn?.removeEventListener('click', openMenu);
            toggleClose?.removeEventListener('click', closeMenu);
            navLinks.forEach((link) => link.removeEventListener('click', linkAction));
        };
    }, []);

    return (
        <header className="w-full fixed backdrop-blur-md shadow text-[var(--text-color)] body-font bg-[var(--header-bg)] z-50">
            <div className="w-full flex justify-between p-3 sm:p-5 flex-row items-center relative text-[var(--text-color)]">
                <a className="flex items-end font-medium mb-4 md:mb-0 text-[var(--text-color)]">
                    <img src="./assets/logo-wobg.png" className="w-10 h-10 object-bottom" alt="header-logo" />
                    <span className="half-logo-text tracking-wider text-2xl font-semibold">alabhadra</span>
                </a>

                <nav ref={toggleContainerRef} className="nav-container relative md:ml-auto hidden sm:flex flex-wrap items-center text-base justify-center">
                    <div className="w-full sm:hidden h-10 flex justify-end items-center">
                        <button type="button" className="cursor-pointer text-5xl sm:hidden mr-7" ref={toggleCloseRef} id="toggleClose">
                            ×
                        </button>
                    </div>

                    {['Home', 'About', 'Skills', 'Projects', 'Contact'].map((section) => {
                        const path = section === 'Home' ? '/' : `/${section.toLowerCase()}`;
                        const isActive = location.pathname === path;

                        return (
                            <div
                                key={section}
                                className="relative group flex justify-center items-center cursor-pointer">
                                <Link to={path} className="nav-link mr-4 md:mr-8 hover:text-[var(--text-color)] transition-colors duration-300">
                                    {section}
                                </Link>

                                <span className={`absolute bottom-0 left-0 h-0.5 bg-indigo-600 transition-all duration-300
                  ${isActive ? 'w-9/12' : 'w-0 group-hover:w-9/12'}`}
                                />
                            </div>
                        );
                    })}

                    <div className="sm:hidden absolute bottom-10 left-1/2 -translate-x-1/2 text-center">
                        <a className="flex items-end font-medium mb-4 md:mb-0 text-[var(--text-color)]">
                            <img src="./assets/logo-wobg.png" className="w-10 h-10 object-bottom mb-1" alt="header-logo" />
                            <span className="half-logo-text tracking-wider text-2xl font-semibold">alabhadra</span>
                        </a>
                    </div>

                </nav>


                <div className="relative group flex justify-center items-center mr-3">
                    <img src={theme === 'dark' ? './assets/yellow-sun.png' : './assets/blue moon.png'} ref={iconRef} alt="toggle-theme" className="mr-8 w-6 cursor-pointer transition-all duration-300" onClick={toggleTheme} />
                </div>

                <div className="fixed right-3 cursor-pointer">
                    <button className="cursor-pointer text-2xl sm:hidden" ref={toggleBtnRef} id="toggleBtn">
                        ☰
                    </button>
                </div>
            </div>
        </header>
    );
}

export default Header;


// import React, { useEffect, useRef, useContext } from 'react';
// import { Link } from 'react-router-dom';
// import { ThemeContext } from './ThemeContext';
// import { useLocation } from 'react-router-dom';


// function Header({ move }) {
//     const { theme, toggleTheme } = useContext(ThemeContext);
//     const location = useLocation();

//     const iconRef = useRef(null);
//     const toggleBtnRef = useRef(null);
//     const toggleCloseRef = useRef(null);
//     const toggleContainerRef = useRef(null);

//     useEffect(() => {
//         const toggleBtn = toggleBtnRef.current;
//         const toggleClose = toggleCloseRef.current;
//         const toggleContainer = toggleContainerRef.current;
//         const navLinks = document.querySelectorAll('.nav-link');

//         const openMenu = () => toggleContainer.classList.add("active");
//         const closeMenu = () => toggleContainer.classList.remove("active");
//         toggleBtn?.addEventListener("click", openMenu);
//         toggleClose?.addEventListener("click", closeMenu);

//         const linkAction = () => toggleContainer.classList.remove("active");
//         navLinks.forEach(link => link.addEventListener('click', linkAction));

//         return () => {
//             toggleBtn?.removeEventListener("click", openMenu);
//             toggleClose?.removeEventListener("click", closeMenu);
//             navLinks.forEach(link => link.removeEventListener('click', linkAction));
//         };
//     }, []);

//     const scrollTo = (ref) => {
//         ref.current?.scrollIntoView({ behavior: "smooth" });
//     };

//     return (
//         <header className="w-full fixed backdrop-blur-md shadow text-[var(--text-color)] body-font bg-[var(--header-bg)]">
//             <div className="w-full flex justify-between p-3 sm:p-5 flex-row items-center relative text-[var(--text-color)] body-font bg-[var(--header-bg)]">
//                 <a className="flex items-end font-medium mb-4 md:mb-0 text-[var(--text-color)]">
//                     <img src="./assets/logo-wobg.png" className="w-10 h-10 object-bottom" alt="header-logo" />
//                     <span className="half-logo-text tracking-wider text-2xl font-semibold">alabhadra</span>
//                 </a>
//                 <nav ref={toggleContainerRef} className="nav-container md:ml-auto hidden sm:flex flex-wrap items-center text-base justify-center">
//                     {/* {["Home", "About", "Skills", "Projects", "Contact"].map((section) => (
//                         <div key={section} className="relative group flex justify-content-center items-center cursor-pointer">
//                             <Link to={(section === "Home") ? '/' : `/${section}`} className="nav-link mr-4 md:mr-8 hover:text-[var(--text-color)] transition-colors duration-300">
//                                 {section}
//                             </Link>
//                             <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-indigo-600 transition-all duration-300 group-hover:w-9/12" />
//                         </div>
//                     ))} */}
//                     {["Home", "About", "Skills", "Projects", "Contact"].map((section) => {
//                         const path = section === "Home" ? "/" : `/${section}`;
//                         const isActive = location.pathname === path;

//                         return (
//                             <div key={section} className="relative group flex justify-center items-center cursor-pointer">
//                                 <Link to={path} className="nav-link mr-4 md:mr-8 hover:text-[var(--text-color)] transition-colors duration-300">
//                                     {section}
//                                 </Link>

//                                 <span
//                                     className={`absolute bottom-0 left-0 h-0.5 bg-indigo-600 transition-all duration-300
//           ${isActive ? 'w-9/12' : 'w-0 group-hover:w-9/12'}`}
//                                 />
//                             </div>
//                         );
//                     })}

//                 </nav>
//                 <div className="relative group flex justify-center items-center mr-3">
//                     <img
//                         src={theme === "dark" ? "./assets/yellow-sun.png" : "./assets/blue moon.png"}
//                         ref={iconRef}
//                         alt="toggle-icon"
//                         className="mr-8 w-6 cursor-pointer transition-colors duration-300"
//                         onClick={toggleTheme}
//                     />
//                 </div>
//                 <div className="fixed right-3 cursor-pointer">
//                     <button className="cursor-pointer text-2xl sm:hidden" ref={toggleBtnRef} id="toggleBtn">☰</button>
//                 </div>
//             </div>
//         </header>
//     );
// }

// export default Header;