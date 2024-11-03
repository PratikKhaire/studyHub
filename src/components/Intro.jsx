import React from "react";

export const Intro = () => {
  return (
    <section className=" bg-black text-indigo-200 px-4 sm:px-6 lg:px-8 flex items-center">
      <div className="max-w-7xl mx-auto w-full py-12 sm:py-16 lg:py-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          {/* Content Column */}
          <div className="space-y-8 text-center lg:text-left">
            <div className="space-y-4">
              <div className="font-medium text-xl sm:text-2xl text-gray-300 tracking-tighter 
                            relative inline-block
                            after:content-[''] after:absolute after:-bottom-2 after:left-0 
                            after:w-full after:h-1 after:bg-gradient-to-r after:from-blue-500 after:to-transparent">
                Welcome To
              </div>
              <h1 className="font-bold text-5xl sm:text-6xl md:text-7xl xl:text-8xl text-gray-50 leading-tight">
                <span className="bg-gradient-to-r from-blue-500 via-blue-400 to-blue-500 bg-clip-text text-transparent
                              animate-gradient-x">
                  GS{" "}
                </span>
                <span className="relative">
                  Notes.
                  <span className="absolute -bottom-2 right-0 text-blue-500 text-6xl"></span>
                </span>
              </h1>
              <div className="text-lg sm:text-xl font-light text-gray-400 max-w-xl mx-auto lg:mx-0">
                Your go-to platform for semester notes, study materials,
                <br className="hidden sm:block" />
                Books, PYQs and lectures youtube links!
              </div>
            </div>
            
            <a
              href="https://drive.google.com/drive/folders/1IMh4elb-RYv5M8GpQrJaVQZLZyI2w4uY"
              className="inline-flex items-center px-4 py-2 lg:px-8 lg:py-4 rounded-xl
                        bg-gradient-to-r from-blue-600 to-blue-800 
                        hover:from-blue-500 hover:to-blue-700
                        text-white font-semibold text-lg
                        transform transition-all duration-300
                        hover:scale-105 hover:shadow-xl
                        focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-900"
            >
              Submit Your Notes
              <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>
          </div>

          {/* Enhanced Illustration Column */}
          <div className="flex justify-center lg:justify-end">
            <svg
              viewBox="0 0 600 500"
              className="w-full max-w-lg xl:max-w-xl transform transition-transform duration-700 hover:scale-105"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                {/* Enhanced Gradients */}
                <linearGradient id="glowGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#3182CE" stopOpacity="0.2" />
                  <stop offset="50%" stopColor="#2B6CB0" stopOpacity="0.1" />
                  <stop offset="100%" stopColor="#2C5282" stopOpacity="0.2" />
                </linearGradient>
                
                <radialGradient id="centerGlow" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stopColor="#4299E1" stopOpacity="0.4" />
                  <stop offset="100%" stopColor="#2B6CB0" stopOpacity="0" />
                </radialGradient>

                {/* Geometric Pattern */}
                <pattern id="grid" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
                  <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#4299E1" strokeWidth="0.5" opacity="0.2" />
                </pattern>
              </defs>

              {/* Background Elements */}
              <rect x="0" y="0" width="600" height="500" fill="url(#grid)" />
              <circle cx="300" cy="250" r="200" fill="url(#glowGradient)">
                <animate attributeName="opacity" values="0.6;0.8;0.6" dur="4s" repeatCount="indefinite" />
              </circle>

              {/* Floating Geometric Shapes */}
              <g transform="translate(300, 250)">
                <polygon points="0,-120 104,60 -104,60" fill="none" stroke="#4299E1" strokeWidth="2" opacity="0.2">
                  <animateTransform
                    attributeName="transform"
                    type="rotate"
                    from="0"
                    to="360"
                    dur="20s"
                    repeatCount="indefinite"
                  />
                </polygon>
                <rect x="-80" y="-80" width="160" height="160" fill="none" stroke="#4299E1" strokeWidth="2" opacity="0.15">
                  <animateTransform
                    attributeName="transform"
                    type="rotate"
                    from="0"
                    to="-360"
                    dur="25s"
                    repeatCount="indefinite"
                  />
                </rect>
              </g>

              {/* Enhanced Atom */}
              <g transform="translate(300, 250)">
                {/* Nucleus with Pulse Effect */}
                <circle cx="0" cy="0" r="20" fill="#3182CE">
                  <animate attributeName="r" values="20;22;20" dur="2s" repeatCount="indefinite" />
                  <animate attributeName="fill-opacity" values="0.8;1;0.8" dur="2s" repeatCount="indefinite" />
                </circle>
                
                {/* Dynamic Electron Orbits */}
                {[0, 120, 240].map((angle, i) => (
                  <g key={i}>
                    <ellipse 
                      cx="0" cy="0" 
                      rx={100 + i * 30} ry={40 + i * 10}
                      fill="none" 
                      stroke="#4299E1" 
                      strokeWidth="1.5"
                      opacity="0.3"
                      transform={`rotate(${angle})`}
                    >
                      <animateTransform
                        attributeName="transform"
                        type="rotate"
                        from={angle.toString()}
                        to={(angle + 360).toString()}
                        dur={`${6 + i * 2}s`}
                        repeatCount="indefinite"
                      />
                    </ellipse>
                    <circle 
                      cx={100 + i * 30} 
                      cy="0" 
                      r="6"
                      fill="#4299E1"
                    >
                      <animate attributeName="opacity" values="1;0.5;1" dur="2s" repeatCount="indefinite" />
                      <animateTransform
                        attributeName="transform"
                        type="rotate"
                        from={`${angle} 0 0`}
                        to={`${angle + 360} 0 0`}
                        dur={`${6 + i * 2}s`}
                        repeatCount="indefinite"
                      />
                    </circle>
                  </g>
                ))}
              </g>

              {/* Floating Formulas with Animation */}
              <g className="formulas" fill="#4299E1" fontFamily="serif">
                {[
                  { text: "E = mc²", x: 100, y: 80 },
                  { text: "F = ma", x: 450, y: 100 },
                  { text: "∇ × B = μ₀J", x: 120, y: 400 },
                  { text: "PV = nRT", x: 400, y: 350 }
                ].map((formula, i) => (
                  <text key={i} x={formula.x} y={formula.y} fontSize="16" opacity="0.8">
                    <animate
                      attributeName="opacity"
                      values="0.4;0.8;0.4"
                      dur="4s"
                      begin={`${i * 1}s`}
                      repeatCount="indefinite"
                    />
                    {formula.text}
                  </text>
                ))}
              </g>

              {/* Binary Rain Effect */}
              <g opacity="0.3">
                {[...Array(5)].map((_, i) => (
                  <text key={i} 
                        x={100 + i * 100} 
                        y="0" 
                        fill="#4299E1" 
                        fontSize="12" 
                        fontFamily="monospace">
                    <tspan>{"10110"}</tspan>
                    <animate
                      attributeName="y"
                      from="-20"
                      to="520"
                      dur={`${8 + i * 2}s`}
                      repeatCount="indefinite"
                    />
                  </text>
                ))}
              </g>
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Intro;