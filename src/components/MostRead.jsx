import ComponentTitle from "../components/__global/ComponentTitle";

export default function MostRead() {
  return (
    <>
      <div className="mt-5">
        <ComponentTitle title="Most Read" url="/posts?sort_by=most-read" />
      </div>
    </>
  );
}
