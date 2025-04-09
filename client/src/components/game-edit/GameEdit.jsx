// import { useEffect, useState } from "react";
import { Navigate, useNavigate, useParams } from "react-router";
// import gameService from "../../services/gameService";
import { useEditGame, useGame } from "../../api/gameApi";
import useAuth from "../../hooks/useAuth";

export default function GameEdit() {
    const { userId } = useAuth();
    const navigate = useNavigate();
    const { gameId } = useParams();
    // const [game, setGame] = useState({});
    const { game } = useGame(gameId);
    const { edit } = useEditGame();

    // useEffect(() => {
    //     gameService.getOne(gameId)
    //         .then(result => {
    //             setGame(result);
    //         });
    // }, [gameId]);

    const formAction = async (formData) => {
        const gameData = Object.fromEntries(formData);

        // await gameService.edit(gameId, gameData);
        await edit(gameId, gameData);

        navigate(`/games/${gameId}/details`);
    }

    // console.log(userId);
    // console.log(gameId);
    // console.log(game._ownerId);
    const isOwner = userId === game._ownerId;
    // console.log(isOwner);
    if (!isOwner){
        // console.log("Ne vlizam");
        // navigate("/games");
        // return;
        // return <Navigate to="/games" />;
    }

    return (
        <section id="edit-page" className="auth">
            <form id="edit" action={formAction}>
                <div className="container">
                    <h1>Edit Game</h1>
                    <label htmlFor="leg-title">Legendary title:</label>
                    <input type="text" id="title" name="title" defaultValue={game.title} />

                    <label htmlFor="category">Category:</label>
                    <input type="text" id="category" name="category" defaultValue={game.category} />

                    <label htmlFor="levels">MaxLevel:</label>
                    <input
                        type="number"
                        id="maxLevel"
                        name="maxLevel"
                        min="1"
                        defaultValue={game.maxLevel}
                    />

                    <label htmlFor="game-img">Image:</label>
                    <input type="text" id="imageUrl" name="imageUrl" defaultValue={game.imageUrl} />

                    <label htmlFor="summary">Summary:</label>
                    <textarea name="summary" id="summary" defaultValue={game.summary}></textarea>
                    <input
                        className="btn submit"
                        type="submit"
                        value="Edit Game"
                    />
                </div>
            </form>
        </section>
    );
}
