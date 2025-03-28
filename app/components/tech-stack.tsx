import { Card } from "@/components/ui/card"

const technologies = [
    {
        category: "Backend",
        skills: ["Python", "C/C++", "Java", "MySQL", "MongoDB", "Django"],
    },
    {
        category: "Frontend",
        skills: ["React", "Next.js", "TypeScript", "TailwindCSS", "HTML"],
    },
    {
        category: "DevOps",
        skills: ["Docker", "AWS", "CI/CD", "Git", "Linux"],
    },
    {
        category: "Tools",
        skills: ["GitHub", "Vercel", "Jira", "Bitbucket", "Bash"],
    },
    {
        category: "ML/AI",
        skills: ["PyTorch", "Tensorflow", "WandB"],
    },
]

export default function TechStack() {
    return (
        <div className="grid gap-6 md:grid-cols-2">
            {technologies.map((tech) => (
                <Card key={tech.category} className="p-6 bg-[#112240] border-[#233554]">
                    <h3 className="text-lg font-semibold mb-4 text-[#ccd6f6]">{tech.category}</h3>
                    <div className="flex flex-wrap gap-2">
                        {tech.skills.map((skill) => (
                            <span key={skill} className="text-[#8892b0] text-sm font-mono">
                {skill}
              </span>
                        ))}
                    </div>
                </Card>
            ))}
        </div>
    )
}

