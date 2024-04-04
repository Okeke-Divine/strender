import DocumentTittle from "../utils/documentTitle";
import LatestNews from "../components/LatestNews";

export default function Discover({ lastestNewsDesc}) {
  return (
    <>
      <DocumentTittle title="Discover" />
      <main className="mainComponent">
        <div className="flex rounded-lg items-center">
          <div className="w-full">
            <input
              className="w-full pl-5 pr-2 rounded-l-lg bg-white h-10 outline-none border-none"
              placeholder="Search..."
            />
          </div>
          <div className="w-fit">
            <button className="w-10 bg-black text-white rounded-r-lg h-10 cursor-pointer">
              <i className="fi fi-ts-category relative top-[0.1rem]"></i>
            </button>
          </div>
        </div>
        <div className="mt-5">
          <LatestNews lastestNewsDesc={lastestNewsDesc} config={{total: 9, type: 'random'}} />
        </div>
      </main>
    </>
  );
}
