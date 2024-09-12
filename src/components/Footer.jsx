import React from "react";
import { FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa";

export const Footer = () => {
  return (
    <footer className="bg-slate-900 text-indigo-200 pt-16 px-8 text-center">
      <div className="max-w-4xl mx-auto">
        <h2 className="font-extrabold text-4xl sm:text-5xl text-indigo-400 mb-4">
          Contribute and Help Others
        </h2>
        <p className="text-lg sm:text-xl text-slate-300 mb-8">
          Your notes can be a valuable resource for your peers. Submit your notes to help others succeed!
        </p>
        <a
          href="https://drive.google.com/drive/folders/1IMh4elb-RYv5M8GpQrJaVQZLZyI2w4uY"
          className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 px-6 rounded-lg shadow-lg transition-all duration-300"
        >
          Submit Your Notes
        </a>
        <div className="mt-16 text-md mb-6">
          <p>
            Designed & Developed By <br />{" "}
            <a
              href="https://www.linkedin.com/in/shridmishra" // Replace with actual LinkedIn profile URL
              target="_blank"
              rel="noopener noreferrer"
              className="font-bold hover:underline"
            >
              Shrid Mishra
            </a>
          </p>
        </div>
        <div className="flex justify-center gap-4 mb-4">
          <a
            href="https://www.instagram.com/shridmishra" // Replace with actual Instagram URL
            target="_blank"
            rel="noopener noreferrer"
            className="text-indigo-400 hover:text-white transition-colors duration-300"
            aria-label="Instagram"
          >
            <FaInstagram className="h-6 w-6" />
          </a>
          <a
            href="https://twitter.com/shridmishra" // Replace with actual Twitter URL
            target="_blank"
            rel="noopener noreferrer"
            className="text-indigo-400 hover:text-white transition-colors duration-300"
            aria-label="Twitter"
          >
            <FaTwitter className="h-6 w-6" />
          </a>
          <a
            href="https://www.linkedin.com/in/shridmishra" // Replace with actual LinkedIn URL
            target="_blank"
            rel="noopener noreferrer"
            className="text-indigo-400 hover:text-white transition-colors duration-300"
            aria-label="LinkedIn"
          >
            <FaLinkedin className="h-6 w-6" />
          </a>
        </div>
      </div>
    </footer>
  );
};
