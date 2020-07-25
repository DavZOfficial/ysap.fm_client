import Snap from "snapsvg-cjs";
import React from "react";
var easeinout = require("./lib/easeinout.js").easeinout;

class PlayButton extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            playing: true
        }
    }

    componentWillReceiveProps(props) {
        this.setState((state) => ({
            playing: props.playing
        }
        ))
    }

    componentDidMount() {
        this.playicon = Snap.select('#playicon');
        this.pauseicon = Snap.select('#pauseicon');
        this.playpoints = this.playicon.node.getAttribute('d');
        this.pausepoints = this.pauseicon.node.getAttribute('d');
    }

    onClick = (event) => {
        if (this.props.playing) {
            this.toPlay();
            this.props.onClick(false);
        } else {
            this.toPause();
            this.props.onClick(true);
        }
    }

    toPlay = () => {
        this.playicon.animate({ d: this.playpoints }, 150, easeinout);   
    }

    toPause = () => {
        this.playicon.animate({ d: this.pausepoints }, 150, easeinout)
    }


    render() {
        return (
            <div onClick={(event) => this.onClick(event)}>
                <svg id="playpause" fill="white" height={16} width={16}> 
                    <path id="pauseicon" opacity={0} data-state="playing" data-next-state="paused" d="m0,0l6,0l0,16l-6,0m9,-16l6,0l0,16l-6,0" />
                    <path id="playicon" data-state="paused" data-next-state="playing" d="m0.00005,0.00004l7,3.74l0,8.54l-7,3.72m7,-12.26l8,4.26l0,0l-8,4.28" />
                </svg>
            </div>
        )
    }
}

export default PlayButton;