import React from 'react';
import search_icon from '../../static/img/converter/search_icon.png';

import APICaller from "../../api/api_caster";

import ConverterLoading from '../loadings/converter_loading';

class Converter extends React.Component {
    constructor(props) {
        super(props);
        
        this.state = {
            config_class : "hidden",

            selected_video_url : "",
            selected_format: "",
            selected_quality: "",

            converting : false,
            conversor_error: false,

            OUTPUT_CHOICES : {
                'format' : ['thumbs','audios','videos'],
                'quality' : ['low','med','high','max']
            }
            
        }

        this.domRefs = {
            formats : [
                React.createRef(),
                React.createRef(),
                React.createRef()
            ],
            quality : [
                React.createRef(),
                React.createRef(),
                React.createRef(),
                React.createRef()
            ]
        }
        
        this.OnURLChanged       = this.OnURLChanged.bind(this);
        this.OnChangeFormat     = this.OnChangeFormat.bind(this);
        this.OnChangeQuality    = this.OnChangeQuality.bind(this);
        this.OnValidateConvert  = this.OnValidateConvert.bind(this);
    }

    OnURLChanged (e) {
        const target = e.target;
        var url_value = target.value;

        this.setState({
            config_class: "hidden"
        });
        
        // eslint-disable-next-line
        if (url_value.match(/(?:https?:\/\/)?(?:www\.)?youtu\.?be(?:\.com)?\/?.*(?:watch|embed)?(?:.*v=|v\/|\/)([\w\-_]+)\&?/))
        {    
            this.setState({
                config_class: "",
                selected_video_url : url_value
            });
        }
    }

    OnChangeFormat (e) {
        const target = e.target;

        if (target.tagName !== "BUTTON") {return}

        this.domRefs.formats.forEach((e)=>{
            e.current.className = e.current.className.replace("selected","");
        });

        target.className += " selected";

        this.setState({
            selected_format: target.value
        });

    }
    
    OnChangeQuality (e) {
        const target = e.target;

        if (target.tagName !== "BUTTON") { return }

        this.domRefs.quality.forEach((e)=>{ 
            e.current.className = e.current.className.replace("selected","");
        });

        target.className += " selected";
        
        this.setState({
            selected_quality: target.value
        });
    }

    OnValidateConvert (e) {

        if (this.state.OUTPUT_CHOICES.format.includes(this.state.selected_format) 
            && this.state.OUTPUT_CHOICES.quality.includes(this.state.selected_quality)) {

            let payload = {
                uri     : this.state.selected_video_url,
                format  : this.state.selected_format,
                quality : this.state.selected_quality
            };

            let api = new APICaller();
            const res = api.getConvertedVideoData(payload);

            this.setState({
                converting : true,
            });
            
            res.then(data => {
                this.setState({
                    converting : false,
                    conversor_error : false,
                });

                var win = window.open(data.url, '_blank');
                win.focus();
                
                setTimeout(() => {
                    window.location.reload();
                }, 500);

            }).catch(error => {
                this.setState({
                    converting : false,
                    conversor_error : true,
                });
            });
        }
    }  

    render () {
        return (
            <div className="converter">
                <div className="converter__container">
                    <div className="converter__container--header">
                        <h1 className="header-title">Youtube Downloader</h1>
                        <p className="header-description">Convert and transfer YouTube videos to MP4 or MP3 files for free with our<br></br>Youtube Downloader.</p>
                    </div>
                    {!this.state.conversor_error && (
                        <div className="converter__container--main">
                            {!this.state.converting ? (
                                <div>
                                    <div className="user-input">
                                        <div className="user-input__inputs">
                                            <div className="user-input__inputs--icon">
                                                <img className="icon" src={search_icon} alt="search icon for youbtube links" />
                                            </div>
                                            <input  onChange={this.OnURLChanged}  type="url" className={`user-input__inputs--input ` + this.state.config_class} placeholder="Paste youtube link here" />
                                            <button onClick={this.OnValidateConvert} className={`user-input__inputs--button ` + this.state.config_class}>CONVERT</button>
                                        </div>
                                    </div>
                                    <div id="data-options-form" className={`data-options ` + this.state.config_class}>
                                        <div className="arrow"></div>
                                        <div className="data-options__container">
                                            <span className="data-options--label">Output Format</span>
                                            <div className="data-options__container--box" onClick={this.OnChangeFormat}>
                                                <button ref={this.domRefs.formats[0]} value="thumbs" className="box-option">THUMBNAIL</button>
                                                <button ref={this.domRefs.formats[1]} value="audios" className="box-option" >AUDIO</button>
                                                <button ref={this.domRefs.formats[2]} value="videos" className="box-option">VIDEO</button>
                                            </div>
                                            <span className="data-options--label">Output Quality</span>
                                            <div className="data-options__container--box" onClick={this.OnChangeQuality}>
                                                <button ref={this.domRefs.quality[0]} value="low"  className="box-option">LOW</button>
                                                <button ref={this.domRefs.quality[1]} value="med"  className="box-option">MED</button>
                                                <button ref={this.domRefs.quality[2]} value="high" className="box-option">HIGH</button>
                                                <button ref={this.domRefs.quality[3]} value="max"  className="box-option">MAX</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ) : (
                                <ConverterLoading />
                            )
                            }
                        </div>
                    )}
                </div>
            </div>
        );
    }
}



export default Converter;