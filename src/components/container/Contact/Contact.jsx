import React, { useState } from 'react';
import './Contact.scss';
import { contacts } from '../../../Data';
import { socialIcons } from '../../../Data';
import { motion } from 'framer-motion';
import emailjs from 'emailjs-com';

const Contact = () => {
  const frmContact = { email: '', name: '', lastname: '', phone: '', message: '' };
  const [contact, setContact] = useState(frmContact);
  const [showMessage, setShowMessage] = useState(false);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setContact({ ...contact, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('entra');

    emailjs.send('service_hjt0gtr', 'template_bmppbin', contact, 'cNTiuRt_Rpjy1bZt-').then(
      (response) => {
        console.log('SUCCESS!', showMessage, response.status, response.text);
        setContact(frmContact);
        setShowMessage(true);
        alert('se envio correctamente el mensaje');
      },
      (err) => {
        console.log('FAILED..', err);
      }
    );
  };
  return (
    <div className="container" id="contact">
      <motion.div initial={{ opacity: 0 }} whileInView={{ y: [-50, 0], opacity: 1 }} className="title">
        <span>get in touch</span>
        <h1>Contact Me</h1>
      </motion.div>
      <div className="contact_form">
        <motion.div
          initial={{ x: 0, opacity: 0 }}
          whileInView={{ x: [-150, 0], opacity: 1 }}
          transition={{ duration: 1 }}
          className="contact_left_container"
        >
          <h3>Just Say Hi</h3>
          <p className="contact_text"></p>
          {contacts.map((contact) => {
            return (
              <div className="contact_left" key={contact.id}>
                <div className="icon">{contact.icon}</div>
                <p>{contact.infoText}</p>
              </div>
            );
          })}
          <div className="social_icons">
            {socialIcons.map((socialIcon, index) => {
              return (
                <a href={socialIcon.link} key={socialIcon.id}>
                  {socialIcon.icon}
                </a>
              );
            })}
          </div>
        </motion.div>
        <form onSubmit={handleSubmit}>
          <motion.div
            initial={{ x: 0, opacity: 0 }}
            whileInView={{ x: [150, 0], opacity: 1 }}
            transition={{ duration: 1 }}
            className="contact_right"
          >
            <h3>Get In Touch</h3>
            <div className="row">
              <input type="text" placeholder="First Name" value={contact.name} onChange={handleChange} name="name" />
              <input
                type="text"
                placeholder="Last name"
                value={contact.lastname}
                onChange={handleChange}
                name="lastname"
              />
            </div>
            <div className="row">
              <input type="text" placeholder="Phone" value={contact.phone} onChange={handleChange} name="phone" />
              <input type="email" placeholder="Email" value={contact.email} onChange={handleChange} name="email" />
            </div>
            <div className="row">
              <textarea placeholder="message" value={contact.message} onChange={handleChange} name="message"></textarea>
            </div>
            <motion.div whileHover={{ scale: 1.1 }} transition={{ duration: 0.3 }} className="btn">
              <button>Send</button>
            </motion.div>
          </motion.div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
