import React from 'react';
import './css/Contact.css'; // Make sure the path to your CSS file is correct

const Contact = () => {
  // Function to handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    // Add form submission logic here
    console.log('Form data submitted');
  };

  return (
    <div className="contact-container">
      {/* Floating icons */}
      <div className="floating-icon icon-top-left">D</div>
      <div className="floating-icon icon-top-right">X</div>
      <div className="floating-icon icon-bottom-left">@</div>
      <div className="floating-icon icon-bottom-right">#</div>

      <h2>Get in Touch</h2>
      <form className="contact-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <input type="text" placeholder="Your Name" required />
        </div>
        <div className="form-group">
          <input type="email" placeholder="Your Email" required />
        </div>
        <div className="form-group">
          <input type="tel" placeholder="Your Phone Number" required />
        </div>
        <div className="form-group">
          <textarea placeholder="Your Message" required></textarea>
        </div>
        <button type="submit" className="send-button">Send Message</button>
      </form>
    </div>
  );
};

export default Contact;
