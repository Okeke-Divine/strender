import { useState, useEffect } from "react";
import api from "../utils/api"
import __Checkbox from "./__Checkbox";

export default function EmailSubscribe() {
    const [categories, setCategories] = useState([]);
    useEffect(() => {
      const fetchCategories = async () => {
        try {
          const response = await api.get("categories/");
          setCategories(response.data);
        } catch (error) {
          console.error("Error fetching categories:", error);
        }
      };
  
      fetchCategories();
    }, []);

  return (
    <>
      <form>
        <div className="font-bold">Subscribe to our resources</div>
        <div className="text-gray-500 text-sm font-semibold mt-1">
          Add your email to get notified each time we top a new content
        </div>
        <div className="mt-3 flex border-2 rounded-lg py-2 px-2 gap-x-2">
          <div className="w-fit">
            <i className="fi fi-ts-bars-staggered relative top-[0.1rem]"></i>
          </div>
          <div className="w-full">
            <input
              className="w-full bg-transparent border-none outline-none"
              placeholder="Enter your email"
            />
          </div>
        </div>
        {/* categories of interest */}
        <div className="my-5">
          <div className="font-bold">Category(s) of interest*</div>
          <div className="mt-2 flex gap-2 flex-wrap">
            {categories.map((category,index) => (
                <>
                <__Checkbox name={category.name} />
                </>
            ))}
          </div>
        </div>
        {/* submit */}
        <div className="mt-2">
          <button
            className="uppercase py-3 px-10 w-fit bg-blue-500 text-white rounded-lg text-sm font-semibold tracking-[1px]"
            type="button"
          >
            Suscribe
          </button>
        </div>
      </form>
    </>
  );
}
