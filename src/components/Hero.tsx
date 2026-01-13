import { motion } from "framer-motion";
import { Linkedin, Github, Instagram } from "lucide-react";


export default function Hero(){
    return(
       <section id="hero" className="min-h-screen flex items-center justify-center px-6 lg:px-16 xl:px-24">
          <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 lg:gap-24 items-center w-full">
            
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center lg:text-left order-2 lg:order-1"
            >
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.8 }}
                className="text-6xl lg:text-8xl xl:text-9xl font-black mb-6 tracking-tighter leading-none"
              >
                NOAN<br />
                <span className="text-gray-500 dark:text-gray-500 font-light">DELATOUCHE</span>
              </motion.h1>

              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.8 }}
                className="text-sm lg:text-base font-normal mb-12 text-gray-700 dark:text-gray-300 tracking-[0.3em] uppercase"
              >
                WEB DEVELOPER
              </motion.h2>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.8 }}
                className="flex justify-center lg:justify-start gap-3 mb-12"
              >
                <button className="p-3 border-2 border-gray-300 dark:border-gray-600 rounded-full hover:bg-gray-100 dark:hover:bg-zinc-800 hover:border-gray-400 dark:hover:border-gray-500 transition-all duration-300">
                  <Linkedin size={18} />
                </button>
                <button className="p-3 border-2 border-gray-300 dark:border-gray-600 rounded-full hover:bg-gray-100 dark:hover:bg-zinc-800 hover:border-gray-400 dark:hover:border-gray-500 transition-all duration-300">
                  <Github size={18} />
                </button>
                <button className="p-3 border-2 border-gray-300 dark:border-gray-600 rounded-full hover:bg-gray-100 dark:hover:bg-zinc-800 hover:border-gray-400 dark:hover:border-gray-500 transition-all duration-300">
                  <Instagram size={18} />
                </button>
              </motion.div>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.8 }}
                className="text-lg lg:text-xl text-gray-600 dark:text-gray-400 mb-12 max-w-sm mx-auto lg:mx-0 leading-relaxed font-light"
              >
                Creating fast,<br />
                accessible, modern<br />
                web applications.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1, duration: 0.8 }}
              >
                <button className="bg-blue-500 hover:bg-blue-600 text-white px-10 py-4 rounded-full font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg">
                  Resume
                </button>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4, duration: 1, ease: "easeOut" }}
              className="flex justify-center relative order-1 lg:order-2"
            >
              <div className="relative">
                <div className="absolute inset-0 w-96 h-96 lg:w-[450px] lg:h-[450px]">
                  <svg className="w-full h-full hero-spider-web" viewBox="0 0 400 400" fill="none">
                    <g className="stroke-red-500 dark:stroke-red-400" strokeWidth="2" opacity="0.8">
                      <line x1="200" y1="50" x2="200" y2="350" />
                      <line x1="350" y1="200" x2="50" y2="200" />
                      <line x1="320" y1="80" x2="80" y2="320" />
                      <line x1="320" y1="320" x2="80" y2="80" />
                      
                      <circle cx="200" cy="200" r="80" fill="none" />
                      <circle cx="200" cy="200" r="120" fill="none" />
                      <circle cx="200" cy="200" r="160" fill="none" />
                    </g>
                  </svg>
                </div>
                
                <div className="relative z-10 w-72 h-72 lg:w-80 lg:h-80 rounded-full bg-gradient-to-br from-gray-800 via-gray-900 to-black p-1 shadow-2xl hero-image-container hero-glow-effect">
                  <div className="w-full h-full rounded-full bg-gradient-to-br from-gray-700 to-gray-900 flex items-center justify-center overflow-hidden">
                    <div className="w-60 h-60 lg:w-64 lg:h-64 rounded-full flex items-center justify-center relative overflow-hidden">
                      <img 
                        src="/kobayashi.jpg" 
                        alt="Anime character profile" 
                        className="w-full h-full object-cover rounded-full hero-image"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-full"></div>
                    </div>
                  </div>
                </div>
                
                <div className="absolute top-4 right-8 w-4 h-4 bg-green-400 rounded-full hero-floating-dot shadow-lg" style={{ animationDelay: '0s' }}>
                  <div className="absolute inset-0 bg-green-400 rounded-full animate-ping opacity-75"></div>
                </div>
                <div className="absolute bottom-8 right-4 w-3 h-3 bg-yellow-400 rounded-full hero-floating-dot shadow-lg" style={{ animationDelay: '1.5s' }}></div>
                <div className="absolute bottom-16 left-8 w-2 h-2 bg-blue-400 rounded-full hero-floating-dot" style={{ animationDelay: '3s' }}></div>
              </div>
            </motion.div>
          </div>
        </section> 
    )
}