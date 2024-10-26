import React from 'react';
import "../footer/Footer.css"

function Footer() {
  return (
    <footer className="footer">
        
      <div className="div">
        <p className="p">© {new Date().getFullYear()} Hadiqa Gohar. All rights reserved.</p>
        <div className="nested-div flex gap-4">
          <a href="https://pk.linkedin.com/in/hadiqa-gohar-b64778300" className="a" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a href="https://github.com/HadiqaGohar" className="a" target="_blank" rel="noopener noreferrer">GitHub</a>
          <a href="https://www.instagram.com/hadiqagohar12/" className="a" target="_blank" rel="noopener noreferrer">Instagram</a>
          <a href="https://m.facebook.com/profile.php/?id=61554985182774" className="a" target="_blank" rel="noopener noreferrer">Facebook</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
