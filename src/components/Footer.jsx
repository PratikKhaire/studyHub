import React from "react";
import { FaInstagram, FaTwitter, FaLinkedin, FaHeart } from "react-icons/fa";

export const Footer = () => {
  return (
    <footer className="relative bg-gradient-to-b from-black via-gray-950 to-blue-950 text-gray-300 pt-20 pb-10 px-8 overflow-hidden">
      {/* Background Illustrations */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-600 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-indigo-600 rounded-full filter blur-3xl"></div>
        <div className="absolute top-40 right-1/4 w-64 h-64 bg-purple-600 rounded-full filter blur-3xl"></div>
      </div>

      <div className="relative max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-extrabold text-4xl sm:text-5xl bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent mb-6">
            Contribute and Help Others
          </h2>
          <p className="text-base lg:text-xl text-slate-400 mb-10 max-w-2xl mx-auto">
            Your notes can make a difference! Share your knowledge and help create a supportive learning community.
          </p>
          <a
            href="https://drive.google.com/drive/folders/1IMh4elb-RYv5M8GpQrJaVQZLZyI2w4uY"
            className="inline-block bg-gradient-to-r from-blue-600 to-blue-800 hover:from-blue-700 hover:to-blue-900 text-white font-semibold py-4 px-8 rounded-full shadow-lg transform hover:scale-105 transition-all duration-300"
          >
            Submit Your Notes
          </a>
        </div>

        <div className="border-t border-blue-900 pt-10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="flex flex-col items-center md:items-start">
              <p className="text-lg font-medium mb-2">Connect With Us</p>
              <div className="flex gap-6">
                <a
                  href="https://www.instagram.com/shridmishra"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:text-white transform hover:scale-110 transition-all duration-300"
                  aria-label="Instagram"
                >
                  <FaInstagram className="h-6 w-6" />
                </a>
                <a
                  href="https://twitter.com/shridmishra"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:text-white transform hover:scale-110 transition-all duration-300"
                  aria-label="Twitter"
                >
                  <FaTwitter className="h-6 w-6" />
                </a>
                <a
                  href="https://www.linkedin.com/in/shridmishra"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:text-white transform hover:scale-110 transition-all duration-300"
                  aria-label="LinkedIn"
                >
                  <FaLinkedin className="h-6 w-6" />
                </a>
              </div>
            </div>

            <div className="flex items-center gap-2 text-center md:text-right">
              <p className="text-sm">
                Made with <FaHeart className="inline text-red-500 mx-1" /> by{" "}
                <a
                  href="https://github.com/PratikKhaire"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-bold text-blue-400 hover:text-white transition-colors duration-300"
                >
                  Pratik Khaire
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
