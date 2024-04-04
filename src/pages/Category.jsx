import { useState, useEffect } from "react";
import api from "../utils/api";
//components
import DocumentTittle from "../utils/documentTitle";
import LatestNews from "../components/LatestNews";
import CategoryComponent from "../components/CategoryComponent";

export default function Category({ lastestNewsDesc }) {
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
      <main className="mainComponent">
        <DocumentTittle title="Category" />
        <div className="text-xl text-white">
          {loading ? (
            <>
              <span className="text-gray-400">Loading...</span>
            </>
          ) : (
            ""
          )}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {categories.map((category, index) => (
              <CategoryComponent category={category} key={index} />
            ))}
          </div>
        </div>
        <LatestNews lastestNewsDesc={lastestNewsDesc} />
      </main>
    </>
  );
}
