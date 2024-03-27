//components
import ComponentTitle from "../components/__global/ComponentTitle";

export default function LatestNews({lastestNewsDesc}) {
  return (
    <>
      <div className="mt-5">
        <ComponentTitle title="Latest News" url="/news?sort_by=latest" />
        <div className="mt-1 text-gray-400 font-semibold">
          {lastestNewsDesc}
        </div>
        <div></div>
      </div>
    </>
  );
}
