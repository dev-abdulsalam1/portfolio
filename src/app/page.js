import Image from "next/image";
import TechStack from "./components/TechStack";
import Skills from "./skills/page";
import Contact from "./contact/page";
import Footer from "./components/Footer";
import Link from "next/link";
import Projects from "./projects/page";
import { FaGithub, FaLinkedin, FaFacebook, FaTwitter } from "react-icons/fa";

export default function Home() {
  return (
    <>
    <section className="py-20 px-4 mt-10">
      <div className="max-w-6xl mx-auto flex flex-col-reverse md:flex-row  md:gap-5 items-center justify-around gap-10 px-4">
        {/* Text Content */}
        <div className="flex-1 text-center md:text-left">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold mb-4">
            Abdulsalam Shiikhow
          </h1>

          <h2 className="md:text-2xl text-xl font-semibold text-gray-600 dark:text-gray-300 mb-6">
            Full-Stack Developer
          </h2>

          <p className="text-base sm:text-lg md:text-lg text-gray-700 dark:text-gray-400 leading-relaxed">
            I am passionate about clean code, modern web design, and creating seamless digital experiences. 
            I specialize in building responsive, fast, and user-friendly websites using React, Next.js, and Tailwind CSS. 
            I love turning ideas into functional, beautiful, and interactive applications that leave a lasting impact.
          </p>

          <div className="mt-8">
            <Link 
              href="/projects" 
              className="px-5 py-2.5 sm:px-6 sm:py-3 bg-primary text-white dark:text-black rounded-md hover:bg-primary-dark transition"
            >
              Explore My Work
            </Link>
          </div>
        </div>

        {/* Image */}
        <div className="flex-1 flex justify-center md:justify-end">
        <div className="w-64 sm:w-80 md:w-96">
       <Image 
        src="/hero.png" 
       width={400} 
       height={500} 
        quality={100} 
        alt="Hero Image"
        className="rounded-lg object-cover w-full h-auto"/>

        <div className="flex ml-2 md:mx-30 mt-2 rounded-sm justify-center md:justify-start gap-4 text-2xl  ">
                    <a
                      href="https://github.com/dev-abdulsalam1"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-primary transition"
                    >
                      <FaGithub />
                    </a>
                    <a
                      href="https://www.linkedin.com/in/abdulsalam-hassan-296739368/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-primary transition"
                    >
                      <FaLinkedin />
                    </a>
                    <a
                      href="https://www.facebook.com/shiiqow.yare.52"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-primary transition"
                    >
                      <FaFacebook />
                    </a>
                    <a
                      href="https://x.com/dev_abdulsalam1"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-primary transition"
                    >
                      <FaTwitter />
                    </a>
                  </div>
  </div>
</div>

      </div>
    </section>
    <hr></hr>
    <TechStack />
    <Skills />
    <hr></hr>
    <hr className="mt-20"></hr>

    <Projects />
    <Contact />
    <Footer />
   </>
  );
}
  

