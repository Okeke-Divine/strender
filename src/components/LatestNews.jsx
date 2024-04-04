import { useState, useEffect } from "react";
import api from "../utils/api";
//components
import ComponentTitle from "../components/__global/ComponentTitle";
import LatestNewsPost from "../components/LatestNewsPost";

export default function LatestNews({ lastestNewsDesc }) {
  const [lastestNews, setLatestNews] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(function () {
    const fetchNews = async () => {
      try {
        const response = await api.get("posts-preview/type-3/");
        setLatestNews(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching news:", error);
      }
    };
    fetchNews();
  }, []);

  return (
    <>
      <div className="mt-5">
        <ComponentTitle title="Latest News" url="/discover?sort_by=latest" />
        <div className="mt-1 text-gray-400 font-semibold">
          {lastestNewsDesc}
        </div>
        <div className="mt-5">
          <div className="grid grid-cols-1 md:md:grid-cols-2 lg:grid-cols-3 gap-5">
            {loading ? (
              <>
                <span className="text-gray-400">Loading...</span>
              </>
            ) : (
              ""
            )}
            {lastestNews.map((news, index) => (
              <LatestNewsPost
                title={news.title}
                previewText={news.summary}
                url={"/post/" + news.slug}
                thumbnail={news.img_url}
                author={news.author}
                key={index}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
