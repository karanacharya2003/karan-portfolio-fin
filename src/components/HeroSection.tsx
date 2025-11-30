import React from 'react';
import { motion } from 'framer-motion';
import { Download, Mail, Phone, MapPin } from 'lucide-react';

const karan = "/karan-linkedin.jpg";

const HeroSection: React.FC = () => {
  const shadows = '0 10px 40px rgba(255, 255, 255, 0.05)';

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-black via-[#111111] to-[#1a1a1a]"
    >
      {/* Animated Blobs */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute w-72 h-72 bg-neutral-800 rounded-full mix-blend-screen filter blur-2xl  isolate animate-blob top-0 left-0" />
        <div className="absolute w-72 h-72 bg-neutral-700 rounded-full mix-blend-screen filter blur-2xl  isolate animate-blob animation-delay-2000 top-10 left-1/2" />
        <div className="absolute w-72 h-72 bg-neutral-600 rounded-full mix-blend-screen filter blur-2xl  isolate animate-blob animation-delay-4000 top-20 left-1/3" />
      </div>


      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-8">
        <div className="flex flex-col items-center justify-center min-h-screen text-center">
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
            className="space-y-6 max-w-4xl"
          >
            {/* Profile Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="relative mx-auto mb-8"
            >
              <div className="group w-32 h-32 md:w-40 md:h-40 bg-gradient-to-br from-neutral-900 to-black rounded-full overflow-hidden mx-auto shadow-2xl ring-4 ring-white/10">
                <img
                  className="w-[250px] h-[250px] ml-[-10px] mt-[-70px] object-cover rounded-full scale-[1.15] group-hover:scale-[1.35] transition-transform duration-500 ease-in-out filter "
                  src={karan}
                  alt="Profile"
                />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="space-y-3"
            >
              <p className="text-lg md:text-xl text-gray-400 font-medium uppercase tracking-wider">Hello, I'm</p>
              <h1
                className="text-4xl md:text-6xl lg:text-7xl font-light leading-tight"
                style={{
                  fontFamily: 'Satoshi , sans-serif',
                  letterSpacing: '-0.02em',
                  lineHeight: '1.1'
                }}
              >
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400 font-bold tracking-wide">
                  KARAN ACHARYA
                </span>
              </h1>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.0 }}
              className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed font-light"
            >
            As someone who enjoys creating products and understanding how systems behave, I explore software engineering and Machine Learning while pursuing Computer Science at IIIT Vadodara. I find my kick in building products, solving system-level challenges, and exploring the frontiers of technology.
          
            </motion.p>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.2 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4 md:gap-8 py-6"
            >
              <div className="flex items-center space-x-2 text-gray-400">
                <Phone className="w-5 h-5" />
                <span className="text-sm md:text-base">+91 9142346731</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-400">
                <Mail className="w-5 h-5" />
                <span className="text-sm md:text-base">karanacharya2003@gmail.com</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-400">
                <MapPin className="w-5 h-5" />
                <span className="text-sm md:text-base">Gandhinagar, Gujarat</span>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.4 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <motion.a
                href="https://drive.google.com/file/d/1nQBJyJ_tbS-Ea7HYrtipuNUMN9UPH9LN/view?usp=share_link"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.02, boxShadow: shadows }}
                whileTap={{ scale: 0.98 }}
                className="flex items-center justify-center space-x-2 px-8 py-4 bg-white text-black font-medium rounded-[16px] transition-all duration-300 hover:bg-gray-200 shadow-lg"
              >
                <Download className="w-5 h-5" />
                <span className="tracking-wide">DOWNLOAD RESUME</span>
              </motion.a>


              <motion.a
                href="mailto:karanacharya2003@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{
                  scale: 1.02,
                  borderColor: '#ffffff',
                  color: '#ffffff',
                  boxShadow: '0 0 20px rgba(255, 255, 255, 0.2)',
                }}
                whileTap={{ scale: 0.98 }}
                className="flex items-center justify-center space-x-2 px-8 py-4 border-2 border-gray-600 text-gray-300 font-medium rounded-[16px] transition-all duration-300 hover:bg-gray-800"
              >
                <Mail className="w-5 h-5" />
                <span className="tracking-wide">GET IN TOUCH</span>
              </motion.a>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.6 }}
              className="grid grid-cols-1 sm:grid-cols-3 gap-6 md:gap-8 pt-12 max-w-3xl mx-auto"
            >
              {[
                { title: 'Years of Experience Across Projects', value: '2+' },
                { title: 'Projects Completed', value: '8+' },
                { title: 'in Product & Development', value: '0 -> 1' }
              ].map((item, index) => (
                <div
                  key={index}
                  className="text-center p-4 bg-neutral-900/60 backdrop-blur-sm rounded-2xl border border-neutral-700 shadow-lg"
                >
                  <div className="text-2xl md:text-3xl font-light text-white mb-2">{item.value}</div>
                  <div className="text-sm md:text-base text-gray-400 font-light uppercase tracking-wide">{item.title}</div>
                </div>
              ))}
            </motion.div>

            {/* Specializations */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.8 }}
              className="flex flex-wrap justify-center gap-3 pt-8"
            >
              {['Product ','Machine Learning', 'Full-Stack Development', 'Data Science', 'AI Research'].map((skill, index) => (
                <motion.span
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: 1.8 + index * 0.1 }}
                  className="px-4 py-2 bg-gradient-to-r from-neutral-800 to-neutral-900 text-gray-300 rounded-full text-sm font-medium border border-gray-600 shadow-md hover:shadow-lg hover:border-gray-500 transition-all duration-300"
                >
                  {skill}
                </motion.span>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator placeholder */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 2.0 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center space-y-2 text-gray-500"
        >
          {/* Optional scroll indicator */}
        </motion.div>
      </motion.div>
    </section>

  );
};


export default HeroSection;
