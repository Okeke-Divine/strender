import DocumentTittle from "../utils/documentTitle";
import LatestNews from "../components/LatestNews";

export default function Category({ lastestNewsDesc }) {
  return (
    <>
      <main className="mainComponent">
        <DocumentTittle title="Category" />
        <div className="text-xl text-white">
          Http server esponded - Category
        </div>
        <LatestNews lastestNewsDesc={lastestNewsDesc} />
      </main>
    </>
  );
}
