import { motion } from "framer-motion";



export default function Projects(){
    return (
        <section id="projects" className="min-h-screen bg-white dark:bg-zinc-800 flex items-center justify-center relative light-pattern-lines">
          <div className="blueprint-elements">
            <div className="blueprint-corner top-left"></div>
            <div className="blueprint-corner top-right"></div>
            <div className="blueprint-corner bottom-left"></div>
            <div className="blueprint-corner bottom-right"></div>
            
            <div className="blueprint-line horizontal" style={{ top: '120px', left: '50%', transform: 'translateX(-50%)' }}></div>
            <div className="blueprint-line vertical" style={{ left: '120px', top: '50%', transform: 'translateY(-50%)' }}></div>
            <div className="blueprint-line horizontal" style={{ bottom: '120px', right: '50%', transform: 'translateX(50%)' }}></div>
            <div className="blueprint-line vertical" style={{ right: '120px', top: '50%', transform: 'translateY(-50%)' }}></div>
            
            <div className="blueprint-circle" style={{ width: '40px', height: '40px', top: '80px', left: '200px' }}></div>
            <div className="blueprint-circle" style={{ width: '60px', height: '60px', bottom: '100px', right: '180px' }}></div>
            <div className="blueprint-circle" style={{ width: '30px', height: '30px', top: '60%', left: '150px' }}></div>
            
            <div className="blueprint-measurements" style={{ top: '100px', left: '60px' }}>120px</div>
            <div className="blueprint-measurements" style={{ bottom: '80px', right: '60px' }}>240px</div>
            <div className="blueprint-measurements" style={{ top: '50%', right: '90px', transform: 'rotate(90deg)' }}>160px</div>
          </div>
          
          <div className="text-center relative z-10">
            <motion.h2 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-5xl lg:text-6xl font-bold mb-6 text-gray-900 dark:text-white"
            >
              My Projects
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto"
            >
              Here will be displayed my projects.
            </motion.p>
          </div>
        </section>
    )
}