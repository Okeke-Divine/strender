import { Link } from "react-router-dom";

export default function SocialIconComp1({ iconClass, url }) {
  return (
    <>
      <Link to={url} target={"_blank"}>
        <div className="rounded-full bg-gray-600 w-10 h-10 text-white flex justify-center items-center">
          <i class={`${iconClass} relative top-[0.1rem]`}></i>
        </div>
      </Link>
    </>
  );
}
