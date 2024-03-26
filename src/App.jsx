import { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// data files
import applicationConfig from "./data/applicationConfig.json";
// components
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
//pages
import LandingPage from "./pages/landingPage";
import NotFound from "./pages/errors/NotFound"
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
        <main>
          <BrowserRouter>
            <NavBar site_name={capitalizedSiteName} />
            <Routes>
              <Route path="/" element={<LandingPage site_name={capitalizedSiteName} />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
            <Footer />
          </BrowserRouter>
        </main>
      </div>
    </>
  );
}

export default App;
