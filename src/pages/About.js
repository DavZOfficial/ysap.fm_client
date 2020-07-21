import React from 'react';

import Grid from "@material-ui/core/Grid";

class About extends React.Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    render() {
        return (
            <div>
                
                <Grid container justify="space-around" spacing={5} direction="row">  {/* Player */}
                    {/*Left Hand*/}
                    <Grid item direction="column" justify="space-around" xs alignItems="flex-end">
                        
                        {/* Title Bar */}
                        <Grid item justify="space-around" spacing={5} direction="column">

                            <Grid item lg spacing={0}>
                                <h2 id="title">About</h2>
                            </Grid>
                        </Grid>

                        {/* Information */}
                        <Grid container item direction="column">

                            {/* Track Description */}
                            <Grid item>
                                <p id="track-description">YSAP.fm is a 24/7 radio music player designed to showcase different styles of music and help promote different artists by putting their best music on the platform.<br></br><br></br>
                                Music plays automatically on a 24/7 basis and allows you to listen to different “channels” that represent niches or styles of music.<br></br><br></br>
                                The project was founded by Davit Gogiberidze, alongside the help of Benjamin Smith, and has been purposed specifically for the WSAP server.<br></br><br></br>
                                We designed YSAP.FM to provide users with a unique listening experience as opposed to a boring old listening session. Best of all, it’s free!</p>
                            </Grid>

                        </Grid>
                    </Grid>


                    {/* Right Hand  */}
                    <Grid item direction="column" justify="space-around" xs alignItems="flex-end">
                        
                        {/* Title Bar */}
                        <Grid item justify="space-around" spacing={5} direction="column">

                            <Grid item lg spacing={0}>
                                <h2 id="title">Contact</h2>
                            </Grid>
                        </Grid>

                        {/* Information */}
                        <Grid container item direction="column">

                            {/* Track Description */}
                            <Grid item>
                                <p id="track-description">
                                    Davit Gogiberidze: <br></br>
                                    - Email: davitgogiberidze101@gmail.com <br></br>
                                    - SoundCloud: <a href="https://soundcloud.com/davz-razorblades" target="_blank" rel="noopener noreferrer">DavZ</a>
                                </p>
                            </Grid>

                        </Grid>
                    </Grid>
                </Grid>
            </div>

        )
    }
}

export default About;