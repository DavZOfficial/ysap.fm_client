import React from 'react';
import Grid from '@material-ui/core/Grid';
import Slider from '@material-ui/core/Slider';
import VolumeDown from '@material-ui/icons/VolumeDown';
import VolumeUp from '@material-ui/icons/VolumeUp';



class Player extends React.Component {
    constructor(props) {
        super(props)
        this.state = {}

    }

    render() {
        return (<div id="player" class="row">
                <div id="left-hand" class="col-lg-6">
                    <div id="album-cover" class="box-row">
                      <img id="album-cover" src={require("./album2.jpg")} alt="album" height="541" width="541"></img>
                    </div>
                    <div class="dropdown">
                        <div class="dropdown-content">
                            <button type="button">Synthwave</button>
                            <button type="button">Lo-Fi</button>
                            <button type="button">House</button>
                        </div>
                        <button class="channel-selector dropbtn">Channel</button>
                        
                    </div>
                </div>
                <div id="right-hand" class="col-lg-12">
                    <div id="title-bar" class="box">
                        <h2 id="title">A random title track</h2>
                        <h3 id="artist">Davey Boy</h3>
                        <div id="links"></div>
                    </div>
                    <div id="information">
                        <p id="track-description">Ah yes here is a random stram of consciousness do you enjoy this process of me typing some random shit on my keyboard tAh yes here is a random stram of consciousness do you enjoy this process of me typing some random shit on my keyboard tAh yes here is a random stram of consciousness do you enjoy this process of me typing some random shit on my keyboard tAh yes here is a random stram of consciousness do you enjoy this process of me typing some random shit on my keyboard tAh yes here is a random stram of consciousness do you enjoy this process of me typing some random shit on my keyboard to fill up the space in this html element? I do too</p>
                        <p id="copyright">Copyright: All Rights Reserved</p>
                    </div>
                    <div id="playback-controls">
                        <button id="play-button">{">"}
                        </button>
                        
                        <div id="progress-bar">
                            <div id="bar"></div>
                        </div>
                        <h3 id="duration">2:00/2:00</h3>
                        <div id="volume-controls">
                        
                        </div>
                    </div>
                </div>
                </div>
        )
    }
}

export default Player;






{/*


<Grid container flexGrow={1}  direction="row">  {/* Player */}
                    {/*Left Hand*/}
                    <Grid item direction="column">  

                        {/* Album Cover */}
                        <Grid item>
                            <img id="album-cover" src={require("./album2.jpg")} alt="album" height="541" width="541"></img>
                        </Grid>

                        {/* Channel Selector */}
                        <Grid item>
                            <div class="dropdown">
                            <div class="dropdown-content">
                                <button type="button">Synthwave</button>
                                <button type="button">Lo-Fi</button>
                                <button type="button">House</button>
                            </div>
                            <button class="channel-selector dropbtn">Channel</button>
                            </div>
                        </Grid>
                    
                    </Grid>

                    {/* Right Hand  */}
                    <Grid item direction="column" xs alignItems="flex-end">
                        
                        {/* Title Bar */}
                        <Grid container item direction="row">

                            <Grid item>
                                <h2 id="title">A random title track</h2>
                            </Grid>
                            <Grid item>
                                <h3 id="artist">Davey Boy</h3>
                            </Grid>
                            <Grid item>
                                <div id="links"></div>
                            </Grid>
                        </Grid>

                        {/* Information */}
                        <Grid container item direction="column">

                            {/* Track Description */}
                            <Paper item md={12} lg={6}>
                                <p id="track-description">Ah yes here is a random stram of consciousness do you enjoy this process of me typing some random shit on my keyboard tAh yes here is a random stram of consciousness do you enjoy this process of me typing some random shit on my keyboard tAh yes here is a random stram of consciousness do you enjoy this process of me typing some random shit on my keyboard tAh yes here is a random stram of consciousness do you enjoy this process of me typing some random shit on my keyboard tAh yes here is a random stram of consciousness do you enjoy this process of me typing some random shit on my keyboard to fill up the space in this html element? I do too</p>
                            </Paper>
                            {/* Copyright */}
                            <Grid item>
                                <p id="copyright">Copyright: All Rights Reserved</p>
                            </Grid>


                        </Grid>
                    </Grid>
                </Grid>
            </div>

*/}