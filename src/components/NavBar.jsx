import { Link } from "react-router-dom";

export default function NavBar({ site_name }) {
  const links = [
    { url: "/home", name: "Home" },
    { url: "/category", name: "Category" },
    { url: "/discover", name: "Discover" },
    { url: "/news", name: "News" },
    { url: "/about", name: "About" },
  ];
  return (
    <>
      <div className="p-5 md:py-8 px-5 md:px-10 bg-cs-dark-light">
        <div className="flex justify-between items-center">
          <div className="block sm:flex items-center sm:gap-x-5 md:gap-x-16 lg:gap-x-32 duration-300">
            <div className="text-white font-bold text-2xl md:text-3xl cursor-pointer">
              <Link to="/">{site_name}</Link>
            </div>
            <div className="hidden sm:flex items-center sm:gap-x-3 md:gap-x-5 duration-300">
              {links.map((link, index) => (
                <div key={index}>
                  <Link
                    className={`${
                      link.name == "Home"
                        ? "text-white font-bold border-b-[2px]"
                        : "text-gray-400"
                    } border-yellow-300 duration-300 hover:text-white`}
                    to={link.url}
                  >
                    {link.name}
                  </Link>
                </div>
              ))}
            </div>
          </div>
          {/* login and signup button */}
          <div className="flex gap-x-4">
            <div>
              <button className="duration-300 hover:bg-gray-600 hover:text-white rounded-3xl border-[1px] text-gray-200 border-gray-200 p-1 px-4 md:p-2 md:px-5 cursor-pointer">
                Login
              </button>
            </div>
            <div>
              <button className="duration-300 hover:bg-gray-700 rounded-3xl border-[1px] text-white bg-gray-600 border-gray-200 p-1 px-4 md:p-2 md:px-5 cursor-pointer">
                Signup
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
