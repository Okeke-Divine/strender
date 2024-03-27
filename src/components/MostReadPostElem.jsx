import { Link } from "react-router-dom";

export default function MostReadPostElem({ url, title, author, date, views }) {
  return (
    <>
      <Link to={url} className="w-full">
        <div className="flex gap-x-3 cursor-pointer duration-300 hover:opacity-70">
          <div className="w-1/2 md:w-1/3">
            <div className="bg-blue-200 p-5 w-full h-[90px] rounded-lg"></div>
          </div>
          <div className="w-1/2 md:w-2/3">
            <div className="font-bold text-white">{title}</div>
            <div className="text-white">{author}</div>
            <div className="block md:flex text-gray-400 gap-x-2 justify-between items-center">
              <div>{date}</div>
              <div className="hidden md:block">
                <div className="w-1 h-1 bg-gray-400 rounded-full"></div>
              </div>
              <div>{views} Readers</div>
            </div>
          </div>
        </div>
      </Link>
    </>
  );
}
