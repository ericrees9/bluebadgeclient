import React, { useState } from "react";
import { BrowserRouter as Route } from 'react-router-dom';
import { Box, TextInput, Button, Tabs, Tab } from "grommet";
import "./auth.css";
import Categories from "../Categories/categories";

const Auth = (props) => {
    const [ login, setLogin ] = useState(false);
    const [ username, setUsername ] = useState("");
    const [ password, setPassword ] = useState("");
    const [ firstName, setFirstName ] = useState("");
    const [ lastName, setLastName ] = useState("");
    const [ email, setEmail ] = useState("");
    //const [token, setToken] = useState("")

    let changeLogin = (e) => {
        e.preventDefault();
        setLogin(!login)

        setUsername("")
        setEmail("")
        setPassword("")
        setFirstName("")
        setLastName("")
    }

    console.log(props.sessionTokenTest1)
    console.log(props.sessionTokenTest2)

    let handleSignUp = (e) => {
        e.preventDefault();
        let url = "https://concertbook.herokuapp.com/user/create"

        fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                user: {    
                    username: username,
                    firstName: firstName,
                    lastName: lastName,
                    email: email,
                    password: password
                }
            })
        }).then( res => res.json())
        .then( data => {
            props.tokenHandler(data.sessionToken)
        })
    }

    let handleLogin = (e) => {
        e.preventDefault();
        let url = "https://concertbook.herokuapp.com/user/signin"

        fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                user: {    
                    email: email,
                    password: password
                }
            })
        }).then( res => res.json())
        .then( data => {
            props.tokenHandler(data.sessionToken)
        })
    }

    return(
        // <Router>
        //     <Switch>
                <Box
                    background={{ 
                        "color": "dark-1",
                        "dark": true,
                        "opacity": "strong"
                    }}
                    border={{ 
                        color: "accent-4",
                        size: "large",
                    }}
                    direction="column"
                    height={{ "min": "medium", "max": "large" }}
                    justify="center"
                    pad={ "large" }
                    responsive={ true }
                    round={ "small" }
                    width={{ "min": "medium", "max": "large" }}
                >
                    <div>
                        <Tabs>
                            <Tab className="Tabs" title="Log In" margin={ "small" }>
                                <React.Fragment>
                                    <TextInput
                                        placeholder="Email"
                                        value={email}
                                        onChange={event => setEmail(event.target.value)}
                                    />
                                    <br />
                                    <br />
                                    <TextInput
                                        placeholder="Password"
                                        value={password}
                                        onChange={event => setPassword(event.target.value)}
                                        type="password"
                                    />
                                    <br />
                                    <br />
                                    <Button
                                        alignSelf="center"
                                        label="Log In"
                                        active={ true }
                                        color={"accent-4"}
                                        gap="xsmall"
                                        hoverIndicator={{
                                            dark: true,
                                        }}
                                        type="submit"
                                        onClick={(e) => changeLogin(e)}
                                        onClick={(event) => handleLogin(event)}
                                        
                                    />
                                </React.Fragment>
                            </Tab>
                            <Tab className="Tabs" title="Sign Up" margin={ "small" }>
                                <React.Fragment>
                                    <TextInput
                                        placeholder="Username"
                                        value={username}
                                        onChange={(e) => setUsername(e.target.value)}
                                    />
                                    <br />
                                    <TextInput
                                        placeholder="First Name"
                                        value={firstName}
                                        onChange={(e) => setFirstName(e.target.value)}
                                    />
                                    <br />
                                    <TextInput
                                        placeholder="Last Name"
                                        value={lastName}
                                        onChange={(e) => setLastName(e.target.value)}
                                    />
                                    <br />
                                    <TextInput
                                        placeholder="Email address"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                    />
                                    <br />
                                    <TextInput
                                        placeholder="Password"
                                        value={password}
                                        type="password"
                                        onChange={(e) => setPassword(e.target.value)}
                                    />
                                    <br />
                                    <Button
                                        alignSelf="center"
                                        label="Sign Up"
                                        active={ true }
                                        color={"accent-4"}
                                        gap="xsmall"
                                        hoverIndicator={{
                                            dark: true,
                                        }}
                                        type="submit"
                                        onClick={(e) => changeLogin(e)}
                                        onClick={(event) => handleSignUp(event)}
                                    />
                                </React.Fragment>
                            </Tab>
                        </Tabs>

                        <Route exact path="/categories" component={Categories} sessionTokenTest2={ props.sessionToken } />
                    </div>
                </Box>
        //     </Switch>
        // </Router>
    )
}

export default Auth;