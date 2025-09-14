import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { IoMenu } from "react-icons/io5";
import Link from "next/link";
import { ModeToggle } from "@/components/ui/ModeToggle";

export default function Navigation() {
  return (
    <nav className=" mt-4 rounded-sm px-3 shadow-md bg-background dark:bg-card dark:text-card-foreground py-2 sticky top-0 z-50 mx-12 md:mx-[50px]">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-extrabold">Abdulsalam</h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-6 font-bold items-center ">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/skills">Skills</Link>
          </li>
          <li>
            <Link href="/projects">Projects</Link>
          </li>
          <li>
            <Link href="/contact">Contact</Link>
          </li>
          <ModeToggle />
        </ul>
        

        {/* Mobile Hamburger Menu */}
        <div className="md:hidden">
          <ModeToggle />
      <Sheet>
        <SheetTrigger ><IoMenu /></SheetTrigger>
          <SheetContent className="bg-transparent backdrop-blur-xl">
            <SheetHeader className={"py-15"}> 
       <SheetDescription >
            <Link href="/" className="font-semibold text-black dark:text-white hover:text-white hover:dark:text-gray-500">Home</Link></SheetDescription>
           <SheetDescription> <Link href="/skills" className="font-semibold text-black dark:text-white hover:text-white hover:dark:text-gray-500">Skills</Link> </SheetDescription>
          <SheetDescription>  <Link href="/projects" className="font-semibold text-black dark:text-white hover:text-white hover:dark:text-gray-500">Projects</Link> </SheetDescription>
           <SheetDescription> <Link href="/contact" className="font-semibold text-black dark:text-white hover:text-white hover:dark:text-gray-500">Contact</Link> </SheetDescription>
           <ModeToggle />
         </SheetHeader>
         </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
}
