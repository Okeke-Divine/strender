import { Link } from "react-router-dom";
export default function NotFound() {
  function back() {
    window.history.back();
  }
  return (
    <>
      <main className="mt-5 px-5 min-h-[500px] sm:px-10 md:px-20 lg:px-36 flex items-center">
        <div className="block md:flex w-full">
          <div className="w-full md:w-1/2">
            <div className="text-center font-bold text-white text-6xl">
              404 - Not Found
            </div>
            <div className="text-center text-white text-xl mt-2">
              The requested resource was not found on this server.
            </div>
            <div className="flex justify-center mt-3 gap-x-3">
              <div>
                <button
                  onClick={back}
                  className="duration-300 hover:bg-gray-600 hover:text-white rounded-3xl border-[1px] text-gray-200 border-gray-200 p-1 px-4 md:p-2 md:px-5 cursor-pointer"
                >
                  Back
                </button>
              </div>
              <div>
                <Link to="/">
                  <button className="duration-300 bg-orange-400 hover:text-white rounded-3xl border-[1px] text-gray-200 p-1 px-4 md:p-2 md:px-5 cursor-pointer">
                    Home
                  </button>
                </Link>
              </div>
            </div>
          </div>
          <div className="w-1/2"></div>
        </div>
      </main>
    </>
  );
}
