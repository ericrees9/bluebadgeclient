import React, { useState, useEffect } from 'react';
import './App.css';
import Navbar from "./components/Navbar/navbar";
import Auth from "./components/Auth/auth";
import Categories from "./components/Categories/categories";

function App() {
  const [token, setToken] = useState(false)
  const [signInCount, setSignInCount] = useState(0)

  useEffect(() => {
    if(localStorage.getItem("token")) {
      setToken(localStorage.getItem("token"))
    }
  }, [])

  const logoutCounter = () => {
    setSignInCount(signInCount + 1)
    console.log(signInCount)
  }

  const updateToken = (newToken) => {
    localStorage.setItem("token", newToken)
    setToken(newToken)
  }

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
        <div className="mainDiv">
        
        { token === localStorage.getItem("token") ? <Categories /> : <Auth tokenHandler={ updateToken } /> }

        </div>
    </div>
  );
}

export default App;
