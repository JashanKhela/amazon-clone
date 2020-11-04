import React, { useEffect } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import { Header } from './components/Header'
import { Home } from './pages/Home'
import { Checkout } from './pages/Checkout'
import { Login } from './pages/Login'
import { Payment } from './pages/Payment'
import './styles/app.css'
import { auth } from "./firebase";
import { useStateValue } from "./StateProvider";
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';

const promise = loadStripe('pk_live_AUDqZGqKFPs6iAvKS7V8kVx800kP6PYHXx');

export default function App() {

  const [ {} , dispatch] = useStateValue();

  useEffect(() => {
    //will only run when component loads because we didn't pass anything through the array
    auth.onAuthStateChanged(authUser => {
      if(authUser)  {
        //when the user is logged in
        dispatch({
          type:"SET_USER",
          user: authUser,
        })
      } else {
        //when the user is logged out
        dispatch({
          type:"SET_USER",
          user: null,
        })
      }
    })
}, [dispatch])

  return (
    <Router>
      <div className="app">
        <Switch>
        <Route path="/login">
            <Login/>
          </Route>
          <Route path="/checkout">
            <Header />
            <Checkout/>
          </Route>
          <Route path="/payment">
          <Header />
          <Elements stripe={promise}>
            <Payment />
          </Elements>
          </Route>
          <Route path="/">
            <Header />
            <Home />
          </Route>
        </Switch>
      </div>
      {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
    </Router>
  );
}

