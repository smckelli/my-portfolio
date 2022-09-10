import "./FormStyles.css";

import React from 'react'

const Form = () => {
  return (
    <div className="form">
        <form>
            {/* <label>Your Name</label>
            <input type="text"></input>
            <label>Email</label>
            <input type="email"></input>
            <label>Subject</label>
            <input type="text"></input>
            <label>Message</label>
            <textarea rows="6" placeholder="Type your message here" />
            <button className="btn">Submit</button> */}
            <h4>Basement Headquarters</h4>
            <p>Sun Prairie, Wisconsin</p>
            <p></p>
            <h4>Branch Office</h4>
            <p>Cisownica, Poland</p>
            <p></p>
            <h4>Email</h4>
            <a href="mailto:starypies22@gmail.com">starypies22@gmail.com</a>
        </form>

    </div>
  )
}

export default Form