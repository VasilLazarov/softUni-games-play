// import { useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router";

// import gameService from "../../services/gameService";
import CommentsShow from "../comments-show/CommentsShow";
import CommentCreate from "../comment-create/CommentCreate";
// import commentService from "../../services/commentService";
import { useDeleteGame, useGame } from "../../api/gameApi";
import useAuth from "../../hooks/useAuth";
// import { useComments } from "../../api/commentsApi";
import { useState } from "react";

export default function GameDetails() {
    const navigate = useNavigate();
    // const { email } = useContext(UserContext);
    const { _id: userId } = useAuth();
    const [comments, setComments] = useState([]);
    const { gameId } = useParams();
    // const [game, setGame] = useState({});
    const { game } = useGame(gameId);
    const { deleteGame } = useDeleteGame();
    // const { comments } = useComments(gameId);

    // useEffect(() => {
    //     (async () => {
    //         const result = await gameService.getOne(gameId);
    //         setGame(result);
    //     })();
    // }, [gameId]);

    // useEffect(() => {
    //     // gameService.getOne(gameId)
    //     //     .then(result => {
    //     //         setGame(result);
    //     //     });

    //     commentService.getAll(gameId).then((result) => {
    //         setComments(result);
    //     });
    // }, [gameId]);

    const gameDeleteClickHandler = async () => {
        const hasConfirm = confirm(
            `Are you sure you want to delete ${game.title} game?`
        );

        if (!hasConfirm) {
            return;
        }

        // await gameService.delete(gameId);
        await deleteGame(gameId);

        navigate("/games");
    };

    const commentCreateHandler = (newComment) => {
        setComments((state) => [...state, newComment]);
    };

    const isOwner = userId === game._ownerId;
    // console.log(userId);
    // console.log(game.ownerId);

    return (
        <section id="game-details">
            <h1>Game Details</h1>
            <div className="info-section">
                <div className="game-header">
                    <img className="game-img" src={game.imageUrl} />
                    <h1>{game.title}</h1>
                    <span className="levels">MaxLevel: {game.maxLevel}</span>
                    <p className="type">{game.category}</p>
                </div>

                <p className="text">{game.summary}</p>

                <CommentsShow comments={comments} />

                {/* <!-- Edit/Delete buttons ( Only for creator of this game )  --> */}
                {isOwner && (
                    <div className="buttons">
                        <Link to={`/games/${gameId}/edit`} className="button">
                            Edit
                        </Link>
                        <button
                            onClick={gameDeleteClickHandler}
                            className="button"
                        >
                            Delete
                        </button>
                    </div>
                )};
            </div>

            <CommentCreate
                // email={email}
                gameId={gameId}
                onCreate={commentCreateHandler}
            />
        </section>
    );
}
