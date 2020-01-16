//import the axios HTTP client to communicate with the API
import axios from "axios";

class SocialAppService {
    constructor(url = "https://socialapp-api.herokuapp.com", client = axios.create()) {
        this.url = url;
        this.endpoint = {
            newUser : "/users"
        }
        this.client = client;
    }

    createNewUser(credentials) {
        return this.client.post(this.url + this.endpoint.newUser, credentials)
    }
}

export default SocialAppService;