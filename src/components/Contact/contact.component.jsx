import React,{Component} from 'react';
import './contactus.scss';
import ContactForm from './contactform.component';
class Contact extends Component{
    render(){
        return(
          <div className="contact pa2">
            <h1 className='pa3 white b fa1'>Contact Us</h1>
            <div className="contact-logo pa5">
              <div className="logo">
                <span className=" f2 white b fa fa-map-marker logo1"></span>
                <p className="logo-subtitle f4 b">Gulistan-e-Jauhar Karachi</p>
              </div>
              <div className="logo">
                <span className="fa fa-phone white f2 b logo1"></span>
                <p className="logo-subtitle b f4">+923082608403</p>
              </div>
              <div className="logo">
                <span className="fa fa-envelope white b f2 logo1"></span>
                <p className="logo-subtitle b f4">company@gmail.com</p>
              </div>
            </div>
            <ContactForm/>
          </div>
        )
    }
}
export default Contact;