import React from "react";
import classes from "./About.module.css";
import Login from "../Login/Login";
import SignUp from "../SignUp/SignUp";
import { connect } from "react-redux";

const About = ({ signup }) => {
  return (
    <div className={classes.about__container}>
      <div className={classes.about__wrapper}>
        <div className={classes.about__left}>
          {/* <Login /> */}
          {/* <SignUp /> */}
          {signup ? <SignUp /> : <Login />}
        </div>
        <div className={classes.about__right}>
          <small>About</small>
          <h1>Evangadi Network</h1>
          <p>
            No matter what stage of life you are in, whether you’re just
            starting elementary school or being promoted to CEO of a Fortune 500
            company, you have much to offer to those who are trying to follow in
            your footsteps.
            <br />
            <br />
            Wheather you are willing to share your knowledge or you are just
            looking to meet mentors of your own, please start by joining the
            network here.
          </p>
          <p></p>
          <button>How it works</button>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    signup: state.signup,
  };
};

// export default About;
export default connect(mapStateToProps)(About);
