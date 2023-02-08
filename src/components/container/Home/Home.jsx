import React from 'react';
import portfolio from '../../../assets/portfolio.png';
import './Home.scss';
import { motion } from 'framer-motion';

const Home = () => {
  const moveVariants = {
    animation: {
      y: [0, -15],
      transition: {
        repeat: Infinity,
        repeatType: 'reverse',
        duration: 2,
        delay: 1,
      },
    },
  };

  return (
    <motion.div
      className="container "
      id="home"
      initial={{ y: -15, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{
        duration: 2,
        delay: 0.5,
      }}
    >
      <div className="profile">
        <img src={portfolio} alt="portfolio" />
      </div>
      <div className="profile_text">
        <h3 className="name">
          Hi, I'm <span>Federico Rendon</span>{' '}
        </h3>
        <span className="job">Web Developer Based on Colombia</span>
        <span className="text">
          Passionate
          <br /> to craft innovative <br /> web products.
        </span>
        <motion.a href="#contact" whileHover={{ scale: 1.2 }} variants={moveVariants} animate="animation">
          connect with me
        </motion.a>
        <div className="web">Backend Developer</div>
        <div className="ui">Frontend Developer</div>
        <div className="freelance">Freelancer</div>
      </div>
    </motion.div>
  );
};

export default Home;
