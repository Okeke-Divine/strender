import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import api from "../utils/api";
//components
import DocumentTittle from "../utils/documentTitle";
import LatestNewsPost from "../components/LatestNewsPost";
import ComponentTitle from "../components/__global/ComponentTitle";
import LatestNews from "../components/LatestNews";

export default function CategoryPostList({ lastestNewsDesc }) {
  const { name } = useParams();
  const url = 'posts-by-category/'+name;

  const [posts, setPosts] = useState([]);
  const [loading,setLoading] = useState(true);
  useEffect(function () {
    const fetchNews = async () => {
      try {
        const response = await api.get(url);
        setPosts(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching posts:", error);
      }
    };
    fetchNews();
  }, []);
  return (
    <>
      <main className="mainComponent">
        <DocumentTittle title={'Category/'+name} />
        <div className="mb-1">
          <ComponentTitle title={'Category/'+name} url={null} />
        </div>
        <div>
        <div className="grid grid-cols-1 md:md:grid-cols-2 lg:grid-cols-3 gap-5 mb-5">
          {loading ? (<><div className="text-gray-500">Loading...</div></>) : null}
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
        <LatestNews lastestNewsDesc={lastestNewsDesc} />
      </main>
    </>
  );
}
