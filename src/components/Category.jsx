//components
import ComponentTitle from "./__global/ComponentTitle";
import CategoryCardCircle from "./CategoryCardCircle";

export default function Category() {
  const categories = [{ title: "Football", url: "/sports/football" }];
  return (
    <>
      <div className="mt-5">
        <ComponentTitle title="Category" url="/category" />
        {/* list of sports */}
        <div className="flex gap-x-5 overflow-auto whitespace-nowrap mt-2">
          {categories.map((category, index) => (
            <>
              <CategoryCardCircle
                title={category.title}
                url={category.url}
                key={index}
              />
            </>
          ))}
          <CategoryCardCircle title="Footbal" url="/sports/football" />
          <CategoryCardCircle title="Basketball" url="/sports/football" />
          <CategoryCardCircle title="Boxing" url="/sports/football" />
          <CategoryCardCircle title="Volley Ball" url="/sports/football" />
          <CategoryCardCircle title="Basketball" url="/sports/football" />
          <CategoryCardCircle title="Hockey" url="/sports/football" />
          <CategoryCardCircle title="Dart" url="/sports/football" />
          <CategoryCardCircle title="Pokers" url="/sports/football" />
          <CategoryCardCircle title="Race" url="/sports/football" />
          <CategoryCardCircle title="Tonarments" url="/sports/football" />
          <CategoryCardCircle title="Sprints" url="/sports/football" />
        </div>
      </div>
    </>
  );
}
