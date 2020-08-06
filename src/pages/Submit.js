import React from "react";
import Dropzone from "react-dropzone";
import Grid from "@material-ui/core/Grid";

import Drop from "./modules/DropZoneElement";

import axios from "axios";

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


//  PLEASE FIX EVERYTHING SUCH AS THE IMAGE NOT IN SIZE ALERT THING




class Submit extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            license_explanation: "Choose a license in the licenses tab for a brief explanation.",
            selectedAudio: null,
            selectedImage: null
        };

    }


    licenseChanged = (event) => {
        const value = event.target.value === null ? '' : event.target.value
        let information = licenseInfo[event.target.value]
        if (value !== "") {
            this.setState((state) => ({
                license_explanation: information,
                uploading: false
            }))
        }  
    }

    sendNewSubmission = () => {
        var validation = this.existenceCheck(false)
        var that = this
        if (validation.result) {
            this.validateResolution(this.state.selectedImage, function(imageIsInSize, that) {
                if (imageIsInSize) {
                    var data = new FormData()
                    data.set("title", that.refs.trackname.value)
                    data.set("artist", that.refs.artistname.value)
                    data.set("description", that.refs.description.value)
                    data.set("license", that.refs.licensefield.value)
                    data.set("duration", 0.2)
                    data.set("mountpoint", that.refs.mountpoint.value)
                    data.set("albumCover", that.state.selectedImage)
                    data.set("soundFile", that.state.selectedAudio)
                    console.log(data)
                    that.setState({uploading: true})              //set to TRUE here
                    alert("sending track... please wait...")
                    fetch("http://128.199.231.173:4001/api/submit/",
                    {
                        method: "POST",
                        body: data,
                        headers : { 
                            'Accept': 'application/json, text/plain, */*'
                        }
                    })
                    .then(function(res){ console.log(res); alert("Submitted.");  window.location.href = '/player';})  //check response                         instead of consol,e log add this: window.location.href = '/player'
                } else {
                    alert("IMAGE NOT IN SIZE I REPEAT IMAGE NOT IN SIZE")
                }
            })
            
        } else {
            alert(validation.reason)
        }
        
    }

    validateResolution = (file, callback) => {
        var reader = new FileReader();
        reader.readAsDataURL(file);
        var that = this
        reader.onload = function (e) {

            //Initiate the JavaScript Image object.
            var image = new Image();

            //Set the Base64 string return from FileReader as source.
            image.src = e.target.result;

            //Validate the File Height and Width.
            var resolutionValidation = function () {
                var height = this.height;
                var width = this.width;
                if (height < 500 || width < 500) {
                    callback(true, that)      //set to false
                } else {
                    if (height/width === 1.0) {
                        callback(true, that)
                    }
                    else {
                        callback(true, that)              //CHANGE TO FALSE
                    }
                }
            };
            image.onload = resolutionValidation
        }
    }
    
    existenceCheck = (forceTrue = false) => {
        if (forceTrue) {
            return ({result: true})
        } else {
            console.log((this.state.selectedAudio !== null) , (this.state.selectedImage !== null))
            if ((this.state.selectedAudio !== null) && (this.state.selectedImage !== null)) {
                if (this.refs.trackname.value !== null) {
                    if (this.refs.artistname.value !== "") {
                        if (this.refs.description.value !== "") {
                            if (this.refs.licensefield.value !== "") {
                                return ({result: true})
                            } else {
                                return ({result: false, reason: "A license has not been selected."})
                            }
                        } else {
                            return ({result: false, reason: "Description field is empty"})
                        }
                    } else {
                        return ({result: false, reason: "Artist field is empty"})
                    }
                } else {
                    return ({result: false, reason: "Title field is empty"})
                }
            } else {
                return ({result: false, reason: "Files are not uploaded"})
            }
        }
        
    }

    handleChangeStatus = (status, fileType) => {
        if (status.target.value !== null) { 
            let file = status.target.files[0]
            this.setState(() => {
                if (file !== undefined) {
                    console.log(file)
                    if (file.type === "audio/mpeg" || file.type === "audio/mp3" || file.type === "audio/wav") {
                        return ({selectedAudio: file})
                    } else if (file.type === "image/jpg" || file.type === "image/jpeg" || file.type === "image/png") {
                        return ({selectedImage: file})
                    }
                }
            }, function() {
                console.log(this.state)
                console.log(this.existenceCheck())
            })
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
                                <h2 id="title">{(this.state.uploading)? "Uploading... Please Wait" : "Submit Your Music"}</h2>
                            </Grid>
                        </Grid>

                        {/* Information */}
                        <Grid container item direction="column" alignitems="stretch">
                            <Grid container spacing={2} direction="column">
                                <Grid item>
                                    <input disabled={this.state.uploading} type="text" class="submit-field constwidth" ref="trackname" placeholder="Name of your track"></input>
                                </Grid>
                                <Grid item>
                                    <input disabled={this.state.uploading} type="text" class="submit-field constwidth" ref="artistname" placeholder="What is your artist name?"></input>
                                </Grid>
                                <Grid item xs>
                                    <textarea disabled={this.state.uploading} style={{height: 200}}class="submit-field constwidth" ref="description" placeholder="Description of your Track."></textarea>
                                </Grid>
                                
                            </Grid>
                            {/* Music Submission */}
                            <Grid item xs>
                            <label class="submit-field" for="sound">CHOOSE ALBUM COVER IMAGE: </label>
                            <input disabled={this.state.uploading} type="file" name="sound" class="drop-container" onChange={(event) => {this.handleChangeStatus(event)}}></input>

                            </Grid>
                            <Grid item xs>
                            <label class="submit-field" for="img">CHOOSE SOUND FILE: </label>
                            <input disabled={this.state.uploading} type="file" name="img" class="drop-container" onChange={(event) => {this.handleChangeStatus(event)}}></input>

                            </Grid>
                            <Grid item>
                                <label class="submit-field" for="license">License: </label>
                                <select disabled={this.state.uploading} ref="licensefield" onChange={(event) => this.licenseChanged(event)} name="license">
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
                                <label class="submit-field" for="mount">Channel: </label>
                                <select disabled={this.state.uploading} ref="mountpoint" name="mount">
                                    <option value="synthwave">Synthwave</option>
                                    <option value="lofi">Lofi</option>
                                    <option value="house">House</option>
                                    </select>
                                </Grid>
                            <Grid item>
                                <button type="button" onClick={(event) => this.sendNewSubmission(event)}>Submit</button>
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
                                    Supported Formats: <br></br>
                                    - MP3: Minimum 120kbps at 44.1kHz<br></br>
                                    - Wav: 44.1kHz<br></br>
                                </p>
                            </Grid>
                            <Grid item>
                                <p id="track-description">
                                    Album cover: <br></br>
                                    - Greater than 500x500 PNG or JPG.<br></br>
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