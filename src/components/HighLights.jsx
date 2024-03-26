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
      title: "Kelvin De Brunye transfered to R.Md",
      newsChannel: "Fifa",
      date: "26 Jul 2023",
      cols: ["bg-green-500", "text-green-200"],
    },
    {
        title: "C. Ronaldo injured in the UCL final",
        newsChannel: "UCL News Media",
        date: "26 Jul 2024",
        cols: ["bg-orange-500", "text-orange-100"],
      },
  ];
  return (
    <>
      <div className="block md:flex gap-x-5 items-center">
        {highlights.map((highlight, index) => (
          <div className="mt-2 md:mt-0 w-full md:w-1/3" key={index}>
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
