import React from 'react';
import './About.scss';
import pdfFile from '../../../assets/federicoCV.pdf';
import { motion } from 'framer-motion';
import { bios } from '../../../Data';
import portfolio from '../../../assets/portfolio.png';
const About = () => {
  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = pdfFile;
    link.download = 'federicoPDF.pdf';
    link.click();
  };
  return (
    <div className="container " id="about">
      <motion.div initial={{ opacity: 0 }} whileInView={{ y: [-50, 0], opacity: 1 }} className="title">
        <span>Who Am I?</span>
        <h1>About Me</h1>
      </motion.div>

      <div className="about_container">
        <motion.div
          initial={{ x: 0, opacity: 0 }}
          whileInView={{ x: [-250, 0], opacity: 1 }}
          transition={{ duration: 1 }}
          className="about_left"
        >
          <motion.img src={portfolio} whileHover={{ y: -48, x: -55 }} transition={{ duration: 0.3 }} />
        </motion.div>
        <motion.div
          className="about_right"
          initial={{ x: 0, opacity: 0 }}
          whileInView={{ x: [250, 0], opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <p>
            Hi, I'm Federico Rendón, passionate about technology and web development. I am a person who is always in
            constant learning, I dedicate my free time to be always learning new things and always optimizing what I
            have learned before. I am looking to work in a company where I can contribute my knowledge as a developer
            and and grow with it.
          </p>
          {bios.map((bio) => {
            return (
              <div className="bio" key={bio.id}>
                <span className="bioKey">
                  {bio.icon}
                  {bio.key}
                </span>
                <span className="bioValue">{bio.value}</span>
              </div>
            );
          })}
          <motion.a download="" whileHover={{ scale: 1.1 }} transition={{ duration: 0.3 }} onClick={handleDownload}>
            Download CV
          </motion.a>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
