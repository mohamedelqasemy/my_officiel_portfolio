import React from 'react';
import { Code2, Database, Layout, Server } from 'lucide-react';
import { 
  FaReact, FaAngular, FaHtml5, FaCss3Alt, FaJs, FaJava, FaPython, FaCuttlefish, FaCogs, FaDatabase
} from 'react-icons/fa';
import { 
  SiMui, SiTypescript, SiSpringboot, SiDotnet, SiMongodb, SiMysql, SiCplusplus, SiSharp, SiLaravel, SiOracle
} from 'react-icons/si';

const techIcons: Record<string, JSX.Element> = {
  React: <FaReact className="text-blue-400" />,
  Angular: <FaAngular className="text-red-500" />,
  "HTML/CSS/JS": <FaHtml5 className="text-orange-500" />,
  JavaScript: <FaJs className="text-yellow-300" />,
  TypeScript: <SiTypescript className="text-blue-500" />,
  MUI: <SiMui className="text-indigo-400" />,
  "Spring Boot": <SiSpringboot className="text-green-600" />,
  ".NetCore": <SiDotnet className="text-purple-600" />,
  Laravel: <SiLaravel className="text-red-400" />,
  MySql: <SiMysql className="text-blue-500" />,
  MongoDB: <SiMongodb className="text-green-600" />,
  "SQL Server": <FaDatabase className="text-indigo-500" />,
  OraclDB19c: <SiOracle className="text-orange-700" />,
  Java: <FaJava className="text-orange-700" />,
  Python: <FaPython className="text-yellow-400" />,
  "C++": <SiCplusplus className="text-blue-700" />,
  "C": <FaCuttlefish className="text-gray-400" />,  // Pas de C pur, j'ai utilisé Cuttlefish pour représenter
  "C#": <SiSharp className="text-purple-700" />,
};

const skills = [
  {
    category: "Frontend Development ",
    icon: <Layout className="w-8 h-8 text-primary" />,
    technologies: ["React", "MUI", "Angular", "NgPrime", "HTML/CSS/JS", "TypeScript"]
  },
  {
    category: "Backend Development",
    icon: <Server className="w-8 h-8 text-primary" />,
    technologies: ["Spring Boot", ".NetCore", "Laravel"]
  },
  {
    category: "Database",
    icon: <Database className="w-8 h-8 text-primary" />,
    technologies: ["MySql", "MongoDB", "SQL Server", "OraclDB19c"]
  },
  {
    category: "Programming Languages",
    icon: <Code2 className="w-8 h-8 text-primary" />,
    technologies: ["Java", "Python", "C++", "C", "C#", "JavaScript", "TypeScript"]
  }
];

const SkillsSection: React.FC = () => {
  return (
    <section id="skills" className="min-h-screen bg-dark-300 py-20 px-10">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-16 text-center text-light-100">
          My <span className="text-primary">Skills</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skills.map((skill, index) => (
            <div 
              key={index}
              className="bg-dark-200 p-8 rounded-lg transform transition-all duration-300 hover:scale-105 ring-1 ring-primary/20"
            >
              <div className="flex items-center mb-6">
                {skill.icon}
                <h3 className="text-xl font-semibold ml-4 text-light-100">{skill.category}</h3>
              </div>
              <div className="flex flex-wrap gap-3">
                {skill.technologies.map((tech, techIndex) => (
                  <span 
                    key={techIndex}
                    className="flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm ring-1 ring-primary/20"
                  >
                    {techIcons[tech] && <span className="text-lg">{techIcons[tech]}</span>}
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
