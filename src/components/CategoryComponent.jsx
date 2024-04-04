import { Link } from "react-router-dom";

export default function CategoryComponent({ category }) {
  return (
    <>
      <Link to={"/category/" + category.name}>
        <div className="flex gap-x-3 w-fit items-center duration-300 hover:bg-gray-600 bg-opacity-40 py-2 px-3 rounded-lg">
          <div className="flex justify-center w-fit">
            <div className="w-16 h-16 rounded-full bg-blue-200"></div>
          </div>
          <div className="w-full">
            <div className="text-bold text-lg">{category.name}</div>
            <div className="text-gray-400 text-sm">12M posts</div>
          </div>
        </div>
      </Link>
    </>
  );
}
