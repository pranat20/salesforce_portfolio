import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Briefcase, Code, Terminal, GraduationCap, Download, Mail, BookOpen, Layers, Github, Linkedin, ExternalLink,
  Cloud
} from 'lucide-react';
import { 
  SiSalesforce, SiGithub, 
  SiPostman, SiGit, SiPython, 
  SiPostgresql, SiNodedotjs, SiDjango 
} from 'react-icons/si';
import { VscJson, VscCode } from 'react-icons/vsc'; 
import { FaJava } from 'react-icons/fa';

// Image & Document Imports
import ProfileImage from './assets/certificates/Photo.jpeg';
import ResumePDF from './assets/certificates/Pranat_Pagar_Resume_Magic.pdf';

// Updated Certificate Imports
import CiscoModernAI from './assets/certificates/Cisco Modern AI.png';
import NetworkingBasics from './assets/certificates/Networking_Basics_certificate_ppagar602-gmail-com_8cf1b6d3-0f44-471f-b3b6-74c9043a6506.png';
import IBMChatbot from './assets/certificates/IBM chatbot certificate.png';
import EdunetAI from './assets/certificates/Edunet Certificate.png';
import IITBNEC from './assets/certificates/Certificate of Pranat Yogesh Pagar.png';
import GeminiCertified from './assets/certificates/Gemini Certified.png';
import ElementsOfAI from './assets/certificates/Elements of AI.png';
import DeloitteCert from './assets/certificates/Deloitte.jpg';
import DataScienceCert from './assets/certificates/Data science.png';
import EliteCert from './assets/certificates/Elite.png';
import IlluminateCert from './assets/certificates/Illuminate Certificate.jpg';
import TechethonCert from './assets/certificates/Techethon Certificate .jpg';
import UIUXCert from './assets/certificates/UI UX.png';
import Elevate from './assets/certificates/elevate.png';

