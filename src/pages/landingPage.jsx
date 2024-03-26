export default function LandingPage({site_name}) {
  const links = [
    { url: "#", name: "Home" },
    { url: "#", name: "Sports" },
    { url: "#", name: "Posts" },
    { url: "#", name: "About" },
    { url: "#", name: "Contact" },
  ];
  return (
    <>
      <div className="p-5 md:py-8 px-5 md:px-10 bg-cs-dark-light">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-x-32">
            <div className="text-white font-bold text-2xl">{site_name}</div>
            <div className="flex items-center gap-x-5">
              {links.map((link, index) => (
                <div>
                  <a className={`${(link.name == 'Home') ? 'text-white font-bold border-b-[2px]' : 'text-gray-400'} border-yellow-300 duration-300 hover:text-white`} href={link.url}>
                    {link.name}
                  </a>
                </div>
              ))}
            </div>
          </div>
          {/* login and signup button */}
          <div className="flex gap-x-4">
            <div>
              <button className="duration-300 hover:bg-gray-600 hover:text-white rounded-3xl border-[1px] text-gray-200 border-gray-200 p-2 px-5 cursor-pointer">
                Login
              </button>
            </div>
            <div>
              <button className="duration-300 hover:bg-gray-700 rounded-3xl border-[1px] text-white bg-gray-600 border-gray-200 p-2 px-5 cursor-pointer">
                Signup
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
