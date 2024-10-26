'use client';
import Link from 'next/link';
import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa'; 
import "../navbar/Navbar.css";

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => setIsOpen(!isOpen);

    const handleLinkClick = () => {
        if (isOpen) toggleMenu();
    };

    return (
        <div className='navbar-container'>
            <header className='header md:mx-32 flex flex-row'>
                <div>
                    <h1 className='navbar-title text-sm md:text-2xl'>
                        Hadiqa <span className='highlighted-text'>Gohar</span>
                    </h1>
                </div>
                
                {/* Desktop Menu */}
                <nav className='desktop-nav hidden lg:flex'>
                    <ul className='nav-list text-sm md:text-xl'>
                        <li><Link href="/" onClick={handleLinkClick} className='nav-link'>Home</Link></li>
                        <li><Link href="/about" onClick={handleLinkClick} className='nav-link'>About</Link></li>
                        <li><Link href="/education" onClick={handleLinkClick} className='nav-link'>Education</Link></li>
                        <li><Link href="/skills" onClick={handleLinkClick} className='nav-link'>Skills</Link></li>
                        <li><Link href="/services" onClick={handleLinkClick} className='nav-link'>Services</Link></li>
                        <li><Link href="/contact" onClick={handleLinkClick} className='nav-link'>Contact</Link></li>
                    </ul>
                </nav>

                {/* Hire Me Button */}
                <div className='hire-button-container hidden lg:block'>
                    <Link href="mailto:tasleemhadiqa76@gmail.com">
                        <button className="hire-me-button">HIRE ME</button>
                    </Link>
                </div>

                {/* Mobile Menu Icon */}
                <div className='menu-icon lg:hidden'>
                    <button onClick={toggleMenu} className="text-white focus:outline-none">
                        {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
                    </button>
                </div>
            </header>

            {/* Mobile Menu */}
            {isOpen && (
                <nav className='mobile-menu lg:hidden'>
                    <ul className='mobile-nav-list'>
                        <li><Link href="/" onClick={handleLinkClick} className='mobile-nav-link'>Home</Link></li>
                        <li><Link href="/about" onClick={handleLinkClick} className='mobile-nav-link'>About</Link></li>
                        <li><Link href="/education" onClick={handleLinkClick} className='mobile-nav-link'>Education</Link></li>
                        <li><Link href="/skills" onClick={handleLinkClick} className='mobile-nav-link'>Skills</Link></li>
                        <li><Link href="/services" onClick={handleLinkClick} className='mobile-nav-link'>Services</Link></li>
                        <li><Link href="/contact" onClick={handleLinkClick} className='mobile-nav-link'>Contact</Link></li>
                    </ul>

                    <div className='mobile-hire-button'>
                        <Link href="mailto:tasleemhadiqa76@gmail.com">
                            <button className="hire-me-button">Hire Me</button>
                        </Link>
                    </div>
                </nav>
            )}
        </div>
    );
}

export default Navbar;
