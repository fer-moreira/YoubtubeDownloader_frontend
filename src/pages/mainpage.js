import React from 'react';
import Navbar from "./components/mixins/navbar";
import Converter from "./components/converter";
import LastVideos from "./components/last_videos";
import Footer from "./components/mixins/footer";

class Mainpage extends React.Component {
    render () {
        return (
        <div className="main">
            <div className="main__page">
                <Navbar />
                <div className="main__page--interaction">
                    <Converter />
                    <LastVideos count={4} />
                </div>
                <Footer />
            </div>
        </div>
        );
    }
}

export default Mainpage;