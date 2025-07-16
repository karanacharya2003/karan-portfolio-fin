import React from "react";
import { motion } from "framer-motion";
import {
  Download,
  Calendar,
  MapPin,
  Award,
  Code,
  Database,
  Cloud,
  Globe
} from "lucide-react";

const ResumeSection: React.FC = () => {
  const experiences = [
    {
      title: "Software Engineer Intern",
      company: "Code Sherlock",
      period: "Apr 2025 - Present",
      location: "Remote",
      description:
        "Developing and maintaining React components for Code Sherlock's code analysis platform, improving UI and logic while implementing sophisticated AI-powered code analysis systems.",
      achievements: [
        "Developed and maintained React components for code analysis platform",
        "Implemented sophisticated Retrieval-Augmented Generation (RAG) with AST (Tree sitter) for code analysis",
        "Engineered custom embeddings for code snippets, optimizing context retrieval for accurate code suggestions"
      ],
    },
    {
      title: "Machine Learning Engineer Intern",
      company: "Chaitanya AI",
      period: "May 2024 - July 2024",
      location: "Remote",
      description:
        "Engineered cutting-edge multimodal AI pipelines for automated design generation, integrating advanced language models with image processing capabilities.",
      achievements: [
        "Engineered multimodal pipeline transforming user inputs into professional-grade posters and banners",
        "Increased design output by 25% resulting in faster delivery to clients",
        "Integrated Mistral AI model for efficient text feature extraction from user prompts"
      ],
    },
    {
      title: "Teaching Assistant",
      company: "Indian Institute of Information Technology Vadodara",
      period: "Aug 2024 - Present",
      location: "Gandhinagar, Gujarat, India",
      description:
        "Supporting students in core computer science courses including data structures and programming fundamentals.",
      achievements: [
        "Course: Introduction to Data Structures Laboratory (CS162)",
        "Course: Computer Programming and Problem Solving (IT101)",
        "Mentoring students in programming concepts and problem-solving techniques"
      ],
    }
  ];

  const education = [
    {
      degree: "Bachelor of Technology in Computer Science Engineering",
      school: "Indian Institute of Information Technology Vadodara (IIITV)",
      period: "2022-2026",
      location: "Gandhinagar, Gujarat, India",
      cpi: "8.93/10 (up to 5th semester)",
    },
    {
      degree: "Class 12th CBSE Board",
      school: "Chinmaya Vidyalaya",
      period: "2020-2022",
      location: "India",
      cpi: "88.3%",
    },
    {
      degree: "Class 10th CBSE Board",
      school: "The Pentecostal Assembly School",
      period: "2008-2020",
      location: "India",
      cpi: "96.6%",
    }
  ];

  const skills = {
    domains: ["REACT", "Data Structures and Algorithms", "GAN", "NLP", "Agentic AI", "MCP"],
    languages: ["C/C++", "Java", "Python", "JavaScript"],
    frameworks: ["PyTorch", "Pandas", "NumPy", "Scikit-Learn", "Node.js", "Express", "React", "Spring Boot", "Spring"],
    databases: ["MongoDB", "MySQL", "JDBC", "JPA", "PostgreSQL"],
    devops: ["AWS", "Azure", "Docker", "Kubernetes", "Jenkins", "GitHub Actions", "CI/CD"],
    web: ["HTML", "CSS", "React", "Node.js", "Express", "REST APIs", "Mongoose"],
  };

  const projects = [
    {
      title: "Cloud Cost Tracker",
      technologies: "React, Node.js, MongoDB, AWS, Azure APIs",
      description: "Dashboard for tracking AWS and Azure cloud expenses with real-time cost visualizations.",
      achievements: [
        "Integrated AWS and Azure Cost APIs",
        "Built alert system for budget threshold warnings",
        "Reduced costs by 15% using optimized resource tracking"
      ]
    },
    {
      title: "POETICA",
      technologies: "NLP, LSTM Networks, Keras, TensorFlow",
      description: "LSTM-powered AI that generates Shakespearean poetry from user prompts.",
      achievements: [
        "Trained with 3800+ word vocabulary",
        "80% accuracy on n-gram data",
        "Character-level prediction for poetry generation"
      ]
    },
    {
      title: "E-commerce Application",
      technologies: "Django, SQL",
      description: "Robust e-commerce platform with admin and customer modules.",
      achievements: [
        "Secure login, product CRUD & checkout flow",
        "REST APIs tested with Postman",
        "Seamless frontend-backend integration"
      ]
    }
  ];

  const skillCategories = [
    { title: "Domains", items: skills.domains, icon: Code },
    { title: "Languages", items: skills.languages, icon: Code },
    { title: "Frameworks", items: skills.frameworks, icon: Globe },
    { title: "Databases", items: skills.databases, icon: Database },
    { title: "DevOps/Cloud", items: skills.devops, icon: Cloud },
    { title: "Web Technologies", items: skills.web, icon: Globe }
  ];



  return (
    <section
      id="resume"
      className="relative min-h-screen py-12 sm:py-16 md:py-20 bg-gradient-to-br from-black via-[#111111] to-[#1a1a1a] overflow-hidden"
    >
      {/* Animated Background Blobs */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute w-72 h-72 bg-neutral-800 rounded-full mix-blend-screen filter blur-2xl opacity-10 animate-blob top-0 left-0" />
        <div className="absolute w-72 h-72 bg-neutral-700 rounded-full mix-blend-screen filter blur-2xl opacity-10 animate-blob animation-delay-2000 top-10 left-1/2" />
        <div className="absolute w-72 h-72 bg-neutral-600 rounded-full mix-blend-screen filter blur-2xl opacity-10 animate-blob animation-delay-4000 top-20 left-1/3" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Section Title */}
        <motion.div className="text-center mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light text-white mb-4 leading-tight"
  
          >
           
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-300">
             Professional Summary
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-base sm:text-lg text-gray-400 max-w-2xl mx-auto font-light mt-6"
          >
            A comprehensive overview of my professional journey, academic achievements, and technical expertise.
          </motion.p>
        </motion.div>

        {/* Work Experience */}
        <motion.div>
          <h3 className="text-2xl sm:text-3xl font-medium text-white mb-8 text-center">Work Experience</h3>
          <div className="space-y-6">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="p-6 bg-neutral-900 border border-gray-700 rounded-2xl hover:border-white/30 transition-all duration-300 shadow-sm hover:shadow-lg"
              >
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-3">
                  <div>
                    <h4 className="text-lg sm:text-xl font-semibold text-white mb-1">{exp.title}</h4>
                    <p className="text-gray-300 font-medium text-sm sm:text-base mb-2">{exp.company}</p>
                  </div>
                  <div className="flex flex-col sm:text-right text-gray-400 text-sm">
                    <div className="flex items-center sm:justify-end mb-1">
                      <Calendar className="w-4 h-4 mr-2" />
                      <span>{exp.period}</span>
                    </div>
                    <div className="flex items-center sm:justify-end">
                      <MapPin className="w-4 h-4 mr-2" />
                      <span>{exp.location}</span>
                    </div>
                  </div>
                </div>
                <p className="text-gray-300 font-light text-sm sm:text-base mb-4">{exp.description}</p>
                <div className="space-y-2">
                  <p className="text-sm font-medium text-white mb-2">Key Achievements:</p>
                  {exp.achievements.map((point, i) => (
                    <div key={i} className="flex items-start">
                      <div className="w-1.5 h-1.5 bg-white rounded-full mt-2 mr-3 flex-shrink-0" />
                      <p className="text-gray-400 text-sm font-light">{point}</p>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Education */}
        <motion.div className="mt-20">
          <h3 className="text-2xl sm:text-3xl font-medium text-white mb-8 text-center">Education</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {education.map((edu, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="p-6 bg-neutral-900 border border-gray-700 rounded-2xl hover:border-white/30 shadow-sm hover:shadow-lg"
              >
                <h4 className="text-lg font-semibold text-white mb-2">{edu.degree}</h4>
                <p className="text-gray-300 text-sm mb-3">{edu.school}</p>
                <div className="text-gray-400 text-sm mb-3">
                  <div className="flex items-center mb-1">
                    <Calendar className="w-4 h-4 mr-2" />
                    <span>{edu.period}</span>
                  </div>
                  <div className="flex items-center">
                    <MapPin className="w-4 h-4 mr-2" />
                    <span>{edu.location}</span>
                  </div>
                </div>
                <p className="text-sm font-medium text-white">
                  Score: <span className="text-gray-200">{edu.cpi}</span>
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Skills */}
        <motion.div className="mt-20">
          <h3 className="text-2xl sm:text-3xl font-medium text-white mb-8 text-center">Technical Skills</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillCategories.map((cat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="p-6 bg-neutral-900 border border-gray-700 rounded-2xl hover:border-white/30"
              >
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center mr-3">
                    <cat.icon className="w-5 h-5 text-white" />
                  </div>
                  <h4 className="text-lg font-semibold text-white">{cat.title}</h4>
                </div>
                <div className="flex flex-wrap gap-2">
                  {cat.items.map((skill, idx) => (
                    <span key={idx} className="px-3 py-1 bg-white/10 text-white rounded-full text-sm">
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Projects */}
        <motion.div className="mt-20">
          <h3 className="text-2xl sm:text-3xl font-medium text-white mb-8 text-center">Featured Projects</h3>
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
            {projects.map((proj, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="p-6 bg-neutral-900 border border-gray-700 rounded-2xl hover:border-white/30"
              >
                <h4 className="text-lg font-semibold text-white mb-2">{proj.title}</h4>
                <p className="text-sm text-gray-300 mb-2">{proj.technologies}</p>
                <p className="text-sm text-gray-400 mb-4 font-light">{proj.description}</p>
                <div className="space-y-2">
                  {proj.achievements.map((point, i) => (
                    <div key={i} className="flex items-start">
                      <div className="w-1.5 h-1.5 bg-white rounded-full mt-2 mr-3 flex-shrink-0" />
                      <p className="text-gray-400 text-sm font-light">{point}</p>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Download */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center mt-20"
        >
          <div className="bg-neutral-900 border border-white/20 rounded-3xl p-10 max-w-4xl mx-auto">
            <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Award className="w-8 h-8 text-white" />
            </div>

            <h3 className="text-2xl font-light text-white mb-4">
              Download My Full Resume
            </h3>
            <p className="text-gray-400 mb-8 font-light max-w-2xl mx-auto leading-relaxed text-sm sm:text-base">
              For a detailed overview of my skills, experience, and achievements, please download my complete resume.
            </p>

            <motion.a
              href="/resume.pdf"
              download="KaranAcharya_Resume.pdf"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center justify-center space-x-2 px-6 py-4 bg-white text-black font-medium rounded-full transition-all duration-300 hover:bg-gray-200 shadow-lg"
            >
              <Download className="w-5 h-5" />
              <span>DOWNLOAD RESUME</span>
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );


};

export default ResumeSection;
