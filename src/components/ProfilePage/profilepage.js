import React from "react";
import "./profilepage.css";
import { BrowserRouter as Switch } from 'react-router-dom'

const ProfilePage = (props) => {
    
    console.log(props.sessionToken)
    
    return(
        // <Router>
            <Switch>    
                <h1>My Profile</h1>
            </Switch>
        // </Router>
    );
}

export default ProfilePage;