import React, { useRef, useEffect } from "react";
import classes from "./Login.module.css";
import axios from "../../Api/axios";
import { BsEyeSlash } from "react-icons/bs";
import { BsEye } from "react-icons/bs";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
// react-redux
import { connect } from "react-redux";
// actions
import { storeUser, userSignUp, userPassword } from "../../redux";

const Login = ({ storeUser, userSignUp, userPassword, password }) => {
  //hooks to control inputs data
  const emailDom = useRef();
  const passwordDom = useRef();

  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  //check for logged in user
  const checkUserLogged = async () => {
    try {
      const { data } = await axios.get("/user/checkUser", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      storeUser(data.userName);
      navigate("/dashboard");
    } catch (error) {
      console.log(error);
      navigate("/");
    }
  };

  useEffect(() => {
    if (token) {
      checkUserLogged();
    }
  }, []);

  // signin function to call the API and handle to sign in user
  const signInHandling = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post("/user/login", {
        email: emailDom.current.value,
        password: passwordDom.current.value,
      });
      // console.log(data);
      storeUser(data.userName);
      localStorage.setItem("token", data.token);
      setTimeout(() => {
        navigate("/dashboard");
      }, 1000);
    } catch (error) {
      // show error message
      toast.error("Email or password does't correct try again! ", {
        position: "top-center",
      });
    }
  };

  return (
    <form onSubmit={signInHandling} className={classes.signin__container}>
      <div className={classes.signin__wrapper}>
        <div className={classes.signin__title}>
          <h4>Login to your account</h4>
          <p>
            Don't have an account?{" "}
            <span onClick={() => userSignUp()}>Create a new account</span>
          </p>
        </div>
        <div className={classes.signin__inputs}>
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
        </div>
        <div className={classes.signin__terms}>
          <small>Forget password?</small>
        </div>
        <button type="submit">Login</button>
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
    userSignUp: () => dispatch(userSignUp()),
    userPassword: () => dispatch(userPassword()),
  };
};
// export default Login;
export default connect(mapStateToProps, mapDispatchToProps)(Login);
