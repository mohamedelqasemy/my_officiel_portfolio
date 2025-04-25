import React from 'react';
import { ExternalLink, Github as GitHub } from 'lucide-react';

const projects = [
  {
    title: "Car Repair and Sales Website with AI",
    description: "A website for car repair and sales, integrating AI to predict repair costs.",
    image: "MockUp_AtlasCarRapair_web.png",
    technologies: ["Spring Boot", "Angular", "Tailwind", "MySQL"],
    githubLink: "https://github.com/mohamedelqasemy",
    liveLink: null
  },
  {
    title: "Rental Car Platform and Management System",
    description: "A car rental website for the company AZUL Car, built with a shared React frontend and two backend implementations: Spring Boot and Laravel.",
    image: "https://img.freepik.com/vecteurs-libre/illustration-concept-location-voiture_114360-9267.jpg?uid=R179286569&semt=ais_hybrid&w=740",
    technologies: ["Spring Boot", "Laravel", "React", "MUI", "MySQL"],
    githubLink: "https://github.com/mohamedelqasemy",
    liveLink: null
  },
  {
    title: "Android App for Medicine Search and Reservation",
    description: "A native Android app allowing customers to search, view, and reserve medications and vitamins.",
    image: "MockUp_medcine_App.jpeg",
    technologies: ["Kotlin", "XML", "RecyclerView", "DataBinding", "Fragments", "SQLite"],
    githubLink: "https://github.com/mohamedelqasemy",
    liveLink: null
  },
  {
    title: "Competition Management for the National School of Applied Sciences of Safi",
    description: "Maintenance of a project for managing the entrance exams to the National School of Applied Sciences of Safi.",
    image: "MockUp_EnsaConcour_Web.png",
    technologies: ["ASP .NET Core", "C#", "SQL Server", "jQuery", "Ajax"],
    githubLink: "https://github.com/mohamedelqasemy",
    liveLink: null
  },
  {
    title: "E-commerce Website with AI Chatbot",
    description: "Design and development of an e-commerce website specialized in electronic devices, with an AI-based chatbot for customer support.",
    image: "https://images.unsplash.com/photo-1688561807971-728cd39eb71c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzh8fGUlMjBjb21tZXJjZXxlbnwwfHwwfHx8MA%3D%3D",
    technologies: ["HTML", "CSS", "JS", "Bootstrap", "MySQL","PHP"],
    githubLink: "https://github.com/mohamedelqasemy",
    liveLink: null
  },
  {
    title: "E-Learning Web platforme",
    description: "Designing and developing an e-learning website for training management involves a strategic approach that combines instructional design principles with robust technological solutions.",
    image: "https://img.freepik.com/vecteurs-libre/illustration-du-concept-interactions-apprentissage-electronique_114360-25848.jpg?uid=R179286569&semt=ais_hybrid&w=740",
    technologies: ["HTML", "CSS", "JS", "Bootstrap", "MySQL","PHP"],
    githubLink: "https://github.com/mohamedelqasemy",
    liveLink: null
  }
];

const ProjectsSection: React.FC = () => {
  return (
    <section id="projects" className="min-h-screen bg-dark-300 py-20 px-10">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-16 text-center text-light-100">
          My <span className="text-primary">Projects</span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index}
              className="bg-dark-200 rounded-lg overflow-hidden transform transition-all duration-300 hover:scale-105 ring-1 ring-primary/20"
            >
              <img 
                src={project.image} 
                alt={project.title}
                className="w-full h-48 object-contain"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3 text-light-100">{project.title}</h3>
                <p className="text-light-300 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span 
                      key={techIndex}
                      className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm ring-1 ring-primary/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex space-x-4">
                  <a 
                    href={project.githubLink}
                    className="text-light-100 hover:text-primary transition-colors duration-300"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <GitHub size={20} />
                  </a>
                  <a 
                    href={project.liveLink ?? "#404"}
                    className="text-light-100 hover:text-primary transition-colors duration-300"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ExternalLink size={20} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;