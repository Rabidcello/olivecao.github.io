import React from 'react';
import './Style.css';
import Insta from "./images/insta.png";
import Discord from "./images/discord.png";
import Gmail from "./images/Gmail-Logo.png";
import GitHub from "./images/github.png";

const Contact = () => {
  return (
    <section id="contact" className="contact-section">
      <div id="contact-section">
        {/*<h1 className="contact-title">Please Reach Out!</h1>*/}
        <div className="icon-row">
          <a href="https://www.instagram.com/bowloffoods/" target="_blank" rel="noopener noreferrer" className="contact-icon">
            <img src={Insta} alt="Instagram" />
          </a>
          <a href="https://discord.com/channels/@me/1243410129081335898" target="_blank" rel="noopener noreferrer" className="contact-icon">
            <img src={Discord} alt="Discord" />
          </a>
          <a href="mailto:kolivcao@gmail.com" className="contact-icon">
            <img src={Gmail} alt="Gmail" />
          </a>
          <a href="https://github.com/Rabidcello" target="_blank" rel="noopener noreferrer" className="contact-icon">
            <img src={GitHub} alt="GitHub" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;