const config = {
  colors: {
    primary: '#00A1E0',
    secondary: '#00E0B8',
    background: '#0a0f16',
    text: '#ffffff',
    card: 'rgba(255, 255, 255, 0.03)',
    detail: 'rgba(255, 255, 255, 0.08)',
    dark: '#111827',
  },
  info: {
    name: "Pranat Pagar",
    tagline: "Salesforce Developer | Full Stack",
    profilePic: ProfileImage,
    linkedin: "https://linkedin.com/in/pranat-pagar-457469291",
    github: "https://github.com/pranat20",
    email: "pranatpagar.dev@gmail.com",
    resumeLink: ResumePDF,
    about: [
      "Passionate Salesforce Developer specializing in building scalable cloud solutions and customizing Salesforce platforms to drive business transformation and operational excellence.",
      "Expert in Salesforce Lightning Web Components, Apex programming, and integration patterns. Proven ability to design and implement complex business logic, automate workflows, and optimize Salesforce performance.",
      "Strong foundation in software development with backend expertise, focusing on robust APIs, database design, and server-side architecture to support comprehensive business solutions.",
      "I thrive in dynamic Salesforce environments, focused on declarative development, programmatic solutions, and delivering exceptional user experiences on the Salesforce platform.",
    ],
  },
  skills: {
    SalesforceCore: [
      { name: 'LWC', icon: SiSalesforce, level: 85, color: '#00A1E0' },
      { name: 'Apex Programming', icon: VscJson, level: 90, color: '#00A1E0' },
      { name: 'SOQL & SOSL', icon: SiSalesforce, level: 95, color: '#00A1E0' },
      { name: 'Visualforce', icon: VscCode, level: 75, color: '#00A1E0' },
      { name: 'Flow Builder', icon: SiSalesforce, level: 80, color: '#00A1E0' },
      { name: 'Process Builder', icon: SiSalesforce, level: 85, color: '#00A1E0' }
    ],
    DevelopmentTools: [
      { name: 'VS Code', icon: VscCode, level: 90, color: '#007ACC' },
      { name: 'Github Tool', icon: SiGithub, level: 90, color: '#ffffff' },
      { name: 'Postman', icon: SiPostman, level: 85, color: '#FF6C37' },
      { name: 'Git', icon: SiGit, level: 90, color: '#F05032' }
    ],
    Backend: [
      { name: 'Python', icon: SiPython, level: 85, color: '#3776AB' },
      { name: 'Java', icon: FaJava, level: 80, color: '#007396' },
      { name: 'SQL', icon: SiPostgresql, level: 90, color: '#336791' },
      { name: 'Node.js', icon: SiNodedotjs, level: 75, color: '#339933' },
      { name: 'Django', icon: SiDjango, level: 70, color: '#092E20' }
    ]
  },
  experience: [
    {
      title: "Software Engineer Intern",
      company: "Elite Softwares, Pune",
      duration: "Dec 2025 - Mar 2026",
      icon: Briefcase,
      details: [
        "Engineered the authentication and session management backend using Django, resulting in a 30% reduction in reported login errors.",
        "Designed and implemented interactive JavaScript and CSS frontend features, which directly improved the application's overall user engagement by 20%.",
      ],
    },
    {
      title: "Tech Team Member",
      company: "E-Cell DYPCOEI",
      duration: "Jul 2025 – Present",
      icon: Terminal,
      details: [
        "Provide active web development and technical support for institutional events and initiatives, including the successful hosting of the Smart India Hackathon (SIH)."
      ],
    },
    {
      title: "AI/ML & Data Science Intern",
      company: "ELEVATE LABS",
      duration: "May 2025",
      icon: Layers,
      details: [
        "Contributed to the development of AI/ML pipelines by performing data collection, cleaning, and preparation for project-related datasets.",
        "Explored initial concepts in TensorFlow and Tableau to support data visualization efforts."
      ],
    },
  ],
  education: [
    {
      title: "Bachelor of Engineering - Computer Science",
      school: "Dr. D.Y. Patil College of Engineering & Innovation, SPPU",
      duration: "2023 – Expected 2027",
      icon: GraduationCap,
      details: [
        "Core coursework includes Data Structures & Algorithms, Operating Systems, Database Management Systems, and Object-Oriented Programming.",
        "Consistently applied theoretical knowledge through academic projects and hackathons."
      ],
    },
    {
      title: "Higher Secondary Certificate (HSC)",
      school: "B.P Patil Jr. College of Science, Nashik",
      duration: "2021-2023",
      icon: BookOpen,
      details: [
        "Achieved 86.00% aggregate."
      ],
    },
    {
      title: "Primary Certificate (CBSC)",
      school: "Kendriya Vidhyalay AFS, Ojhar, Nashik",
      duration: "2012-2021",
      icon: BookOpen,
      details: [
        "Achieved 77.00% aggregate."
      ],
    },
  ],
  projects: [
    {
      name: "EcoTwin AI",
      tech: "Python, React.js, Node.js, Scikit-learn",
      description: "AI-powered web application that predicts a user's carbon footprint based on their lifestyle and provides a sustainability score with personalized recommendations.",
      github: "https://github.com/pranat20/EcoTwin-AI",
      demo: "https://eco-twin-ai-lemon.vercel.app/",
      tags: ['AI', 'Machine Learning', 'Python', 'React']
    },
    {
      name: "Smart User Management System",
      tech: "Java, Spring Boot, H2 Database",
      description: "A comprehensive full-stack web application for managing users with a modern, responsive interface and robust REST API backend.",
      github: "https://github.com/pranat20/smart-user-management-system",
      demo: "#",
      tags: ['Java', 'Spring Boot', 'Full Stack']
    },
    {
      name: "EV Station Finder",
      tech: "Django, JavaScript, OpenChargeMap API",
      description: "Developed a live web application by integrating the OpenChargeMap API to dynamically display over 50 real-time EV charging stations across India.",
      github: "https://github.com/pranat20/Ev-station-finder",
      demo: "https://ev-station-finder-qb8b.onrender.com/",
      tags: ['Python', 'API Integration', 'Maps']
    },
    {
      name: "Edumate Exam Planner",
      tech: "React, Django, Tailwind CSS",
      description: "Developed a smart study planner that helps students manage subjects and track progress with auto-generated study schedules.",
      github: "https://github.com/pranat20/Edumate-exam-planner",
      demo: "https://edumate-exam-planner-frontend2.onrender.com/",
      tags: ['React', 'Django', 'Full Stack']
    },
    {
      name: "Student Result Management System",
      tech: "PHP, MySQL, Bootstrap 5",
      description: "Developed a responsive web-based SRMS using PHP and MySQL to help colleges efficiently manage departments and students.",
      github: "https://github.com/pranat20/student-result-management-system",
      demo: "https://pranatdeploy.ct.ws/",
      tags: ['PHP', 'MySQL', 'Bootstrap']
    },
    {
      name: "Latest News Portal",
      tech: "React.js, Node.js, MongoDB",
      description: "Built a full-stack web application that fetches live news articles using the NewsData.io API with clean, responsive UI.",
      github: "https://github.com/pranat20/News-Portal-using-NewsData.io-API",
      demo: "https://news-portal-frontend-chi.vercel.app/",
      tags: ['React', 'Node.js', 'MongoDB']
    },
  ],
  certificates: [
    { name: "Software Engineer Intern", issuer: "Elite Softwares", type: "Internship", date: "2026", image: EliteCert, desc: "Validation of software development contribution during internship." },
    { name: "AI/ML Intern", issuer: "Elevate Labs", type: "Internship", date: "2025", image: Elevate, desc: "Contributed to the development of AI/ML pipelines by performing data collection, cleaning, and preparation for project-related datasets." },
    { name: "Rank 87 - National Entrepreneurship Challenge", issuer: "E-Cell IIT Bombay", type: "Competition", date: "2025", image: IITBNEC, desc: "Secured Rank 87 in NEC 2025 Basic Track, a 6-month national competition." },
    { name: "Introduction to Modern AI", issuer: "Cisco Networking Academy", type: "Certification", date: "09 Feb 2026", image: CiscoModernAI, desc: "Successfully completed modern AI training through Cisco Networking Academy at DYPCOEI." },
    { name: "Networking Basics", issuer: "Cisco Networking Academy", type: "Certification", date: "15 Jan 2026", image: NetworkingBasics, desc: "Successfully completed foundation networking training via Cisco Networking Academy." },
    { name: "Green Skills and AI", issuer: "Edunet / AICTE / Shell", type: "Advanced Course", date: "Feb 2026", image: EdunetAI, desc: "Completed Skills4Future program at Dr. DY Patil College." },
    { name: "Build Your Own Chatbot", issuer: "IBM SkillsBuild", type: "Certification", date: "21 Jan 2026", image: IBMChatbot, desc: "Earned certification for chatbot development using IBM Developer Skills Network." },
    { name: "Gemini Certified Student", issuer: "Google for Education", type: "Qualification", date: "12 Jan 2026", image: GeminiCertified, desc: "Demonstrated knowledge and basic competencies in Google AI technologies." },
    { name: "Elements of AI", issuer: "University of Helsinki", type: "Academic", date: "14 Jan 2026", image: ElementsOfAI, desc: "Completed 2 ECTS credits online course on AI foundations." },
    { name: "Deloitte Tech Job Simulation", issuer: "Forage", type: "Simulation", date: "2025", image: DeloitteCert, desc: "Practical simulation of tech tasks at Deloitte Australia." },
    { name: "Python for Data Science", issuer: "IBM / Infosys", type: "Certification", date: "2025", image: DataScienceCert, desc: "Validated proficiency in data science libraries and Python programming." },
    { name: "UI/UX Design Fundamentals", issuer: "Codec Technologies", type: "Course", date: "2025", image: UIUXCert, desc: "Mastered core UI/UX principles and design workflow." },
    { name: "Techethon 3.0", issuer: "D.Y. Patil College", type: "Hackathon", date: "2025", image: TechethonCert, desc: "Demonstrated innovation in technical prototype development." },
    { name: "Illuminate 2025", issuer: "E-Cell IIT Bombay", type: "Award", date: "2025", image: IlluminateCert, desc: "Recognized for leadership and entrepreneurial vision." },
  ],
};

