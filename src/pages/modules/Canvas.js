import React from "react";


class Canvas extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            album_cover: props.data
        }

    }
    
    componentWillReceiveProps(props) {
        this.setState((state) => ({
            album_cover: props.album_cover
        }), function() {  
        })
    }

    componentDidMount() {
        
    }

    render() {
        return (
            <canvas id="album-cover" ref="canvas" height="500" width="500"></canvas>
        )
    }
}

export default Canvas;