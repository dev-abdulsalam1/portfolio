"use client";
import Image from "next/image";
import Footer from "../components/Footer";

const projects = [
  {
    title: "Hotel Booking App",
    desc: "A full-stack hotel booking system with room search, reservations, and payments",
    label: "Full-Stack",
    img: "/booking.png",
    link: "https://hotel-booking-demo.vercel.app", 
  },
  {
    title: "E-Commerce App",
    desc: "Full-stack app with Next.js, Supabase & Tailwind",
    label: "Full-Stack",
    img: "/commerce.png",
    link: "https://ecommerce-demo.vercel.app",
  },
  {
    title: "Portfolio Website",
    desc: "Personal responsive portfolio site with animations",
    label: "Frontend",
    img: "/portfolio.png",
    link: "https://your-portfolio.vercel.app",
  },
];

export default function Projects() {
  return (
    <section>
      <h1 className="mt-20 mb-10 text-4xl font-bold  ms-20">
        Projects
      </h1>
      <div className="grid md:grid-cols-3 gap-8 justify-center px-6">
        {projects.map((project, index) => (
          <div
            key={index}
            className="relative group bg-gray-200 rounded-lg overflow-hidden shadow-md hover:shadow-xl transition">
            {/* Project Image */}
            <Image
              src={project.img}
              alt={project.title}
              width={400}
              height={250}
              className="object-cover w-full h-52"
            />

            {/* Text */}
            <div className="p-4">
              <h2 className="text-lg font-semibold dark:text-black">{project.title}</h2>
              <p className="text-gray-600 text-sm">{project.desc}</p>
              <span className="inline-block mt-2 px-2 py-1 text-xs bg-gray-500 text-white rounded">
                {project.label}
              </span>
            </div>

            {/* Hover Overlay */}
            <div className="absolute inset-0 bg-white/70 dark:bg-black/70 flex items-center justify-center opacity-0 group-hover:opacity-100 transition">
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 bg-primary text-white font-medium rounded hover:bg-white hover:text-primary dark:hover:bg-gray-200 dark:hover:text-black transition"
              >
                View Project
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
