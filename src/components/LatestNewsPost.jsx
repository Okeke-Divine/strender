import { Link } from "react-router-dom";

export default function LatestNewsPost({ title, previewText, url, thumbnail }) {
  return (
    <div className="hover:opacity-90 duration-300">
      <div>
        <div className="w-full bg-blue-200 h-[200px] rounded-lg p-2"></div>
        <div className="mt-3 font-bold text-xl text-white">{title}</div>
        <div className="text-gray-400 mt-2">{previewText}</div>
        <div>
          <Link to={url} className="cursor-pointer">
            <button className="text-white">Read more</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
