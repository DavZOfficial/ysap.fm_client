import React from 'react';

import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Slider from '@material-ui/core/Slider';
import Hidden from "@material-ui/core/Hidden";
import Container from "@material-ui/core/Container";
import VolumeDown from '@material-ui/icons/VolumeDown';
import VolumeUp from '@material-ui/icons/VolumeUp';
import io from "socket.io-client"
import PlayButton from "./modules/PlayButton";
import ReactHowler from 'react-howler';
import reactparser from "html-react-parser";
import icy from "icy";



var playio = io(":4000");

class Player extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            domain: "http://localhost:8000",
            playing: true,
            channel: "Synthwave",
            mount: "synthwave",
            track_title: "Loading...",
            track_artist: "Loading...",
            track_description: <p id="track-description">Loading...</p>,
            copyright: "Loading...",
            duration: 4.20,
            progress: 0.2,
            volume: 1,
            album_cover: null,
            TVstatic: true
        }
        this.ctx = undefined
        this.imageData = undefined
    }

    componentDidMount = () => {
        playio.emit("metadata", this.state.mount)
        var reactThis = this;

        this.fix_dpi()  //fixes blurrines

        this.ctx = this.refs.canvas.getContext("2d")
        this.imageData = this.ctx.createImageData(this.refs.canvas.width, this.refs.canvas.height);
        

        this.setState({
            domain: "http://" + playio.io.engine.hostname + ":8000/"  //set domain to whatever socket is connected to
        })

        playio.on("metadata", function(msg) {
            reactThis.setState((state) => ({
                track_title: msg.title,
                track_artist: msg.artist,
                track_description: reactparser(msg.description),
                copyright: msg.copyright,
                duration: msg.duration,
                album_cover: msg.album_cover.buf,
                TVstatic: false,
                volume: 1
            }), function() {
                reactThis.drawAlbumCover(msg.album_cover.buf)
                })
        })
    }

    fix_dpi = () => {
        let dpi = window.devicePixelRatio;
        let style_height = +getComputedStyle(this.refs.canvas).getPropertyValue("height").slice(0, -2);
        let style_width = +getComputedStyle(this.refs.canvas).getPropertyValue("width").slice(0, -2);
        this.refs.canvas.setAttribute('height', style_height * dpi);
        this.refs.canvas.setAttribute('width', style_width * dpi);
    }

    drawAlbumCover = (data) => {
            let that = this
            

            var image = new Image();
            image.src =  'data:image/jpeg;base64,' + data

            image.onload = function() {
                that.ctx.drawImage(image, 0, 0, image.width,    image.height,     // scales so that the image fits inside the canvas element
                    0, 0, that.refs.canvas.width, that.refs.canvas.height);
            };
    }
    
    tvStaticLooper = () => {
        if (this.refs.canvas !== undefined) {     //making sure we don't get an error here because component hasnt rendered.
            if (this.state.TVstatic) {
                for (var i = 0, a = this.imageData.data.length; i < a; i++) {
    
                    this.imageData.data[i] = (Math.random() * 255);
                }
                this.ctx.putImageData(this.imageData, 0, 0);
                requestAnimationFrame(this.tvStaticLooper)
            }
        }
        
    }

    componentDidUpdate = () => {
        if (this.refs.canvas !== undefined) {  
            if (this.state.TVstatic) {                            //run static loop here
                requestAnimationFrame(this.tvStaticLooper);
            }
        }
    }


    onPlayClicked = (playstate) => {
        this.setState((state) => (
            {playing: playstate}
        ), function() {
            if (!this.state.playing) {
                //this.player.howler.stop();
                this.player.howler.unload();
            }
        })
    }

    onStop = () => {
        this.setState((state) => (
            {playing: true}
        ))
    }

    onChannelChanged = (event, newMountLink) => {
        if (!this.state.TVstatic) {
            this.player.howler.stop()
            this.player.howler.unload()
            this.setState((state) => (
                {
                channel: newMountLink,
                mount: newMountLink,
                TVstatic: true,
                track_title: "Loading...",
                track_artist: "Loading...",
                track_description: <p id="track-description">Loading...</p>,
                copyright: "Loading...",
                duration: 0}
            ), function() {
                //this.player.howler.load()
                this.player.howler.play()
                playio.emit("metadata", newMountLink)
            })
        }
    }


    sliderChanged = (event, newValue) => {
        this.setState((state) => ({
            volume: newValue / 100
        }))
    }

    render() {
        return (
            <div id="occupy-max-height">
                <Grid container justify="space-around" spacing={5} direction="row">  {/* Player */}
                    {/*Left Hand*/}
                    <Grid item>  
                        <Grid container direction="column" alignItems="stretch" spacing={0}>
                            {/* Album Cover */}
                        <Grid item>
                        <canvas id="album-cover" ref="canvas" height="500" width="500"></canvas>
                        </Grid>

                        {/* Channel Selector */}
                        <Box xs={"auto"}>
                            <div class="dropdown">
                            <div class="dropdown-content">
                                <button type="button" onClick={(event) => this.onChannelChanged(event, "synthwave")}>Synthwave</button>
                                <button type="button" onClick={(event) => this.onChannelChanged(event, "lofi")}>Lo-Fi</button>
                                <button type="button" onClick={(event) => this.onChannelChanged(event, "house")}>House</button>
                            </div>
                            <button class="channel-selector dropbtn">{this.state.channel}</button>
                            </div>
                        </Box>
                        </Grid>
                        
                    
                    </Grid>

                    {/* Right Hand  */}
                    <Grid container direction="column" justify="space-evenly" xs alignItems="flex-start" spacing={0}>
                        {/* Title Bar */}
                        <Grid item justify="space-around" spacing={0} direction="column">

                            <Grid item xs spacing={0}>
                                <h2 id="title">{this.state.track_title}</h2>
                            </Grid>
                            <Grid item xs spacing={0}>
                                <h3 id="artist">{this.state.track_artist}</h3>
                            </Grid>
                            <Grid item lg>
                                <div id="links"></div>
                            </Grid>
                        </Grid>

                        {/* Information */}
                        <Grid container item direction="column" xs justify="flex-start" spacing={0} alignItems="stretch">

                            {/* Track Description */}
                            <Hidden xsDown>
                                <Grid item style={{maxHeight: 250, overflow: 'auto'}} >
                                    <div id="track-description">{this.state.track_description}</div>
                                </Grid>
                            </Hidden>
                            
                            {/* Copyright */}
                            <Grid item>
                                <p id="copyright">License: {this.state.copyright}</p>
                            </Grid>
                        
                        </Grid>

                        {/* Playback Controls  */}
                        <Grid container justify="space-between" spacing={3} alignItems="center" direction="row">
                            <ReactHowler
                            src={this.state.domain + this.state.mount}
                            playing={this.state.playing}
                            html5={true}
                            format={["mp3"]}
                            volume={this.state.volume}
                            onEnd={() => this.onStop()}
                            ref={(ref) => (this.player = ref)}
                            ></ReactHowler>
                            <Grid item>
                                <PlayButton playing={this.state.playing} onClick={(state) => this.onPlayClicked(state)}></PlayButton>
                            </Grid>
                            <Grid item xs>
                                <div id="progress-bar">
                                    <div id="bar" style={{width: (this.state.progress*100).toString() + "%"}}></div>
                                </div>
                            </Grid>
                            <Grid item>
                                <h3 id="duration">{this.state.duration*this.state.progress}/{this.state.duration}</h3>
                            </Grid>
                            <Grid item xs={4} xl={5} md={3}>
                                <Grid container spacing={1} alignItems={"center"}>
                                    <Grid item>
                                    <VolumeDown style={{color: "white"}}/>
                                    </Grid>
                                    <Grid item xs>
                                    <Slider defaultValue={100} onChange={(event, newValue) => this.sliderChanged(event, newValue)} aria-labelledby="continuous-slider" />
                                    </Grid>
                                    <Grid item>
                                    <VolumeUp style={{color: "white"}} height={32}/>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </div>


        )
    }
}

export default Player;


/*


icy.get("http://192.168.2.9", function (res) {      //maybe try without the synthwave thing
            console.log('HTTP HEADERS:');
            console.log(res.headers);
            // log any "metadata" events that happen
            res.on('metadata', function (metadata) {
                var parsed = icy.parse(metadata);
                console.error(parsed);
                });
            
        })


*/
