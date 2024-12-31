import React, { useRef, useEffect } from "react";
import classes from "./Question.module.css";
import axios from "../../Api/axios";
// react-redux connection
import { connect } from "react-redux";
// actions creation function
import { storeUser } from "../../redux";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const Question = ({ storeUser }) => {
  const titleDom = useRef();
  const descDom = useRef();

  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  const checkUserLogged = async () => {
    try {
      const { data } = await axios.get("/user/checkUser", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      storeUser(data.username);
      // setUserId(data)
      console.log(data);
    } catch (error) {
      // console.log(error.message);
      toast.error("Please log in to your account first. ", {
        position: "top-center",
      });
    }
  };

  const postQuestion = async (e) => {
    e.preventDefault();
    try {
      await axios.post(
        "/question",
        {
          title: titleDom.current.value,
          description: descDom.current.value,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      //after post question users navigate to dashboard
      titleDom.current.value = "";
      descDom.current.value = "";
      setTimeout(() => {
        navigate("/dashboard");
      }, 1300);
    } catch (error) {
      // console.log(error.response);
      toast.error("Something error to post question. ", {
        position: "top-center",
      });
    }
  };

  useEffect(() => {
    checkUserLogged();
  }, []);

  return (
    <div className={classes.question__container}>
      <div className={classes.question__wrapper}>
        <div className={classes.question__description}>
          <h3>Steps to write a good Question</h3>
          <ul>
            <li>Summerize your problems in a one-line-title.</li>
            <li>Describe your problem in more detail.</li>
            <li>Describe what you tried and what you expected to happen.</li>
            <li>Review your question and post it to site.</li>
          </ul>
        </div>
        <h1>Post Your Question</h1>

        <form onSubmit={postQuestion} className={classes.form__inputs}>
          <input
            required
            name="title"
            ref={titleDom}
            type="text"
            placeholder="Question title"
          />
          <textarea
            required
            rows="4"
            ref={descDom}
            placeholder="Question detail ..."
          />
          <button type="submit">Post Question</button>
        </form>
      </div>
    </div>
  );
};
// const mapStateToProps = (state) => {
//   return {
//     user: state.user,
//   };
// };

const mapDispatchToProps = (dispatch) => {
  return {
    storeUser: (users) => dispatch(storeUser(users)),
  };
};
// export default Question;
export default connect(null, mapDispatchToProps)(Question);
