// components
import SportCardHeadlines from "../components/SportCardHeadlines";

export default function HighLights() {
  const highlights = [
    {
      title: "C. Ronaldo injured in the UCL final",
      newsChannel: "UCL News Media",
      date: "26 Jul 2024",
      cols: ["bg-blue-500", "text-blue-200"],
    },
    {
      title: "C. Ronaldo injured in the UCL final",
      newsChannel: "UCL News Media",
      date: "26 Jul 2024",
      cols: ["bg-red-500", "text-red-200"],
    },
    {
        title: "C. Ronaldo injured in the UCL final",
        newsChannel: "UCL News Media",
        date: "26 Jul 2024",
        cols: ["bg-yellow-500", "text-yellow-200"],
      },
  ];
  return (
    <>
      <div className="block md:flex gap-x-5">
        {highlights.map((highlight, index) => (
          <div className="w-1/3" key={index}>
            <SportCardHeadlines
              title={highlight.title}
              newsChannel={highlight.newsChannel}
              date={highlight.date}
              col={highlight.cols}
            />
          </div>
        ))}
      </div>
    </>
  );
}
