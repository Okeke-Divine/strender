import { useEffect } from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

// data files
import applicationConfig from "./data/applicationConfig.json";
// components
import NavBar from "./components/NavBar";
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
        {/* <NavBar site_name={capitalizedSiteName} /> */}
        <main>
          <LandingPage site_name={capitalizedSiteName} />
        </main>
      </div>
    </>
  );
}

export default App;
