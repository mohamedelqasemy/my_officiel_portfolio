import React from 'react';
import Header from './components/Header';
import AboutSection from './components/AboutSection';
import SkillsSection from './components/SkillsSection';
import ProjectsSection from './components/ProjectsSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import HomeSection from './components/HomeSection';
import EducationAndExperienceSection from './components/EducationAndExperienceSection';


function App() {
  return (
    <div className="min-h-screen bg-dark-300 text-light-100">
      <Header />
      <main className='pt-20'>
        <HomeSection/>
        <AboutSection />
        <EducationAndExperienceSection/>
        <SkillsSection />
        <ProjectsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;