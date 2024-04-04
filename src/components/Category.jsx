//components
import api from "../utils/api";
import { useEffect, useState } from "react";
import ComponentTitle from "./__global/ComponentTitle";
import CategoryCardCircle from "./CategoryCardCircle";

export default function Category() {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await api.get("categories/");
        setCategories(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };

    fetchCategories();
  }, []);

  return (
    <>
      <div className="mt-5">
        <ComponentTitle title="Category" url="/category" />
        {/* list of sports */}
        <div className="flex gap-x-5 overflow-auto whitespace-nowrap mt-2 scroll-bar-track-2">
          {loading ? (
            <>
              <span className="text-gray-400">Loading...</span>
            </>
          ) : (
            ""
          )}
          {categories.map((category, index) => (
            <CategoryCardCircle
              title={category.name}
              url={"/category/" + category.name}
              key={index}
            />
          ))}
        </div>
      </div>
    </>
  );
}
