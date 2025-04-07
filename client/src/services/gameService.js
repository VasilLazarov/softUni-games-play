import request from "../utils/request";


const baseUrl = 'http://localhost:3030/jsonstore/games';

export default{
    async getAll(){
        const result = await request.get(baseUrl);
        // const result =  request('GET', baseUrl);

        const games = Object.values(result);

        return games;
    },
    getOne(gameId){
        return request.get(`${baseUrl}/${gameId}`);
    },
    create(gameData) {
        return request.post(baseUrl, gameData);
        // return request('POST', baseUrl, gameData);
    },
    delete(gameId){
        return request.delete(`${baseUrl}/${gameId}`);
    },
}