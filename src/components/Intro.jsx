"use client"
import React from "react";
import { motion } from "framer-motion";
import { FiArrowUpRight } from "react-icons/fi";

export const Intro = () => {
  const mathSymbols = ["∑", "∫", "π", "√", "∞", "θ", "±", "÷"];
  const chemSymbols = ["H₂O", "CO₂", "NaCl", "O₂", "H⁺", "OH⁻", "CH₄"];
  
  return (
    <section className=" bg-gradient-to-b from-black via-black/95 to-blue-950/20 text-indigo-200 px-4 sm:px-6 lg:px-8 flex items-center relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-[500px] h-[500px] -top-48 -right-48 bg-blue-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute w-[400px] h-[400px] -bottom-32 -left-32 bg-indigo-500/10 rounded-full blur-3xl animate-pulse" />
      </div>

      <div className="max-w-7xl mx-auto w-full py-6 lg:pb-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-12 items-center">
          {/* Content Column */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-10 text-center lg:text-left"
          >
            <div className="space-y-6">
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
                className="inline-flex items-center px-4 py-2 rounded-full border border-blue-500/30 bg-blue-500/10 backdrop-blur-sm"
              >
                <span className="w-2 h-2 rounded-full bg-blue-500 mr-2 animate-pulse" />
                <span className="text-sm font-medium text-blue-300">Welcome to GS Notes</span>
              </motion.div>
              
              <h1 className="font-bold text-6xl sm:text-7xl md:text-8xl xl:text-9xl tracking-tight">
                <motion.span 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  className="block text-transparent bg-clip-text bg-gradient-to-r from-white via-blue-200 to-blue-400"
                >
                  Study
                </motion.span>
                <motion.span 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7 }}
                  className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-blue-500 to-indigo-600"
                >
                  Smarter.
                </motion.span>
              </h1>

              <motion.p 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.9 }}
                className="text-sm lg:text-xl text-gray-400 max-w-xl mx-auto lg:mx-0 leading-relaxed"
              >
                Access comprehensive semester notes, study materials, books, previous year questions, and curated lecture links - all in one place.
              </motion.p>
            </div>
            
            <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="https://drive.google.com/drive/folders/1IMh4elb-RYv5M8GpQrJaVQZLZyI2w4uY"
                className="group relative inline-flex items-center gap-2 px-6 py-3 rounded-full
                          bg-gradient-to-r from-blue-600 to-indigo-600 
                          text-white font-medium text-lg
                          transition-all duration-300"
              >
                Submit Your Notes
                <FiArrowUpRight className="w-5 h-5 group-hover:rotate-45 transition-transform duration-300" />
              </motion.a>

              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="#explore"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full
                          bg-white/5 hover:bg-white/10 backdrop-blur-sm
                          text-white font-medium
                          border border-white/10 hover:border-white/20
                          transition-all duration-300"
              >
                Explore Resources
              </motion.a>
            </div>
          </motion.div>

          {/* Animated Science & Math Illustration Column */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="lg:relative lg:h-[600px] absolute inset-0 opacity-20 lg:opacity-100 pointer-events-none"
          >
            {/* Math Symbols */}
            {mathSymbols.map((symbol, i) => (
              <motion.div
                key={`math-${i}`}
                className="absolute font-serif text-2xl text-blue-400/40"
                style={{
                  top: `${Math.random() * 80}%`,
                  left: `${Math.random() * 80}%`,
                }}
                animate={{
                  y: [0, -20, 0],
                  opacity: [0.4, 1, 0.4],
                  scale: [1, 1.2, 1],
                }}
                transition={{
                  duration: 3 + Math.random() * 2,
                  repeat: Infinity,
                  delay: Math.random() * 2,
                }}
              >
                {symbol}
              </motion.div>
            ))}

            {/* Chemistry Molecules */}
            {chemSymbols.map((symbol, i) => (
              <motion.div
                key={`chem-${i}`}
                className="absolute font-mono text-xl text-indigo-400/40"
                style={{
                  top: `${Math.random() * 80}%`,
                  left: `${Math.random() * 80}%`,
                }}
                animate={{
                  rotate: [0, 360],
                  opacity: [0.4, 1, 0.4],
                }}
                transition={{
                  duration: 4 + Math.random() * 2,
                  repeat: Infinity,
                  delay: Math.random() * 2,
                }}
              >
                {symbol}
              </motion.div>
            ))}

            {/* Physics Wave Animation */}
            <svg className="absolute inset-0 w-full h-full">
              <motion.path
                d="M 0 300 Q 150 200 300 300 Q 450 400 600 300"
                stroke="rgba(99, 102, 241, 0.2)"
                strokeWidth="2"
                fill="none"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "linear"
                }}
              />
            </svg>

            {/* Orbital Animation */}
            <motion.div
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
              animate={{
                rotate: [0, 360],
              }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: "linear",
              }}
            >
              <div className="relative w-64 h-64">
                {/* Electron Orbits */}
                {[0, 45, 90].map((angle, i) => (
                  <motion.div
                    key={`orbit-${i}`}
                    className="absolute inset-0"
                    style={{
                      transform: `rotate(${angle}deg)`,
                      border: '2px solid rgba(99, 102, 241, 0.2)',
                      borderRadius: '100%',
                    }}
                  >
                    <motion.div
                      className="absolute w-4 h-4 bg-blue-400/40 rounded-full"
                      animate={{
                        rotate: [0, 360],
                      }}
                      transition={{
                        duration: 3 + i,
                        repeat: Infinity,
                        ease: "linear",
                      }}
                      style={{
                        left: '50%',
                        transform: 'translateX(-50%)',
                      }}
                    />
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Intro;