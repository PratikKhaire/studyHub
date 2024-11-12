import { FaBookBookmark } from "react-icons/fa6";

export const NavBar = () => {

    return <nav class="sticky wrapper top-0 z-50 flex items-center gap-2  pt-6 ">
       
        <div class="flex w-full justify-between mx-auto bg-transparent shadow-lg shadow-neutral-600/2 backdrop-blur-lg border border-gray-700  p-6 rounded-2xl">
        
        <a class="flex flex-nowrap items-center gap-2 cursor-pointer w-full" href="/">
        <FaBookBookmark className="h-6 w-6 "/>
        <div class="text-md md:text-2xl font-bold tracking-tight ">GSNotes</div>
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
       
        </div>
        
        </div>
        </nav>
}