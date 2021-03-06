import { auth } from "../firebase";
import React, { useState } from "react";
import { Link , useHistory} from "react-router-dom";
import "../styles/login.css";

export const Login = () => {
    const history = useHistory();
    const [email , setEmail] = useState("");
    const [password , setPassword] = useState("");

    const enterEmail = (e) => {
        setEmail(e)
    }

    const enterPassword = (e) => {
        setPassword(e)

    }

    const signIn = (e) => {
        e.preventDefault();
        auth.signInWithEmailAndPassword(email,password)
        .then((auth) => {
            if(auth){
                history.push('/')
            }
        })
        .catch(error => alert(error.message))

    }

    const register = (e) => {
        e.preventDefault();
        console.log("register")
        //regiser 
        auth.createUserWithEmailAndPassword(email , password)
            .then((auth) => {
                console.log(auth)
                if(auth){
                    history.push('/')
                }
            })
            .catch(error => alert(error.message));   
    }


  return (
    <div className="login">
      <Link to="/">
        <img
          src="https://logo-logos.com/wp-content/uploads/2016/12/Amazon_logo.png"
          alt="amazon-logo"
          className="login__image"
        />
      </Link>

      <div className='login__container'>
          <h1 className="login__signInTitle">Sign In</h1>

          <form type='submit'>
              <h5>E-Mail</h5>
              <input type="text" value={email} onChange={e => enterEmail(e.target.value)}/>

              <h5>Password</h5>
              <input type='password' value={password} onChange={e => enterPassword(e.target.value)}/>

              <button type='submit' onClick={signIn} className='login__signInButton'>Sign In</button>
              <p>
              By continuing, you agree to Amazon's Clone's Conditions of Use and Privacy Notice.
              </p>

              <button className="login__registerButton" onClick={register}>Create An Account</button>
          </form>
      </div>
    </div>
  );
};