const ScrollProgress = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      setScrollProgress((scrollTop / docHeight) * 100);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  return (
    <div className="fixed top-0 left-0 w-full h-1 bg-gray-800 z-[60]">
      <div className="h-full bg-gradient-to-r from-[#00A1E0] to-[#00E0B8] transition-all duration-300" style={{ width: `${scrollProgress}%` }} />
    </div>
  );
};

const useSmoothScroll = () => {
  useEffect(() => {
    const handleClick = (e) => {
      const target = e.target.closest('a');
      if (target && target.getAttribute('href')?.startsWith('#')) {
        const targetId = target.getAttribute('href');
        if (targetId === '#') return;
        e.preventDefault();
        const el = document.querySelector(targetId);
        if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    };
    document.addEventListener('click', handleClick);
    return () => document.removeEventListener('click', handleClick);
  }, []);
};

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const isDesktop = typeof window !== 'undefined' && window.matchMedia("(min-width: 768px)").matches;

  useEffect(() => {
    if (!isDesktop) return;
    const handleMouseMove = (e) => setPosition({ x: e.clientX, y: e.clientY });
    const handleEnter = () => setIsHovering(true);
    const handleLeave = () => setIsHovering(false);

    window.addEventListener('mousemove', handleMouseMove);
    const els = document.querySelectorAll('a, button, input, textarea');
    els.forEach(el => {
      el.addEventListener('mouseenter', handleEnter);
      el.addEventListener('mouseleave', handleLeave);
    });
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      els.forEach(el => {
        el.removeEventListener('mouseenter', handleEnter);
        el.removeEventListener('mouseleave', handleLeave);
      });
    };
  }, [isDesktop]);

  if (!isDesktop) return null;
  return (
    <div className="fixed pointer-events-none z-[100] transition-transform duration-100" style={{ left: `${position.x}px`, top: `${position.y}px`, transform: `translate(-50%, -50%) scale(${isHovering ? 1.5 : 1})` }}>
      <Cloud className="w-6 h-6 text-[#00A1E0] opacity-80" />
    </div>
  );
};

