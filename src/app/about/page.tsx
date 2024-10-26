import React from 'react';
import Image from 'next/image';
import "../about/About.css"

function About() {
    return (
        <div className='custom-container'>
            {/* Image Section with Circular Loader */}
            <div className='image-section'> {/* Use custom class for the image section */}
                <div className='loader-large'></div> {/* First loader */}
               
                <Image
                    src="https://image.cdn2.seaart.ai/2024-02-21/cnapr1de878c73fl2fig/623a0f7df5eba777b6db438a71567979c8f9a57f_high.webp"
                    alt="Hadiqa Gohar"
                    height={200}
                    width={200}
                    className="image" // Use custom class for image
                />
            </div>

              {/* Text Section */}
              <div className='text-center space-y-4'> {/* Custom classes */}
                <h1 className='about-heading'> {/* Use custom class for heading */}
                    About <span className='text-[#19A7CE]'>Me</span> {/* Highlight class for span */}
                </h1>
                <h2 className='frontend-developer'> {/* Use custom class for h2 */}
                    Frontend Developer!
                </h2>
                <p className='about-description'> {/* Use custom class for paragraph */}
                    I am Hadiqa Gohar, a driven and curious senior student at the Governor Initiative, where I&apos;m immersed in the exciting world of Cloud Applied Generative AI, Web 3.0, and Metaverse. With a strong foundation in science and a passion for programming, I&apos;m constantly learning and exploring new possibilities in JavaScript, TypeScript, Python, HTML, CSS, Tailwind CSS, ReactJS, NextJS, and NodeJS. I&apos;m excited to share my journey and projects with you; visit my social media accounts.
                </p>
            </div>
        </div>
    );
}

export default About;
