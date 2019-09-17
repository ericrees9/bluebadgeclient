import React, { useState } from "react";
import { Box, TextInput, Button, Tabs, Tab } from "grommet";
import "./auth.css";

const Auth = (props) => {
    const [ login, setLogin ] = useState(false);
    const [ username, setUsername ] = useState("");
    const [ password, setPassword ] = useState("");
    const [ firstName, setFirstName ] = useState("");
    const [ lastName, setLastName ] = useState("");
    const [ email, setEmail ] = useState("");

    let changeLogin = (e) => {
        e.preventDefault();
        setLogin(!login)

        setUsername("")
        setEmail("")
        setPassword("")
        setFirstName("")
        setLastName("")
    }

    let handleSignUp = (e) => {
        e.preventDefault();
        let url = "http://localhost:3001/user/create"

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
        let url = "http://localhost:3001/user/signin"

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
                                label="Log In"
                                active={ true }
                                color={"accent-4"}
                                gap="xsmall"
                                hoverIndicator={{
                                    dark: true,
                                }}
                                type="submit"
                                onClick={(e) => changeLogin(e)}
                                onClick={(e) => handleLogin(e)}
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
                                label="Sign Up"
                                active={ true }
                                color={"accent-4"}
                                gap="xsmall"
                                hoverIndicator={{
                                    dark: true,
                                }}
                                type="submit"
                                onClick={(e) => changeLogin(e)}
                                onClick={(e) => handleSignUp(e)}
                            />
                        </React.Fragment>
                    </Tab>
                </Tabs>
            </div>
        </Box>
    )
}

export default Auth;