const CanvasBackground = () => (
  <div className="fixed top-0 left-0 w-full h-full z-0">
    <div className="absolute inset-0 bg-gradient-to-br from-blue-900/10 via-transparent to-green-900/10"></div>
    <div className="absolute inset-0 bg-blue-500/3 rounded-full blur-3xl"></div>
    <div className="absolute top-0 left-0 w-1/2 h-full bg-gradient-to-r from-green-500/4 to-transparent"></div>
    <div className="absolute top-0 right-0 w-3/4 h-1/2 bg-blue-500/5 rounded-full blur-3xl"></div>
    <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-cyan-500/4 to-transparent"></div>
    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-green-500/3 rounded-full blur-3xl"></div>
    <div className="absolute top-0 right-0 w-2/3 h-2/3 bg-blue-500/2 rounded-full blur-3xl"></div>
    <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-green-500/2 rounded-full blur-3xl"></div>
  </div>
);

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const links = [
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Experience", href: "#experience" },
    { name: "Education", href: "#education" },
    { name: "Certificates", href: "#certificates" },
    { name: "Contact", href: "#contact" },
  ];
  return (
    <>
      <nav className="fixed w-full z-50 glass top-0 py-4 px-6 md:px-12 flex justify-between items-center">
        <a href="#hero" className="font-heading font-bold text-xl text-white flex items-center gap-2 group">
          <span className="transition-all duration-300 group-hover:text-[#00A1E0] group-hover:scale-105">
            PRANATPAGAR.
            <span className="text-[#00A1E0] transition-colors duration-300 group-hover:text-white">DEV</span>
          </span>
        </a>
        <div className="hidden md:flex items-center gap-8 text-lg font-medium text-gray-300">
          {links.map(link => (
            <a key={link.name} href={link.href} className="hover:text-[#00A1E0] transition-all duration-300 hover:scale-110 transform">
              {link.name}
            </a>
          ))}
          <a href="#contact" className="px-6 py-3 rounded-full border border-sf-blue/50 text-sf-blue hover:bg-sf-blue hover:text-white transition-all duration-300 font-semibold transform hover:scale-110 hover:shadow-[0_0_20px_rgba(0,161,224,0.6)] hover:rotate-3 group relative overflow-hidden">
            <span className="relative z-10">Let's Talk</span>
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
          </a>
        </div>
        <button className="md:hidden text-white" onClick={() => setIsOpen(!isOpen)}><MenuIcon /></button>
      </nav>
      <AnimatePresence>
        {isOpen && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 bg-[#0a0f16] z-40 flex flex-col items-center justify-center gap-8 text-xl">
            {links.map(link => <a key={link.name} href={link.href} className="text-gray-300 text-lg hover:text-[#00A1E0] transition-all duration-300 hover:scale-110 transform" onClick={() => setIsOpen(false)}>{link.name}</a>)}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

const MenuIcon = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" /></svg>
);

const Hero = () => (
  <section id="hero" className="min-h-screen flex items-center justify-center pt-20 px-4 relative overflow-hidden">
    <div className="max-w-5xl mx-auto text-center z-10">
      <motion.div initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} className="inline-flex items-center gap-3 mb-6 px-6 py-3 rounded-full border border-[#00A1E0]/50 bg-[#00A1E0]/20 text-[#00A1E0] font-semibold tracking-wide shadow-[0_0_25px_rgba(0,161,224,0.5)]">
        <div className="relative flex h-4 w-4">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00A1E0] opacity-75"></span>
          <span className="relative inline-flex rounded-full h-4 w-4 bg-[#00A1E0]"></span>
        </div>
        <span className="font-heading">Available for Opportunities</span>
      </motion.div>
      <h1 className="text-4xl md:text-7xl lg:text-8xl font-heading font-extrabold leading-tight mb-6 tracking-tight">
        Building Scalable <br/> Solutions with <span className="text-gradient-blue">Salesforce</span>
      </h1>
      <p className="text-base md:text-2xl text-gray-400 mb-10 max-w-3xl mx-auto font-light leading-relaxed">
        Hi, I'm <strong className="text-white font-medium">Pranat Pagar</strong>. An aspiring Salesforce Developer specializing in Apex, LWC, SOQL, and robust CRM architecture.
      </p>
      <div className="flex flex-col sm:flex-row justify-center gap-4 px-4 sm:px-0">
        <a href="#projects" className="w-full sm:w-auto px-8 py-4 rounded-xl bg-sf-blue text-white font-medium hover:bg-blue-500 transition-all duration-300 shadow-[0_0_20px_rgba(0,161,224,0.4)] hover:shadow-[0_0_30px_rgba(0,161,224,0.6)] flex items-center justify-center gap-2 text-lg transform hover:scale-105">
          View My Work <ExternalLink className="w-5 h-5" />
        </a>
        <a href="#contact" className="w-full sm:w-auto px-8 py-4 rounded-xl border border-sf-blue/50 text-sf-blue hover:bg-sf-blue hover:text-white transition-all duration-300 flex items-center justify-center text-lg font-semibold transform hover:scale-110 hover:shadow-[0_0_25px_rgba(0,161,224,0.6)] hover:rotate-2 group relative overflow-hidden">
          <span className="relative z-10">Contact Me</span>
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
        </a>
      </div>
    </div>
  </section>
);

