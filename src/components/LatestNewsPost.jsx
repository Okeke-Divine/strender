import { Link } from "react-router-dom";

export default function LatestNewsPost() {
  return (
    <Link to="#" className="cursor-pointer hover:opacity-70 duration-300">
      <div>
        <div className="w-full bg-blue-200 h-[200px] rounded-lg p-2"></div>
        <div className="mt-3 font-bold text-xl text-white">
          Real madrid to be suspended from Master league
        </div>
        <div className="text-gray-400 mt-2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil eius
          beatae iusto enim dignissimos, itaque impedit aliquid minima
          praesentium recusandae delectus inventore nobis harum voluptates
          expedita sint? Voluptatibus, accusamus harum?
        </div>
        <div></div>
      </div>
    </Link>
  );
}
