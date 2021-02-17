import axios from 'axios';

const KEY = 'AIzaSyCftv5HemkDXYG8Ow1-lTE40uCBUNI4zaU';

export default axios.create({
    baseURL: "https://www.googleapis.com/youtube/v3",

    params: {
        part: 'snippet',
        type: 'video',
        maxResults: 5,
        key: KEY,
    }
  });