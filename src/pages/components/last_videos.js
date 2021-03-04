import React from 'react';
import VideoBox from './mixins/video_box';

import APICaller from "../../api/api_caster";

class LastVideos extends React.Component {
    constructor(props) {
        super(props);
        
        this.state = {
            pageLoaded: false,

            videos_count: props.count,
            videos_boxes_loaded : false,
            video_boxes : []
        }
    }

    componentDidMount() {
        this.setState({
            pageLoaded: true
        });

        var boxes = [];
        let api = new APICaller();
        const res = api.getVideosList();

        res.then(data => {            
            data.videos.map((e, i) => {
                console.log(e);
                boxes.push(<VideoBox key={i} video={{
                    id:        e.uid,
                    url:       e.url,
                    title:     e.title,
                    channel:   e.uploader,
                    views:     this.NumberDotted(e.views),
                    thumb_url: e.thumbnail,
                    thumb_alt: e.title
                }} />);
            });

            this.setState({
                video_boxes : boxes,
                videos_boxes_loaded: true,
            });
        });
    }
    

    NumberDotted (number) {
        try {
            return ((number).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".") + " views");
        } catch (error) {
            return (number.toString() + " views")
        }
    }

    render () {
        return (
        <div className="processed-videos">
            <div className="processed-videos__container">
                <div className="processed-videos__container--header">
                    <h2 className="header-title">Last processed videos</h2>
                </div>
                <div className="processed-videos__container--boxes">
                    {this.state.videos_boxes_loaded && this.state.video_boxes}
                </div>
            </div>
        </div>
        );
    }
}

export default LastVideos;