const About = () => (
  <section id="about" className="py-24 px-4 relative overflow-hidden">
    <div className="max-w-6xl mx-auto relative z-10">
      <div className="max-w-7xl mx-auto text-center mb-16">
        <h2 className="text-[#00A1E0] font-bold uppercase mb-2">The Journey</h2>
        <h3 className="text-3xl md:text-6xl font-bold">About <span className="text-gradient">Me</span></h3>
      </div>
      <div className="glass-card p-6 md:p-8 rounded-3xl border border-white/10">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          <div className="flex flex-col items-center space-y-4">
            <div className="relative group">
              <div className="relative w-48 h-48 md:w-56 md:h-56 rounded-full bg-gradient-to-br from-[#00A1E0] to-[#00E0B8] p-1 transform group-hover:scale-105 transition-transform duration-300 shadow-lg shadow-blue-500/20">
                <img src={config.info.profilePic} alt={config.info.name} className="w-full h-full rounded-full object-cover" />
              </div>
            </div>
            <div className="flex gap-3">
              <a href={config.info.linkedin} target="_blank" rel="noopener noreferrer" className="glass-card p-3 rounded-full hover:bg-[#00A1E0] hover:text-white transition-all duration-300 transform hover:scale-110 group">
                <Linkedin size={18} className="group-hover:scale-110 transition-transform" />
              </a>
              <a href={config.info.github} target="_blank" rel="noopener noreferrer" className="glass-card p-3 rounded-full hover:bg-[#00A1E0] hover:text-white transition-all duration-300 transform hover:scale-110 group">
                <Github size={18} className="group-hover:scale-110 transition-transform" />
              </a>
              <a 
                href={`https://mail.google.com/mail/?view=cm&fs=1&to=${config.info.email}&su=Hello%20from%20Portfolio%20Website&body=Hi%20Pranat%2C%20I%20found%20your%20portfolio%20and%20wanted%20to%20connect...`} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="glass-card p-3 rounded-full hover:bg-[#00A1E0] hover:text-white transition-all duration-300 transform hover:scale-110 group"
              >
                <Mail size={18} className="group-hover:scale-110 transition-transform" />
              </a>
            </div>
          </div>
          <div className="space-y-6">
            <h4 className="text-[#00A1E0] font-semibold text-xl flex items-center gap-2 justify-center md:justify-start">
              <Briefcase className="w-5 h-5" /> Salesforce Developer
            </h4>
            <div className="space-y-4 text-gray-300 text-sm md:text-lg leading-relaxed text-center md:text-left">
              {config.info.about.map((p, i) => (
                <p key={i} className="flex items-start gap-2">
                  <span className="text-[#00A1E0] mt-1 flex-shrink-0 hidden md:inline">▸</span> <span>{p}</span>
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const Skills = () => (
  <motion.section id="skills" className="py-24 px-4" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.5 }} viewport={{ once: true }}>
    <div className="max-w-7xl mx-auto text-center mb-16">
      <h2 className="text-[#00A1E0] font-bold uppercase mb-2">Technical Arsenal</h2>
      <h3 className="text-3xl md:text-6xl font-bold">Salesforce & <span className="text-gradient">Beyond</span></h3>
    </div>
    <div className="max-w-7xl mx-auto">
      {Object.entries(config.skills).map(([cat, list]) => (
        <div key={cat} className="mb-12">
          <h4 className="text-lg md:text-xl font-semibold text-white mb-6 border-b border-white/10 pb-2 uppercase tracking-wider">{cat.replace(/([A-Z])/g, ' $1')}</h4>
          <div className="flex flex-wrap gap-2 md:gap-3">
            {list.map(s => {
              const IconComponent = s.icon;
              return (
                <div key={s.name} className="glass-card rounded-full px-4 md:px-5 py-2 flex items-center gap-3 cursor-pointer transition-all duration-200 hover:scale-110 hover:shadow-[0_0_15px_rgba(0,161,224,0.4)] relative z-10">
                  <IconComponent size={18} style={{ color: s.color }} />
                  <span className="text-white text-xs md:text-base font-medium">{s.name}</span>
                </div>
              );
            })}
          </div>
        </div>
      ))}
    </div>
  </motion.section>
);

const Projects = () => (
  <motion.section id="projects" className="py-24 px-4" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.5 }} viewport={{ once: true }}>
    <div className="text-center mb-16">
        <h2 className="text-[#00A1E0] font-bold uppercase mb-2">Featured Work</h2>
        <h3 className="text-3xl md:text-4xl font-bold">Project Showcase</h3>
      </div>
    <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
      {config.projects.map((p, i) => (
        <div key={i} className="glass-card rounded-2xl overflow-hidden flex flex-col hover:transform hover:scale-105 transition-all duration-300 hover:shadow-[0_0_20px_rgba(0,161,224,0.3)] cursor-pointer group relative">
          <div className="h-40 md:h-48 bg-gray-900 flex items-center justify-center relative">
             <Code size={64} className="text-[#00A1E0]/20" />
             <div className="absolute bottom-3 left-3 flex flex-wrap gap-2">
                {p.tags.map(t => <span key={t} className="text-[10px] bg-black/50 px-2 py-1 rounded text-[#00E0B8] border border-[#00E0B8]/30">{t}</span>)}
             </div>
          </div>
          <div className="p-6 flex-1 flex flex-col">
            <h4 className="text-xl font-bold mb-2">{p.name}</h4>
            <p className="text-gray-400 mb-4 flex-1 text-sm md:text-base">{p.description}</p>
            <div className="flex gap-4 justify-between">
              <a href={p.github} target="_blank" className="text-[#00A1E0] hover:text-white hover:bg-[#00A1E0] transition-all duration-300 flex items-center gap-2 text-sm md:text-base px-3 py-1 rounded-lg relative z-20">Source <Github size={16}/></a>
              <a href={p.demo} target="_blank" className="text-[#00A1E0] hover:text-white hover:bg-[#00A1E0] transition-all duration-300 flex items-center gap-2 text-sm md:text-base px-3 py-1 rounded-lg relative z-20">Live <ExternalLink size={16}/></a>
            </div>
          </div>
        </div>
      ))}
    </div>
  </motion.section>
);

