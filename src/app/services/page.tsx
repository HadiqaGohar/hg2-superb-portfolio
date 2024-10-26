'use client'
import React from 'react';
import { FaCode, FaMobileAlt, FaSearch, FaServer, FaPaintBrush, FaCloud } from 'react-icons/fa';
import { motion } from 'framer-motion';
import "../services/Services.css"
const services = [
    {
        icon: <FaCode />,
        title: 'Web Development',
        description: 'Creating responsive and high-performance websites.',
    },
    {
        icon: <FaMobileAlt />,
        title: 'Frontend Development',
        description: 'Building Responsive and high-performance websites',
    },
    {
        icon: <FaSearch />,
        title: 'SEO Services',
        description: 'Improving search engine rankings to increase visibility.',
    },
    {
        icon: <FaServer />,
        title: 'Backend Development',
        description: 'Building scalable server-side solutions.',
    },
    {
        icon: <FaPaintBrush />,
        title: 'UI/UX Design',
        description: 'Designing intuitive and aesthetic user interfaces.',
    },
    {
        icon: <FaCloud />,
        title: 'Cloud Solutions',
        description: 'Deploying and managing applications on the cloud.',
    },
];

const Services = () => {
    return (
        <div className="services-section">
            <h1 className="services-title">
                My <span className="services-highlight">Services</span>
            </h1>
            <div className="services-grid">
                {services.map((service, index) => (
                    <motion.div
                        key={index}
                        className="service-card"
                        whileHover={{ scale: 1.05 }}
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.2 }}
                    >
                        <div className="service-icon">{service.icon}</div>
                        <h3 className="service-title">{service.title}</h3>
                        <p className="service-description">{service.description}</p>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default Services;
