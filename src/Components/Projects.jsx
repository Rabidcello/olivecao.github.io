import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import './Style.css';
import Bug from './images/Bugged out.png';
import Truck from './images/Trucks.jpg';
import House from './images/house.jpg';
import Fitness from './images/fitness.jpeg';
import Frame from './images/ImageFrame.png'

const Projects = () => {
  useEffect(() => {
    window.scrollTo(0,0);
  }, []);
  return (
    <div id="page2">
      <Section
        title='"Bugged Out" Game'
        image={Bug}
        altText="Start of the game"
        description="A 2D platformer game about a programmer who gets sucked into his program and has to literally smash the monstrous bugs that plague his code with his trusty keyboard. I developed the game alongside a small group of other developers as a submission for the 2023 Brackey’s Game Jam. Won 3rd place for creativity out of 906 entries."
        languages={['C#', 'Unity']}
      />

      <Section
        title="OpenAI Vehicle Classification Fine-Tuning"
        image={Truck}
        altText="Trucks"
        description="A machine learning model I trained, based on OpenAI API to help me automatically figure out if people on Twitter are talking about motorcycles or trucks. Trained on a 10,000+ row dataset with the classic 80-20 split with repeated fine-tuning, the model has an accuracy over 97%!"
        languages={['Python', 'OpenAI API', 'HuggingFace']}
        reverse
      />

      <Section
        title="Housing Rates Correlation Analysis"
        image={House}
        altText="House"
        description="A report analyzing factors for increasing property values in the city of Boston. Based on a dataset found on Kaggle, a formal regression analysis was done which included hypothesis testing, fitting of the data, ANOVA tests all done through R as well as in-depth collection of research."
        languages={['R', 'PowerBI', 'Pandas']}
      />

      <Section
        title="Google Calendar Fitness App"
        image={Fitness}
        altText="Fitness"
        description="Ever wanted to start going to the gym, but don’t know how to plan a workout? No worries! The Fitness app allows you to search up a database of the most efficient exercises for each muscle, allowing you to quickly build your dream workout. Additionally, it automatically adds the workout to your Google Calendar so you have no excuse to slack off!"
        languages={['Java', 'Google Calendar API', 'Firebase API']}
        reverse
      />

      <Section
        title="Recipe Finder App"
        image={House}
        altText="House"
        description="A report analyzing factors for increasing property values in the city of Boston. Based on a dataset found on Kaggle, a formal regression analysis was done which included hypothesis testing, fitting of the data, ANOVA tests all done through R as well as in-depth collection of research."
        languages={['React', 'Django', 'BeautifulSoup']}
      />


      <Section
        title="Distracto-Blocker"
        image={Fitness}
        altText="Fitness"
        description="Ever wanted to start going to the gym, but don’t know how to plan a workout? No worries! The Fitness app allows you to search up a database of the most efficient exercises for each muscle, allowing you to quickly build your dream workout. Additionally, it automatically adds the workout to your Google Calendar so you have no excuse to slack off!"
        languages={['PowerBI', 'React', 'MitmProxy']}
        reverse
      />
    </div>
    
  );
};

const Section = ({ title, image, altText, description, languages, reverse }) => (

  <motion.div
    className={`section ${reverse ? 'reverse' : ''}`}
    initial={{ opacity: 0, x: reverse ? -100 : 100 }} // Slide in from the side
    whileInView={{ opacity: 1, x: 0 }} // Animate to center when in view
    transition={{ duration: 0.5 }} // Smooth animation
    viewport={{ once: false, amount: 0.1 }} // Animate only once when scrolled into view
  >
  <section className={`section ${reverse ? 'reverse' : ''}`}>
    <div className="projimage">
      <img src={image} alt={altText} className="project-img" />
    </div>
    <div className="text">
      <h2>{title}</h2>
      <div className="button-row">
        {languages.map((lang, index) => (
          <button key={index} className="language-button">{lang}</button>
        ))}
      </div>
      <hr />
      <p>{description}</p>
    </div>
  </section>
  </motion.div>
);

export default Projects;
