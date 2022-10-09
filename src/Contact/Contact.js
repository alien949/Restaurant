import React from "react";
import "./Contact.css";
import GIF from "../Images/eating-food-gif.gif"
function Contact() {
  return (
    <div className="contact-outer-div">
      <iframe
        className="google-map"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d8652.833968023018!2d-87.63619115280095!3d41.84665626198774!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880e2c68a9bcc889%3A0xb8abf14ee5658cba!2sRicobene&#39;s!5e0!3m2!1sen!2sge!4v1664978870639!5m2!1sen!2sge"
      />
      <div className="contact-information-div">
        <p className="family-kitchen">Family kitchen</p>
        <p><span>Adress</span>:252 W 26th St, Chicago, IL 60616, United States.</p>
        <p><span>Mobile Phone</span>:+13122255555</p>
        <p><span>Open</span>:9AM-12:30AM</p>
        <img className="contact-gif" src={GIF}/>
      </div>
    </div>
  );
}
export default Contact;
