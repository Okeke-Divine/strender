//components
import ComponentTitle from "../components/__global/ComponentTitle";
import MostReadPostElem from "../components/MostReadPostElem";

export default function MostRead() {
  const mostReadPosts = [
    {
      url: "#",
      title: "Here we go: Messi to Manchestaer United",
      author: "UCL News Media",
      date: "19 Jul 2023",
      views: "2.4M",
    },
    {
      url: "#",
      title: "Here we go: Messi to Manchestaer United",
      author: "UCL News Media",
      date: "19 Jul 2023",
      views: "2.4M",
    },
    {
      url: "#",
      title: "Here we go: Messi to Manchestaer United",
      author: "UCL News Media",
      date: "19 Jul 2023",
      views: "2.4M",
    },
    {
      url: "#",
      title: "Here we go: Messi to Manchestaer United",
      author: "UCL News Media",
      date: "19 Jul 2023",
      views: "2.4M",
    },
    {
      url: "#",
      title: "Here we go: Messi to Manchestaer United",
      author: "UCL News Media",
      date: "19 Jul 2023",
      views: "2.4M",
    },
    {
      url: "#",
      title: "Here we go: Messi to Manchestaer United",
      author: "UCL News Media",
      date: "19 Jul 2023",
      views: "2.4M",
    },
  ];
  return (
    <>
      <div className="mt-5">
        <ComponentTitle title="Most Read" url="/posts?sort_by=most-read" />
        <div>
          <div className="block md:flex gap-x-2 flex-wrap mt-2">
            {mostReadPosts.map((post, index) => (
              <>
                <MostReadPostElem
                  url={post.url}
                  title={post.title}
                  author={post.author}
                  date={post.date}
                  views={post.views}
                  key={index}
                />
              </>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
