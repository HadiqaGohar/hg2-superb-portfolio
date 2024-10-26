import React from 'react';
import "../education/Education.css"

const EducationPage = () => {
  const educationData = [
    { year: '2021 - 2022', title: 'Matric', description: 'Completed school with a focus on science and mathematics.' },
    { year: '2023 - 2024', title: 'Intermediate', description: 'Completed College with a focus on sci (Medical) at G.I.S.A.C.C.' },
    { year: '2024 - 2025', title: 'Artificial Intelligency', description: 'Started my journey in AI at GIAIC, gaining valuable experience.' },
    // { year: '2025 - 2026', title: 'Bacholor Science', description: 'Start My Learning Journey In Science and Technology at University' },
  ];

  return (
    <section className="education">
    <h1>
        My <span style={{ color: '#00ffee' }}>Education</span>
    </h1>
    <div className="timeline-items">
        <div className="fixed-glow"></div>
        {educationData.map((item, index) => (
            <div key={index} className={`timeline-item ${index % 2 === 0 ? 'text-right' : 'text-left'}`}>
                <div className="timeline-dot"></div>
                <div className={`timeline-date ${index % 2 === 0 ? 'mr-8' : 'ml-8'}`}>
                    {item.year}
                </div>
                <div className={`timeline-content ${index % 2 === 0 ? 'mr-auto' : 'ml-auto'}`}>
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                </div>
            </div>
        ))}
    </div>
</section>

  );
};

export default EducationPage;
