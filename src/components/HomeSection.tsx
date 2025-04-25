import React from 'react';

const HomeSection: React.FC = () => {
  return (
    <section
      id="home"
      className="relative h-screen bg-cover bg-no-repeat bg-center flex items-center justify-center text-center px-4"
      style={{ backgroundImage: "url('image.png')" }} // Remplace par ton image
    >
      <div className="absolute inset-0 bg-black bg-opacity-40"></div> {/* overlay sombre */}

      <div className="relative z-10 text-light-100 max-w-2xl">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Hello<br />
          I'm <span className="text-primary">Mohamed ELQASEMY</span>
        </h1>
        <p className="text-xl mb-6">
          Computer Science and AI Engineering Student at ENSA
        </p>
        <blockquote className="italic text-lg border-l-4 border-primary pl-4">
          "Expertise is earned through relentless curiosity. Courage is moving forward, even when the outcome is uncertain."
        </blockquote>
      </div>
    </section>
  );
};

export default HomeSection;