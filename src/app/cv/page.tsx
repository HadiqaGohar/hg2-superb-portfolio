'use client';
import { useEffect } from 'react';
import Head from 'next/head';
import { jsPDF } from 'jspdf';
import html2canvas from 'html2canvas';
import '../cv/Cv.css'; // Import the custom CSS file

const Resume = () => {
    useEffect(() => {
        const downloadButton = document.getElementById('download-cv');

        if (!downloadButton) {
            console.error("Download button not found!");
            return;
        }

        downloadButton.addEventListener('click', async (event) => {
            event.preventDefault(); // Prevent default anchor behavior
            const resume = document.getElementById('resume-content');

            if (!resume) {
                console.error("Resume content not found!");
                return;
            }

            // Hide the download button before capturing
            downloadButton.style.display = 'none';

            try {
                // Use html2canvas to create a canvas from the resume content
                const canvas = await html2canvas(resume, { scale: 2 });
                const imgData = canvas.toDataURL('image/png');

                const pdf = new jsPDF('p', 'mm', 'a4');
                const pdfWidth = pdf.internal.pageSize.getWidth();
                
                // Set a larger height for the PDF to include background
                const pdfHeight = 300; // Adjust this value as needed

                pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight);
                pdf.save('Hadiqa_Gohar_Resume.pdf');
            } catch (error) {
                console.error("Error generating PDF:", error);
            } finally {
                // Show the download button again after capturing
                downloadButton.style.display = 'inline-block';
            }
        });
    }, []);

    return (
        <div className="resume-container">
            <Head>
                <title>Resume</title>
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            </Head>
           
            {/* Resume Content */}
            <div className="resume-background">
                <div id="resume-content" className="resume-content">
                    <h3 className="resume-name">Hadiqa Gohar</h3>
                    <p className="resume-title">Frontend Developer | Programmer | Artist</p>

                    <div className="resume-section">
                        <h2 className="resume-section-title">About Me</h2>
                        <p className="resume-text">
                            Hadiqa Gohar is a skilled developer with expertise in HTML, CSS, JavaScript, Node.js, and TypeScript. She is currently focused on building projects using Python, Next.js and React.js, including a personal portfolio website and an interactive resume for a hackathon. Hadiqa is dedicated to enhancing her skills in web development and design, employing tools like Tailwind CSS for styling and ensuring responsive layouts through media queries. She values functionality, accessibility, and user experience in her projects.
                        </p>
                    </div>

                    <div className="resume-section">
                        <h2 className="resume-section-title">Education</h2>
                        <p className="resume-text"><strong>Matric of Science Biology</strong> - EABGGSS, 2021 - 2022</p>
                        <p className="resume-text"><strong>Intermediate (pre-medical)</strong> - GISACC, 2023 - 2024</p>
                        <p className="resume-text"><strong>Generative AI</strong> - GIAIC, 2024 - 2025</p>
                    </div>

                    <div className="resume-section">
                        <h2 className="resume-section-title">Skills</h2>
                        <p className="resume-text">JavaScript, HTML, CSS, Node.js, TypeScript, Python, NextJS, Tailwind CSS</p>
                    </div>

                    <div className="resume-section">
                        <h2 className="resume-section-title">Work Experience</h2>
                        <p className="resume-text"><strong>Frontend Developer Intern</strong> - GIAIC, 2024 - 2025</p>
                        <p className="resume-text">Worked on various frontend projects, including building responsive websites using JavaScript and Next.js.</p>
                    </div>

                    {/* Glowing Button */}
                    <a
                        href="#"
                        role="button"
                        aria-label="Download Resume"
                        className="download-button"
                        id="download-cv"
                    >
                        Download CV
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Resume;
