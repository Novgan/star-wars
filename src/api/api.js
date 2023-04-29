import axios from "axios";


const instance = axios.create({
    baseURL: 'https://swapi.dev/api/'
});


export const starWarsAPI = {
    getPlanets(page = 1) {
        return instance.get(`planets/?page=${page}`)
            .then(response => response.data)
    },

    getCurrentPlanet(id) {
        return instance.get(`planets/${id}`)
            .then(response => response.data)
    },

    getResidents(url) {
        return axios.all(url.map(u => axios.get(u)))
            .then(axios.spread((...res) => {
                let residentsName = [];
                res.map(u => {
                    residentsName.push(u.data.name);
                })
                return residentsName;
            }))
    }
}