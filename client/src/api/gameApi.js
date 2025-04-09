import { useContext, useEffect, useState } from "react";
import request from "../utils/request";
import { UserContext } from "../context/UserContext";


const baseUrl = 'http://localhost:3030/data/games';

export default{
    getOne(gameId){
        return request.get(`${baseUrl}/${gameId}`);
    },
    //     return request.post(baseUrl, gameData);
    //     // return request('POST', baseUrl, gameData);
    // },
    edit(gameId, gameData){
        return request.put(`${baseUrl}/${gameId}`, {...gameData, _id: gameId});
    },
    delete(gameId){
        return request.delete(`${baseUrl}/${gameId}`);
    },
};

export const useGames = () => {
    const [games, setGames] = useState([]);
    useEffect(() => {
        request.get(baseUrl)
            .then(response => {
                setGames(response);
            });
    }, []);

    return { games };
};

export const useGame = (gameId) => {
    const [game, setGame] = useState({});
    useEffect(() => {
        request.get(`${baseUrl}/${gameId}`)
            .then(response => {
                setGame(response);
            });
    }, [gameId]);

    return { game };
};

export const useCreateGame = () => {
    const { accessToken } = useContext(UserContext);

    const create = (gameData) => {
        const options = {
            headers: {
                'X-Authorization': accessToken
            }
        };
        return request.post(baseUrl, gameData, options);
    };

    return {
        create,
    };
};