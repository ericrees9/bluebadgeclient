import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import "./categories.css";
import { Box, Grid } from "grommet";
import AddShow from "../AddShow/addshow";
import ProfilePage from "../ProfilePage/profilepage";

const Categories = (props) => {
    const [ active1, setActive1] = useState(false);
    const [ active2, setActive2] = useState(false);

    console.log(props.sessionToken)

    return(
        <Router>
           <Switch>
               <Route path="/categories">
                    <div className="mainDiv">
                            <Grid
                                rows={["small", "small"]}
                                columns={['small', 'large']}
                                margin={{ "top": "6em" }}
                                gap="small"
                                areas={[
                                    { name: 'newShowPic', start: [0, 0], end: [1, 0] },
                                    { name: 'searchPic', start: [0, 1], end: [0, 1] },
                                    { name: 'profilePic', start: [1, 1], end: [1, 1] },
                                ]}
                                >
                                    <Box 
                                    gridArea="newShowPic" 
                                    background="url(https://images.unsplash.com/photo-1466150036782-869a824aeb25?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9)" 
                                    animation={ active1 ? { "type": "zoomOut", "delay": 0, "duration": 1700, "size": "medium" } : null }
                                    onMouseOver={() => setActive1(true)}
                                    onMouseOut={() => setActive1(false)} 
                                    overflow="hidden"
                                    >
                                    <Link to="/addshow">
                                        <Box 
                                        background={{
                                            "color": "dark-2",
                                            "opacity": "medium"
                                        }}
                                        fill={ true }
                                        // onClick={() => <Link to="/addshow" /> }
                                        overflow="hidden"
                                        >
                                            <h1 className="newShowHeader">Add a Show</h1>
                                        </Box>
                                    </Link>
                                </Box>
                                
                                <Box 
                                gridArea="searchPic" 
                                background="url(https://images.unsplash.com/photo-1493676304819-0d7a8d026dcf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9)"
                                >
                                    <Box 
                                    background={{
                                        "color": "dark-3",
                                        "opacity": "strong"
                                    }}
                                    fill={ true }
                                    overflow="hidden"
                                    >
                                        <h3 className="searchHeader">Coming Soon</h3>
                                    </Box>
                                </Box>
                                <Box 
                                gridArea="profilePic" 
                                background="url(https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9)" 
                                animation={ active2 ? { "type": "zoomOut", "delay": 0, "duration": 1700, "size": "medium" } : null }
                                onMouseOver={() => setActive2(true)}
                                onMouseOut={() => setActive2(false)}
                                overflow="hidden"
                                >
                                    <Link to="/profilepage">
                                        <Box 
                                        background={{
                                            "color": "dark-2",
                                            "opacity": "medium"
                                        }}
                                        fill={ true }
                                        overflow="hidden"
                                        >
                                            <h2 className="myProfileHeader">My Profile</h2>
                                        </Box>
                                    </Link>
                                </Box>
                            </Grid>
                    </div>
                </Route>
                <Route exact path="/addshow" component={AddShow}><AddShow sessionToken={ props.sessionToken } /></Route>
                <Route exact path="/profilepage" component={ProfilePage}><ProfilePage sessionToken={ props.sessionToken } /></Route>
            </Switch>
        </Router>
    )
}

export default Categories;