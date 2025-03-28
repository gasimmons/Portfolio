import { Card } from "@/components/ui/card"
import { Github, ExternalLink } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

interface ProjectCardProps {
    title: string
    description: string
    image: string
    link: string
    tags: string[]
}

export default function ProjectCard({ title, description, image, link, tags }: ProjectCardProps) {
    return (
        <Card className="overflow-hidden bg-[#112240] border-[#233554] hover:translate-y-[-5px] transition-all">
            <div className="relative aspect-video">
                <Image src={image || "/placeholder.svg"} alt={title} fill className="object-cover" />
                <div className="absolute inset-0 bg-[#64ffda]/10"></div>
            </div>
            <div className="p-6">
                <p className="text-[#64ffda] font-mono text-sm mb-2">Featured Project</p>
                <h3 className="font-semibold text-xl mb-3 text-[#ccd6f6]">{title}</h3>
                <p className="text-[#8892b0] mb-4">{description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                    {tags.map((tag) => (
                        <span key={tag} className="text-[#8892b0] text-xs font-mono">
              {tag}
            </span>
                    ))}
                </div>
                <div className="flex gap-4">
                    <Link href={link} target="_blank" className="text-[#ccd6f6] hover:text-[#64ffda]">
                        <Github className="h-5 w-5" />
                        <span className="sr-only">GitHub</span>
                    </Link>
                    <Link href={link} target="_blank" className="text-[#ccd6f6] hover:text-[#64ffda]">
                        <ExternalLink className="h-5 w-5" />
                        <span className="sr-only">External Link</span>
                    </Link>
                </div>
            </div>
        </Card>
    )
}

