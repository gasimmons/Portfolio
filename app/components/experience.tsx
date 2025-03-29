"use client"

import { useState } from "react"
import { cn } from "@/lib/utils"

const experiences = [
    {
        company: "Kargo",
        title: "Cloud Engineer Intern",
        period: "June 2024 - September 2024",
        description: [
            "Developed a robust data parsing framework using Python to automatically process and upload customer " +
            "documents (PDFs, CSVs, and Excels) to a MySQL database, reducing manual processing time and ensuring " +
            "reliable data integration through an exception handling mechanism.",
            "Developed a python-based tool that when called, retrieves a grid image video and a track file from AWS S3 " +
            "buckets. Using OpenCV and FFmpeg for video reconstruction, inserting black frames for missing timestamps " +
            "and drawing bounding boxes on the images. The reconstructed video is uploaded back to an S3 bucket for the" +
            "team to use in debugging.",
            "Enhanced the Django admin site by integrating Google OAuth for secure user authentication, engineered " +
            "custom tools for managing user permissions, and designed dynamic pages that display database information " +
            "with links to detailed insights on the dashboard. Improved infrastructure by optimizing server " +
            "configurations and deploying scalable AWS Cloud environment solutions, which enhanced web application " +
            "performance and ensured consistent uptime",
            "Developed the GraphQL API in Node.js to enable secure, scalable data exchange between systems, utilizing " +
            "both MySQL for relational data management and MongoDB for flexible, document-based storage. Implemented JWT " +
            "for authentication and optimized database queries to enhance performance and security."
        ],
        url: "https://mykargo.com",
    },
    {
        company: "ESB.ai Lab",
        title: "Undergraduate CV/Bioinformatics Research Assistant",
        period: "September 2023 - Present",
        description: [
            "Implemented PyTorch-based image segmentation using UNet and YoloV8 models, trained on datasets with 80%" +
            "training, 10% validation, and 10% testing sets. Enhanced each model's recall rate to over 85% through " +
            "hyperparameter tuning and architecture optimization.",
            "Develops data analysis pipelines by integrating Python scripts for data manipulation and visualization " +
            "using Seaborn, Matplotlib, and Pandas. Used Bash scripts for workflow automation and tools like SAM tools " +
            "and Bedtools for read alignments and variant calling in sequencing projects. Automated complex analyses " +
            "with Snakemake, reducing processing time by about 10 hours per genome and ensuring reproducible results.",
            "Developed an avocado tree semantic segmentation model using a U-Net architecture, achieving a IoU of .74. " +
            "With a manually labelled dataset, the training pipeline included an early stopping and cosine annealing " +
            "learning rate scheduler to prevent overfitting and optimize convergence. The production version is " +
            "deployed on Google AI Platform to enable efficient batch processing of large image datasets for segmentation."
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

