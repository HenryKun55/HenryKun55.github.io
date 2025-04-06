import Image from "next/image"
import Link from "next/link"
import { Github, Linkedin, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"
import ProjectCard from "@/components/project-card"
import SkillBadge from "@/components/skill-badge"

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
      {/* Header/Navigation */}
      <header className="sticky top-0 z-10 backdrop-blur-md bg-white/70 dark:bg-gray-900/70 border-b border-gray-200 dark:border-gray-800">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="font-bold text-xl">
            <Link href="/">HenryKun55</Link>
          </div>
          <nav>
            <ul className="flex space-x-6">
              <li>
                <a href="#about" className="hover:text-gray-600 dark:hover:text-gray-300">
                  About
                </a>
              </li>
              <li>
                <a href="#skills" className="hover:text-gray-600 dark:hover:text-gray-300">
                  Skills
                </a>
              </li>
              <li>
                <a href="#projects" className="hover:text-gray-600 dark:hover:text-gray-300">
                  Projects
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-gray-600 dark:hover:text-gray-300">
                  Contact
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-5xl flex flex-col md:flex-row items-center gap-12">
          <div className="w-full md:w-1/2">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Hi, I'm <span className="text-emerald-600 dark:text-emerald-400">Henry</span>
            </h1>
            <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-gray-700 dark:text-gray-300">
              Software Developer
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">
              I build exceptional and accessible digital experiences for the web.
            </p>
            <div className="flex space-x-4">
              <Button asChild>
                <a href="#contact">Get in touch</a>
              </Button>
              <Button variant="outline" asChild>
                <a href="#projects">View my work</a>
              </Button>
            </div>
          </div>
          <div className="w-full md:w-1/2 flex justify-center">
            <div className="relative w-64 h-64 rounded-full overflow-hidden border-4 border-emerald-500 dark:border-emerald-400">
              <Image src="/placeholder.svg?height=256&width=256" alt="Profile" fill className="object-cover" priority />
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 bg-white dark:bg-gray-800">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-3xl font-bold mb-12 text-center">About Me</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-xl font-semibold mb-4">Who I am</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-6">
                I'm a passionate software developer with a focus on creating clean, efficient, and user-friendly
                applications. With a strong foundation in modern web technologies, I enjoy solving complex problems and
                turning ideas into reality.
              </p>
              <p className="text-gray-600 dark:text-gray-400">
                When I'm not coding, you can find me exploring new technologies, contributing to open-source projects,
                or enjoying outdoor activities to maintain a healthy work-life balance.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">My Journey</h3>
              <div className="space-y-4">
                <div className="border-l-2 border-emerald-500 pl-4 py-2">
                  <h4 className="font-medium">2023 - Present</h4>
                  <p className="text-gray-600 dark:text-gray-400">Senior Software Developer at Tech Company</p>
                </div>
                <div className="border-l-2 border-emerald-500 pl-4 py-2">
                  <h4 className="font-medium">2020 - 2023</h4>
                  <p className="text-gray-600 dark:text-gray-400">Full Stack Developer at Digital Agency</p>
                </div>
                <div className="border-l-2 border-emerald-500 pl-4 py-2">
                  <h4 className="font-medium">2018 - 2020</h4>
                  <p className="text-gray-600 dark:text-gray-400">Front-end Developer at Startup</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-4">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-3xl font-bold mb-12 text-center">My Skills</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-xl font-semibold mb-6">Frontend</h3>
              <div className="flex flex-wrap gap-3">
                <SkillBadge name="HTML" />
                <SkillBadge name="CSS" />
                <SkillBadge name="JavaScript" />
                <SkillBadge name="TypeScript" />
                <SkillBadge name="React" />
                <SkillBadge name="Next.js" />
                <SkillBadge name="Tailwind CSS" />
                <SkillBadge name="Redux" />
              </div>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-6">Backend</h3>
              <div className="flex flex-wrap gap-3">
                <SkillBadge name="Node.js" />
                <SkillBadge name="Express" />
                <SkillBadge name="MongoDB" />
                <SkillBadge name="PostgreSQL" />
                <SkillBadge name="REST API" />
                <SkillBadge name="GraphQL" />
                <SkillBadge name="Firebase" />
              </div>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-6">Tools & Others</h3>
              <div className="flex flex-wrap gap-3">
                <SkillBadge name="Git" />
                <SkillBadge name="GitHub" />
                <SkillBadge name="Docker" />
                <SkillBadge name="Jest" />
                <SkillBadge name="CI/CD" />
                <SkillBadge name="Figma" />
                <SkillBadge name="Responsive Design" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4 bg-white dark:bg-gray-800">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-3xl font-bold mb-12 text-center">Featured Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ProjectCard
              title="E-commerce Platform"
              description="A full-featured online store with product catalog, shopping cart, and payment integration."
              tags={["React", "Node.js", "MongoDB"]}
              imageUrl="/placeholder.svg?height=200&width=300"
              githubUrl="https://github.com/HenryKun55"
              liveUrl="#"
            />
            <ProjectCard
              title="Task Management App"
              description="A productivity application for organizing tasks with drag-and-drop functionality."
              tags={["TypeScript", "Next.js", "Tailwind"]}
              imageUrl="/placeholder.svg?height=200&width=300"
              githubUrl="https://github.com/HenryKun55"
              liveUrl="#"
            />
            <ProjectCard
              title="Weather Dashboard"
              description="Real-time weather information with interactive maps and forecasts."
              tags={["JavaScript", "API", "CSS"]}
              imageUrl="/placeholder.svg?height=200&width=300"
              githubUrl="https://github.com/HenryKun55"
              liveUrl="#"
            />
          </div>
          <div className="text-center mt-12">
            <Button variant="outline" asChild>
              <a
                href="https://github.com/HenryKun55"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center"
              >
                <Github className="mr-2 h-4 w-4" />
                View more on GitHub
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-3xl font-bold mb-12 text-center">Get In Touch</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-xl font-semibold mb-6">Contact Information</h3>
              <div className="space-y-4">
                <a
                  href="mailto:your.email@example.com"
                  className="flex items-center text-gray-600 dark:text-gray-400 hover:text-emerald-600 dark:hover:text-emerald-400"
                >
                  <Mail className="mr-3 h-5 w-5" />
                  your.email@example.com
                </a>
                <a
                  href="https://github.com/HenryKun55"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-gray-600 dark:text-gray-400 hover:text-emerald-600 dark:hover:text-emerald-400"
                >
                  <Github className="mr-3 h-5 w-5" />
                  github.com/HenryKun55
                </a>
                <a
                  href="https://linkedin.com/in/yourprofile"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-gray-600 dark:text-gray-400 hover:text-emerald-600 dark:hover:text-emerald-400"
                >
                  <Linkedin className="mr-3 h-5 w-5" />
                  linkedin.com/in/yourprofile
                </a>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-6">Send a Message</h3>
              <form className="space-y-4">
                <div>
                  <label htmlFor="name" className="block mb-2 text-sm font-medium">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500 dark:bg-gray-800"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block mb-2 text-sm font-medium">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500 dark:bg-gray-800"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block mb-2 text-sm font-medium">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500 dark:bg-gray-800"
                    required
                  ></textarea>
                </div>
                <Button type="submit" className="w-full">
                  Send Message
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-gray-200 dark:border-gray-800">
        <div className="container mx-auto max-w-5xl">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <p className="text-gray-600 dark:text-gray-400">© 2024 HenryKun55. All rights reserved.</p>
            </div>
            <div className="flex space-x-4">
              <a href="https://github.com/HenryKun55" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <Github className="h-5 w-5 text-gray-600 dark:text-gray-400 hover:text-emerald-600 dark:hover:text-emerald-400" />
              </a>
              <a
                href="https://linkedin.com/in/yourprofile"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5 text-gray-600 dark:text-gray-400 hover:text-emerald-600 dark:hover:text-emerald-400" />
              </a>
              <a href="mailto:your.email@example.com" aria-label="Email">
                <Mail className="h-5 w-5 text-gray-600 dark:text-gray-400 hover:text-emerald-600 dark:hover:text-emerald-400" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </main>
  )
}

