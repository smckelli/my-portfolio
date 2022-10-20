import "./FormStyles.css";

import React, {useRef} from 'react';
import emailjs from '@emailjs/browser';

const Form = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
    .sendForm(
      'service_kr9s60b', 
      'template_rcbsf31', 
      form.current, 
      '4nAYSSX0mk4KnOPtz')

      .then((result) => {
          console.log(result.text);
          console.log("message sent");
          e.target.reset();
      }, (error) => {
          console.log(error.text);
      }
    );
  }


  return (
    <div className="form">
      {/* The functionality of the form will be in a later build */}
        <form ref={form} onSubmit={sendEmail}>
            <label>Your Name</label>
            <input type="text" name= "user_name" size="40"></input>
            <label>Email</label>
            <input type="email" name= "user_email" size ="40"></input>
            <label>Subject</label>
            <input type="text" size="40"></input>
            <label>Message</label>
            <textarea rows="6" cols="40" placeholder="Type your message here" name="message" size="50"/>
            <button className="btn" type="submit" value="Send">Submit</button>
            {/* <h4>Basement Headquarters</h4>
            <p>Sun Prairie, Wisconsin</p>
            <p></p>
            <h4>Branch Offices</h4>
            <p>Cisownica, Poland</p>
            <p>Wisla-Czarne, Poland</p>
            <p></p>
            <h4>Email</h4>
            <a href="mailto:starypies22@gmail.com">starypies22@gmail.com</a> */}
        </form>

    </div>
  )
}

export default Form