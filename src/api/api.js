import * as axios from "axios";


const instance = axios.create({
    baseURL: 'https://swapi.dev/api/'
});


export const starWarsAPI = {
    getPlanets() {
        return instance.get("planets/")
            .then(response => response.data)
    },
    
    getCurrentPlanet(id) {
        return instance.get(`planets/${id}`)
            .then(response => response.data)
    }
}