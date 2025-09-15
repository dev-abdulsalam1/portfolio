"use client";

import { motion } from "framer-motion";
import dynamic from "next/dynamic";

const iconMap = {
  FaJs: dynamic(() => import("react-icons/fa").then(mod => mod.FaJs), { ssr: false }),
  FaReact: dynamic(() => import("react-icons/fa").then(mod => mod.FaReact), { ssr: false }),
  RiSupabaseFill: dynamic(() => import("react-icons/ri").then(mod => mod.RiSupabaseFill), { ssr: false }),
  FaNodeJs: dynamic(() => import("react-icons/fa").then(mod => mod.FaNodeJs), { ssr: false }),
  RiTailwindCssFill: dynamic(() => import("react-icons/ri").then(mod => mod.RiTailwindCssFill), { ssr: false }),
  SiNextdotjs: dynamic(() => import("react-icons/si").then(mod => mod.SiNextdotjs), { ssr: false }),
  // Add others similarly
};

const icons = Object.values(iconMap);

export default function TechStack() {
  const repeatedIcons = [...icons, ...icons];

  return (
    <section className="py-20 px-4 mt-10 overflow-hidden">
      <h1 className="text-2xl font-bold mb-6">Working With:</h1>

      <div className="relative flex items-center overflow-hidden max-w-2xl mx-auto bg-gray-300 rounded-sm dark:text-black">
        <motion.div
          className="flex gap-6 whitespace-nowrap"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
        >
          {repeatedIcons.map((Icon, index) => (
            <span key={index} className="py-2 text-3xl">
              <Icon />
            </span>
          ))}
        </motion.div>
      </div>

      <hr className="mt-20" />
    </section>
  );
}
