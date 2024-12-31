import React, { useRef } from "react";
import classes from "./SignUp.module.css";
import { useNavigate } from "react-router-dom";
import axios from "../../Api/axios";
import { BsEyeSlash } from "react-icons/bs";
import { BsEye } from "react-icons/bs";
import { toast } from "react-toastify";
// react-redux
import { connect } from "react-redux";
// actions
import { storeUser, userSignIn, userPassword } from "../../redux";

const SignUp = ({ storeUser, userSignIn, userPassword, password }) => {
  const userNameDom = useRef();
  const firstNameDom = useRef();
  const lastNameDom = useRef();
  const emailDom = useRef();
  const passwordDom = useRef();

  const navigate = useNavigate();

  const signUpHandling = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post("/user/register", {
        userName: userNameDom.current.value,
        firstName: firstNameDom.current.value,
        lastName: lastNameDom.current.value,
        email: emailDom.current.value,
        password: passwordDom.current.value,
      });

      storeUser(data.userName);
      localStorage.setItem("token", data.token);
      // console.log(data);
      setTimeout(() => {
        navigate("/dashboard");
      }, 1300);
    } catch (error) {
      toast.error("Something went wrong to signup, try again!", {
        position: "top-center",
      });
      navigate("/");
    }
  };

  return (
    <form onSubmit={signUpHandling} className={classes.signup__container}>
      <div className={classes.signup__wrapper}>
        <div className={classes.signup__title}>
          <h4>Join the Network</h4>
          <p>
            Already have an account?{" "}
            <span onClick={() => userSignIn()}>Sin in</span>
          </p>
        </div>
        <input
          required
          name="userName"
          ref={userNameDom}
          type="text"
          placeholder="User name"
        />
        <div className={classes.multi__inputs}>
          <input
            required
            name="firstName"
            ref={firstNameDom}
            type="text"
            placeholder="First name"
          />
          <input
            required
            name="lastName"
            ref={lastNameDom}
            type="text"
            placeholder="Last name"
          />
        </div>
        <input
          required
          name="email"
          ref={emailDom}
          type="email"
          placeholder="Email address"
        />
        <div className={classes.password__input}>
          <input
            required
            name="password"
            ref={passwordDom}
            type={password ? "text" : "password"}
            // type="password"
            placeholder="Password"
          />
          <span
            className={classes.password_eye_icon}
            onClick={() => userPassword()}
          >
            {password ? <BsEyeSlash /> : <BsEye />}
          </span>
        </div>
        <div className={classes.signup__terms}>
          <small>
            I agree to the <a href=""> privacy policy</a> and{" "}
            <a href=""> terms of service.</a>
          </small>
        </div>
        <button type="submit">Agree and Join</button>
      </div>
    </form>
  );
};
const mapStateToProps = (state) => {
  return {
    password: state.password,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    storeUser: (users) => dispatch(storeUser(users)),
    userSignIn: () => dispatch(userSignIn()),
    userPassword: () => dispatch(userPassword()),
  };
};
// export default SignUp;
export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
