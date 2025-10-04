import React from "react"
import { useState } from "react"

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


export default function Projects() {
    const [selectedItem, setSelectedItem] = useState(null);

    return (
        <section id="portfolio" className="bg-[var(--bg-color)] text-[var(--text-color)] px-6 sm:px-12 md:px-20 py-16">

            <div className="text-center mb-12">
                <h1 className="text-4xl sm:text-5xl font-bold mb-4">My Projects</h1>
                <p className="text-[var(--secondary-text)] text-lg">
                    Some of my favorite projects — click to learn more!
                </p>
            </div>


            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                {items.map((item) => (
                    <div key={item.id} onClick={() => setSelectedItem(item)} className="cursor-pointer p-4 bg-[var(--card-bg)] rounded-xl shadow-lg overflow-hidden hover:scale-[1.02] transition-transform">
                        <img src={item.image} alt={item.title} className="w-full h-48 object-cover rounded-xl" />
                        <div className="p-6">
                            <h2 className="text-xl font-semibold mb-2">{item.title}</h2>
                            <p className="text-[var(--secondary-text)]">{item.short}</p>
                        </div>
                    </div>
                ))}
            </div>


            {selectedItem && (
                <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50 p-4">
                    <div className="bg-[var(--bg-color)] w-full max-w-lg rounded-xl shadow-lg p-4 sm:p-6 md:p-8 relative overflow-y-auto max-h-[90vh]">

                        <button onClick={() => setSelectedItem(null)} className="absolute top-2 right-2 text-[var(--third-text)] bg-transparent text-4xl sm:text-5xl">
                            &times;
                        </button>

                        <img src={selectedItem.image} alt={selectedItem.title} className="w-full h-48 sm:h-56 md:h-64 object-cover rounded-lg mb-4 mt-6"/>

                        <h2 className="text-xl sm:text-2xl font-bold mb-3">
                            {selectedItem.title}
                        </h2>

                        <p className="text-[var(--secondary-text)] text-sm sm:text-base mb-6 leading-relaxed">
                            {selectedItem.details}
                        </p>

                        <button onClick={() => window.open(`${selectedItem.link}`,"_blank")} className="bg-blue-600 hover:bg-blue-700 text-white px-3 py-2 sm:px-4 sm:py-2 rounded-lg text-sm sm:text-base">
                            Host Link
                        </button>
                    </div>
                </div>
            )}
        </section>
    );
}