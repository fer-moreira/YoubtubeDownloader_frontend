import React, { Component } from 'react';

import '../../static/scss/loadings/loading_base.scss';


class VideoLoading extends Component {
    render() {
        return (
            <div className="placeholder animated">
                <div className="placeholder--image animated"></div>

                <div className="placeholder__detail">
                    <div className="placeholder__detail--text title animated"></div>
                    <div className="placeholder__detail--text animated"></div>
                    <div className="placeholder__detail--text animated"></div>
                </div>
            </div>
        );
    }
}
export default VideoLoading;