import React from 'react';
import VideoBox from './mixins/video_box';

import APICaller from "../../api/api_caster";
import VideoLoading from "../loadings/video_loading";


class LastVideos extends React.Component {
    constructor(props) {
        super(props);
        
        this.state = {
            pageLoaded: false,

            videos_count: props.count,
            videos_boxes_loaded : false,
            videos_boxes_error : false,
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
            // eslint-disable-next-line
            data.videos.map((e, i) => {
                boxes.push(<VideoBox key={i} video={{
                    id:        e.uid,
                    url:       e.url,
                    title:     e.title,
                    channel:   e.uploader,
                    views:     this.NumberDotted(e.views),
                    thumb_url: e.thumbnail,
                    thumb_alt: e.title,
                    days_ago : e.days_ago
                }} />);
            });

            this.setState({
                video_boxes : boxes,
                videos_boxes_loaded: true,
                videos_boxes_error: false
            });
        }).catch(error => {
            this.setState({
                videos_boxes_loaded: false,
                videos_boxes_error: true
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
            {!this.state.videos_boxes_error && (
                <div className="processed-videos__container">
                    <div className="processed-videos__container--header">
                        <h2 className="header-title">Last processed videos</h2>
                    </div>
                    <div className="processed-videos__container--boxes">
                    {this.state.videos_boxes_loaded ? (this.state.video_boxes) : ([1,2,3,4].map(i=><VideoLoading key={i} />))}
                    </div>
                </div>
            )}
        </div>
        );
    }
}

export default LastVideos;