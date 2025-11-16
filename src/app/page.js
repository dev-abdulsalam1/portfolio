"use client";

import Image from "next/image";
import Link from "next/link";
import About from "./about/page";
import Skills from "./skills/page";
import Projects from "./projects/page";
import Contact from "./contact/page";
import Footer from "./components/Footer";
import { FaGithub, FaLinkedin, FaFacebook, FaTwitter } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="py-20 px-4 h-[650px]">
        <div className="max-w-6xl mx-auto flex flex-col-reverse md:flex-row md:gap-10 items-center justify-between">
          {/* Text Content */}
          <div className="flex-1 text-center md:text-left">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-4">
              Abdulsalam Hassan
            </h1>

            <h2 className="text-xl md:text-2xl font-semibold text-gray-600 dark:text-gray-300 mb-6">
              Full-Stack Developer
            </h2>

            <p className="text-lg text-muted-foreground max-w-lg mx-auto md:mx-0">
              I specialize in building clean, performant, and user-centric applications
              using React, Next.js, Tailwind CSS, Express, and MongoDB.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mt-8 justify-center md:justify-start">
              <Link href="/projects">
                <Button size="lg" className="group">
                  View Projects
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>

              <Link href="/contact">
                <Button size="lg" variant="outline">
                  Contact Me
                </Button>
              </Link>
            </div>
          </div>

          {/* Hero Image & Social Links */}
          <div className="flex-1 flex flex-col items-center md:items-end mb-10 md:mb-0">
            <div className="w-64 sm:w-80 md:w-96 relative">
              <Image
                src="/images/hero.png"
                alt="Hero Image"
                width={500}
                height={500}
                quality={100}
                className="rounded-lg object-cover w-full h-auto"
              />

              <div className="flex ml-2 md:mx-30 mt-2 rounded-sm justify-center md:justify-start gap-4 text-2xl">
                <a
                  href="https://github.com/dev-abdulsalam1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary transition"
                  aria-label="GitHub"
                >
                  <FaGithub />
                </a>
                <a
                  href="https://www.linkedin.com/in/abdulsalam-hassan-296739368/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary transition"
                  aria-label="LinkedIn"
                >
                  <FaLinkedin />
                </a>
                <a
                  href="https://www.facebook.com/shiiqow.yare.52"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary transition"
                  aria-label="Facebook"
                >
                  <FaFacebook />
                </a>
                <a
                  href="https://x.com/dev_abdulsalam1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary transition"
                  aria-label="Twitter"
                >
                  <FaTwitter />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About & Skills */}
      <hr className="my-16" />
      <About />
      <Skills />
      <hr className="my-16" />

      {/* Projects, Contact & Footer */}
      <Projects />
      <Contact />
      <Footer />
    </>
  );
}
