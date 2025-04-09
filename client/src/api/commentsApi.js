import { useEffect, useState } from "react";
import useAuth from "../hooks/useAuth";

const baseUrl = 'http://localhost:3030/data/comments';

// export default{
    // async getAll(gameId){
    //     const result = await request.get(baseUrl);

    //     // TODO: filter when migrate to collevtion
    //     // Client filtering (don't do this)
    //     const comments = Object.values(result);
    //     const gameComments = comments.filter(comment => comment.gameId === gameId);

    //     return gameComments;
    // },
    // create(email, gameId, comment){
    //     return request.post(baseUrl, { email, gameId, comment });
    // }
// }

export const useComments = (gameId) => {
    const { request } = useAuth();
    const [ comments, setComments ] = useState([]);

    console.log(`Game id: ${gameId}`);
    useEffect(() => {
        const searchParams = new URLSearchParams({
            where: `gameId="${gameId}"`    
        });

        request.get(`${baseUrl}?${searchParams.toString()}`)
            .then(result => {
                setComments(result);
            });
    }, [gameId]); 

    console.log(comments);
    return {
        comments,
    }
}

export const useCreateComment = () => {
    const { request } = useAuth();

    const create = (gameId, comment) => {
        const commentData = {
            gameId,
            comment
        };
        return request.post(baseUrl, commentData);
    }

    return {
        create,
    }
}
