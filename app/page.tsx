import { Button } from "@/components/ui/button"
import { Github, Linkedin, Mail } from "lucide-react"
import Link from "next/link"
import ThemeToggle from "@/components/theme-toggle"
import Experience from "./components/experience"
import ProjectCard from "./components/project-card"
import TechStack from "./components/tech-stack"

export default function Page() {
  return (
      <div className="min-h-screen bg-[#0a192f] text-[#ccd6f6]">
        <header className="sticky top-0 z-50 w-full border-b border-[#233554] bg-[#0a192f]/95 backdrop-blur supports-[backdrop-filter]:bg-[#0a192f]/60">
          <div className="container flex h-16 items-center">
            <div className="mr-4 hidden md:flex">
              <Link className="mr-6 flex items-center space-x-2" href="/">
                <span className="hidden font-bold sm:inline-block">developer.io</span>
              </Link>
              <nav className="flex items-center space-x-6 text-sm font-medium">
                <Link href="#about" className="text-[#ccd6f6] transition-colors hover:text-[#64ffda]">
                  About
                </Link>
                <Link href="#experience" className="text-[#ccd6f6] transition-colors hover:text-[#64ffda]">
                  Experience
                </Link>
                <Link href="#projects" className="text-[#ccd6f6] transition-colors hover:text-[#64ffda]">
                  Projects
                </Link>
                <Link href="#contact" className="text-[#ccd6f6] transition-colors hover:text-[#64ffda]">
                  Contact
                </Link>
              </nav>
            </div>
            <div className="ml-auto flex items-center gap-2">
              <ThemeToggle />
              <Link href="../public/assets/Gavin_Simmons_Updated_Resume_SWE.pdf" target="_blank" rel="noopener noreferrer">
                <Button variant="outline" className="border-[#64ffda] text-[#64ffda] hover:bg-[#64ffda]/10">
                  Resume
                </Button>
              </Link>
            </div>
          </div>
        </header>

        <main className="container px-4 md:px-6">
          <section id="about" className="py-24 md:py-32">
            <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
              <div className="space-y-6">
                <p className="text-[#64ffda] font-mono">Hi, my name is</p>
                <h1 className="text-4xl font-bold tracking-tight text-[#ccd6f6] sm:text-5xl md:text-6xl/none">
                  Gavin Simmons
                </h1>
                <h2 className="text-3xl font-bold tracking-tight text-[#8892b0] sm:text-4xl md:text-5xl/none">
                  Backend Engineer
                </h2>
                <p className="text-[#8892b0] text-lg max-w-[540px]">
                  I use the technology of today to build the data driven solutions of tomorrow
                </p>
                <div className="flex space-x-4">
                  <Link href="https://github.com/gasimmons" target="_blank">
                    <Button
                        variant="outline"
                        size="icon"
                        className="border-[#233554] text-[#ccd6f6] hover:border-[#64ffda] hover:text-[#64ffda]"
                    >
                      <Github className="h-5 w-5" />
                      <span className="sr-only">GitHub</span>
                    </Button>
                  </Link>
                  <Link href="https://www.linkedin.com/in/gavinsimmons03" target="_blank">
                    <Button
                        variant="outline"
                        size="icon"
                        className="border-[#233554] text-[#ccd6f6] hover:border-[#64ffda] hover:text-[#64ffda]"
                    >
                      <Linkedin className="h-5 w-5" />
                      <span className="sr-only">LinkedIn</span>
                    </Button>
                  </Link>
                  <Link href="mailto:gasimmons@ucsd.edu">
                    <Button
                        variant="outline"
                        size="icon"
                        className="border-[#233554] text-[#ccd6f6] hover:border-[#64ffda] hover:text-[#64ffda]"
                    >
                      <Mail className="h-5 w-5" />
                      <span className="sr-only">Email</span>
                    </Button>
                  </Link>
                </div>
              </div>
              <div className="space-y-6">
                <p className="text-[#8892b0] text-lg">
                  A soon-to-graduate aspiring Backend Software Engineer with a solid background in backend data management,
                  specializing in the extraction, storage, and optimization of large-scale data stores. Eager to
                  contribute technical skills in software development and deep data mining to build scalable data
                  architectures while possibly further developing expertise in machine learning, cloud computing, and
                  distributed systems.
                </p>
              </div>
              <TechStack />
            </div>
          </section>

          <section id="experience" className="py-24">
            <h2 className="text-2xl font-bold tracking-tight text-[#ccd6f6] mb-12 flex items-center">
              <span className="text-[#64ffda] font-mono mr-2">02.</span> Where I've Worked
            </h2>
            <Experience />
          </section>

          <section id="projects" className="py-24">
            <h2 className="text-2xl font-bold tracking-tight text-[#ccd6f6] mb-12 flex items-center">
              <span className="text-[#64ffda] font-mono mr-2">03.</span> Some Things I've Built
            </h2>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              <ProjectCard
                  title="E-commerce Platform"
                  description="A full-stack e-commerce platform built with Next.js, Prisma, and Stripe integration."
                  image="/placeholder.svg?height=400&width=600"
                  link="https://github.com"
                  tags={["Next.js", "Prisma", "Stripe"]}
              />
              <ProjectCard
                  title="Task Management App"
                  description="A real-time task management application with team collaboration features."
                  image="/placeholder.svg?height=400&width=600"
                  link="https://github.com"
                  tags={["React", "Node.js", "Socket.io"]}
              />
              <ProjectCard
                  title="AI Chat Interface"
                  description="An AI-powered chat interface with natural language processing capabilities."
                  image="/placeholder.svg?height=400&width=600"
                  link="https://github.com"
                  tags={["OpenAI", "Next.js", "TailwindCSS"]}
              />
            </div>
          </section>

          <section id="contact" className="py-24 text-center">
            <p className="text-[#64ffda] font-mono mb-4">04. What's Next?</p>
            <h2 className="text-3xl font-bold tracking-tight text-[#ccd6f6] mb-6">Get In Touch</h2>
            <p className="text-[#8892b0] text-lg max-w-[600px] mx-auto mb-8">
              I'm currently looking for new opportunities. Whether you have a question or just want to say hi, I'll do my
              best to get back to you!
            </p>
            <Button className="bg-transparent border border-[#64ffda] text-[#64ffda] hover:bg-[#64ffda]/10">
              Say Hello
            </Button>
          </section>
        </main>

        <footer className="border-t border-[#233554] py-6">
          <div className="container flex flex-col items-center justify-center gap-4 text-center">
            <p className="text-sm text-[#8892b0]">Designed & Built by Gavin Simmons using Next.js, Typescript, and Tailwind
            <br/>
            Featuring shadcn/ui components</p>
          </div>
        </footer>
      </div>
  )
}


