import DocumentTittle from "../utils/documentTitle";
import AboutJson from "../data/about.json";

export default function About() {
  return (
    <>
      <DocumentTittle title="About" />
      <main className="mainComponent">
        {AboutJson.map((section, index) => (
          <div key={index} className="mb-8">
            <h2 className="text-3xl font-bold text-white mb-4">
              {section.sectionTitle}
            </h2>
            <p className="text-gray-400">{section.sectionDesc}</p>
          </div>
        ))}
      </main>
    </>
  );
}
