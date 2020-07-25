import React from "react";
import Dropzone from "react-dropzone";
import Grid from "@material-ui/core/Grid";





var licenseInfo = {
    "no-rights-reserved": "Also known as CC0, it lets you opt out of copyright protection and give away your music to the public. You should only apply CC0 on your own work, unless you have the rights necessary to apply it to another person's work.",
    "all-rights-reserved": "The copyright holder of the content (hopefully you) will not allow any other entities to take your material and repurpose it without explicit permission from the copyright holder (hopefully you). By submitting music to this service, you automatically give us permission to host your file online, meaning we count as an exception.",
    "cc-by": "Users are free to copy and redistribute your material in any material or format, and remix or transform your content for any purpose including commercially. This is on the notion that they give appropriate credit to the artist (you?), provide a link to the license and indicate if changes were made.",
    "cc-by-sa": "Users are free to copy and redistribute your material in any material or format, and remix or transform your content for any purpose including commercially. This is on the notion that they give appropriate credit to the artist (you?), provide a link to the license and indicate if changes were made. If they remix or transform the material, they must distribute your contributions under the same license as the original work.",
    "cc-by-nc": "Users are free to copy and redistribute your material in any material or format, and remix or transform your content BUT they must not use the material for commercial purposes. This is on the notion that they give appropriate credit to the artist (you?), provide a link to the license and indicate if changes were made.",
    "cc-by-nd": "Users are free to copy and redistribute your material in any material or format for any purpose even commercially. This is on the notion that they don't distribute remix, transformed or built upon versions of your material, and that they give appropriate credit to the artist (you), provide a link to the license and indicate if changes were made.",
    "cc-by-nc-nd": "Users are free to copy and redistribute your material in any material or format BUT they must not use the material for commercial purposes. This is on the notion that they don't distribute remix, transformed or built upon versions of your material, and that they give appropriate credit to the artist (you), provide a link to the license and indicate if changes were made.",
    "cc-by-nc-sa": "Users are free to copy and redistribute your material in any material or format, and remix or transform your content BUT they must not use the material for commercial purposes. This is on the notion that they give appropriate credit to the artist (you?), provide a link to the license and indicate if changes were made. If they remix or transform the material, they must distribute your contributions under the same license as the original work.",
}





class Submit extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            license_explanation: "Choose a license in the licenses tab for a brief explanation."
        };

    }


    licenseChanged = (event) => {
        const value = event.target.value === null ? '' : event.target.value
        let information = licenseInfo[event.target.value]
        if (value !== "") {
            this.setState((state) => ({
                license_explanation: information
            }))
        }  
    }

    sendNewSubmission = () => {
        
    }


    validateAllFields = () => {
        if (this.refs.trackname.value !== "" && this.refs.artistname.value !== "" && this.refs.description.value !== "") {
            //check if files uploaded
        }
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
                                <h2 id="title">Submit Your Music</h2>
                            </Grid>
                        </Grid>

                        {/* Information */}
                        <Grid container item direction="column" alignitems="stretch">
                            <Grid container spacing={2} direction="column">
                                <Grid item>
                                    <input type="text" class="submit-field constwidth" ref="trackname" placeholder="Name of your track"></input>
                                </Grid>
                                <Grid item>
                                    <input type="text" class="submit-field constwidth" ref="artistname" placeholder="What is your artist name?"></input>
                                </Grid>
                                <Grid item xs>
                                    <textarea style={{height: 200}}class="submit-field constwidth" ref="description" placeholder="Description of your Track."></textarea>
                                </Grid>
                                
                            </Grid>
                            {/* Music Submission */}
                            <Grid item xs>
                            <h3 class="submit-field">Track</h3>
                            <Dropzone class="submit-field" styles={{color: "white"}} onDrop={acceptedFiles => console.log(acceptedFiles)}>
                                {({getRootProps, getInputProps}) => (
                                    <section style={{border_color: "white"}}>
                                    <div {...getRootProps()}>
                                        <input {...getInputProps()} />
                                        <p>Drag 'n' drop a mp3 or wav</p>
                                    </div>
                                    </section>
                                )}
                                </Dropzone>
                            </Grid>
                            {/* Album Cover */}
                            <Grid item xs>
                                <h3 class="submit-field">Cover</h3>
                            <Dropzone class="submit-field" styles={{color: "white"}} onDrop={acceptedFiles => console.log(acceptedFiles)}>
                                {({getRootProps, getInputProps}) => (
                                    <section style={{border_color: "white"}}>
                                    <div {...getRootProps()}>
                                        <input {...getInputProps()} />
                                        <p>Drag 'n' drop a png or jpg</p>
                                    </div>
                                    </section>
                                )}
                                </Dropzone>
                            </Grid>
                            <Grid item>
                                <label class="submit-field" for="license" ref="licensefield">License: </label>
                                <select onChange={(event) => this.licenseChanged(event)} name="license" id="cars">
                                    <option value="no-rights-reserved">No Rights Reserved</option>
                                    <option value="all-rights-reserved">All Rights Reserved</option>
                                    <option value="cc-by">Creative Commons: By Attribution</option>
                                    <option value="cc-by-sa">Creative Commons: Attribution, Share Alike</option>
                                    <option value="cc-by-nc">Creative Commons: Attribution, Non Commercial</option>
                                    <option value="cc-by-nd">Creative Commons: Attribution, Non Derivative</option>
                                    <option value="cc-by-nc-nd">Creative Commons: Attribution, Non Commercial, Non Derivative</option>
                                    <option value="cc-by-nc-sa">Creative Commons: Attribution, Share Alike, Non Commercial</option>
                                </select>
                                </Grid>
                            <Grid item>
                                <button type="button">Submit</button>
                            </Grid>
                        </Grid>
                    </Grid>


                    {/* Right Hand  */}
                    <Grid item direction="column" justify="space-around" xs alignItems="flex-end">
                        
                        {/* Title Bar */}
                        <Grid item justify="space-around" spacing={5} direction="column">

                            <Grid item lg spacing={0}>
                                <h2 id="title">Prerequisites for a track submission</h2>
                            </Grid>
                        </Grid>

                        {/* Information */}
                        <Grid container item direction="column">

                            {/* Track Description */}
                            <Grid item>
                                <p id="track-description">
                                    The track: <br></br>
                                    - Make sure your track is at least a 120kbps mp3 file OR a .wav file<br></br>
                                    - The file has to have a 44100hz sample rate.<br></br>
                                </p>
                            </Grid>
                            <Grid item>
                                <p id="track-description">
                                    Album cover: <br></br>
                                    - At least 800x800 image resolution in either png or jpg. <br></br>
                                    - Aspect ratio has to be 1:1.
                                </p>
                            </Grid>
                            <Grid item>
                                <p id="track-description">
                                    Metadata and Information: <br></br>
                                    - Type up an interesting track description to tell us what your song is about! <br></br>
                                    - For now, include links in your track description and metadata. Links will be a feature after MVP is done.
                                </p>
                            </Grid>
                            <Grid item>
                                <p id="track-description" class="smaller">
                                    License and Copyright: <br></br>
                                    {this.state.license_explanation} <br></br>
                                    This information comes from the Australian licenses on Creative Commons located <a class="link" href="https://creativecommons.org.au/" target="_blank" rel="noopener noreferrer">here</a>. Make sure to find the Creative Commons information that is applicable in your country when submitting work online.
                                </p>
                            </Grid>

                        </Grid>
                    </Grid>
                </Grid>
            </div>
        )
    }
}

export default Submit;