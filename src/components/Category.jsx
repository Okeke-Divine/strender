//components
import ComponentTitle from "./__global/ComponentTitle";
import CategoryCardCircle from "./CategoryCardCircle";

export default function Category() {
  const categories = [
    { title: "Football", url: "/sports/football" },
    { title: "Basketball", url: "/sports/basketball" },
    { title: "Boxing", url: "/sports/boxing" },
    { title: "Volley Ball", url: "/sports/volleyball" },
    { title: "Basketball", url: "/sports/basketball" },
    { title: "Hockey", url: "/sports/hockey" },
    { title: "Dart", url: "/sports/dart" },
    { title: "Pokers", url: "/sports/pokers" },
    { title: "Race", url: "/sports/race" },
    { title: "Tonarments", url: "/sports/tonarments" },
    { title: "Sprints", url: "/sports/sprints" },
  ];
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
        </div>
      </div>
    </>
  );
}
