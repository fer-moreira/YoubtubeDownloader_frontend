import React, { Component } from 'react'

class VideoBox extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            video: props.video
        }
    }

    render() {
        return (
            <div itemID={this.state.video.id} className="video">
                <div className="video__container">
                    <div className="video__container--thumbnail">
                        <img className="thumbnail" src={this.state.video.thumb_url} alt={this.state.video.thumb_alt}/>
                    </div>
                    <div className="video__container--details">
                        <h3   className="video-info vtitle">{this.state.video.title}</h3>
                        <span className="video-info vchannel">{this.state.video.channel}</span>
                        <span className="video-info vviews">{this.state.video.views}</span>
                    </div>
                </div>
            </div>
        )
    }
}

export default VideoBox; 