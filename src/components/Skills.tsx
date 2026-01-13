import { motion } from "framer-motion";
import { Check } from "lucide-react";

export default function Skills() {
  return (
    <section id="skills" className="min-h-screen bg-white dark:bg-zinc-800 py-20 px-6 lg:px-16 xl:px-24 flex items-center justify-center relative light-pattern-dots">
      <div className="skills-elements">
        <div className="floating-code" style={{ top: '15%', left: '10%', animationDelay: '0s' }}>{'<div>'}</div>
        <div className="floating-code" style={{ top: '25%', right: '15%', animationDelay: '1s' }}>{'function()'}</div>
        <div className="floating-code" style={{ bottom: '20%', left: '8%', animationDelay: '2s' }}>{'const app ='}</div>
        <div className="floating-code" style={{ top: '40%', right: '12%', animationDelay: '3s' }}>{'useState()'}</div>
        <div className="floating-code" style={{ bottom: '30%', right: '20%', animationDelay: '4s' }}>{'</div>'}</div>
        
        <div className="code-bracket" style={{ top: '10%', left: '5%', animationDelay: '0.5s' }}>{'{'}</div>
        <div className="code-bracket" style={{ bottom: '15%', right: '8%', animationDelay: '2.5s' }}>{'}'}</div>
        <div className="code-bracket" style={{ top: '60%', left: '15%', animationDelay: '1.5s' }}>{'['}</div>
        <div className="code-bracket" style={{ top: '35%', right: '5%', animationDelay: '3.5s' }}>{']'}</div>
      </div>
      
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-6xl lg:text-7xl font-black mb-8 text-gray-900 dark:text-white tracking-tight">
            SKILLS
          </h2>
        </motion.div>

        <div className="space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.4 }}
            viewport={{ once: true }}
            className="flex flex-wrap justify-center items-center gap-6 lg:gap-12"
          >
            {['HTML', 'CSS', 'JavaScript', 'TypeScript', 'Node'].map((skill, index) => (
              <motion.div
                key={skill}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.15 + index * 0.05, duration: 0.3 }}
                viewport={{ once: true }}
                className="flex items-center gap-3"
              >
                <Check className="w-5 h-5 text-green-500" />
                <span className="text-lg lg:text-xl text-gray-700 dark:text-gray-300 font-medium">
                  {skill}
                </span>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            viewport={{ once: true }}
            className="w-48 h-px bg-gray-300 dark:bg-gray-600 mx-auto"
          />

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.4 }}
            viewport={{ once: true }}
            className="flex flex-wrap justify-center items-center gap-6 lg:gap-12"
          >
            {['React', 'Angular', 'Vue', 'Tailwind CSS', 'PHP', 'Laravel'].map((skill, index) => (
              <motion.div
                key={skill}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.55 + index * 0.05, duration: 0.3 }}
                viewport={{ once: true }}
                className="flex items-center gap-3"
              >
                <Check className="w-5 h-5 text-green-500" />
                <span className="text-lg lg:text-xl text-gray-700 dark:text-gray-300 font-medium">
                  {skill}
                </span>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ delay: 0.8, duration: 0.5 }}
            viewport={{ once: true }}
            className="w-48 h-px bg-gray-300 dark:bg-gray-600 mx-auto"
          />

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.4 }}
            viewport={{ once: true }}
            className="flex flex-wrap justify-center items-center gap-6 lg:gap-12"
          >
            {['Java', 'Python', 'Git and GitHub', 'Bootstrap', 'Symfony'].map((skill, index) => (
              <motion.div
                key={skill}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.95 + index * 0.05, duration: 0.3 }}
                viewport={{ once: true }}
                className="flex items-center gap-3"
              >
                <Check className="w-5 h-5 text-green-500" />
                <span className="text-lg lg:text-xl text-gray-700 dark:text-gray-300 font-medium">
                  {skill}
                </span>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.6 }}
            viewport={{ once: true }}
            className="mt-16 text-center"
          >
            <p className="text-lg lg:text-xl text-gray-500 dark:text-gray-400 font-light italic">
              And still collecting more and more...
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
