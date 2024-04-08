import { Link } from "react-router-dom";

export default function LatestNewsPost({
  title,
  previewText,
  url,
  thumbnail,
  author,
}) {
  return (
    <div className="hover:opacity-90 duration-300">
      <div className="flex flex-col justify-between h-full">
        <div className="w-full bg-blue-200 h-[200px] rounded-lg p-2">
           <img src={thumbnail} \>
        </div>
        <div>
          <div className="mt-3 font-bold text-xl text-white">{title}</div>
          <div className="uppercase text-gray-400">{author}</div>
        </div>
        <div className="text-gray-400 mt-2">{previewText}</div>
        <div className="mt-2">
          <Link
            to={url}
            className="cursor-pointer cs-text-yellow-1 duration-300 font-bold"
          >
            Read More
          </Link>
        </div>
      </div>
    </div>
  );
}
