import React from 'react';
//import './ysap.css';
import "./css/main.css";

import Grid from '@material-ui/core/Grid';
import Box from "@material-ui/core/Box";
import { sizing } from '@material-ui/system';
import Player from "./pages/Player";
import About from "./pages/About";
import io from "socket.io-client";


import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

var socket = io("localhost:4000");


class Routing extends React.Component {
  constructor(props) {
    super(props);
    this.state = {endpoint: "localhost:4000"};
    
  }

  componentDidMount() {
    socket.emit("event", "HELLO!")
  }


    render() {
      return (
        <div>
          <Router>
            <header>
              <Grid container direction="row" justify="flex-start" alignItems="center" alignContent="center">
                <Box item width={0.75}>
                    <Link to="/player"><img src={require("./logo.png")} alt="album" id="logo" height="116" width="116"></img></Link>
                </Box >
                <Grid item>
                  <Grid container justify="flex-end" spacing={4} alignItems="center" direction="row">
                    <Grid xs={4} item>
                        <Link to="/about">About</Link>
                    </Grid>
                    <Grid xs={4} item>
                        <Link to="/login">Login</Link>
                    </Grid>
                    <Grid xs={4} item>
                        <Link to="/submit">Submit</Link>
                    </Grid>
                  </Grid>
                </Grid>
                
              </Grid>
            </header>
            <main>
              <Switch>
                <Route path="/player">
                  <Player socket={socket}></Player>
                </Route>
                <Route path="/about">
                  <About></About>
                </Route>
                <Route path="/login">
                  <h2>Here would be the login page.</h2>
                </Route>
                <Route path="/submit">
                  <h2>Submit boi</h2>
                </Route>
                <Route path="/">
                  <h2>Welcome dudes</h2>
                </Route>
              </Switch>
            </main>
          </Router>
        </div>
      );
    }
  }

export default Routing;
