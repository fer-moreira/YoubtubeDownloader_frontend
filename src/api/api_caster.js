
class APICaller {
    constructor(data_to_request) {
        this.request_data = data_to_request;
    }


    requestVideoData () {
        let audio = "https://r7---sn-uxaxh5g-bpbr.googlevideo.com/videoplayback?expire=1614758850&ei=Yu8-YMKzHJfyhgbws67ADw&ip=187.14.103.8&id=o-ALjcM-Ymnx8FF8Jkq_MX4tAO8velM_IEOI0J_5sP3ylF&itag=249&source=youtube&requiressl=yes&mh=j-&mm=31%2C26&mn=sn-uxaxh5g-bpbr%2Csn-bg07dnzs&ms=au%2Conr&mv=m&mvi=7&pl=20&initcwndbps=410000&vprv=1&mime=audio%2Fwebm&ns=wD8EC-qTONxBht4WWJlP4hoF&gir=yes&clen=1289788&dur=208.541&lmt=1586424147784467&mt=1614737072&fvip=1&keepalive=yes&fexp=24001373%2C24007246&c=WEB&txp=5531432&n=mTYzsVfILKiHJCUn9pA&sparams=expire%2Cei%2Cip%2Cid%2Citag%2Csource%2Crequiressl%2Cvprv%2Cmime%2Cns%2Cgir%2Cclen%2Cdur%2Clmt&lsparams=mh%2Cmm%2Cmn%2Cms%2Cmv%2Cmvi%2Cpl%2Cinitcwndbps&lsig=AG3C_xAwRAIgZMOp6ubueaYykr4IqbY7Z9qvh7OuYx3tSOhW4qGCRAMCIDmVkx8rL063b9XnWWJCTAR8ETs5Xn6CgpDU1ZYxbbCx&sig=AOq0QJ8wRQIhANFkpQYrfTs-9swpdmKQfY5RdP_kH706e9U_gXhsJUnsAiAN9gGpNrYmBpO4R86vB1GuIjxGI3Nc1XEsNhDilCl4Lg==";
        let video = "https://r7---sn-uxaxh5g-bpbr.googlevideo.com/videoplayback?expire=1614758850&ei=Yu8-YMKzHJfyhgbws67ADw&ip=187.14.103.8&id=o-ALjcM-Ymnx8FF8Jkq_MX4tAO8velM_IEOI0J_5sP3ylF&itag=18&source=youtube&requiressl=yes&mh=j-&mm=31%2C26&mn=sn-uxaxh5g-bpbr%2Csn-bg07dnzs&ms=au%2Conr&mv=m&mvi=7&pl=20&initcwndbps=410000&vprv=1&mime=video%2Fmp4&ns=rUgP_OHkvQvTtTZXL3SRJS8F&gir=yes&clen=22075252&ratebypass=yes&dur=208.584&lmt=1586423924656788&mt=1614737072&fvip=1&fexp=24001373%2C24007246&c=WEB&txp=5531432&n=f2R9F1EDT04Eus2zD-w&sparams=expire%2Cei%2Cip%2Cid%2Citag%2Csource%2Crequiressl%2Cvprv%2Cmime%2Cns%2Cgir%2Cclen%2Cratebypass%2Cdur%2Clmt&lsparams=mh%2Cmm%2Cmn%2Cms%2Cmv%2Cmvi%2Cpl%2Cinitcwndbps&lsig=AG3C_xAwRQIgdmuSBlEWxbeIXFdLSivzLaQOUPufgtNdGs_M2v1eqBMCIQDZvVWcoNVRo-u2Una55Dj0ImKiZBgSVEsh9li3qLMxUw%3D%3D&sig=AOq0QJ8wRAIgSN3GRmJZjmPi2_gS9xU-ZEljwoX50OASHM4iWJPgKHICICWvs0aj7Hclgk94HfEg7ezXrttfyeVXDMcx7R02ngO6"
        let thumbnail = "https://i.ytimg.com/vi_webp/lOfFxhAhZuA/maxresdefault.webp"


        let data = {};
        
        if (this.request_data.format === "thumbnail") {
            data.download_uri = thumbnail;
        } else if (this.request_data.format === "audio") {
            data.download_uri = audio;
        } else {
            data.download_uri = video;            
        }
        

        return data;
    }
}

export default APICaller;