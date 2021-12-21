import React, { useContext, useRef, useState } from "react";
import "./contact.css";
import Phone from "../img/phone.png";
import Email from "../img/email.png";
import Address from "../img/address.png";
import emailjs from "emailjs-com";
import { ThemeContext } from "../Context";

const Contact = () => {
  const formRef = useRef();
  const [done, setdone] = useState(false);
  const theme = useContext(ThemeContext);
  const darkmode = theme.state.darkmode;
  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_4uc00yq",
        "template_h7x57cp",
        formRef.current,
        "user_tW7Gab8KhMug2ZNRH5QcG"
      )
      .then(
        (result) => {
          console.log(result.text);
          setdone(true);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <div className="c">
      <div className="c-bg"></div>
      <div className="c-wrapper">
        <div className="c-left">
          <h1 className="c-title">Let's discuss your project</h1>
          <div className="c-info">
            <div className="c-info-item">
              <img src={Phone} alt="" className="c-icon" />
              +91 8305650831
            </div>
            <div className="c-info-item">
              <img className="c-icon" src={Email} alt="" />
              dipeshingle5@gmail.com
            </div>
            <div className="c-info-item">
              <img className="c-icon" src={Address} alt="" />
             Vijay Nagar , Indore , Madhya Pradesh
            </div>
          </div>
        </div>
        <div className="c-right">
          <p className="c-desc">
            <b>What's your story?</b> Get in touch. Always available for
            freelancing if the right project comes along. me.
          </p>
          <form ref={formRef} onSubmit={handleSubmit}>
            <input
              style={{ backgroundColor: darkmode && "#333" }}
              type="text"
              placeholder="Name"
              name="user_name"
            />
            <input
              style={{ backgroundColor: darkmode && "#333" }}
              type="text"
              placeholder="Subject"
              name="user_subject"
            />
            <input
              style={{ backgroundColor: darkmode && "#333" }}
              type="text"
              placeholder="Email"
              name="user_email"
            />
            <textarea
              style={{ backgroundColor: darkmode && "#333" }}
              rows="5"
              placeholder="Message"
              name="message"
            />
            <button>Submit</button>
            {done && "Thank you..."}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
