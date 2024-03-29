import { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// data files
import applicationConfig from "./data/applicationConfig.json";
// components
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
//pages
// import LandingPage from "./pages/LandingPage.jsx";
import Home from "./pages/Home.jsx";
import NotFound from "./pages/errors/NotFound.jsx";
// utils
import capitalizeFirstString from "./utils/capitalizeFirstString";

function App() {
  const siteName = applicationConfig["site_name"];
  const siteDesc = applicationConfig["description"];
  const lastestNewsDesc = applicationConfig["lastes_news_description"];
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
              {/* <Route
                path="/"
                element={<LandingPage site_name={capitalizedSiteName} />}
              /> */}
              <Route
                path="/home"
                element={
                  <Home
                    site_name={capitalizedSiteName}
                    siteDesc={siteDesc}
                    lastestNewsDesc={lastestNewsDesc}
                  />
                }
              />
              <Route path="*" element={<NotFound />} />
            </Routes>
            <Footer site_name={capitalizedSiteName} siteDesc={siteDesc} />
          </BrowserRouter>
        </main>
      </div>
    </>
  );
}

export default App;
