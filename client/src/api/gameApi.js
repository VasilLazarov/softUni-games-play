import { useEffect, useState } from "react";
import request from "../utils/request";
import useAuth from "../hooks/useAuth";


const baseUrl = 'http://localhost:3030/data/games';

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
    const { request } = useAuth();

    const create = (gameData) => {
        return request.post(baseUrl, gameData);
    };

    return {
        create,
    };
};

export const useEditGame = () => {
    const { request } = useAuth();

    const edit = (gameId, gameData) => {
        return request.put(`${baseUrl}/${gameId}`, {...gameData, _id: gameId});
    };

    return { edit, }
};

export const useDeleteGame = () => {
    const { request } = useAuth();

    const deleteGame = (gameId) =>{
        return request.delete(`${baseUrl}/${gameId}`);
    };

    return { deleteGame };
};

export const useLatestGames = () => {
    // const PAGE_SIZE = 3;
    const [latestGames, setLatestsGames] = useState([]);

    
    useEffect(() => {
        const searchParams = new URLSearchParams({
            sortBy: '_createdOn desc',
            pageSize: 3,
            select: '_id,imageUrl,title'
        });
        request.get(`${baseUrl}?${searchParams.toString()}`)
            .then(response => {
                setLatestsGames(response);
            });
    }, []);

    return { latestGames };
};
