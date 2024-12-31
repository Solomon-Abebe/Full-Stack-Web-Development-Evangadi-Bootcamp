import React from "react";
import classes from "./Footer.module.css";
import footerLogo from "../../assets/images/evangadi-logo-footer.png";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaYoutubeSquare } from "react-icons/fa";

const Footer = () => {
  return (
    <div className={classes.footer__container}>
      <div className={classes.footer__wrapper}>
        <div className={classes.footer__left}>
          <img src={footerLogo} alt="" />
          <div className={classes.footer__icons}>
            <FaFacebook size={30} />
            <FaInstagram size={30} />
            <FaYoutubeSquare size={30} />
          </div>
        </div>
        <div className={classes.footer__middle}>
          <h3>Useful Link</h3>
          <p>Terms of Service</p>
          <p>Privacy policy</p>
        </div>
        <div className={classes.footer__right}>
          <h3>Contact Info</h3>
          <p>support@evangadi.com</p>
          <p>+122272727</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
