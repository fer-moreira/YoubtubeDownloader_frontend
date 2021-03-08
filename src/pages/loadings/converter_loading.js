import React, { Component } from 'react'

import '../../static/scss/loadings/loading_base.scss';


class ConverterLoading extends Component {
    render() {
        return (
            <div className="loading-circle">
                <div className="loading-circle__container">
                    <div className="loading-circle__container--circle"></div>
                </div>
            </div>
        );
    }
}

export default ConverterLoading;