const TimelineItem = ({ data }) => (
  <div className="flex gap-4 md:gap-6 mb-12 relative">
    <div className="w-40 hidden md:block text-[#00A1E0] font-bold text-base whitespace-nowrap">{data.duration}</div>
    <div className="relative flex flex-col items-center">
      <div className="w-4 h-4 rounded-full bg-[#00A1E0] z-10 shadow-[0_0_10px_#00A1E0]"></div>
      <div className="w-0.5 h-full bg-gray-800 absolute top-4"></div>
    </div>
    <div className="glass-card p-5 md:p-6 rounded-xl flex-1">
      <div className="md:hidden text-[#00A1E0] font-bold text-xs mb-1">{data.duration}</div>
      <h4 className="text-lg md:text-xl font-bold leading-tight">{data.title}</h4>
      <p className="text-[#00A1E0] text-sm mb-4">{data.company || data.school}</p>
      <ul className="space-y-2 text-sm md:text-base text-gray-400">
        {data.details.map((d, i) => <li key={i} className="flex gap-2"><span>▸</span>{d}</li>)}
      </ul>
    </div>
  </div>
);

const Experience = () => (
  <motion.section id="experience" className="py-24 px-4 max-w-5xl mx-auto" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.5 }} viewport={{ once: true }}>
    <div className="text-center mb-16">
        <h2 className="text-[#00A1E0] font-bold uppercase mb-2">Professional Journey</h2>
        <h3 className="text-3xl md:text-4xl font-bold">Work Experience</h3>
      </div>
    {config.experience.map((e, i) => <TimelineItem key={i} data={e} />)}
  </motion.section>
);

const Education = () => (
  <motion.section id="education" className="py-24 px-4 max-w-5xl mx-auto" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.5 }} viewport={{ once: true }}>
    <div className="text-center mb-16">
        <h2 className="text-[#00A1E0] font-bold uppercase mb-2">Academic Background</h2>
        <h3 className="text-3xl md:text-4xl font-bold">Education Journey</h3>
      </div>
    {config.education.map((e, i) => <TimelineItem key={i} data={e} />)}
  </motion.section>
);

