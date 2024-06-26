import { Link } from "react-router-dom";
import formatDate from "../utils/formatDate"

export default function SportCardHeadlines({title,newsChannel,date, url}) {
  const style = [
    ["bg-orange-500", "text-orange-100"],
    ["bg-green-500", "text-green-200"],
    ["bg-blue-500", "text-blue-200"]
  ]
  const col = ["bg-blue-400", "text-white"]
  const fDate = formatDate(date);
  return (
    <>
    <Link to={url}>
      <div className={`${col[0]} w-100 opacity-70 duration-300 hover:opacity-100 cursor-pointer rounded-lg p-5 flex justify-between h-full`}>
        <div className="w-3/4">
          <div className="text-white font-bold text-xl">{title}</div>
          <div className="text-white font-xl mt-3">{newsChannel}</div>
          <div className={`${col[1]} mt-1`}>{fDate}</div>
        </div>
        <div className="w-1/4"></div>
      </div>
      </Link>
    </>
  );
}
