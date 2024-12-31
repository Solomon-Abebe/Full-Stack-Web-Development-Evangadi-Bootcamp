import React, { useState, useEffect } from "react";
import classes from "./Home.module.css";
import { Link, useNavigate } from "react-router-dom";
import axios from "../../Api/axios";
// react-redux
import { connect } from "react-redux";
// actions creation function
import { storeUser } from "../../redux";
import { toast } from "react-toastify";
import { FaUserTie } from "react-icons/fa";
import { FaAngleRight } from "react-icons/fa";

const Home = ({ user, storeUser }) => {
  const [questions, setQuestions] = useState([]);

  const navigate = useNavigate();

  const token = localStorage.getItem("token");

  const checkUserLogged = async () => {
    try {
      const { data } = await axios.get("/user/checkUser", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      storeUser(data.userName);
      // console.log(data);
      await fetchAllQuestions();
    } catch (error) {
      console.error(error.response);
      toast.error("Please log in to your account first. ", {
        position: "top-center",
      });
    }
  };

  const fetchAllQuestions = async () => {
    try {
      const { data } = await axios.get("/questions", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      if (data.length === 0) {
        setQuestions([]);
        toast.error("No question found ", {
          position: "top-center",
        });
      }
      setQuestions(data.reverse());
      // console.log(data);
    } catch (error) {
      toast.error("Fetching question error ", {
        position: "top-center",
      });
    }
  };

  useEffect(() => {
    if (token) {
      checkUserLogged();
    } else {
      navigate("/");
    }
  }, []);

  console.log(questions);
  console.log(user);
  return (
    <div className={classes.home__container}>
      <div className={classes.home__wrapper}>
        <div className={classes.home__header}>
          <Link to="/question">
            <button>Ask Question</button>
          </Link>

          <h4>
            Welcome: <span>{user}</span>
          </h4>
        </div>
        <div className={classes.home_search_question}>
          <input placeholder="Search question" />
        </div>
        {questions?.map((singleQuestion, i) => {
          return (
            <Link
              key={i}
              className={classes.question__container}
              to={`/answer/${singleQuestion.questionId}`}
            >
              <hr />
              <div className={classes.question__wrapper}>
                <div className={classes.question__left}>
                  <div className={classes.question__img}>
                    <FaUserTie size={35} />
                  </div>
                  <h6>{singleQuestion.userName}</h6>
                </div>
                <div className={classes.question__middle}>
                  <h6>{singleQuestion.title}</h6>
                </div>
                <div className={classes.question__right}>
                  <FaAngleRight size={30} />
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    user: state.user,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    storeUser: (users) => dispatch(storeUser(users)),
  };
};

// export default Home;
export default connect(mapStateToProps, mapDispatchToProps)(Home);
