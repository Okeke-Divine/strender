import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import api from "../utils/api";
import formatDate from "../utils/formatDate"

import DocumentTittle from "../utils/documentTitle";
import __Tag from "../components/__Tag";
import EmailSubscribe from "../components/EmailSubscribe";

export default function Post() {
  const { slug } = useParams();
  const [post, setPost] = useState(null);
  const fDate = (post != null) ? formatDate(post.published_at) : null;

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const response = await api.get(`post/${slug}`);
        setPost(response.data);
      } catch (error) {
        console.error("Error fetching post:", error);
      }
    };

    fetchPost();
  }, [slug]);
  return (
    <>
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
                  <__Tag name="Football" />
                </div>
                {/* post title */}
                <div className="my-3 font-bold text-2xl">
                  {post.title}
                </div>
                {/* post author, date, views */}
                <div className="flex items-center gap-x-3 font-semibold mt-1">
                  <div>{post.author}</div>
                  <div className="text-gray-500">22 Sept 2022</div>
                  <div>.</div>
                  <div className="text-gray-500"> 234 views</div>
                </div>
                {/* post content */}
                <div className="text-gray-500 mt-3">
                  {post.content}
                </div>
                {/* post tags */}
                <div className="mt-5">
                  <div className="font-bold mb-2">Tags:</div>
                  <div className="flex gap-2 flex-wrap">
                    {/* {post.tags.map((tag,index) => (
                    <__Tag name={tag.name} />
                    ))} */}
                    <__Tag name="Sports" />
                    <__Tag name="Ronaldo" />
                  </div>
                </div>
                {/* comments */}
                <div className="mt-5">
                  <div className="font-bold mb-2">Comments:</div>
                </div>
              </div>
              <div className="mt-5 md:mt-0 w-full md:w-2/6 border-l-2 h-fit p-5">
                <EmailSubscribe />
              </div>
            </div>
          </main>
        </>
      ) : (
        <div className="min-h-[80vh] flex justify-center items-center">
          <div className="text-white text-4xl font-bold">Loading...</div>
        </div>
)}
    </>
  );
}
