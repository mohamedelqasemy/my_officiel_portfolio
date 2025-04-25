import React from 'react';

interface AboutSectionProps {
  profileImage?: string;
}

const AboutSection: React.FC<AboutSectionProps> = ({
  profileImage = 'Photo1.jpeg'
}) => {
  return (
    <section id="about" className="min-h-screen bg-dark-300 flex items-center py-20 px-10">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-12 items-center">
        <div className="md:col-span-2">
          <div className="bg-dark-100 p-4 rounded-lg shadow-lg transform transition-transform duration-500 hover:scale-[1.02] ring-1 ring-primary/20">
            <img
              src={profileImage}
              alt="Profile"
              className="w-full h-auto rounded-lg"
            />
          </div>
        </div>

        <div className="md:col-span-3">
          <h2 className="text-4xl font-bold mb-6 text-light-100">
            About <span className="text-primary">ME</span>
          </h2>

          <h3 className="text-2xl font-medium mb-6 text-light-200">
            Engineering Student
          </h3>

          <p className="text-lg text-light-300 leading-relaxed mb-6">
            I'm Mohamed ELQASEMY, a Computer Science and Artificial Intelligence Engineering student at ENSA Safi. Driven by a deep passion for technology and innovation, I constantly seek to push boundaries and turn ideas into impactful solutions. This space reflects my journey — a blend of curiosity, continuous growth, and creative problem-solving.

            Here, you'll find the projects I've developed, the challenges I've embraced, and the skills I've honed along the way. I believe in using technology not just as a tool, but as a force to shape the future positively.

            Let's explore, learn, and build together.
          </p>

          <div className="flex space-x-4 mt-8">
            <a
              href="https://drive.google.com/file/d/143xpRBxyA6vusX5l5nG4-j1z2EZYI3AW/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-primary to-secondary text-light-100 font-medium py-2 px-6 rounded-full hover:opacity-90 transition-all duration-300 transform hover:-translate-y-1"
            >
              Download CV
            </a>

            <a
              href="#contact"
              className="border-2 border-primary text-primary font-medium py-2 px-6 rounded-full hover:bg-primary/10 transition-all duration-300 transform hover:-translate-y-1"
            >
              Contact Me
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;