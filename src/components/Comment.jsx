import { useEffect, useState } from "react";
import api from "../utils/api";

export default function Comment({ post_id }) {
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState("");

  const c_img_list = [
    '/assets/images/user-icon-1.png',
    '/assets/images/user-icon-2.png'
  ]
  const randomIndex = Math.floor(Math.random() * c_img_list.length);
  const c_img = c_img_list[randomIndex];

  useEffect(() => {
    const fetchComments = async () => {
      try {
        const response = await api.get(`/comment/${post_id}/`);
        setComments(response.data);
      } catch (error) {
        console.error("Error fetching comments:", error);
      }
    };

    fetchComments();
  }, [post_id]);

  const handleSubmit = async () => {
    try {
      const response = await api.post("/add_comment/", {
        post_id,
        content: newComment,
      });
      // Assuming the response contains the newly added comment
      setComments([...comments, response.data]);
      setNewComment("");
    } catch (error) {
      console.error("Error adding comment:", error);
    }
  };

  return (
    <>
      <div className="mt-5">
        <form>
          <textarea
            placeholder="What's on your mind? (Anonymous)"
            className="outline-none rounded-lg border-2 p-5 w-full"
            required
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
          ></textarea>
          <br />
          <button
            className="uppercase py-3 px-10 w-fit bg-blue-500 text-white rounded-lg text-sm font-semibold tracking-[1px]"
            type="button"
            onClick={handleSubmit}
          >
            Submit
          </button>
        </form>
      </div>
      {/* list comments */}
      <div className="mt-2">
        <div className="font-bold mb-2">Comments:</div>
        {comments.length > 0 ? (
          <div>
            {comments.map((comment) => (
              <div
                key={comment.comment_id}
                className="flex items-center gap-x-2 md:gap-x-5 mb-2"
              >
                <div>
                  <img
                    src={c_img}
                    className="w-[50px] h-[50px] rounded-full border-2 border-blue-300"
                  />
                </div>
                <div>
                  <div className="font-bold">Anonymous</div>
                  <div>{comment.content}</div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <>
            <div className="text-center">
              <div className="text-gray-500">No comment here</div>
              <div className="text-black font-bold">
                Be the first to comment
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
}
