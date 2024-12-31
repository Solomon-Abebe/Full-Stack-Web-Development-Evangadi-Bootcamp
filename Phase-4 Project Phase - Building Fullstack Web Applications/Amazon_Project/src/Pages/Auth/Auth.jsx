import React, { useContext, useState } from "react";
import classes from "./Signup.module.css";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { auth } from "../../Utility/firebase";
import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from "firebase/auth";
import { DataContext } from "../../Components/DataProvider/DataProvider";
import { ClipLoader } from "react-spinners";
import { Type } from "../../Utility/action.type";

function Auth() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  console.log(email, password);
  const[{user}, dispatch]= useContext(DataContext)

  const navigate = useNavigate();
  const navStateData = useLocation()
  // console.log(user);
const [loading, setLoading] =useState(
  {SignIn:false,
  SignUp:false
  }
)

  const authHandler=(e)=>{
    e.preventDefault();
    console.log(e.target.name);
    if(e.target.name==="SignIn"){
      setLoading({...loading, SignIn:true})
      signInWithEmailAndPassword(auth, email, password).then((userInfo)=>{
        dispatch({
          type:Type.SET_USER,
          user:userInfo.user
        })
        setLoading({...loading, SignIn:false})
        navigate(navStateData?.state?.redirect ||"/");
        // console.log(userInfo);
      }).catch((err)=>{
        console.log(err);
        setError(err.message);
        setLoading({...loading, SignIn:false})
      })
    }else{
      createUserWithEmailAndPassword(auth, email, password)
      .then((userInfo) => {
        setLoading({...loading, SignUp:true})
        // console.log(userInfo);
        dispatch({
          type: Type.SET_USER,
          user: userInfo.user,
        });
        setLoading({...loading, SignUp:false})
       navigate(navStateData?.state?.redirect || "/");
      })
      .catch((err) => {
        // console.log(err);
        setError(err.message)
        setLoading({...loading, SignUp:false})
        });
    }
  }
  return (
    <section className={classes.login}>
      <Link to ={"/"} >
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg"
          alt=""
        />
      </Link>
      <div className={classes.login_container}>
        <h1>Sign In</h1>
        {navStateData?.state?.msg &&(<small style={{padding:"5px", textAlign:"center", color:"red", fontWeight:"bold"}}> {navStateData?.state?.msg}
           
        </small>)}
        <form action="">
          <div>
            <label htmlFor="email">Email</label>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              id="email"
            />
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              id="password"
            />
          </div>
          <button
            onClick={authHandler}
            className={classes.login_signInButton}
            type="submit"
            name="SignIn"
          >
            {loading.SignIn ? <ClipLoader color="#000" size={20} /> : "Sign In"}
          </button>
          <p>
            By signing-in, you agree to Amazon's Conditions of Use and Privacy
            Notice.
          </p>
          <button
            onClick={authHandler}
            className={classes.login_registerButton}
            type="submit"
            name="SignUp"
          >
            {loading.SignUp ? (
              <ClipLoader color="#f0c14b" size={20} />
            ) : (
              "Create Your Amazon Account"
            )}
          </button>
          {error && (
            <small style={{ paddingTop: "5px", color: "red" }}>{error}</small>
          )}
        </form>
      </div>
    </section>
  );
}

export default Auth;
