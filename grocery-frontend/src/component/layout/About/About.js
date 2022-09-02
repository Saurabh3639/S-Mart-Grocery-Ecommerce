import React from "react";
import "./about.css";
import { Button, Typography, Avatar } from "@material-ui/core";
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from "@material-ui/icons/Instagram";

const About = () => {
  const visitInstagram = () => {
    window.location = "https://instagram.com/";
  };
  return (
    <div className="aboutSection">
      <div></div>
      <div className="aboutSectionGradient"></div>
      <div className="aboutSectionContainer">
        <Typography component="h1">About Us</Typography>
        <div>
          <div>
            <Avatar
              style={{ width: "10vmax", height: "10vmax", margin: "2vmax 0" }}
              src="https://res.cloudinary.com/saurabh09/image/upload/v1661510650/avatars/about_dvxfsd.png"
              alt="s-mart grocery"
            />
            <Typography><b>S-Mart Grocery Store</b></Typography>
            <Button onClick={visitInstagram} color="primary">
              Visit Instagram
            </Button>
            <span>
              We aim to offer our customers the best grocery items for every
              taste and occasion.
            </span>
            <br/>
            <span>
              This is a Grocery wesbite made by <i>@saurabhphawade</i>. Only with the
              purpose to Grow our Ecommerce Buisness.
            </span>
          </div>
          <div className="aboutSectionContainer2">
            <Typography component="h2">Follow Us</Typography>
            <a href="https://www.facebook.com/" target="blank">
              <FacebookIcon className="facebookSvgIcon" />
            </a>
            <a href="https://instagram.com" target="blank">
              <InstagramIcon className="instagramSvgIcon" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
