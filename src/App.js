import React, {useState} from 'react';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import './App.css';
import Home from "./components/Home";
import Login from "./components/Login";
import Blog from "./components/Blog";
import Blogpost from "./components/Blogpost";
import Navbar from "./components/Navbar";


function App() {
    // We houden in de state bij of iemand is "ingelogd" (simpele versie)
    const [isAuthenticated, toggleIsAuthenticated] = useState(false);

    return (
        <Router>
            <Navbar authenticated={isAuthenticated} handler={toggleIsAuthenticated}/>

            <Switch>
                <Route exact path="/">
                    <Home/>
                </Route>
                <Route exact path="/login">
                    <Login handler={toggleIsAuthenticated}/>
                </Route>
                <Route exact path="/blogposts">
                    {isAuthenticated ? <Blog handler={toggleIsAuthenticated}/> : <Home />}
                </Route>
                <Route exact path="/blogposts/:blogId">
                    {isAuthenticated ? <Blogpost/> : <Home />}
                </Route>

            </Switch>


        </Router>


    );
}

export default App;
