import React from 'react';
import { motion } from 'framer-motion';
import {
  Code,
  Brain,
  LayoutGrid,
  Sparkles,
  Hammer,
  Users
} from 'lucide-react';

const TechExpertiseSection: React.FC = () => {
  const skills = [
    {
      icon: <Code className="w-6 h-6" />,
      title: 'Competitive Programming & DSA',
      description: 'Solved 600+ DSA and competitive programming problems with strong command of algorithms and data structures using C++.',
      technologies: ['C++', 'STL', 'DP', 'Trees', 'Sorting', 'Greedy', 'Recursion']
    },
    {
      icon: <Brain className="w-6 h-6" />,
      title: 'Machine Learning & AI',
      description: 'Developing ML-powered real-life applications by combining intelligent models with robust backend systems.',
      technologies: ['Python', 'Scikit-Learn', 'TensorFlow', 'Pandas', 'NumPy', 'Matplotlib', 'Seaborn']
    },
    {
      icon: <LayoutGrid className="w-6 h-6" />,
      title: 'Full-Stack Development',
      description: 'Building full-featured, scalable web applications using modern stacks.',
      technologies: ['React', 'Node.js', 'TypeScript', 'MongoDB', 'Express.js']
    },
    {
      icon: <Sparkles className="w-6 h-6" />,
      title: 'Prompt-Driven UI/UX',
      description: 'Designing clean, intuitive interfaces using prompt engineering and modern design tools.',
      technologies: ['Figma', 'Bootstrap', 'Cursor AI', 'Prompt Crafting']
    },
    {
      icon: <Hammer className="w-6 h-6" />,
      title: 'Scalable Product Development',
      description: 'Focused on building real-world products that are performant, productive, and solve real problems.',
      technologies: ['Next.js', 'Vercel', 'REST APIs', 'JWT Auth']
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: 'Mentorship & Leadership',
      description: 'Running a tech community and mentoring students in JEE Chemistry and coding with a passion for knowledge sharing.',
      technologies: ['Agile', 'Git', 'Mentorship', 'Community Building']
    }
  ];

  return (
    <section
      id="expertise"
      className="relative min-h-screen py-20 bg-gradient-to-br from-black via-[#111111] to-[#1a1a1a]"
    >
      {/* Blobs for background */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute w-72 h-72 bg-neutral-800 rounded-full mix-blend-screen filter blur-2xl opacity-10 animate-blob top-0 left-0" />
        <div className="absolute w-72 h-72 bg-neutral-700 rounded-full mix-blend-screen filter blur-2xl opacity-10 animate-blob animation-delay-2000 top-10 left-1/2" />
        <div className="absolute w-72 h-72 bg-neutral-600 rounded-full mix-blend-screen filter blur-2xl opacity-10 animate-blob animation-delay-4000 top-20 left-1/3" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
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
          >
          Tech I Work With
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-lg text-gray-300 max-w-2xl mx-auto font-light mt-6"
          >
            A comprehensive overview of my technical skills, tools, and areas of expertise.
          </motion.p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className="bg-neutral-900 border border-gray-700 rounded-3xl p-6 text-center shadow-md hover:border-white/20"
            >
              <div className="w-16 h-16 bg-white/5 rounded-2xl flex items-center justify-center mx-auto mb-4 text-white">
                {skill.icon}
              </div>
              <h3 className="text-lg sm:text-xl font-medium text-white mb-2">
                {skill.title}
              </h3>
              <p className="text-gray-300 text-sm mb-4">
                {skill.description}
              </p>
              <div className="flex flex-wrap justify-center gap-2">
                {skill.technologies.map((tech, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 bg-neutral-800 text-gray-300 border border-gray-600 rounded-full text-xs hover:border-gray-400 transition-all duration-200"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default TechExpertiseSection;
