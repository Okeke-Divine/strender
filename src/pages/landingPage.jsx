export default function LandingPage() {
  const links = [
    { url: "#", name: "Home" },
    { url: "#", name: "Home" },
  ];
  return (
    <>
      <div className="p-5 md:py-8 px-5 md:px-10 bg-cs-dark-light">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-x-16">
            <div>Strender</div>
            <div className="flex gap-x-5">
              <div>
                <a className="text-gray-400" href="#">
                  Test
                </a>
              </div>
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
