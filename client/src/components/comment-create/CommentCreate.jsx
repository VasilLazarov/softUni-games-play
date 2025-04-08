import { useContext } from "react";
import commentService from "../../services/commentService";
import { UserContext } from "../../context/UserContext";

export default function CommentCreate({
    // email,
    gameId,
    onCreate,
}) {
    const { email } = useContext(UserContext);
    const commentAction = async (formData) => {
        const comment = formData.get('comment');

        const createdComment = await commentService.create(email, gameId, comment);

        onCreate(createdComment);
    }

    return (
        // {/* <!-- Add Comment ( Only for logged-in users, which is not creators of the current game ) --> */}
        <article className="create-comment">
            <label>Add new comment:</label>
            <form className="form" action={commentAction}>
                <textarea name="comment" placeholder="Comment......"></textarea>
                <input
                    className="btn submit"
                    type="submit"
                    value="Add Comment"
                />
            </form>
        </article>
    );
}
