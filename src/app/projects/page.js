import { ExternalLink, Github } from "lucide-react";
import { Button } from "../../components/ui/button";
import Image from "next/image";

const projects = [
  {
    title: "Saas Landing Page",
    description:
<<<<<<< HEAD
      "A powerful productivity platform that helps you track progress, stay organized, and work smarter—not harder.",
=======
      "A full-featured online shopping platform with cart, payments, and admin dashboard",
>>>>>>> 52b5a41 (last polsih portfolio)
    image: "/images/proj-1.png",
    tech: ["Next.js", "Tailwind CSS", "TypeScript"],
    liveUrl: "https://saas-landing-steel.vercel.app/",
    codeUrl: "https://github.com/dev-abdulsalam1/Saas-landing",
  },
  {
    title: "Hotel Booking system",
    description:
      "A modern, responsive platform for seamless hotel reservations, real-time availability",
    image: "/images/booking.png",
    tech: ["React", "TypeScript", "Supabase", "Tailwind"],
    liveUrl: "https://hotel-booking-demo.vercel.app/",
    codeUrl: "#",
  },
  {
    title: "Portfolio CMS",
    description:
      "Content management system for creative professionals and agencies",
    image: "/images/commerce.png",
<<<<<<< HEAD
    tech: ["React", "Express", "PostgreSQL",],
=======
    tech: ["React", "Express", "PostgreSQL", "AWS"],
>>>>>>> 52b5a41 (last polsih portfolio)
    liveUrl: "#",
    codeUrl: "#",
  },
];
export default function Projects() {

  return (
    <section id="projects" className="py-24 bg-muted">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16 space-y-4 animate-fade-in">
          <p className="text-sm uppercase tracking-widest text-muted-foreground font-medium">
            My Work
          </p>
          <h2 className="text-4xl md:text-5xl font-bold">
            Featured <span className="text-muted-foreground">Projects</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A selection of projects that showcase my skills and experience
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className="group bg-background rounded-2xl overflow-hidden border-2 border-border hover:border-foreground transition-all duration-300 hover:shadow-xl animate-fade-in-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Image */}
              <div className="relative aspect-video overflow-hidden">
                <Image
                  width={500}
                  height={500}
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover grayscale group-hover:scale-110 group-hover:grayscale-0 transition-all duration-500"
                />
                <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/10 transition-colors duration-300" />
              </div>

              {/* Content */}
              <div className="p-6 space-y-4">
                <div className="space-y-2">
                  <h3 className="text-xl font-bold">{project.title}</h3>
                  <p className="text-sm text-muted-foreground">
                    {project.description}
                  </p>
                </div>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-xs font-medium bg-muted rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Buttons */}
                <div className="flex gap-3 pt-2">
                  <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="flex-1">
                    <Button variant="outline" size="sm" className="group/btn w-full">
                      <ExternalLink className="mr-2 h-4 w-4 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                      Live Demo
                    </Button>
                  </a>
                  <a href={project.codeUrl} target="_blank" rel="noopener noreferrer" className="flex-1">
                    <Button variant="outline" size="sm" className="w-full">
                      <Github className="mr-2 h-4 w-4" />
                      Code
                    </Button>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

