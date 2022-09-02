import React from "react";
import "./Contact.css";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import PlaceIcon from "@mui/icons-material/Place";
import AccessTimeFilledIcon from '@mui/icons-material/AccessTimeFilled';

const Contact = () => {
  return (
    <div className="contactContainer">
      <div className="contactSectionContainer">
        <h1 className="top-padding">Contact Us</h1>
        <div className="container top-padding">
          <EmailIcon />
          &nbsp;
          <p>Mail Us:</p>&nbsp;
          <p>
            <a className="mailBtn" href="mailto:smartgrocery@gmail.com">
              smartgrocery@gmail.com
            </a>
          </p>
        </div>
        <div className="container">
          <PhoneIcon />
          &nbsp;
          <p>Call Us:</p>&nbsp;<p> +91 9860247789</p>
        </div>
        <div className="container">
          <PlaceIcon />
          &nbsp;
          <p>Loaction:</p>&nbsp;
          <p>Alephata, Junnar, Pune - 412411, Maharashtra, India</p>
        </div>
        <div className="container">
          <AccessTimeFilledIcon />
          &nbsp;
          <p>Working Hours:</p>&nbsp;<p>Every Mon-Sun 9AM-9PM</p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
