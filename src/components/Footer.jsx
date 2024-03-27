import { Link } from "react-router-dom";

export default function Footer({ site_name, siteDesc }) {
  const links1 = [
    {
      name: "404 page",
      url: "/404-page",
    },
    {
      name: "Home",
      url: "/home",
    },
    {
      name: "Category",
      url: "/category",
    },
    {
      name: "Discover",
      url: "/discover",
    },
    {
      name: "News",
      url: "/news",
    },
    {
      name: "About",
      url: "/about",
    },
  ];
  return (
    <>
      <div className="mt-5 p-5 md:py-8 px-5 md:px-10 bg-cs-dark-light">
        <div className="block md:flex justify-between">
          <div className="w-full md:w-1/3">
            <div className="text-white font-bold text-4xl cursor-pointer">
              <Link to="/">{site_name}</Link>
            </div>
            <div className="text-gray-400 max-w-[60%] mt-1">{siteDesc}</div>
          </div>
          <div className="mt-5 md:mt-0 w-full md:w-3/4 block md:flex gap-x-2 justify-between">
            {/* footer link container */}
            <div className="mt-1 md:mt-0 w-full md:w-1/3 p-2">
              <div className="font-bold text-xl text-white">Links (Pages)</div>
              <div className="mt-2">
                {links1.map((link, index) => (
                  <div key={index}>
                    <a
                      href={link.url}
                      className="text-gray-400 duration-300 hover:text-white"
                    >
                      {link.name}
                    </a>
                  </div>
                ))}
              </div>
            </div>
            {/* footer link container */}
            <div className="mt-1 md:mt-0 w-full md:w-1/3 p-2">
              <div className="font-bold text-xl text-white">Legal</div>
              <div className="mt-2">
                <a
                  href="/t&c"
                  className="text-gray-400 duration-300 hover:text-white"
                >
                  Terms & Conditions
                </a>
              </div>
              <div>
                <a
                  href="/privacy-policy"
                  className="text-gray-400 duration-300 hover:text-white"
                >
                  Privacy Policy
                </a>
              </div>
            </div>
            {/* footer link container */}
            <div className="mt-1 md:mt-0 w-full md:w-1/3 p-2">
              <div className="font-bold text-xl text-white">Extra (Other)</div>
              <div className="mt-2">
                <div>
                  <a
                    href="/credits"
                    className="text-gray-400 duration-300 hover:text-white"
                  >
                    Credits
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* end flex */}
        <div className="w-[100%] my-3">
          <div className="w-full bg-gray-700 h-[1px]"></div>
        </div>
        <div className="text-center text-white font-semibold text-md">
          &copy; {site_name} 2024 - Built by{" "}
          <a href="https://okekedivine.vercel.app" target={"_blank"}>
            <span className="cs-text-yellow-1">Dev Divine</span>
          </a>
        </div>
      </div>
    </>
  );
}
