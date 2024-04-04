import DocumentTittle from "../utils/documentTitle";

export default function Discover() {
  return (
    <>
      <DocumentTittle title="Discover" />
      <main className="mainComponent">
        <div className="flex bg-white rounded-lg p-2">
          <div className="w-full">
            <input className="w-full bg-transparent" />
          </div>
          <div className="w-fit">
            <button className="bg-transparent cursor-pointer">S</button>
          </div>
        </div>
      </main>
    </>
  );
}
