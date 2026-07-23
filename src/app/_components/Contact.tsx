"use client";

import { motion } from "framer-motion";
import { Mail, Linkedin, Github, ArrowUpRight } from "lucide-react";
import { contacts, type ContactIcon } from "@/data/contact";

const iconMap: Record<ContactIcon, React.ReactNode> = {
  mail: <Mail size={22} />,
  linkedin: <Linkedin size={22} />,
  github: <Github size={22} />,
};

export default function Contact() {
  return (
    <section
      id="contact"
      className="min-h-screen bg-gray-50 dark:bg-zinc-900 flex items-center justify-center relative overflow-hidden light-pattern-diagonal"
    >
      <div className="contact-elements">
        <div
          className="connection-line"
          style={{
            top: "25%",
            left: "15%",
            width: "150px",
            animationDelay: "0s",
          }}
        ></div>
        <div
          className="connection-line"
          style={{
            top: "60%",
            right: "20%",
            width: "120px",
            animationDelay: "2s",
          }}
        ></div>
        <div
          className="connection-line"
          style={{
            bottom: "30%",
            left: "25%",
            width: "100px",
            animationDelay: "4s",
          }}
        ></div>

        <div
          className="message-bubble"
          style={{ top: "20%", left: "20%", animationDelay: "1s" }}
        ></div>
        <div
          className="message-bubble"
          style={{ top: "50%", right: "25%", animationDelay: "3s" }}
        ></div>
        <div
          className="message-bubble"
          style={{ bottom: "25%", left: "30%", animationDelay: "5s" }}
        ></div>

        <div
          className="network-node"
          style={{ top: "30%", left: "40%", animationDelay: "0.5s" }}
        ></div>
        <div
          className="network-node"
          style={{ top: "70%", right: "35%", animationDelay: "2.5s" }}
        ></div>
        <div
          className="network-node"
          style={{ bottom: "40%", right: "15%", animationDelay: "4.5s" }}
        ></div>
        <div
          className="network-node"
          style={{ top: "45%", left: "15%", animationDelay: "1.5s" }}
        ></div>
      </div>

      <div className="absolute inset-0 bg-gradient-to-tr from-green-50 to-blue-50 dark:from-zinc-800 dark:to-zinc-900 opacity-50"></div>

      <div className="text-center relative z-10 px-6 w-full max-w-2xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl lg:text-6xl font-bold mb-6 text-gray-900 dark:text-white"
        >
          GET IN TOUCH
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="text-lg text-gray-600 dark:text-gray-400 max-w-xl mx-auto mb-12"
        >
          Que ce soit pour un projet, une opportunité ou juste pour échanger —
          n&apos;hésitez pas à me contacter.
        </motion.p>

        <div className="flex flex-col gap-4">
          {contacts.map(({ icon, label, value, href }, i) => (
            <motion.a
              key={label}
              href={href}
              target={href.startsWith("mailto") ? undefined : "_blank"}
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 0 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + i * 0.1, duration: 0.6 }}
              className="group flex items-center justify-between px-6 py-4 rounded-2xl border-2 border-gray-200 dark:border-zinc-700 bg-white dark:bg-zinc-800 hover:border-gray-400 dark:hover:border-zinc-500 transition-all duration-300"
            >
              <div className="flex items-center gap-4">
                <span className="text-gray-500 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white transition-colors duration-300">
                  {iconMap[icon]}
                </span>
                <div className="text-left">
                  <p className="text-xs uppercase tracking-widest text-gray-400 dark:text-gray-500">
                    {label}
                  </p>
                  <p className="text-sm font-medium text-gray-800 dark:text-gray-200">
                    {value}
                  </p>
                </div>
              </div>
              <ArrowUpRight
                size={18}
                className="text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
