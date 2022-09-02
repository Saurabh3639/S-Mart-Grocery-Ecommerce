import React from "react";
import PlaceIcon from '@mui/icons-material/Place';
import PhoneIcon from '@mui/icons-material/Phone';
import MailIcon from '@mui/icons-material/Mail';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import "./Footer.css";

const Footer = () => {
  return (
    <footer id="footer">
      <div className="leftFooter">
        <h4>CONTACT INFO</h4>
        <div><PlaceIcon /><p>Alephata, Junnar, Pune</p></div>
        <div><PhoneIcon /><p>+91 9860247789</p></div>
        <div><MailIcon /><p>smartgrocery@gmail.com</p></div>
      </div>

      <div className="midFooter">
        <h1>S-Mart Grocery</h1>
        <p>High Quality is our first priority</p>
        <p>Copyrights 2022 &copy; SMartStore</p>
      </div>

      <div className="rightFooter">
        <h4>FOLLOW US</h4>
        <div><InstagramIcon /><a href="http://instagram.com/">Instagram</a></div>
        <div><FacebookIcon /><a href="http://facebook.com/">Facebook</a></div>
        <div><TwitterIcon /><a href="https://twitter.com/">Twitter</a></div>
      </div>
    </footer>
  );
};

export default Footer;
