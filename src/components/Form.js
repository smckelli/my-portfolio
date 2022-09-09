import "./FormStyles.css";

import React from 'react'

const Form = () => {
  return (
    <div className="form">
        {/* <form>
            <label>Your Name</label>
            <input type="text"></input>
            <label>Email</label>
            <input type="email"></input>
            <label>Subject</label>
            <input type="text"></input>
            <label>Message</label>
            <textarea rows="6" placeholder="Type your message here" />
            <button className="btn">Submit</button>
        </form> */}
          <address className='about'>
              {/* 1134 Schuster Road<br /> */}
              Sun Prairie, WI<br />
              53590<br />
          </address>
          <address className='about'>
          <a href="mailto:smckelli@gmail.com">smckelli@gmail.com</a>
          </address>
    </div>
  )
}

export default Form