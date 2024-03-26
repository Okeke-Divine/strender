import { useEffect } from "react";
// data files
import applicationConfig from "./data/applicationConfig.json";
//pages
import LandingPage from "./pages/landingPage";
// utils
import capitalizeFirstString from "./utils/capitalizeFirstString";

function App() {
  const siteName = applicationConfig["site_name"];
  const capitalizedSiteName = capitalizeFirstString(siteName);

  useEffect(function () {
    document.title = capitalizedSiteName;
  }, []);
  return (
    <>
      <div className="bg-cs-dark min-h-[100vh]">
        <LandingPage site_name={capitalizedSiteName} />
      </div>
    </>
  );
}

export default App;
