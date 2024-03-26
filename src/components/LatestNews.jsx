//components
import ComponentTitle from "../components/__global/ComponentTitle";

export default function LatestNews() {
  return (
    <>
      <div className="mt-5">
        <ComponentTitle title="Latest News" url="/news?sort_by=latest" />
      </div>
    </>
  );
}
