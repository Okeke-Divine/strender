import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import api from "../utils/api";
//components
import DocumentTittle from "../utils/documentTitle";
import LatestNewsPost from "../components/LatestNewsPost";
import ComponentTitle from "../components/__global/ComponentTitle";
import LatestNews from "../components/LatestNews";
import NotFound from "../pages/errors/NotFound.jsx";

export default function CategoryPostList({ lastestNewsDesc }) {
  const { name } = useParams();
  const url = "posts-by-category/" + name;

  const [posts, setPosts] = useState([]);
  const [empty, setEmpty] = useState(false);
  const [loading, setLoading] = useState(true);
  const [notFound, setNotFound] = useState(false);

  useEffect(function () {
    const fetchNews = async () => {
      try {
        const response = await api.get(url);
        if (response.status !== 404) {
          setPosts(response.data);
          if (response.data.length <= 0) {
            setEmpty(true);
          }
          setLoading(false);
        } else {
          setNotFound(true);
        }
      } catch (error) {
        console.error("Error fetching posts:", error);
        setNotFound(true);
      }
    };
    fetchNews();
  }, []);
  return (
    <>
      {notFound ? (
        <NotFound />
      ) : (
        <>
          <main className="mainComponent">
            <DocumentTittle title={"Category/" + name} />
            <div className="mb-2">
              <ComponentTitle title={"Category/" + name} url={null} />
            </div>
            <div>
              <div className="grid grid-cols-1 md:md:grid-cols-2 lg:grid-cols-3 gap-5 mb-5">
                {loading ? (
                  <>
                    <div className="text-gray-500">Loading...</div>
                  </>
                ) : null}
                {empty ? (
                  <>
                    <div className="text-gray-500">No post was found!</div>
                  </>
                ) : null}
                {posts.map((post, index) => (
                  <LatestNewsPost
                    title={post.title}
                    previewText={post.summary}
                    url={"/post/" + post.slug}
                    thumbnail={post.img_url}
                    author={post.author}
                    key={index}
                  />
                ))}
              </div>
            </div>
            <div className="w-full h-1 border-opacity-20 border-[1px] border-x-0 border-r-0 border-b-0"></div>
            <LatestNews lastestNewsDesc={lastestNewsDesc} />
          </main>
        </>
      )}
    </>
  );
}
