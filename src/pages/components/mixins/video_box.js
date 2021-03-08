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
            <a key={this.state.video.id} className="video" href={this.state.video.url} target="_blank" rel="noreferrer">
                <div className="video__container">
                    <div className="video__container--thumbnail">
                        <div className="thumbnail" style={{ backgroundImage:`url(${this.state.video.thumb_url})`  }}> </div>
                    </div>
                    <div className="video__container--details">
                        <h3   className="video-info vtitle">{this.state.video.title}</h3>
                        <span className="video-info vchannel">{this.state.video.channel}</span>
                        <span className="video-info vviews">{this.state.video.views} • {this.state.video.days_ago}</span>
                    </div>
                </div>
            </a>
        )
    }
}

export default VideoBox; 