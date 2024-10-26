'use client';
// src/app/home/Home.tsx
import Link from 'next/link';
import React from 'react';
import { FaFacebookF, FaGithub, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import { SiMinutemailer } from 'react-icons/si';
import { Typewriter } from 'react-simple-typewriter';
import Image from 'next/image';
import "../home/Home.css"

function Home() {
    function handleType(): void {
        // Logic here if needed in the future
    }

    function handleDone(): void {
        // Handle completion of typing here
    }

    return (
        <div className='container'>
            {/* Text */}
            <div className='text-container'>
                <div className='spacing-container'>
                    <h2 className='heading'>
                        {`Hello, It's Me`}
                    </h2>
                    <h1 className='heading-main'>
                        Hadiqa Gohar
                    </h1>

                    <h1 className='heading-main-2' style={{ paddingTop: '0', margin: 'auto 0' }}>
                        I&apos;m a{' '}
                        <span style={{ color: '#19A7CE', fontWeight: 'bold' }}>
                            <Typewriter
                                words={['Frontend Developer!', 'UX/UI Designer!', 'Web Developer!', 'NextJS Developer!']}
                                loop={true}
                                cursor
                                cursorStyle='|'
                                typeSpeed={70}
                                deleteSpeed={50}
                                delaySpeed={1000}
                                onLoopDone={handleDone}
                                onType={handleType}
                            />
                        </span>
                    </h1>

                    <p className='paragraph'>
                        {` I am a Medical Student, also I'm a Student Leader at Governor Initiative For Cloud Applied Generative AI, Web 3.0 & Metaverse!`}
                    </p>
                </div>

                {/* Icons */}
                <div className="icon-container">
                    <Link href="https://pk.linkedin.com/in/hadiqa-gohar-b64778300" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn Profile">
                        <div className="icon linkedin">
                            <FaLinkedinIn size={24} />
                        </div>
                    </Link>

                    <Link href="https://m.facebook.com/profile.php/?id=61554985182774" target="_blank" rel="noopener noreferrer">
                        <div className="icon facebook">
                            <FaFacebookF size={24} />
                        </div>
                    </Link>

                    <Link href="https://www.instagram.com/hadiqagohar12/" target="_blank" rel="noopener noreferrer">
                        <div className="icon instagram">
                            <FaInstagram size={24} />
                        </div>
                    </Link>

                    <Link href="https://github.com/HadiqaGohar" target="_blank" rel="noopener noreferrer">
                        <div className="icon github">
                            <FaGithub size={24} />
                        </div>
                    </Link>

                    <Link href="mailto:tasleemhadiqa76@gmail.com" target="_blank" rel="noopener noreferrer">
                        <div className="icon email">
                            <SiMinutemailer size={24} />
                        </div>
                    </Link>
                </div>


                {/* Buttons */}
                <div className="button-container">
                    <Link href="/cv">
                        <button className="button download-cv">
                            Download CV
                        </button>
                    </Link>
                    <div>
                        <Link href="mailto:tasleemhadiqa76@gmail.com">
                            <button className="button lets-talk">
                                Let&apos;s Talk
                            </button>
                        </Link>
                    </div>
                </div>

            </div>

            {/* Image */}
            <div className='md:flex-1 flex justify-center items-center lg:mr-24'>
                <div className='md:flex-1 flex justify-center items-center relative'>
                    {/* Liquid Shape */}
                    {/* Liquid Shape */}
                    <div className="liquid-shape md:mr-24 absolute bottom-0 left-0 w-[400px] h-[400px] mx-4 lg:w-[500px] lg:h-[500px] xl:w-[700px] xl:h-[700px] hidden lg:block">
                        <svg viewBox="0 0 500 500" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
                            <path fill="#12f7ff">
                                <animate
                                    attributeName="d"
                                    dur="6000ms"
                                    repeatCount="indefinite"
                                    values="
              M439,288Q381,326,375,391Q369,456,309.5,455.5Q250,455,191,455Q132,455,122.5,392Q113,329,60.5,289.5Q8,250,57.5,208.5Q107,167,140.5,142.5Q174,118,212,107.5Q250,97,309,71Q368,45,415,86.5Q462,128,479.5,189Q497,250,439,288Z;
              M457.5,306.5Q446,363,390,379.5Q334,396,292,446Q250,496,199.5,460.5Q149,425,115,386.5Q81,348,54.5,299Q28,250,41.5,194Q55,138,95,94.5Q135,51,192.5,32.5Q250,14,299.5,46.5Q349,79,406,103Q463,127,466,188.5Q469,250,457.5,306.5Z;
              M454,300.5Q425,351,383,379.5Q341,408,295.5,429.5Q250,451,195.5,445Q141,439,124.5,385.5Q108,332,91.5,291Q75,250,96.5,212Q118,174,134.5,126.5Q151,79,200.5,56Q250,33,301.5,52.5Q353,72,395.5,107Q438,142,460.5,196Q483,250,454,300.5Z;
              M465,305Q441,360,391.5,384.5Q342,409,296,438Q250,467,205,436.5Q160,406,137.5,367Q115,328,81,289Q47,250,60.5,199Q74,148,118.5,124Q163,100,206.5,85Q250,70,296.5,79.5Q343,89,399.5,110Q456,131,472.5,190.5Q489,250,465,305Z;
              M429,305Q441,360,392,385.5Q343,411,296.5,420Q250,429,191.5,440.5Q133,452,110.5,398Q88,344,58,297Q28,250,32.5,188.5Q37,127,97,108Q157,89,203.5,69Q250,49,297.5,67.5Q345,86,375.5,123Q406,160,411.5,205Q417,250,429,305Z;
              M442,309.5Q456,369,391.5,376Q327,383,288.5,397Q250,411,196,424Q142,437,130,381.5Q118,326,93,288Q68,250,70.5,199Q73,148,122.5,131.5Q172,115,211,92.5Q250,70,300.5,72.5Q351,75,385.5,113.5Q420,152,424,201Q428,250,442,309.5Z;"

                                />
                            </path>
                        </svg>
                    </div>


                    {/* Image */}
                    <Image
                        src="https://image.cdn2.seaart.ai/2024-02-21/cnapr1de878c73fl2fig/623a0f7df5eba777b6db438a71567979c8f9a57f_high.webp"
                        alt="Hadiqa Gohar"
                        height={300}
                        width={300}
                        className="w-[300px] h-[300px] xl:w-[500px] xl:h-[600px] rounded-tr-3xl rounded-bl-3xl outline-double outline-8 outline-[#19A7CE] mx-3 mb-12 max-w-md opacity-0 transition-opacity duration-3000 animate-fade-in-delay relative z-10"
                    />
                </div>
            </div>
        </div>
    );
}

export default Home;
