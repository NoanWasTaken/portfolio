import { motion } from "framer-motion";

export default function Contact(){
    return (
        <section id="contact" className="min-h-screen bg-gray-50 dark:bg-zinc-900 flex items-center justify-center relative overflow-hidden light-pattern-diagonal">
          <div className="contact-elements">
            <div className="connection-line" style={{ top: '25%', left: '15%', width: '150px', animationDelay: '0s' }}></div>
            <div className="connection-line" style={{ top: '60%', right: '20%', width: '120px', animationDelay: '2s' }}></div>
            <div className="connection-line" style={{ bottom: '30%', left: '25%', width: '100px', animationDelay: '4s' }}></div>
            
            <div className="message-bubble" style={{ top: '20%', left: '20%', animationDelay: '1s' }}></div>
            <div className="message-bubble" style={{ top: '50%', right: '25%', animationDelay: '3s' }}></div>
            <div className="message-bubble" style={{ bottom: '25%', left: '30%', animationDelay: '5s' }}></div>
            
            <div className="network-node" style={{ top: '30%', left: '40%', animationDelay: '0.5s' }}></div>
            <div className="network-node" style={{ top: '70%', right: '35%', animationDelay: '2.5s' }}></div>
            <div className="network-node" style={{ bottom: '40%', right: '15%', animationDelay: '4.5s' }}></div>
            <div className="network-node" style={{ top: '45%', left: '15%', animationDelay: '1.5s' }}></div>
          </div>
          
          <div className="absolute inset-0 bg-gradient-to-tr from-green-50 to-blue-50 dark:from-zinc-800 dark:to-zinc-900 opacity-50"></div>
          <div className="text-center relative z-10">
            <motion.h2 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-5xl lg:text-6xl font-bold mb-6 text-gray-900 dark:text-white"
            >
              Get In Touch
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto"
            >
              This section will contain my contact information.
            </motion.p>
          </div>
        </section>
    )
}