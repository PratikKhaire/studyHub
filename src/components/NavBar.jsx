import { FaBookBookmark } from "react-icons/fa6";
import { GoPerson } from "react-icons/go";

export const NavBar = () => {

    return <nav class="sticky wrapper top-0 z-50 flex items-center gap-2  pt-6 ">
       
        <div class="flex w-full justify-between mx-auto bg-transparent shadow-lg shadow-neutral-600/2 backdrop-blur-lg border border-gray-700  p-6 rounded-2xl">
        
        <a class="flex items-center gap-2 cursor-pointer" href="/">
        <FaBookBookmark className="h-6 w-6 "/>
        <span class="text-lg md:text-2xl font-bold tracking-tight text-foreground hidden md:block">GS Notes</span>
        </a>

        <div className="flex justify-between gap-8 mr-4 items-center">
        <a class="flex items-center gap-2 cursor-pointer" href="/">
        <span class="text-sm md:text-xl font-thin tracking-tight text-foreground hidden md:block hover:text-slate-400">Home</span>
        </a>
        <a class="flex items-center gap-2 cursor-pointer" href="/">
        <span class="text-sm md:text-xl font-thin tracking-tight text-foreground hidden md:block hover:text-slate-400">PYQs</span>
        </a>
        <a class="flex items-center gap-2 cursor-pointer" href="/">
        <span class="text-sm md:text-xl font-thin tracking-tight text-foreground hidden md:block hover:text-slate-400">Books</span>
        </a>
        <a class="flex items-center gap-2 cursor-pointer" href="/">
        <span class="text-sm md:text-xl font-thin tracking-tight text-foreground hidden md:block hover:text-slate-400">Lectures</span>
        </a>
        <GoPerson className="h-6 w-6 "/>
        </div>
        
        </div>
        </nav>
}