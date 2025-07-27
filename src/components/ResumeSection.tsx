import React from "react";
import { motion } from "framer-motion";
import {

  Calendar,
  MapPin,

  Code,
  Database,
  Cloud,
  Globe
} from "lucide-react";

const ResumeSection: React.FC = () => {
  const experiences = [
    {
      title: "Software Developer Intern",
      company: "Fintech Global Center",
      period: "May 2025 – July 2025",
      location: "Remote",
      description:
        "Maintained React components for Code Sherlock’s platform and integrated an MCP server to auto-assign Asana tasks on , PR issues, streamlining developer workflow.",
      achievements: [
        "Maintained React components for Code Sherlock’s platform and integrated an MCP server to auto-assign Asana tasks on , PR issues, streamlining developer workflow.",
        "Engineered a sophisticated Retrieval-Augmented Generation (RAG) pipeline using Tree-sitter AST, integrating a LiteLLM-based strategy to call Claude first and fallback to GPT-4o-mini, enabling efficient semantic code search across large PRs",
        "Enhanced code analysis in 4+ languages by analyzing deeper AST nodes, increasing context coverage by 10%"
      ]
    },
    {
      title: "Machine Learning Intern",
      company: "Chaitanya AI",
      period: "May 2024 – July 2024",
      location: "Remote",
      description:
        "Developed a pretrained pipeline using Generative Adversarial Networks (GANs) to generate synthetic multitemporal hyperspectral data, simulating missing or future timestamps with high spectral and temporal fidelity.",
      achievements: [
        "Developed a pretrained pipeline using Generative Adversarial Networks (GANs) to generate synthetic multitemporal hyperspectral data, simulating missing or future timestamps with high spectral and temporal fidelity.",
        "Enabled robust analysis for change detection, crop monitoring, and disaster assessment by reducing dependency on costly sensors and mitigating issues like cloud-covered imagery."
      ]
    },
    {
      title: "Teaching Assistant",
      company: "IIIT Vadodara",
      period: "Aug 2024 – May 2025",
      location: "Gandhinagar, Gujarat, India",
      description:
        "Conducted labs for 200+ students on core Data Structures and Algorithms topics like graphs, trees, and binary search. Assisted Professor Ravi Nahta across 2 consecutive semesters.",
      achievements: [
        "Conducted labs for 200+ students on core Data Structures and Algorithms topics like graphs, trees, and binary search.",
        "Assisted Professor Ravi Nahta across 2 consecutive semesters."
      ]
    }
  ];

  const skills = {
    languages: ["C", "C++", "Java", "JavaScript", "Python"],
    frameworks: ["React.js", "Node.js", "Spring Boot", "Tailwind CSS"],
    cloudDatabases: ["MongoDB", "Azure", "MySQL", "PostgreSQL", "JDBC", "JPA"],
    otherTools: ["AWS", "Azure",  "Docker", "Jenkins", "GitHub Actions", "CI/CD"]
  };

  const skillCategories = [
    { title: "Languages", items: skills.languages, icon: Code },
    { title: "Frameworks", items: skills.frameworks, icon: Globe },
    { title: "Cloud / Databases", items: skills.cloudDatabases, icon: Database },
    { title: "Other Tools", items: skills.otherTools, icon: Cloud }
  ];

  const projects = [
    {
      title: "Ride Sharing Platform",
      technologies: "MERN Stack, MapLibre, OpenRouteService, AI-driven Routing",
      description:
        "Built a secure ride-sharing app with role-based access for Travelers, Companions, and Admins using MERN stack, and JWT authentication.",
      achievements: [
        "Built a secure ride-sharing app with role-based access for Travelers, Companions, and Admins using MERN stack, and JWT authentication.",
        "Designed a custom geolocation-based algorithm using OpenRouteService to match rides via waypoints and directional geofencing for partial route-sharing.",
        "Integrated real-time ride tracking, SMS/WhatsApp updates via Twilio API, and route visualization using MapLibre GL for seamless user experience."
      ]
    },
    {
      title: "PoemMe",
      technologies: "NLP, LSTM, RNNs, Keras, TensorFlow, FastAPI, React",
      description:
        "Developed an AI-powered poetry generator using LSTM networks with 200 memory cells trained on n-gram data to mimic Shakespearean style.",
      achievements: [
        "Developed an AI-powered poetry generator using LSTM networks with 200 memory cells trained on n-gram data to mimic Shakespearean style.",
        "Achieved over 80% training accuracy using a vocabulary of 3800+ words and implemented temperature-based sampling for creative output.",
        "Built a full-stack application using FastAPI for the backend and React for the frontend, enabling user interaction for poem generation."
      ]
    }
  ];

  return (
    <section
      id="resume"
      className="relative min-h-screen py-12 sm:py-16 md:py-20 bg-gradient-to-br from-black via-[#111111] to-[#1a1a1a] overflow-hidden"
    >
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute w-72 h-72 bg-neutral-800 rounded-full mix-blend-screen filter blur-2xl opacity-10 animate-blob top-0 left-0" />
        <div className="absolute w-72 h-72 bg-neutral-700 rounded-full mix-blend-screen filter blur-2xl opacity-10 animate-blob animation-delay-2000 top-10 left-1/2" />
        <div className="absolute w-72 h-72 bg-neutral-600 rounded-full mix-blend-screen filter blur-2xl opacity-10 animate-blob animation-delay-4000 top-20 left-1/3" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
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
          <h3 className="text-2xl sm:text-3xl font-medium text-white mb-8 text-center">Experience</h3>
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

        {/* Technical Skills */}
        <motion.div className="mt-20">
          <h3 className="text-2xl sm:text-3xl font-medium text-white mb-8 text-center">Technical Skills</h3>
          <div className="grid grid-cols-1 lg:grid-cols-2 justify-center gap-6">
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
          <h3 className="text-2xl sm:text-3xl font-medium text-white mb-8 text-center">Personal Projects</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 justify-center gap-6">
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

        {/* Resume Download */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center mt-20"
        >
       
        </motion.div>
      </div>
    </section>
  );
};

export default ResumeSection;
