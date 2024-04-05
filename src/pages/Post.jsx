import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import api from "../utils/api";
import formatDate from "../utils/formatDate";
import NotFound from "../pages/errors/NotFound.jsx";
import LatestNews from "../components/LatestNews"
import DocumentTittle from "../utils/documentTitle";
import __Tag from "../components/__Tag";
import EmailSubscribe from "../components/EmailSubscribe";

export default function Post({lastestNewsDesc}) {
  const { slug } = useParams();
  const [post, setPost] = useState(null);
  const [notFound, setNotFound] = useState(false);
  const fDate = post != null ? formatDate(post.published_at) : null;

  const updatePostViews = async (postId) => {
    try {
      const response = await api.patch(`post/${postId}/update-views/`);
    } catch (error) {
      console.error("Error updating post views:", error);
    }
  };

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const response = await api.get(`post/${slug}`);
        if (response.status !== 404) {
          setPost(response.data);
          updatePostViews(response.data.post_id);
        } else {
          setNotFound(true);
        }
      } catch (error) {
        console.error("Error fetching post:", error);
        setNotFound(true);
      }
    };

    fetchPost();
  }, [slug]);
  return (
    <>
      {notFound ? <NotFound /> : null}
      {post ? (
        <>
          <DocumentTittle title={post.title} />
          <main className="mainComponent2 mt-2">
            <div className="w-full h-[300px] bg-blue-200 rounded-3xl"></div>
          </main>
          <main className="mainComponent relative -top-20 mb-[-5rem]">
            <div className="block md:flex bg-white rounded-xl shadow-lg p-5 gap-5">
              <div className="w-full md:w-4/6">
                {/* category */}
                <div>
                  {/* <__Tag name="Football" /> */}
                </div>
                {/* post title */}
                <div className="my-3 font-bold text-2xl">{post.title}</div>
                {/* post author, date, views */}
                <div className="flex items-center gap-x-3 font-semibold mt-1">
                  <div>{post.author}</div>
                  <div className="text-gray-500">{fDate}</div>
                  <div>.</div>
                  <div className="text-gray-500"> {post.total_views} views</div>
                </div>
                {/* post content */}
                <div
                  className="text-gray-500 mt-3"
                  dangerouslySetInnerHTML={{ __html: post.content }}
                ></div>
                {/* post tags */}
                <div className="mt-5">
                  <div className="font-bold mb-2">Tags:</div>
                  <div className="flex gap-2 flex-wrap">
                    {post.tags.split(", ").map((tag, index) => (
                      <__Tag key={index} name={tag.trim()} />
                    ))}
                  </div>
                </div>
                {/* comments */}
                <div className="mt-5">
                  <div className="font-bold mb-2">Comments:</div>
                  <form>
                    <textarea
                      placeholder="What's on your mind? (Anonymous)"
                      className="outline-none rounded-lg border-2 p-5 w-full"
                      required
                    ></textarea>
                    <br />
                    <button
                      className="uppercase py-3 px-10 w-fit bg-blue-500 text-white rounded-lg text-sm font-semibold tracking-[1px]"
                      type="button"
                    >
                      Submit
                    </button>
                  </form>
                </div>
              </div>
              <div className="mt-5 md:mt-0 w-full md:w-2/6 border-l-2 h-fit p-5">
                <EmailSubscribe />
              </div>
            </div>
            <LatestNews lastestNewsDesc={lastestNewsDesc} />
          </main>
        </>
      ) : (
        <>
          {notFound ? null : (
            <div className="min-h-[80vh] flex justify-center items-center">
              <div className="text-white text-4xl font-bold">Loading...</div>
            </div>
          )}
        </>
      )}
    </>
  );
}
