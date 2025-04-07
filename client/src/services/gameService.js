import { request } from "../utils/request";

const baseUrl = 'http://localhost:3030/jsonstore/games';

export default{
    async getAll(){
        const result =  request.get(baseUrl);
        // const result =  request('GET', baseUrl);

        const games = Object.values(result);

        return games;
    },
    create(gameData) {
        return request.post(baseUrl, gameData);
        // return request('POST', baseUrl, gameData);
    },
}