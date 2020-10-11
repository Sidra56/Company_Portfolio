import React, { Component } from "react";
import './contactform.scss';
class ContactForm extends Component {
  render() {
    return (
      <div className="contactform br4 shadow-1">
        <h2 className="contactform-title b f1">Contact Form</h2>
        <div className="contactform-two f4 b">
          <div className="contactform-two-comp">
            <label className="label shrink pa1 ">First Name</label>
            <input type="text" className="textbox shrink" />
          </div>
          <div className="contactform-two-comp ">
            <label className="label shrink pa1">Last Name</label>
            <input type="text" className="textbox shrink" />
          </div>
        </div>
        <label className="label b f4 pa1">Email</label>
        <input type="email" className="textbox" />
        <label className="label b f4 pa1">Subject</label>
        <input type="text" className="textbox" />
        <label className="label b f4 pa1">Message</label>
        <textarea
          className="textbox1 message b f5 "
          placeholder="Write your note or question here"
        ></textarea>
        <div className="message-box">
          <button
            className="MuiButtonBase-root MuiButton-root MuiButton-text"
            tabIndex="0"
            type="submit"
            id="button"
          >
            <span className="MuiButton-label b  white">Submit</span>
            <span className="MuiTouchRipple-root"></span>
          </button>
        </div>
      </div>
    );
  }
}

export default ContactForm;
