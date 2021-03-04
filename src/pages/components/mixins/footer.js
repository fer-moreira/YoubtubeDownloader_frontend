import React from 'react';

import twitter_ico from '../../../static/img/footer/twitter_ico.png';
import reddit_ico from '../../../static/img/footer/reddit_ico.png';
import github_ico from '../../../static/img/footer/github_ico.png';
import mail_ico from '../../../static/img/footer/mail_ico.png';


class Footer extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            twitter_url : process.env.REACT_APP_TWITTER_URL,
            reddit_url  : process.env.REACT_APP_REDDIT_URL,
            github_url  : process.env.REACT_APP_GITHUB_URL,
            email_url   : process.env.REACT_APP_MAIL_URL,
        }
    }

    render () {
        return (
            <footer className="footer">
                <div className="footer__container">
                    <div className="footer__container--social">
                        <a href={this.state.twitter_url} target="_blank" rel="noreferrer">
                            <img src={twitter_ico} alt="Twitter icon to that lead to my twitter account"/>
                        </a>

                        <a href={this.state.reddit_url} target="_blank" rel="noreferrer">
                            <img src={reddit_ico} alt="Reddit icon to that lead to my twitter account"/>
                        </a>
                        
                        <a href={this.state.github_url} target="_blank" rel="noreferrer">
                            <img src={github_ico} alt="Github icon to that lead to my twitter account"/>
                        </a>
                        
                        <a href={this.state.email_url} target="_blank" rel="noreferrer">
                            <img src={mail_ico} alt="Email icon to that lead to my twitter account"/>
                        </a>
                    </div>
                    <p className="footer__container--info">Developed and Maintained<br></br>by Fernando Moreira</p>
                </div>
            </footer>
        );
    }
}

export default Footer;