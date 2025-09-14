"use client";
import { motion } from "framer-motion";
import { FaJs, FaReact, FaNodeJs, FaGithub, FaHtml5, FaCss3Alt, FaGitSquare } from "react-icons/fa";
import { RiSupabaseFill, RiTailwindCssFill } from "react-icons/ri";
import { SiNextdotjs, SiVite, SiRedux, SiShadcnui } from "react-icons/si";
import { IoLogoVercel } from "react-icons/io5";

const icons = [
  FaJs, FaReact, RiSupabaseFill, FaNodeJs, RiTailwindCssFill,
  SiNextdotjs, SiVite, SiRedux, FaGithub, FaHtml5,
  FaGitSquare, IoLogoVercel, FaCss3Alt, SiShadcnui,
];

export default function TechStack() {
  const repeatedIcons = [...icons, ...icons];

  return (
    <section className="py-20 px-4 mt-10 overflow-hidden">
      <h1 className="text-2xl font-bold mb-6">Working With:</h1>
      <div className="relative flex items-center overflow-hidden max-w-5xl mx-auto bg-gray-300 rounded-sm dark:text-black">
        <motion.div
          className="flex gap-6 whitespace-nowrap"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
        >
          {repeatedIcons.map((Icon, idx) => (
            <span key={idx} className="py-2 text-3xl">
              <Icon />
            </span>
          ))}
        </motion.div>
      </div>
      <hr className="mt-20" />
    </section>
  );
}
