import React from 'react';
import VideoBox from './mixins/video_box';

class LastVideos extends React.Component {
    constructor(props) {
        super(props);
        
        this.state = {
            videos_count: props.count
        }
    }
    
    RenderBoxes () {
        let boxes = []

        for (let i = 0; i < this.state.videos_count; i++) {
            boxes.push(<VideoBox video={{
                id: i,
                title:'Dua Lipa - Hallucinate (Official Lyrics Video)',
                channel: "Dua Lipa",
                views: "11.087.007 views",
                thumb_url: 'https://i.ytimg.com/vi_webp/lOfFxhAhZuA/maxresdefault.webp',
                thumb_alt: 'Dua Lipa - Hallucinate (Official Lyrics Video)'
            }} />);
        }



        return boxes
    }

    render () {
        return (
        <div className="processed-videos">
            <div className="processed-videos__container">
                <div className="processed-videos__container--header">
                    <h2 className="header-title">Last processed videos</h2>
                </div>
                <div className="processed-videos__container--boxes">
                    {
                        this.RenderBoxes().map((e)=>(
                            e
                        ))
                    }
                </div>
            </div>
        </div>
        );
    }
}

export default LastVideos;