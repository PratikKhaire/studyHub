"use client"
import { FaBookBookmark } from "react-icons/fa6";
import { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoMdClose } from "react-icons/io";

export const NavBar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return <nav class="sticky wrapper top-0 z-50 flex items-center gap-2 pt-6 mx-6 lg:mx-28">
        <div class="flex w-full justify-between mx-auto bg-transparent shadow-lg shadow-neutral-600/2 backdrop-blur-lg border border-gray-700 p-6 rounded-2xl">
            <a class="flex flex-nowrap items-center gap-2 cursor-pointer w-full" href="/">
                <FaBookBookmark className="h-6 w-6"/>
                <div class="text-md md:text-2xl font-bold tracking-tight">GSNotes</div>
            </a>

            {/* Mobile Menu Button */}
            <button 
                className="md:hidden text-2xl"
                onClick={toggleMenu}
            >
                {isMenuOpen ? <IoMdClose /> : <RxHamburgerMenu />}
            </button>

            {/* Desktop Menu */}
            <div className="hidden md:flex justify-between gap-8 mr-4 items-center">
                <a class="flex items-center gap-2 cursor-pointer" href="/">
                    <span class="text-sm md:text-xl font-thin tracking-tight text-foreground hover:text-slate-400">Home</span>
                </a>
                <a class="flex items-center gap-2 cursor-pointer" href="/">
                    <span class="text-sm md:text-xl font-thin tracking-tight text-foreground hover:text-slate-400">PYQs</span>
                </a>
                <a class="flex items-center gap-2 cursor-pointer" href="/">
                    <span class="text-sm md:text-xl font-thin tracking-tight text-foreground hover:text-slate-400">Books</span>
                </a>
                <a class="flex items-center gap-2 cursor-pointer" href="/">
                    <span class="text-sm md:text-xl font-thin tracking-tight text-foreground hover:text-slate-400">Lectures</span>
                </a>
            </div>

            {/* Mobile Menu */}
            {isMenuOpen && (
                <div className="absolute top-full left-0 right-0 mt-2 bg-black/90 backdrop-blur-lg border border-gray-700 rounded-lg p-4 md:hidden">
                    <div className="flex flex-col gap-4">
                        <a class="cursor-pointer" href="/">
                            <span class="text-sm font-thin tracking-tight text-foreground hover:text-slate-400">Home</span>
                        </a>
                        <a class="cursor-pointer" href="/">
                            <span class="text-sm font-thin tracking-tight text-foreground hover:text-slate-400">PYQs</span>
                        </a>
                        <a class="cursor-pointer" href="/">
                            <span class="text-sm font-thin tracking-tight text-foreground hover:text-slate-400">Books</span>
                        </a>
                        <a class="cursor-pointer" href="/">
                            <span class="text-sm font-thin tracking-tight text-foreground hover:text-slate-400">Lectures</span>
                        </a>
                    </div>
                </div>
            )}
        </div>
    </nav>
}