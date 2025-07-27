import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, Linkedin, MessageCircle, Trophy, Mail } from 'lucide-react';
import React from 'react';

const SocialLinksSection: React.FC = () => {

  const shadows = '0 10px 40px rgba(255, 255, 255, 0.05)';

  const socialPlatforms = [
    {
      name: 'GitHub',
      username: 'karanacharya2003',
      url: 'https://github.com/karanacharya2003',
      icon: <Github className="w-6 h-6" />,
      color: 'from-neutral-800 to-neutral-900',
      bgColor: 'bg-neutral-900',
      description: 'Open source projects and contributions'
    },
    {
      name: 'LinkedIn',
      username: 'karanacharya2003',
      url: 'https://www.linkedin.com/in/karanacharya2003/',
      icon: <Linkedin className="w-6 h-6" />,
      color: 'from-neutral-800 to-neutral-900',
      bgColor: 'bg-neutral-900',
      description: 'Professional network and updates'
    },
    {
      name: 'LeetCode',
      username: 'karanacharya16',
      url: 'https://leetcode.com/u/karanacharya16/',
      icon: <Trophy className="w-6 h-6" />,
      color: 'from-neutral-800 to-neutral-900',
      bgColor: 'bg-neutral-900',
      description: 'Sharpening DSA problem-solving skills'
    }
  ];

  return (
    <section
      id="social"
      className="relative min-h-screen py-20 bg-gradient-to-br from-black via-[#111111] to-[#1a1a1a] overflow-hidden will-change-transform"
    >
      {/* Floating Background Blobs */}
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
           Coffee? Code? Chat?
          </motion.h2>
          <motion.h4
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-2xl md:text-3xl lg:text-5xl font-light text-white mb-4 leading-tight"
          >
           Ping me at!

          </motion.h4>
          

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-lg text-gray-300 max-w-2xl mx-auto font-light mt-6"
          >
            Find me across various platforms. Let's connect, share ideas,
            and build together.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <AnimatePresence>
            {socialPlatforms.map((platform, index) => (
              <motion.a
                key={platform.name}
                href={platform.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 50, rotate: Math.random() * 6 - 3 }}
                whileInView={{ opacity: 1, y: 0, rotate: 0 }}
                transition={{
                  duration: 0.8,
                  delay: index * 0.1,
                  type: "spring",
                  stiffness: 100
                }}
                whileHover={{
                  y: -12,
                  rotate: Math.random() * 4 - 2,
                  scale: 1.02,
                  transition: { duration: 0.3 }
                }}
                className={`group relative p-6 rounded-3xl border border-gray-700 shadow-lg hover:shadow-xl hover:border-gray-500 transition-all duration-500 flex items-center space-x-4 ${platform.bgColor}`}
                style={{ boxShadow: shadows }}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${platform.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-3xl`} />

                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className={`w-14 h-14 rounded-2xl flex items-center justify-center shadow-lg bg-gradient-to-br ${platform.color} text-white flex-shrink-0`}
                >
                  {platform.icon}
                </motion.div>

                <div className="relative z-10">
                  <h3 className="text-xl font-bold text-white mb-1 group-hover:text-gray-100 transition-colors duration-300">
                    {platform.name}
                  </h3>
                  <p className="text-gray-400 text-sm mb-2">@{platform.username}</p>
                  <p className="text-gray-500 text-xs leading-relaxed">
                    {platform.description}
                  </p>
                </div>

                <div className="absolute top-4 right-4 w-8 h-8 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <ExternalLink className="w-4 h-4 text-gray-300" />
                </div>

                <div className="absolute top-4 left-4 w-1 h-1 bg-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-6 right-6 w-1 h-1 bg-gray-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{ transitionDelay: '100ms' }} />
              </motion.a>
            ))}
          </AnimatePresence>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center"
        >
          <div className="bg-neutral-900 border border-gray-700 rounded-2xl p-8 shadow-lg" style={{ boxShadow: shadows }}>
            <h3 className="text-2xl font-bold text-white mb-4">Contact Information</h3>
            <div className="space-y-2 text-gray-300">
              <p className="flex items-center justify-center gap-2">
                <MessageCircle className="w-5 h-5 text-white" />
                +91 9142346731
              </p>
              <p className="flex items-center justify-center gap-2">
                <Mail className="w-5 h-5 text-white" />
                karanacharya2003@gmail.com
              </p>
            </div>
            <div className="mt-6 space-y-2 text-gray-400">
              <p className="font-semibold text-white">
                Indian Institute of Information Technology Vadodara (IIITV)
              </p>
              <p>Bachelor of Technology, Computer Science Engineering</p>
              <p className="text-gray-300 font-medium">
                CPI: 8.93/10 (up to 5th semester) • 2022-2026
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SocialLinksSection;
