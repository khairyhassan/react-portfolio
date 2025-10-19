import React, { useRef } from 'react';
import './contact.css';
import { MdOutlineEmail } from 'react-icons/md';
import { RiMessengerLine } from 'react-icons/ri';
import { BsWhatsapp } from 'react-icons/bs';
import emailjs from '@emailjs/browser';

const contactData = [
  {
    id: 1,
    icon: <MdOutlineEmail />,
    title:'Email',
    info: 'khairymawed@gmail.com',
    link:'mailto:khairymawed@gmail.com'
  },
  {
    id: 2,
    icon: <RiMessengerLine />,
    title:'Messenger',
    info: 'khairy Hassan',
    link:'https://m.me/khairyhassan'
  },
  {
    id: 3,
    icon: <BsWhatsapp />,
    title:'WhatsApp',
    info: '07342476497',
    link:'https://api.whatsapp.com/send?phone=+447342476497'
  },
]

function Contact() {
  const form = useRef();
   const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_zlem8fa', 'template_bf6gqec', form.current,'mI4OuWsh8pIDtlfHg',)
    e.target.reset()
  };

  return (
    <section className='contact'id='contact'>
      <div className="top-section">
        <h5>Get in Touch</h5>
        <h2>Contact Me</h2>
      </div>
      
      <div className="container contact-container">
        <div className="contact-options">
          {contactData.map(({ id, icon, title, info, link }) =>
            <article key={id} className='contact-option'>
              {icon}
              <h4>{title}</h4>
              <h5>{info}</h5>
              <a href={link} target='_blank'>Send message</a>
            </article>
          )}
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" placeholder='Full Name' name='name' />
          <input type="email" placeholder='Your Email' name='email' />
          <textarea rows={10} placeholder='Enter your message' name="message" id=""></textarea>
          <button className="btn btn-primary">Send message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact
