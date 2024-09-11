"use client";

import React, { useState } from 'react';

export const SideBar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    };

    // Function to handle link click and close the sidebar
    const handleLinkClick = () => {
        setIsOpen(false);
    };

    return (
        <div className="relative lg:hidden">
            {/* Sidebar Toggle Button */}
            <button
                onClick={toggleSidebar}
                aria-controls="default-sidebar"
                type="button"
                className="inline-flex items-center p-2 text-white bg-indigo-800 rounded-lg hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
                <span className="sr-only">Open sidebar</span>
                <svg
                    className="w-6 h-6"
                    aria-hidden="true"
                    fill="white"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        clipRule="evenodd"
                        fillRule="evenodd"
                        d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
                    ></path>
                </svg>
            </button>

            {/* Sidebar */}
            <aside
                id="default-sidebar"
                className={`fixed top-0 left-0 z-40 w-64 h-screen transition-transform ${isOpen ? 'translate-x-0' : '-translate-x-full'} bg-slate-800 text-white`}
                aria-label="Sidebar"
            >
                <div className="h-full px-3 py-4 overflow-y-auto">
                    {/* Sidebar Toggle Button Inside Sidebar */}
                    <button
                        onClick={toggleSidebar}
                        aria-controls="default-sidebar"
                        type="button"
                        className="inline-flex items-center p-2 text-white bg-indigo-600 rounded-lg hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    >
                        <span className="sr-only">Close sidebar</span>
                        <svg
                            className="w-6 h-6"
                            aria-hidden="true"
                            fill="white"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                clipRule="evenodd"
                                fillRule="evenodd"
                                d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
                            ></path>
                        </svg>
                    </button>

                    {/* Sidebar Content */}
                    <ul className="space-y-2 mt-6">
                        <li>
                            <a
                                href="#first-year"
                                onClick={handleLinkClick}
                                className="flex items-center p-2 text-white bg-indigo-600 rounded-lg hover:bg-indigo-700"
                            >
                                <span className="ms-3">First Year</span>
                            </a>
                        </li>
                        <li>
                            <a
                                href="#second-year"
                                onClick={handleLinkClick}
                                className="flex items-center p-2 text-white bg-indigo-600 rounded-lg hover:bg-indigo-700"
                            >
                                <span className="ms-3">Second Year</span>
                            </a>
                        </li>
                        <li>
                            <a
                                href="#third-year"
                                onClick={handleLinkClick}
                                className="flex items-center p-2 text-white bg-indigo-600 rounded-lg hover:bg-indigo-700"
                            >
                                <span className="ms-3">Third Year</span>
                            </a>
                        </li>
                        <li>
                            <a
                                href="#final-year"
                                onClick={handleLinkClick}
                                className="flex items-center p-2 text-white bg-indigo-600 rounded-lg hover:bg-indigo-700"
                            >
                                <span className="ms-3">Final Year</span>
                            </a>
                        </li>
                    </ul>
                </div>
            </aside>
        </div>
    );
};
