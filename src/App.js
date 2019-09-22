import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Redirect, Switch, Route } from 'react-router-dom';
import './App.css';
import Navbar from "./components/Navbar/navbar";
import Auth from "./components/Auth/auth";
import Categories from "./components/Categories/categories";

function App() {
  const [token, setToken] = useState("")
  // const [signInCount, setSignInCount] = useState(0)

  useEffect(() => {
    if(localStorage.getItem("token")) {
      setToken(localStorage.getItem("token"))
    }
  }, [])

  // const logoutCounter = () => {
  //   setSignInCount(signInCount + 1)
  //   //console.log(signInCount)
  // }

  const updateToken = (newToken) => {
    localStorage.setItem("token", newToken)
    setToken(newToken)
    //console.log(newToken)
  }

  //console.log(token)

  const clearToken = () => {
    localStorage.clear()
    setToken("")
  }

  // let storeSessionToken = (token) => {
  //   setToken(token)
  // }  
  
  return (
    <div className="App">
      <Navbar logout={ clearToken } tokenStatus={ token } />
        <div className="appDiv">
              <Router>
                <Switch>
                  
                    <Route exact path="/" render={() => ( token === localStorage.getItem('token') ? 
                      ( <Redirect to="/categories" />
                      ) : (
                      <Auth tokenHandler={ updateToken } /> ) 
                    )}/>

                    <Route exact path="/categories"><Categories sessionToken={ token } /></Route>
              
              </Switch>
            </Router>
        </div>
    </div>
  );
}

export default App;