const Certificates = () => {
  const [selected, setSelected] = useState(null);
  return (
    <motion.section id="certificates" className="py-24 px-4 max-w-7xl mx-auto" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.5 }} viewport={{ once: true }}>
      <div className="text-center mb-16">
        <h2 className="text-[#00A1E0] font-bold uppercase mb-2">Credentials</h2>
        <h3 className="text-3xl md:text-4xl font-bold">Certifications & Awards</h3>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {config.certificates.map((cert, i) => (
          <div key={i} className="glass-card p-6 rounded-xl hover:border-[#00A1E0]/50 transition-all cursor-pointer group hover:transform hover:scale-105 hover:shadow-[0_0_20px_rgba(0,161,224,0.3)] h-full flex flex-col" onClick={() => setSelected(cert)}>
            <div className="flex justify-between items-start mb-4">
               <BookOpen size={24} className="text-[#00A1E0]" />
               <ExternalLink size={16} className="text-gray-600 group-hover:text-[#00A1E0]" />
            </div>
            <div className="flex-1 flex flex-col">
              <h4 className="font-bold text-base md:text-lg mb-1">{cert.name}</h4>
              <p className="text-gray-400 mb-2 text-sm md:text-base">{cert.issuer}</p>
              <p className="text-xs md:text-sm text-[#00A1E0] mb-auto">{cert.type} • {cert.date}</p>
            </div>
            <button className="w-full py-2 bg-[#00A1E0]/20 text-[#00A1E0] rounded-lg hover:bg-[#00A1E0] hover:text-white transition-all duration-300 text-sm md:text-base relative z-20 mt-4">View Certificate</button>
          </div>
        ))}
      </div>
      <AnimatePresence>
        {selected && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setSelected(null)} className="fixed inset-0 bg-black/80 backdrop-blur-sm z-[70] flex items-center justify-center p-4">
            <motion.div initial={{ scale: 0.9, y: 20 }} animate={{ scale: 1, y: 0 }} exit={{ scale: 0.9, y: 20 }} onClick={e => e.stopPropagation()} className="glass p-6 md:p-8 max-w-4xl w-full rounded-2xl relative overflow-y-auto max-h-[90vh]">
              <button onClick={() => setSelected(null)} className="absolute top-4 right-4 text-gray-400 hover:text-white">✕</button>
              <h3 className="text-xl md:text-2xl font-bold mb-2">{selected.name}</h3>
              <p className="text-[#00A1E0] text-sm md:text-base mb-4">{selected.issuer} • {selected.date}</p>
              <div className="bg-gray-800 rounded-lg overflow-hidden border border-sf-blue/20 h-64 md:h-96 flex items-center justify-center">
                <img src={selected.image} alt={selected.name} className="w-full h-full object-contain" />
              </div>
              <div className="mt-6 space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-black/30 rounded-lg p-3 md:p-4 text-center">
                    <p className="text-xs text-gray-400 mb-1">Status</p>
                    <p className="text-xs md:text-sm text-green-400 font-medium">✓ Verified</p>
                  </div>
                  <div className="bg-black/30 rounded-lg p-3 md:p-4 text-center">
                    <p className="text-xs text-gray-400 mb-1">Type</p>
                    <p className="text-xs md:text-sm text-white font-medium">{selected.type}</p>
                  </div>
                </div>
                <div className="bg-black/30 rounded-lg p-4">
                  <p className="text-xs text-gray-400 mb-2">Description</p>
                  <p className="text-xs md:text-sm text-gray-300">{selected.desc || `Validated proficiency in ${selected.name.toLowerCase()}.`}</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.section>
  );
};

const Contact = () => (
  <motion.section id="contact" className="py-24 px-4" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.5 }} viewport={{ once: true }}>
    <div className="max-w-4xl mx-auto glass p-8 md:p-12 rounded-3xl text-center transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,161,224,0.3)]">
      <div className="mb-12">
        <h2 className="text-[#00A1E0] font-bold uppercase mb-2">Get In Touch</h2>
        <h3 className="text-3xl md:text-4xl font-bold mb-4">Let's Connect <span className="text-gradient">Through</span></h3>
      </div>
      <p className="text-gray-400 mb-12 text-sm md:text-base">Currently looking for new opportunities in the Salesforce ecosystem.</p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
        <a 
          href={`mailto:${config.info.email}`}
          className="group flex items-center gap-4 px-4 md:px-6 py-4 rounded-xl bg-white/10 border border-white/20 hover:bg-white/20 hover:border-[#00A1E0] transition-all duration-300 shadow-md"
        >
          <div className="flex-shrink-0 w-10 h-10 md:w-12 md:h-12 rounded-full bg-[#00A1E0] flex items-center justify-center group-hover:scale-110 transition-transform">
            <Mail size={20} className="text-white" />
          </div>
          <div className="text-left overflow-hidden">
            <p className="text-[10px] text-gray-400 uppercase tracking-tighter">Email</p>
            <p className="text-white text-xs md:text-sm font-medium truncate">{config.info.email}</p>
          </div>
        </a>
        <a href="https://wa.me/918669341360" target="_blank" className="group flex items-center gap-4 px-4 md:px-6 py-4 rounded-xl bg-white/10 border border-white/20 hover:bg-white/20 hover:border-green-500 transition-all duration-300 shadow-md">
          <div className="flex-shrink-0 w-10 h-10 md:w-12 md:h-12 rounded-full bg-[#25D366] flex items-center justify-center group-hover:scale-110 transition-transform">
            <svg className="w-5 h-5 md:w-6 md:h-6 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.72.937 3.659 1.432 5.628 1.433h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/></svg>
          </div>
          <div className="text-left">
            <p className="text-[10px] text-gray-400 uppercase tracking-tighter">WhatsApp</p>
            <p className="text-white text-xs md:text-sm font-medium">+91 86693 41360</p>
          </div>
        </a>
        <a href={config.info.linkedin} target="_blank" className="group flex items-center gap-4 px-4 md:px-6 py-4 rounded-xl bg-white/10 border border-white/20 hover:bg-white/20 hover:border-blue-600 transition-all duration-300 shadow-md">
          <div className="flex-shrink-0 w-10 h-10 md:w-12 md:h-12 rounded-full bg-blue-600 flex items-center justify-center group-hover:scale-110 transition-transform">
            <Linkedin size={20} className="text-white" />
          </div>
          <div className="text-left">
            <p className="text-[10px] text-gray-400 uppercase tracking-tighter">LinkedIn</p>
            <p className="text-white text-xs md:text-sm font-medium">Connect</p>
          </div>
        </a>
      </div>
    </div>
  </motion.section>
);

