import React from "react";
import { motion } from "framer-motion";
import DopeLogo from "./DopeLogo";

import Humour from "/Humour.jpeg";


const AboutSection: React.FC = () => {

  return (
    <section
      id="about"
      className="relative  min-h-screen py-20 bg-gradient-to-br from-black via-[#111111] to-[#1a1a1a]"
    >
    <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
  <div className="absolute w-72 h-72 bg-neutral-800 rounded-full mix-blend-screen filter blur-2xl isolate animate-blob top-0 left-0" />
  <div className="absolute w-72 h-72 bg-neutral-700 rounded-full mix-blend-screen filter blur-2xl isolate animate-blob animation-delay-2000 top-10 left-1/2" />
  <div className="absolute w-72 h-72 bg-neutral-600 rounded-full mix-blend-screen filter blur-2xl isolate animate-blob animation-delay-4000 top-20 left-1/3" />
</div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-4xl md:text-5xl lg:text-6xl font-light text-white mb-4 leading-tight"
            style={{ fontFamily: "Inter, sans-serif", letterSpacing: "-0.02em" }}
          >
            ABOUT
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-400 to-white">
              {" "}ME
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-lg text-gray-300 max-w-2xl mx-auto font-light mt-6"
          >
            A brief introduction about me.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Image Section */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative w-full max-w-md mx-auto">
           <div className="w-full max-w-[400px] h-[400px] rounded-3xl overflow-hidden bg-neutral-900 shadow-2xl ring-4 ring-white/10">
 <img
  src={Humour}
  alt="Profile"
  className="h-full w-full object-cover object-[60%_center]"
/>

</div>


              <motion.div
                initial={{ scale: 0, rotate: -180 }}
                whileInView={{ scale: 1, rotate: 0 }}
                transition={{ duration: 0.8, delay: 0.5, type: "spring", stiffness: 100 }}
                className="absolute -bottom-4 -right-4 p-4 bg-neutral-900 rounded-[16px] shadow-lg border border-gray-700"
              >
                <DopeLogo size="medium" showText={false} />
              </motion.div>
            </div>
          </motion.div>

          {/* Content Section */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            <p className="text-lg text-gray-300 leading-relaxed font-light">
              I'm <span className="font-medium text-white">Karan Acharya</span>, a passionate full-stack developer and AI enthusiast pursuing Computer Science at IIIT Vadodara.
              I enjoy crafting intelligent systems and interfaces that are both performant and human-centric.
            </p>

            <p className="text-lg text-gray-300 leading-relaxed font-light">
              I’ve explored domains like Generative Adversarial Networks, NLP, and Agentic AI. As an intern at Code Sherlock and Chaitanya AI, I’ve implemented real-world solutions combining ML and scalable web technologies.
            </p>

            <p className="text-lg text-gray-300 leading-relaxed font-light">
              I enjoy teaching, solving algorithmic problems, and building creative AI-powered experiences—from cloud dashboards to poetic neural networks. My toolkit spans React, PyTorch, PostgreSQL, and more.
            </p>

            {/* Skills */}
            <div className="flex flex-wrap gap-3 pt-4">
              {[
                "React",
                "Node.js",
                "Python",
                "JavaScript",
                "Spring Boot",
                "MongoDB",
                "PyTorch",
                "PostgreSQL",
              ].map((tech) => (
                <span
                  key={tech}
                  className="px-4 py-2 bg-gradient-to-r from-neutral-800 to-neutral-900 text-gray-300 rounded-[16px] text-sm font-medium border border-gray-600 hover:border-gray-500 shadow-md transition-all duration-300"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* CTA */}
            <div className="flex flex-col sm:flex-row gap-4 pt-6">
              <motion.a
                href="https://drive.google.com/file/d/1kkLIKgJtxkJ-Z1xCWp0oHuSTwchGOcYj/view?usp=share_link"
                target="_blank"
                rel="noopener noreferrer"
               
                whileTap={{ scale: 0.98 }}
                className="px-8 py-4 rounded-[16px] bg-white text-black text-base font-medium tracking-wide transition-all duration-300 hover:bg-gray-200 shadow-lg flex items-center justify-center"
              >
                Download Resume
              </motion.a>

            
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
