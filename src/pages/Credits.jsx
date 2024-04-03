import CreditsData from "../data/credits.json";
import DocumentTittle from "../utils/documentTitle";

export default function Credits() {
  return (
    <>
      <DocumentTittle title="Credits" />
      <main className="mainComponent">
        <h1 className="text-3xl font-bold text-white mb-8">Credits</h1>
        {CreditsData.sections.map((section, index) => (
          <div key={index} className="mb-8">
            <h2 className="text-2xl font-semibold text-white mb-4">
              {section.title}
            </h2>
            <ul className="list-disc list-inside">
              {section.content.map((item, idx) => (
                <li key={idx} className="text-gray-400 mb-2">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </main>
    </>
  );
}