const Footer = () => (
  <footer className="relative pt-10 pb-16 border-t border-white/10 bg-[#020617] text-gray-400">
  <div className="max-w-7xl mx-auto px-6">
    <div className="flex flex-col md:flex-row justify-between items-center gap-8">
      <div className="flex flex-col items-center md:items-start gap-3">
        <div className="flex items-center gap-2">
          <img 
            src="https://upload.wikimedia.org/wikipedia/commons/f/f9/Salesforce.com_logo.svg" 
            alt="Salesforce" 
            className="h-8 w-auto opacity-90"
          />
          <span className="text-white font-semibold text-xl tracking-tight">
            {config.info.name}
          </span>
        </div>
        <p className="text-sm text-gray-500 max-w-xs text-center md:text-left">
          Crafting scalable cloud solutions with Apex, LWC, and the MERN stack.
        </p>
      </div>

      <div className="flex flex-col items-center md:items-end gap-4">
        <div className="flex gap-8 text-sm font-medium">
          <a href={config.info.linkedin} target="_blank" className="hover:text-[#00A1E0] transition-all duration-300 hover:scale-110 transform inline-block">LinkedIn</a>
          <a href={config.info.github} target="_blank" className="hover:text-[#00A1E0] transition-all duration-300 hover:scale-110 transform inline-block">GitHub</a>
        </div>
        <p className="text-xs tracking-widest uppercase text-gray-600">
          © 2026 • Designed & Developed by {config.info.name}
        </p>
      </div>
    </div>
  </div>
</footer>
);

const App = () => {
  useSmoothScroll();
  return (
    <div className="bg-[#0a0f16] text-white min-h-screen font-sans selection:bg-[#00A1E0] relative overflow-x-hidden">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;600;800&display=swap');
        body { font-family: 'Inter', sans-serif; overflow-x: hidden; }
        .glass { background: rgba(16, 23, 35, 0.7); backdrop-filter: blur(12px); border: 1px solid rgba(255,255,255,0.08); }
        .glass-card { background: rgba(255,255,255,0.02); border: 1px solid rgba(255,255,255,0.05); transition: all 0.3s; }
        .glass-card:hover { transform: translateY(-4px); background: rgba(255,255,255,0.04); }
        .text-gradient { background: linear-gradient(to right, #fff, #00A1E0); -webkit-background-clip: text; -webkit-text-fill-color: transparent; }
        .text-gradient-blue { background: linear-gradient(to right, #00A1E0, #00E0B8); -webkit-background-clip: text; -webkit-text-fill-color: transparent; }
        @keyframes shadow-blink {
          0%, 100% { box-shadow: 0 0 10px rgba(21, 137, 238, 0.4); }
          50% { box-shadow: 0 0 30px rgba(21, 137, 238, 0.9); }
        }
        .animate-shadow-blink { animation: shadow-blink 2s ease-in-out infinite; }
        ::-webkit-scrollbar { width: 6px; }
        ::-webkit-scrollbar-track { background: #0a0f16; }
        ::-webkit-scrollbar-thumb { background: #00A1E0; border-radius: 10px; }
        
        /* Mobile specific fixes to prevent bulky/messy UI without affecting desktop sizing */
        @media (max-width: 768px) {
          .glass-card { padding: 1.25rem; }
          section { padding-top: 4rem; padding-bottom: 4rem; }
        }
      `}</style>
      <ScrollProgress />
      <CustomCursor />
      <CanvasBackground />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Education />
        <Certificates />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default App;