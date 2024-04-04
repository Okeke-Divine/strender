import { useState, useEffect } from "react";
import api from "../utils/api";
// components
import SportCardHeadlines from "../components/SportCardHeadlines";

export default function HighLights() {
  const [highlights, setHighlights] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(function () {
    const fetchHighLight = async () => {
      try {
        const response = await api.get("posts-preview/type-1/");
        setHighlights([response.data[0], response.data[1], response.data[2]]);
        setLoading(false);
      } catch (error) {
        console.log("Error fetching highlights:", error);
      }
    };
    fetchHighLight();
  }, []);

  return (
    <>
      <div className="block md:flex gap-x-5 items-start">
        {loading ? (
          <>
            <span className="text-gray-400">Loading...</span>
          </>
        ) : (
          ""
        )}
        {highlights.map((highlight, index) => (
          <div className="mt-2 md:mt-0 w-full md:w-1/3" key={index}>
            <SportCardHeadlines
              title={highlight.title.length > 50 ? `${highlight.title.slice(0,50)}...`: highlight.title}
              newsChannel={highlight.author}
              date={"28 Jan 2024"}
              url={"/post/" + highlight.slug}
            />
          </div>
        ))}
      </div>
    </>
  );
}
