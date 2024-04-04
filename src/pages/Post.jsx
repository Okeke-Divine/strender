import DocumentTittle from "../utils/documentTitle";

export default function About() {
  return (
    <>
      <main className="mainComponent2 mt-2">
        <div className="w-full h-[300px] bg-blue-200 rounded-3xl"></div>
      </main>
      <main className="mainComponent relative -top-20 mb-[-5rem]">
        <div className="block md:flex bg-white rounded-xl shadow-lg p-5">
          <div className="w-full md:w-4/6">
            {/* category */}
            <div>Football</div>
            {/* post title */}
            <div className="mt-3 font-bold text-2xl">
              NBA Star Giannis Antetokounmpo Launches Foundation to Empower
              Youth Through Basketball
            </div>
            {/* post author, date, views */}
            <div className="flex items-center gap-x-3 font-semibold mt-1">
                <div>UCL NEWS</div>
                <div className="text-gray-400">22 Sept 2022</div>
                <div>.</div>
                <div className="text-gray-400"> 234 views</div>
            </div>
          </div>
          <div className="mt-5 md:mt-0 w-full md:w-2/6">2</div>
        </div>
      </main>
    </>
  );
}
