import React from 'react';

import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Slider from '@material-ui/core/Slider';
import Hidden from "@material-ui/core/Hidden";
import Container from "@material-ui/core/Container";
import VolumeDown from '@material-ui/icons/VolumeDown';
import VolumeUp from '@material-ui/icons/VolumeUp';

import PlayButton from "./modules/PlayButton";

class Player extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            playing: false,
            channel: "Synthwave",
            track_title: "Wavestation",
            track_artist: "Exit K",
            track_description: <p id="track-description">An amazing banger that my friend has made ok here is some lorem ipsum now hahahhdhaushfiucwnia asdbgiencrc wergfdf h df hs fgjwrtyhsd fhsf hadrh se ryfrgtyj gryy vwe crgd3 ryjb5 uykmvncbxe rseg evrbdyj tyghg vetr6 ubrtvhce rgbn tryjm 5nbhf dwxefb 4tvy knnbtvryd rsgcfes drybnryv jv35cre thgv ert try nbrtgy jfrtyjg brty bjve dcgertjb nrtyvj etrhybn4 tjAn amazing banger that my friend has made ok here is some lorem ipsum now hahahhdhaushfiucwnia asdbgiencrc wergfdf h df hs fgjwrtyhsd fhsf hadrh se ryfrgtyj gryy vwe crgd3 ryjb5 uykmvncbxe rseg evrbdyj tyghg vetr6 ubrtvhce rgbn tryjm 5nbhf dwxefb 4tvy knnbtvryd rsgcfes drybnryv jv35cre thgv ert try nbrtgy jfrtyjg brty bjve dcgertjb nrtyvj etrhybn4 tjAn amazing banger that my friend has made ok here is some lorem ipsum now hahahhdhaushfiucwnia asdbgiencrc wergfdf h df hs fgjwrtyhsd fhsf hadrh se ryfrgtyj gryy vwe crgd3 ryjb5 uykmvncbxe rseg evrbdyj tyghg vetr6 ubrtvhce rgbn tryjm 5nbhf dwxefb 4tvy knnbtvryd rsgcfes drybnryv jv35cre thgv ert try nbrtgy jfrtyjg brty bjve dcgertjb nrtyvj etrhybn4 tjAn amazing banger that my friend has made ok here is some lorem ipsum now hahahhdhaushfiucwnia asdbgiencrc wergfdf h df hs fgjwrtyhsd fhsf hadrh se ryfrgtyj gryy vwe crgd3 ryjb5 uykmvncbxe rseg evrbdyj tyghg vetr6 ubrtvhce rgbn tryjm 5nbhf dwxefb 4tvy knnbtvryd rsgcfes drybnryv jv35cre thgv ert try nbrtgy jfrtyjg brty bjve dcgertjb nrtyvj etrhybn4 tjAn amazing banger that my friend has made ok here is some lorem ipsum now hahahhdhaushfiucwnia asdbgiencrc wergfdf h df hs fgjwrtyhsd fhsf hadrh se ryfrgtyj gryy vwe crgd3 ryjb5 uykmvncbxe rseg evrbdyj tyghg vetr6 ubrtvhce rgbn tryjm 5nbhf dwxefb 4tvy knnbtvryd rsgcfes drybnryv jv35cre thgv ert try nbrtgy jfrtyjg brty bjve dcgertjb nrtyvj etrhybn4 tjAn amazing banger that my friend has made ok here is some lorem ipsum now hahahhdhaushfiucwnia asdbgiencrc wergfdf h df hs fgjwrtyhsd fhsf hadrh se ryfrgtyj gryy vwe crgd3 ryjb5 uykmvncbxe rseg evrbdyj tyghg vetr6 ubrtvhce rgbn tryjm 5nbhf dwxefb 4tvy knnbtvryd rsgcfes drybnryv jv35cre thgv ert try nbrtgy jfrtyjg brty bjve dcgertjb nrtyvj etrhybn4 tjAn amazing banger that my friend has made ok here is some lorem ipsum now hahahhdhaushfiucwnia asdbgiencrc wergfdf h df hs fgjwrtyhsd fhsf hadrh se ryfrgtyj gryy vwe crgd3 ryjb5 uykmvncbxe rseg evrbdyj tyghg vetr6 ubrtvhce rgbn tryjm 5nbhf dwxefb 4tvy knnbtvryd rsgcfes drybnryv jv35cre thgv ert try nbrtgy jfrtyjg brty bjve dcgertjb nrtyvj etrhybn4 tjAn amazing banger that my friend has made ok here is some lorem ipsum now hahahhdhaushfiucwnia asdbgiencrc wergfdf h df hs fgjwrtyhsd fhsf hadrh se ryfrgtyj gryy vwe crgd3 ryjb5 uykmvncbxe rseg evrbdyj tyghg vetr6 ubrtvhce rgbn tryjm 5nbhf dwxefb 4tvy knnbtvryd rsgcfes drybnryv jv35cre thgv ert try nbrtgy jfrtyjg brty bjve dcgertjb nrtyvj etrhybn4 tjAn amazing banger that my friend has made ok here is some lorem ipsum now hahahhdhaushfiucwnia asdbgiencrc wergfdf h df hs fgjwrtyhsd fhsf hadrh se ryfrgtyj gryy vwe crgd3 ryjb5 uykmvncbxe rseg evrbdyj tyghg vetr6 ubrtvhce rgbn tryjm 5nbhf dwxefb 4tvy knnbtvryd rsgcfes drybnryv jv35cre thgv ert try nbrtgy jfrtyjg brty bjve dcgertjb nrtyvj etrhybn4 tjAn amazing banger that my friend has made ok here is some lorem ipsum now hahahhdhaushfiucwnia asdbgiencrc wergfdf h df hs fgjwrtyhsd fhsf hadrh se ryfrgtyj gryy vwe crgd3 ryjb5 uykmvncbxe rseg evrbdyj tyghg vetr6 ubrtvhce rgbn tryjm 5nbhf dwxefb 4tvy knnbtvryd rsgcfes drybnryv jv35cre thgv ert try nbrtgy jfrtyjg brty bjve dcgertjb nrtyvj etrhybn4 tjAn amazing banger that my friend has made ok here is some lorem ipsum now hahahhdhaushfiucwnia asdbgiencrc wergfdf h df hs fgjwrtyhsd fhsf hadrh se ryfrgtyj gryy vwe crgd3 ryjb5 uykmvncbxe rseg evrbdyj tyghg vetr6 ubrtvhce rgbn tryjm 5nbhf dwxefb 4tvy knnbtvryd rsgcfes drybnryv jv35cre thgv ert try nbrtgy jfrtyjg brty bjve dcgertjb nrtyvj etrhybn4 tj</p>,
            copyright: "cc-by-sa",
            duration: 4.20,
            progress: 0.2
        }

    }

    onPlayClicked = (playstate) => {
        this.setState((state) => (
            {playing: playstate}
        ), function() {
            this.props.socket.emit("event", "BOOGAAAA" + Math.random().toString() + this.state.playing)
        })
    }

    render() {
        return (
            <div>
                <Grid container justify="space-around" spacing={5} direction="row">  {/* Player */}
                    {/*Left Hand*/}
                    <Grid item>  
                        <Grid container direction="column" alignItems="stretch" spacing={0}>
                            {/* Album Cover */}
                        <Grid item>
                            <img id="album-cover" src={require("./album2.jpg")} style={{"border-radius": "20px"}} alt="album"></img>
                        </Grid>

                        {/* Channel Selector */}
                        <Box xs={"auto"}>
                            <div class="dropdown">
                            <div class="dropdown-content">
                                <button type="button">Synthwave</button>
                                <button type="button">Lo-Fi</button>
                                <button type="button">House</button>
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
                                <p id="copyright">Copyright: {this.state.copyright}</p>
                            </Grid>
                        
                        </Grid>

                        {/* Playback Controls  */}
                        <Grid container justify="space-between" spacing={3} alignItems="center" direction="row">
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
                                    <Slider aria-labelledby="continuous-slider" />
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
