// import request from "../utils/request";

// const baseUrl = 'http://localhost:3030/jsonstore/comments';

// export default{
//     async getAll(gameId){
//         const result = await request.get(baseUrl);

//         const comments = Object.values(result);

//         // TODO: filter when migrate to collections
//         //Client fintering (don't do this)

//         const gameComments = comments.filter(comment => comment.gameId === gameId);

//         return gameComments;
//     },
//     create(email, gameId, comment){
//         return request.post(baseUrl, { email, gameId, comment });
//     }
// }
