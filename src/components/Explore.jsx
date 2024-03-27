//components
import ComponentTitle from "../components/__global/ComponentTitle";
import ExploreCardCircle from "../components/ExploreCardCircle"

export default function Explore() {
  return (
    <>
      <div className="mt-5">
        <ComponentTitle title="Explore" url="/explore" />
        {/* list of sports */}
        <div className="flex gap-x-5 overflow-auto whitespace-nowrap mt-2">
          <ExploreCardCircle title="Footbal" url="/sports/football" />
          <ExploreCardCircle title="Basketball" url="/sports/football" />
          <ExploreCardCircle title="Boxing" url="/sports/football" />
          <ExploreCardCircle title="Volley Ball" url="/sports/football" />
          <ExploreCardCircle title="Basketball" url="/sports/football" />
          <ExploreCardCircle title="Hockey" url="/sports/football" />
          <ExploreCardCircle title="Dart" url="/sports/football" />
          <ExploreCardCircle title="Pokers" url="/sports/football" />
          <ExploreCardCircle title="Race" url="/sports/football" />
          <ExploreCardCircle title="Tonarments" url="/sports/football" />
          <ExploreCardCircle title="Sprints" url="/sports/football" />
        </div>
      </div>
    </>
  );
}
