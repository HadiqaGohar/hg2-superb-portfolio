import React from 'react';
import { FaHtml5, FaCss3Alt, FaJsSquare, FaReact, FaPython } from 'react-icons/fa';
import { SiTypescript, SiNextdotjs, SiTailwindcss } from 'react-icons/si';
import "../skills/Skills.css"
const Skills = () => {
    return (
        <div className="skills-container">
        <section className="skills-section">
            <h1 className="skills-heading">
                Technical <span className="skills-highlight">Skills</span>
            </h1>
            <div className="skill-bars-container">
                    {/* Left Column */}
                    <div className="skill-column gap-2">
                        <SkillBar icon={<FaHtml5 color="#c95d2e" />} label="HTML" progress="90%" />
                        <SkillBar icon={<FaCss3Alt color="#147bbc" />} label="CSS" progress="85%" />
                        <SkillBar icon={<FaJsSquare color="#bebc1e" />} label="JavaScript" progress="75%" />
                        <SkillBar icon={<FaReact color="#61DAFB" />} label="React" progress="80%" />
                    </div>
                    {/* Space between columns */}
                    <div className="column-space " />
                    {/* Right Column */}
                    <div className="skill-column gap-2">
                        <SkillBar icon={<SiTypescript color="#007ACC" />} label="TypeScript" progress="70%" />
                        <SkillBar icon={<FaPython color="#3776AB" />} label="Python" progress="65%" />
                        <SkillBar icon={<SiNextdotjs color="#61DAFB" />} label="Next.js" progress="70%" />
                        <SkillBar icon={<SiTailwindcss color="#06b6d4" />} label="Tailwind" progress="90%" />
                    </div>
                </div>
            </section>
        </div>
    );
};


interface SkillBarProps {
    icon: React.ReactNode;
    label: string;
    progress: string; 
}

const SkillBar: React.FC<SkillBarProps> = ({ icon, label, progress }) => {
    return (
        <div
            className="flex items-center justify-between border-2 border-fixed-glow border-cyan-400 p-2 rounded-md w-full md:w-[300px] lg:w-[400px] mx-auto"
            aria-label={`${label} skill level is ${progress}`} 
        >
            <div className="flex items-center">
                <div className="animate-slide text-3xl mr-4">{icon}</div>
                <span className="animate-delay-1 animate-fade-in-top font-bold">{label}</span>
            </div>
            <div className="relative w-full ml-4 animate-fade-in-bottom">
                <div className="bg-gray-700 h-2 rounded-md border border-cyan-400">
                    <div
                        className="animate-delay-3 bg-cyan-400 h-full rounded-md"
                        style={{ width: progress }}
                    ></div>
                </div>
            </div>
        </div>
    );
};

export default Skills;
