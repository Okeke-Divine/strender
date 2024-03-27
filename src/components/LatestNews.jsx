//components
import ComponentTitle from "../components/__global/ComponentTitle";
import LatestNewsPost from "../components/LatestNewsPost";

export default function LatestNews({ lastestNewsDesc }) {
  const lastestNews = [
    {
      title: "Real Madrid Secures Victory in El Clásico Thriller",
      previewText: "In a nail-biting match against Barcelona, Real Madrid emerged victorious with a last-minute goal from superstar Cristiano Ronaldo, solidifying their lead in La Liga.",
      url: "",
      thumbnail: "",
    },
    {
      title: "LeBron James Leads Lakers to Overtime Win Against Rival Clippers",
      previewText: "In a highly anticipated showdown between Los Angeles rivals, LeBron James delivered a stellar performance, leading the Lakers to a thrilling overtime victory over the Clippers.",
      url: "",
      thumbnail: "",
    },
    {
      title: "NHL Playoffs: Tampa Bay Lightning Dominate Game 1 Against New York Rangers",
      previewText: "The Tampa Bay Lightning kicked off the NHL playoffs with an impressive performance, defeating the New York Rangers with a commanding 4-1 victory in Game 1 of their series.",
      url: "",
      thumbnail: "",
    },
    {
      title: "Cristiano Ronaldo Named FIFA Men's Player of the Year",
      previewText: "In recognition of his outstanding achievements on the pitch, Cristiano Ronaldo has been awarded the prestigious FIFA Men's Player of the Year award for the fifth time in his illustrious career.",
      url: "",
      thumbnail: "",
    },
    {
      title: "Golden State Warriors Clinch Playoff Spot with Win Over Houston Rockets",
      previewText: "The Golden State Warriors secured their spot in the NBA playoffs with a decisive victory over the Houston Rockets, showcasing their championship-caliber form as they gear up for another postseason run.",
      url: "",
      thumbnail: "",
    },
    {
      title: "Manchester City Advances to Champions League Semifinals After Dramatic Comeback",
      previewText: "In a stunning display of resilience, Manchester City staged a remarkable comeback against Paris Saint-Germain to secure their place in the Champions League semifinals, sending shockwaves through the football world.",
      url: "",
      thumbnail: "",
    },
    {
      title: "NBA Draft Prospect Emerges as Top Contender Following Impressive Combine Performance",
      previewText: "A promising young basketball talent has captured the attention of NBA scouts and analysts with an exceptional performance at the NBA Draft Combine, solidifying his status as a top contender for the upcoming draft.",
      url: "",
      thumbnail: "",
    },
    {
      title: "Alex Ovechkin Leads Washington Capitals to Stanley Cup Final with Hat-Trick Performance",
      previewText: "Alex Ovechkin delivered a masterful performance on the ice, recording a hat-trick to propel the Washington Capitals to victory over the Boston Bruins and secure their spot in the Stanley Cup Final.",
      url: "",
      thumbnail: "",
    },
    {
      title: "Lionel Messi Signs Historic Contract Extension with Barcelona",
      previewText: "Barcelona fans rejoice as Lionel Messi commits his future to the club, signing a historic contract extension that will keep him at Camp Nou for the remainder of his illustrious career.",
      url: "",
      thumbnail: "",
    },
    {
      title: "NBA Star Giannis Antetokounmpo Launches Foundation to Empower Youth Through Basketball",
      previewText: "Giannis Antetokounmpo, known for his prowess on the basketball court, is making a difference off the court with the launch of his foundation aimed at empowering youth through basketball and education initiatives.",
      url: "",
      thumbnail: "",
    }
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
