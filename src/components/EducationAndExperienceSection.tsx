import React from 'react';

const EducationAndExperienceSection: React.FC = () => {
    const education = [
        {
            title: "Computer engineering and artificial intelligence engineering cycle",
            subtitle: "ENSA Safi",
            date: "2023-present",
            description: "Pursuing an engineering degree focused on AI, software engineering, and advanced computing."
        },
        {
            title: "Integrated preparatory cycle",
            subtitle: "ENSA Safi",
            date: "2021-2023",
            description: "Pursuing an engineering degree focused on AI, software engineering, and advanced computing."
        },
        {
            title: "Scientific Baccalaureate - High School",
            subtitle: "Al Maarifa ait melloul High School Very good mention.",
            date: "2020-2021",
            description: "Al Maarifa ait melloul High School Very good mention."
        },
    ];

    const experience = [
        {
            title: "Summer Internship",
            subtitle: "TYBASOFT - Casablanca",
            date: "July-August 2024",
            description: "Built a full-stack back-office tool for financial reconciliation with React and Spring Boot."
        },
        {
            title: "Summer Internship",
            subtitle: "MSA-Routier - Agadir",
            date: "August 2023",
            description: "project coordination, teamwork, deadline management, professional conduct."
        },
        {
            title: "Extracurricular Activities",
            subtitle: "Java Trainer-ENIAC Club, ENSAS",
            date: "2025",
            description: "Delivered training sessions on Java programming to fellow students."
        },
        {
            title: "Extracurricular Activities",
            subtitle: "Member - MDS Community ",
            date: "2025",
            description: "Engaged with a network of students passionate about development and innovation."
        },
        {
            title: "Extracurricular Activities",
            subtitle: "Member - CI & SpeakUp Clubs, ENSAS",
            date: "2025",
            description: "Active member of SpeakUp Club, promoting communication, public speaking, and leadership skills."
        },
    ];

    return (
        <section id="education-experience" className="py-16 px-4 md:px-12 bg-gray-900 text-white">
            <h2 className="text-3xl font-bold text-center mb-12">
                Education <span className='text-primary'>&</span> Experience
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                {/* Education */}
                <div>
                    <h3 className="text-2xl font-semibold text-primary mb-6">Education</h3>
                    <ul className="border-l-2 border-primary pl-6 space-y-8">
                        {education.map((item, index) => (
                            <li key={index} className="relative">
                                <div className="absolute w-3 h-3 bg-primary rounded-full -left-[31px] top-1.5"></div>
                                <h4 className="text-lg font-semibold">{item.title}</h4>
                                <p className="text-sm text-secondary">{item.subtitle}</p>
                                <p className="text-sm text-gray-400">{item.date}</p>
                                {/* <p className="text-sm mt-2">{item.description}</p> */}
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Experience */}
                <div>
                    <h3 className="text-2xl font-semibold text-primary mb-6">Experience</h3>
                    <ul className="border-l-2 border-primary pl-6 space-y-8">
                        {experience.map((item, index) => (
                            <li key={index} className="relative">
                                <div className="absolute w-3 h-3 bg-primary rounded-full -left-[31px] top-1.5"></div>
                                <h4 className="text-lg font-semibold">{item.title}</h4>
                                <p className="text-sm text-secondary">{item.subtitle}</p>
                                <p className="text-sm text-gray-400">{item.date}</p>
                                <p className="text-sm mt-2">{item.description}</p>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default EducationAndExperienceSection;
