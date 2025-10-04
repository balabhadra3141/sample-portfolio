import React from 'react'

function Skills() {
    return (
        <section id="skills" className="skills bg-[var(--bg-color)] text-[var(--secondary-text)] body-font flex flex-col items-center">
            <div className="skills mt-12">
                <h1 className="text-4xl sm:my-8 mb-auto sm:text-5xl font-bold text-[var(--text-color)] text-center"> My Skills
                </h1>
            </div>
            <div className="container mx-10 px-10 sm:px-5 py-8 md:py-16 flex justify-center flex-wrap">
                <div className="flex flex-wrap-reverse md:flex-nowrap justify-around w-full gap-8 sm:flex-row">
                    <div className="lg:w-2/5 md:w-1/2 md:px-10 md:py-6">
                        <div className="flex relative pb-8 md:pb-10">
                            <div className="h-full w-10 absolute inset-0 flex items-center justify-center">
                                <div className="h-full w-1 bg-[var(--roller-bg)] pointer-events-none" />
                            </div>
                            <div className="flex-shrink-0 w-10 h-10 rounded-full bg-indigo-500 inline-flex items-center justify-center text-white relative z-10">
                                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="w-5 h-5" viewBox="0 0 24 24">
                                    <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
                                </svg>
                            </div>
                            <div className="flex-grow pl-4">
                                <h2 className="font-medium title-font text-xs xl:text-sm text-[var(--text-color)] mb-1 tracking-wider">
                                    C, C++</h2>
                                <p className="leading-relaxed text-sm xl:text-base">Proficient in C for system-level
                                    programming, memory management, and algorithm development.</p>
                            </div>
                        </div>
                        <div className="flex relative pb-12">
                            <div className="h-full w-10 absolute inset-0 flex items-center justify-center">
                                <div className="h-full w-1 bg-[var(--roller-bg)] pointer-events-none" />
                            </div>
                            <div className="flex-shrink-0 w-10 h-10 rounded-full bg-indigo-500 inline-flex items-center justify-center text-white relative z-10">
                                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="w-5 h-5" viewBox="0 0 24 24">
                                    <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
                                </svg>
                            </div>
                            <div className="flex-grow pl-4">
                                <h2 className="font-medium title-font text-xs xl:text-sm text-[var(--text-color)] mb-1 tracking-wider">
                                    Java</h2>
                                <p className="leading-relaxed text-sm xl:text-base">Familiar with Java fundamentals including
                                    OOP concepts, syntax, and basic application development.</p>
                            </div>
                        </div>
                        <div className="flex relative pb-12">
                            <div className="h-full w-10 absolute inset-0 flex items-center justify-center">
                                <div className="h-full w-1 bg-[var(--roller-bg)] pointer-events-none" />
                            </div>
                            <div className="flex-shrink-0 w-10 h-10 rounded-full bg-indigo-500 inline-flex items-center justify-center text-white relative z-10">
                                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="w-5 h-5" viewBox="0 0 24 24">
                                    <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
                                </svg>
                            </div>
                            <div className="flex-grow pl-4">
                                <h2 className="font-medium title-font text-xs xl:text-sm text-[var(--text-color)] mb-1 tracking-wider">
                                    Python</h2>
                                <p className="leading-relaxed text-sm xl:text-base">Comfortable with Python basics like data
                                    types, control structures, and writing simple scripts.</p>
                            </div>
                        </div>
                        <div className="flex relative pb-12">
                            <div className="h-full w-10 absolute inset-0 flex items-center justify-center">
                                <div className="h-full w-1 bg-[var(--roller-bg)] pointer-events-none" />
                            </div>
                            <div className="flex-shrink-0 w-10 h-10 rounded-full bg-indigo-500 inline-flex items-center justify-center text-white relative z-10">
                                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="w-5 h-5" viewBox="0 0 24 24">
                                    <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
                                </svg>
                            </div>
                            <div className="flex-grow pl-4">
                                <h2 className="font-medium title-font text-xs xl:text-sm text-[var(--text-color)] mb-1 tracking-wider">
                                    HTML, CSS, JS</h2>
                                <p className="leading-relaxed text-sm xl:text-base">Solid foundation in HTML, CSS, and
                                    JavaScript for building and styling responsive, interactive web pages.</p>
                            </div>
                        </div>
                        <div className="flex relative">
                            <div className="flex-shrink-0 w-10 h-10 rounded-full bg-indigo-500 inline-flex items-center justify-center text-white relative z-10">
                                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="w-5 h-5" viewBox="0 0 24 24">
                                    <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
                                </svg>
                            </div>
                            <div className="flex-grow pl-4">
                                <h2 className="font-medium title-font text-xs xl:text-sm text-[var(--text-color)] mb-1 tracking-wider">
                                    Bootstrap, Tailwind</h2>
                                <p className="leading-relaxed text-sm xl:text-base">Familiar with Bootstrap and Tailwind CSS for
                                    building responsive, utility-first, and component-based web layouts.</p>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col gap-8 justify-center items-center w[50%] lg:w-[50%] md:w-[55%]">
                        <img className="w-full object-cover h-[80%] sm:h-auto object-center rounded-lg md:mt-0 mt-12" src="./assets/skills final.png" alt="step" />
                        <img className="w-full hidden md:flex lg:hidden object-cover h-[90%] sm:h-auto object-center rounded-lg md:mt-0 mt-12" src="./assets/skills expand.png" alt="step" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Skills
