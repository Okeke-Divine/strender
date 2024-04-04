// import { Link } from "react-router-dom";

export default function ComponentTitle({title, url}) {
  return (
    <>
      <div className="flex justify-between items-center">
        <div className="text-xl font-bold text-white">{title}</div>
        <div>
          {(url != null) ? (<a
            href={url}
            className="cs-text-yellow-1 opacity-70 hover:opacity-100 duration-300 font-bold"
          >
            See More
          </a>) : (<></>)}
        </div>
      </div>
    </>
  );
}
