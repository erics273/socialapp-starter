//import the axios HTTP client to communicate with the API
import axios from "axios";

class SocialAppService {
    constructor(url = "https://socialapp-api.herokuapp.com/", client = axios.create()) {
        this.url = url;
        this.endpoint = {
            users: "users/",
            messages: "messages/",
            likes: "likes/"
        }
        this.client = client;
    }

    /*User functions*/
    createNewUser(credentials) {
        return this.client.post(this.url + this.endpoint.users, credentials)
    }

    deleteUser(username) {
        return this.client.delete(this.url + this.endpoint.users + username)
    }

    updateUser(username, credentials) {
        return this.client.push(this.url + this.endpoint.users + username, credentials)
    }

    //PICTURE DATA SIZE IS RESTRICTED TO <= 200kb
    setUserPicture(username, picture) {
        return this.client.put(this.url + this.endpoint.users + username, picture)
    }

    getUsersList(limit) {
        return this.client.get(this.url + this.endpoint.users)
    }


    /*Message functions */
    createMessage(content) {
        return this.client.post(this.url + this.endpoint.messages, content)
    }

    getMessagesList(limit, username) {
        return this.client.get(this.url + this.endpoint.messages)
    }

    deleteMessage(messageId) {
        return this.client.delete(this.url + this.endpoint.messages, messageId)
    }


    /*Like functions*/
    addLike(messageId) {
        return this.client.post(this.url + this.endpoint.likes, messageId)
    }

    deleteLike(likeId) {
        return this.client.delete(this.url + this.endpoint.likes, likeId)
    }
}

export default SocialAppService;