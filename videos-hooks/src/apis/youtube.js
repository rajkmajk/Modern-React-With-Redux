import axios from 'axios';

const KEY = 'AIzaSyBJZS7b9dz7yMpux6k0Xyde_PvcC3FEiL0';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        type: 'video',
        maxResults: 5,
        key: KEY
    }
});