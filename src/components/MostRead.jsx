import { useState, useEffect } from "react";
import api from "../utils/api";
//components
import ComponentTitle from "../components/__global/ComponentTitle";
import MostReadPostElem from "../components/MostReadPostElem";

export default function MostRead() {
  const [mostReadPosts, setMostReadPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(function () {
    const fetchPost = async () => {
      try {
        const response = await api.get("posts-preview/type-2/");
        setMostReadPosts(response.data);
        setLoading(false);
      } catch (error) {
        console.log("Error fetching posts:", error);
      }
    };
    fetchPost();
  }, []);

  return (
    <>
      <div className="mt-5">
        <ComponentTitle title="Most Read" url="/discover?sort_by=most-read" />
        <div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-2">
            {loading ? (
              <>
                <span className="text-white">Loading...</span>
              </>
            ) : (
              ""
            )}
            {mostReadPosts.map((post, index) => (
              <MostReadPostElem
                url={"/post/" + post.slug}
                title={post.title}
                author={post.author}
                date={"28 Jan 2024"}
                views={"32M"}
                key={index}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
