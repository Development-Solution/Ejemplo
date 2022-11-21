import axios from "axios";

export class Requests{

    constructor(url = 'http://localhost:3001'){
        this.url = url;
    };

    get(resource) {
        return axios.get(`${this.url}/${resource}`).then(response => {console.log(response.data);});
    };

    post(resource, body) {
        return axios.post(`${this.url}/${resource}`, body).then(response => {console.log(response.data);});
    };

};