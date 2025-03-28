"use client"

import { useState } from "react"
import { cn } from "@/lib/utils"

const experiences = [
    {
        company: "Kargo",
        title: "Cloud Engineer Intern",
        period: "June 2024 - September 2024",
        description: [
            "Developed a robust data parsing framework ",
        ],
        url: "https://mykargo.com",
    },
    {
        company: "ESB.ai Lab",
        title: "Undergraduate CV/Bioinformatics Research Assistant",
        period: "September 2023 - Present",
        description: [
            "Developed responsive web applications for various clients in the e-commerce sector",
            "Collaborated with designers to implement pixel-perfect interfaces",
            "Optimized applications for maximum speed and scalability",
            "Maintained code quality through comprehensive testing and code reviews",
        ],
        url: "https://edwinsolares.com/current-research/",
    },
]

export default function Experience() {
    const [activeTab, setActiveTab] = useState(0)

    return (
        <div className="flex flex-col md:flex-row gap-8">
            <div className="flex md:flex-col overflow-x-auto md:w-[140px] border-b md:border-b-0 md:border-l border-[#233554]">
                {experiences.map((exp, index) => (
                    <button
                        key={exp.company}
                        className={cn(
                            "px-4 py-3 text-sm font-mono text-left whitespace-nowrap transition-colors",
                            activeTab === index
                                ? "text-[#64ffda] border-b-2 md:border-b-0 md:border-l-2 border-[#64ffda] bg-[#112240] md:bg-[#112240]"
                                : "text-[#8892b0] hover:text-[#ccd6f6] hover:bg-[#112240]/50",
                        )}
                        onClick={() => setActiveTab(index)}
                    >
                        {exp.company}
                    </button>
                ))}
            </div>
            <div className="flex-1 min-w-0">
                {experiences.map((exp, index) => (
                    <div key={exp.company} className={cn("space-y-4", activeTab === index ? "block" : "hidden")}>
                        <h3 className="text-xl text-[#ccd6f6]">
                            <span className="font-semibold">{exp.title}</span> <span className="text-[#64ffda]">@ {exp.company}</span>
                        </h3>
                        <p className="text-sm font-mono text-[#8892b0]">{exp.period}</p>
                        <ul className="space-y-2">
                            {exp.description.map((item, i) => (
                                <li key={i} className="flex text-[#8892b0]">
                                    <span className="text-[#64ffda] mr-2">▹</span>
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </div>
    )
}

