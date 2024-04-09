import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import NotFound from "../pages/errors/NotFound.jsx";
import LatestNews from "../components/LatestNews";
import Comment from "../components/Comment";
import __Tag from "../components/__Tag";
import EmailSubscribe from "../components/EmailSubscribe";
//utils
import DocumentTittle from "../utils/documentTitle";
import formatDate from "../utils/formatDate";
import api from "../utils/api";

export default function Post({ lastestNewsDesc }) {
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
    // Scroll to the top of the page when the component mounts
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

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
            <div className="relative w-full h-[300px] rounded-3xl overflow-hidden shadow-md shadow-yellow-400">
              <img
                src="/assets/images/banner/pexels-dom-le-roy-3991976.jpg"
                className="object-cover w-full h-full"
                alt="Football"
              />
              {/* <div className="absolute inset-0 bg-black opacity-30"></div> */}
            </div>
          </main>
          <main className="mainComponent relative -top-20 mb-[-5rem]">
            <div className="block md:flex bg-white rounded-xl shadow-lg p-5 gap-5">
              <div className="w-full md:w-4/6">
                {/* image */}
                <div className="w-[6rem] h-[6rem] relative -top-[70px] mb-[-60px] rounded-full border-2 border-white">
          <img src={post.img_url} alt={post.title} className="w-full h-full object-cover rounded-full" />
                </div>
                {/* category */}
                <div>
                  <__Tag name={post.category.name} />
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
                <Comment post_id={post.post_id} />
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
