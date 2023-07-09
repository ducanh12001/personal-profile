import React, { useState } from "react";
import { Helmet } from "react-helmet";
import { contactConfig } from "../../data";
import "./style.css";

const Contact = () => {

  const [formData, setFormData] = useState({
    email: '',
    name: '',
    message: ''
  })

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
    
  return (
    <>
      <Helmet>
        <title>Contact</title>
      </Helmet>
      <section className="section contact">
        <div className="contact-container container grid">
          <div className="contact-row">
            <h2 className="contact-title">Contact me</h2>
          </div>
          <div className="contact-row">
            <div className="contact-col1" style={{ marginBottom: "1.25rem" }}>
              <h3 className="col1-title">Get in touch</h3>
              <address>
                <strong>Email:</strong> {contactConfig.email}
                <br />
                <strong>Phone:</strong> {contactConfig.phone}
              </address>
            </div>
            <div
              className="contact-col2"
              style={{ display: "flex", alignItems: "center" }}
            >
              <form onSubmit={handleSubmit} className="contact-form">
                <div className="input-group">
                  <input
                    className="form-input"
                    id="name"
                    name="name"
                    placeholder="Name"
                    value={formData.name || ""}
                    type="text"
                    required
                    onChange={handleChange}
                  />
                  <input
                    className="form-input"
                    id="email"
                    name="email"
                    placeholder="Email"
                    type="email"
                    value={formData.email || ""}
                    required
                    onChange={handleChange}
                  />
                </div>
                <textarea
                  className="form-input"
                  id="message"
                  name="message"
                  placeholder="Message"
                  rows="5"
                  value={formData.message || ""}
                  onChange={handleChange}
                  required
                ></textarea>
                <button className="form-btn" type="submit">
                  Send
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
