import Link from 'next/link';
import React from 'react';
import "../contact/Contact.css"

const Contact = () => {
  return (
    <section className="contact" id="contact">
      <h1 className="contact-title">
        Contact <span className="highlight">Me</span>
      </h1>
      <form 
        action="https://api.web3forms.com/submit" 
        method="POST" 
        className="contact-form"
      >
        <input type="hidden" name="access_key" value="671277a9-3056-46df-ae88-682920d99420" />

        <div className="input-box">
          <input 
            type="text" 
            name="name" 
            placeholder="Your Name" 
            required 
            className="input-field"
          />
          <input 
            type="email" 
            name="email" 
            placeholder="Your Email" 
            required 
            className="input-field mt-2"
          />
        </div>

        <textarea 
          name="message" 
          rows={6} 
          placeholder="Your Message" 
          required 
          className="textarea-field"
        ></textarea>
        <input 
          type="submit" 
          value="Send Message" 
          className="submit-btn"
        />
      </form>

      <h1 className="find-me-title">
        Find <span className="highlight">Me</span>
      </h1>
      <div className="btn-container">
        <Link 
          href="https://github.com/HadiqaGohar" 
          className="btn"
        >
          GitHub
        </Link>
        <Link 
          href="https://www.npmjs.com/~hadiqagohar" 
          className="btn"
        >
          NPM
        </Link>
        <Link 
          href="https://vercel.com/hadiqa-gohar-s-projects" 
          className="btn"
        >
          Vercel
        </Link>
      </div>
    </section>
  );
};

export default Contact;
