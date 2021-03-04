
import axios from "axios";


class APICaller {
    constructor() {
        
        this.videos_endpoint  = process.env.REACT_APP_VIDEOS_LIST_ENDPOINT;
        this.convert_endpoint = process.env.REACT_APP_CONVERSOR_ENDPOINT;
        this.access_token = process.env.REACT_APP_ACCESS_TOKEN;
    }
    
    

    async getVideosList () {
        const res = await axios.get(`${this.videos_endpoint}`,{headers:{
            "Authorization" : `Token ${this.access_token}`
        }});

        return await res.data;
    }
}

export default APICaller;