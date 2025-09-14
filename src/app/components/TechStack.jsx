"use client"; // required for Framer Motion in Next.js app directory

import { motion } from "framer-motion";
import { FaReact } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa6";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiNextdotjs } from "react-icons/si";
import { RiSupabaseFill } from "react-icons/ri";
import { SiVite } from "react-icons/si";
import { FaJs } from "react-icons/fa";
import { FaGitSquare } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { SiRedux } from "react-icons/si";
import { FaHtml5 } from "react-icons/fa";
import { IoLogoVercel } from "react-icons/io5";
import { FaCss3Alt } from "react-icons/fa";
import { SiShadcnui } from "react-icons/si";

export default function TechStack() {
  const icons = [
    <FaJs key="js" />,
    <FaReact key="react" />,
    <RiSupabaseFill key="supabase" />,
    <FaNodeJs key="node" />,
    <RiTailwindCssFill key="tailwind" />,
    <SiNextdotjs key="nextjs" />,
    <SiVite key="vite" />,
    <SiRedux key="redux" />,
    <FaGithub key="github" />,
    <FaHtml5 key="html5" />,
    <FaGitSquare key="git" />,
    <IoLogoVercel key="vercel" />,
    <FaCss3Alt  key="CSS" />,
    <SiShadcnui  key="ShadCN" />,
  ];

  // Duplicate the array for seamless loop
  const repeatedIcons = [...icons, ...icons,...icons];

  return (
    <section className="py-20 px-4 mt-10 overflow-hidden">
      <h1 className="text-2xl font-bold mb-6">Working With:</h1>

      <div className="relative flex items-center overflow-hidden max-w-5xl mx-auto bg-gray-300 rounded-sm dark:text-black">
        <motion.div
          className="flex gap-6 whitespace-nowrap"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
          whileHover={{ pause: true }}
        >
          {repeatedIcons.map((icon, index) => (
            <span key={index} className="py-2 text-3xl">
              {icon}
            </span>
          ))}
        </motion.div>
      </div>

      <hr className="mt-20" />
    </section>
  );
}
