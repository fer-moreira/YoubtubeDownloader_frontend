
import axios from "axios";


class APICaller {
    constructor() 
    {
        this.videos_endpoint  = process.env.REACT_APP_VIDEOS_LIST_ENDPOINT;
        this.convert_endpoint = process.env.REACT_APP_CONVERSOR_ENDPOINT;
        this.access_token     = process.env.REACT_APP_ACCESS_TOKEN;
        this.videos_count     = process.env.REACT_APP_VIDEOS_COUNT
    }

    async getVideosList () {
        const res = await axios.get(`${this.videos_endpoint}`,{
            headers : {
                "Authorization" : `Token ${this.access_token}`
            },
            params : {
                "format" : "json",
                "count" : this.videos_count
            }
        });

        return await res.data;
    }

    async getConvertedVideoData (payload) {
        const res = await axios.get(`${this.convert_endpoint}`,{
            headers : {
                "Authorization" : `Token ${this.access_token}`
            },
            params : {
                "format":"json",
                "url": payload.uri,
                "output_format" : payload.format,
                "output_quality" : payload.quality,

            }
        });

        return await res.data;
    }
}

export default APICaller;