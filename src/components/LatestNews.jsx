//components
import ComponentTitle from "../components/__global/ComponentTitle";
import LatestNewsPost from "../components/LatestNewsPost";

export default function LatestNews({ lastestNewsDesc }) {
  const lastestNews = [
    {
      title: "Real madrid to be suspended from Master league",
      previewText:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil eius beatae iusto enim dignissimos, itaque impedit aliquid minima praesentium recusandae delectus inventore nobis harum voluptates expedita sint? Voluptatibus, accusamus harum?",
      url: "",
      thumbnail: "",
    },
  ];

  return (
    <>
      <div className="mt-5">
        <ComponentTitle title="Latest News" url="/news?sort_by=latest" />
        <div className="mt-1 text-gray-400 font-semibold">
          {lastestNewsDesc}
        </div>
        <div className="mt-5">
          <div className="grid grid-cols-1 md:md:grid-cols-2 lg:grid-cols-3 gap-5">
            {lastestNews.map((news, index) => (
              <LatestNewsPost
                title={news.title}
                previewText={news.previewText}
                url={news.url}
                thumbnail={news.thumbnail}
                key={index}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
