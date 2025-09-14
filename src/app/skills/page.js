import { MdDesignServices, MdSecurity, MdDeveloperMode } from "react-icons/md";
import { VscSymbolInterface } from "react-icons/vsc";
import { IoIosGitNetwork } from "react-icons/io";
import { FaReact } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiNextdotjs } from "react-icons/si";
import { IoLogoNodejs } from "react-icons/io5";
import { SiSupabase } from "react-icons/si";
import { FaGithub } from "react-icons/fa";
import { TbBrandVscode } from "react-icons/tb";
import { MdWorkHistory } from "react-icons/md";
import { FaFigma } from "react-icons/fa";
import { RiNotionFill } from "react-icons/ri";
import { IoLogoVercel } from "react-icons/io5";
import { IoCodeWorkingSharp } from "react-icons/io5";
import { LiaMedapps } from "react-icons/lia";





import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import Footer from "../components/Footer";

export default function Skills() {
  return (
    <div> 
    <section className="h-auto flex justify-center mb-20 mt-10">
      <Tabs defaultValue="account" className="w-full  max-w-5xl">
        {/* Tab Buttons */}
        <TabsList className="flex w-full justify-centercbg-gray-200 gap-4 mb-6">
          <TabsTrigger value="account"><MdWorkHistory /> Expertise</TabsTrigger>
          <TabsTrigger value="skills"><IoCodeWorkingSharp /> Skills</TabsTrigger>
          <TabsTrigger value="software"><LiaMedapps /> Software</TabsTrigger>
        </TabsList>

        {/* Expertise Grid */}
        <TabsContent value="account">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4">
            <div className="bg-gray-200 flex items-center gap-3 px-4 py-3 rounded-md font-bold dark:text-black">
              <MdDesignServices className="text-2xl" /> Frontend Development
            </div>

            <div className="bg-gray-200 flex items-center gap-3 px-4 py-3 rounded-md font-bold dark:text-black">
              <VscSymbolInterface className="text-2xl" /> Backend Development
            </div>

            <div className="bg-gray-200 flex items-center gap-3 px-4 py-3 rounded-md font-bold dark:text-black">
              <IoIosGitNetwork className="text-2xl" /> Agile Workflow
            </div>

            <div className="bg-gray-200 flex items-center gap-3 px-4 py-3 rounded-md font-bold dark:text-black">
              <MdSecurity className="text-2xl" /> Authentication & Security
            </div>

            <div className="bg-gray-200 flex items-center gap-3 px-4 py-3 rounded-md font-bold dark:text-black">
              <MdDeveloperMode className="text-2xl" /> Deployment & DevOps
            </div>
          </div>
        </TabsContent>

        {/* Skills Grid */}
        <TabsContent value="skills">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 px-4">
            <div className="bg-gray-200 flex flex-col items-center justify-center gap-2 px-4 py-6 rounded-md font-bold dark:text-black">
              <FaReact className="text-4xl text-blue-500" />
              React.js
            </div>

            <div className="bg-gray-200 flex flex-col items-center justify-center gap-2 px-4 py-6 rounded-md font-bold dark:text-black">
              <SiNextdotjs className="text-4xl" />
              Next.js
            </div>

            <div className="bg-gray-200 flex flex-col items-center justify-center gap-2 px-4 py-6 rounded-md font-bold dark:text-black">
              <RiTailwindCssFill className="text-4xl text-sky-400" />
              Tailwind CSS
            </div>

            <div className="bg-gray-200 flex flex-col items-center justify-center gap-2 px-4 py-6 rounded-md font-bold dark:text-black">
              <IoLogoNodejs  className="text-4xl text-green-600" />
              Node.js
            </div>

            <div className="bg-gray-200 flex flex-col items-center justify-center gap-2 px-4 py-6 rounded-md font-bold dark:text-black">
              <SiSupabase  className="text-4xl text-green-500" />
              Supabase
            </div>

            <div className="bg-gray-200 flex flex-col items-center justify-center gap-2 px-4 py-6 rounded-md font-bold dark:text-black">
              <FaGithub className="text-4xl" />
              Git & GitHub
            </div>
          </div>
        </TabsContent>

        {/* Software Grid */}
        <TabsContent value="software">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 px-4">
            <div className="bg-gray-200 flex flex-col items-center justify-center gap-2 px-4 py-6 rounded-md font-bold dark:text-black">
              <TbBrandVscode  className="text-4xl text-blue-600" />
              VS Code
            </div>

            <div className="bg-gray-200 flex flex-col items-center justify-center gap-2 px-4 py-6 rounded-md font-bold dark:text-black">
              <IoLogoVercel  className="text-4xl text-black" />
              Vercel
            </div>

            <div className="bg-gray-200 flex flex-col items-center justify-center gap-2 px-4 py-6 rounded-md font-bold dark:text-black">
              <FaFigma className="text-4xl text-green-500" />
              Figma
            </div>
            <div className="bg-gray-200 flex flex-col items-center justify-center gap-2 px-4 py-6 rounded-md font-bold dark:text-black">
              <RiNotionFill  className="text-4xl text-black" />
              Notion
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </section>
    </div>
  );
}
