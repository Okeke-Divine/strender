import { Link } from "react-router-dom";
import formatDate from "../utils/formatDate"

export default function MostReadPostElem({ url, title, author, date, views }) {
  const fDate = formatDate(date);
  return (
    <>
      <Link to={url} className="w-full">
        <div className="block md:flex gap-x-3 cursor-pointer duration-300 hover:opacity-70">
          <div className="w-full md:w-1/3">
            <div className="bg-blue-200 p-5 w-full h-[90px] rounded-lg"></div>
          </div>
          <div className="mt-2 md:mt-0 w-full md:w-2/3">
            <div className="font-bold text-white">{title}</div>
            <div className="text-gray-400 font-semibold">{author}</div>
            <div className="block md:flex text-gray-400 gap-x-2 justify-between items-center">
              <div>{fDate}</div>
              <div className="hidden md:block">
                <div className="w-1 h-1 bg-gray-400 rounded-full"></div>
              </div>
              <div>{views} Reader(s)</div>
            </div>
          </div>
        </div>
      </Link>
    </>
  );
}
