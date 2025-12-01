import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTrigger } from "@/components/ui/sheet";
import { IoMenu } from "react-icons/io5";
import Link from "next/link";
import { ModeToggle } from "@/components/ui/ModeToggle";

export default function Navigation() {
  return (
    <nav className=" mt-4 rounded-sm px-3 shadow-sm bg-background dark:bg-card dark:text-card-foreground py-2 sticky top-0 z-50 mx-12 md:mx-[50px]">
      <div className="flex items-center justify-between">

        {/* Logo / Brand */}
        <h1 className="text-2xl font-extrabold cursor-pointer">
          Abdulsalam
        </h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8 font-bold items-center">
          <li>
            <Link scroll={true} href="#home" className="hover:text-blue-600 transition">
              Home
            </Link>
          </li>
          <li>
            <Link scroll={true} href="#skills" className="hover:text-blue-600 transition">
              Skills
            </Link>
          </li>
          <li>
            <Link scroll={true} href="#projects" className="hover:text-blue-600 transition">
              Projects
            </Link>
          </li>
          <li>
            <Link scroll={true} href="#contact" className="hover:text-blue-600 transition">
              Contact
            </Link>
          </li>
          <ModeToggle />
        </ul>

        {/* Mobile Hamburger Menu */}
        <div className="md:hidden flex items-center gap-3">
          <ModeToggle />
          <Sheet>
            <SheetTrigger className="text-2xl">
              <IoMenu />
            </SheetTrigger>
            <SheetContent className="bg-transparent backdrop-blur-xl">
              <SheetHeader className="flex flex-col gap-6 pt-12">
                <SheetDescription>
                  <Link href="#home" scroll={true} className="font-semibold text-black dark:text-white hover:text-blue-600 transition">
                    Home
                  </Link>
                </SheetDescription>
                <SheetDescription>
                  <Link href="#skills" scroll={true} className="font-semibold text-black dark:text-white hover:text-blue-600 transition">
                    Skills
                  </Link>
                </SheetDescription>
                <SheetDescription>
                  <Link href="#projects" scroll={true} className="font-semibold text-black dark:text-white hover:text-blue-600 transition">
                    Projects
                  </Link>
                </SheetDescription>
                <SheetDescription>
                  <Link href="#contact" scroll={true} className="font-semibold text-black dark:text-white hover:text-blue-600 transition">
                    Contact
                  </Link>
                </SheetDescription>
              </SheetHeader>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
}
