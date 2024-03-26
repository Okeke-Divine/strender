export default function Footer({ site_name, siteDesc }) {
  return (
    <>
      <div className="mt-5 p-5 md:py-8 px-5 md:px-10 bg-cs-dark-light">
        <div className="block md:flex justify-between">
          <div className="w-1/3">
            <div className="text-white font-bold text-4xl">{site_name}</div>
            <div className="text-gray-400 max-w-[60%] mt-1">
              {siteDesc}
            </div>
          </div>
          <div className="mt-5 md:mt-0 w-3/4 block md:flex gap-x-2 justify-between">
            {/* footer link container */}
            <div className="mt-2 md:mt-0 w-full md:w-1/3 p-2">
              <div className="font-bold text-xl text-white">Links</div>
              <div className="mt-2">
                <div><a href="#" className="text-gray-400 duration-300 hover:text-white">Link</a></div>
                <div><a href="#" className="text-gray-400 duration-300 hover:text-white">Link</a></div>
                <div><a href="#" className="text-gray-400 duration-300 hover:text-white">Link</a></div>
                <div><a href="#" className="text-gray-400 duration-300 hover:text-white">Link</a></div>
                <div><a href="#" className="text-gray-400 duration-300 hover:text-white">Link</a></div>
              </div>
            </div>
            {/* footer link container */}
            <div className="mt-2 md:mt-0 w-full md:w-1/3 p-2">
              <div className="font-bold text-xl text-white">Links</div>
              <div className="mt-2">
                <div><a href="#" className="text-gray-400 duration-300 hover:text-white">Link</a></div>
                <div><a href="#" className="text-gray-400 duration-300 hover:text-white">Link</a></div>
                <div><a href="#" className="text-gray-400 duration-300 hover:text-white">Link</a></div>
                <div><a href="#" className="text-gray-400 duration-300 hover:text-white">Link</a></div>
              </div>
            </div>
            {/* footer link container */}
            <div className="mt-2 md:mt-0 w-full md:w-1/3 p-2">
              <div className="font-bold text-xl text-white">Links</div>
              <div className="mt-2">
                <div><a href="#" className="text-gray-400 duration-300 hover:text-white">Link</a></div>
                <div><a href="#" className="text-gray-400 duration-300 hover:text-white">Link</a></div>
                <div><a href="#" className="text-gray-400 duration-300 hover:text-white">Link</a></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
