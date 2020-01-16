//import the axios HTTP client to communicate with the API
import axios from 'axios';

class SocialAppService {
    constructor(url = 'https://socialapp-api.herokuapp.com', client = axios.create()){
        this.url = url;
        this.client = client;
    }
}

export default SocialAppService;