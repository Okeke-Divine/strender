import { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// data files
import applicationConfig from "./data/applicationConfig.json";
// components
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
//pages
import DefaultPage from "./pages/DefaultPage.jsx";
import Home from "./pages/Home.jsx";
import Category from "./pages/Category.jsx";
import Credits from "./pages/Credits.jsx";
import About from "./pages/About.jsx";
import Discover from "./pages/Discover.jsx";
import News from "./pages/News.jsx";
import Post from "./pages/Post.jsx";
import PrivacyPolicy from "./pages/PrivacyPolicy.jsx"
import TermsAndConditions from "./pages/TermsAndConditions.jsx"
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
              <Route
                path="/"
                element={<DefaultPage site_name={capitalizedSiteName} />}
              />
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
              <Route path="/category" element={<Category lastestNewsDesc={lastestNewsDesc} />} />
              <Route path="/discover" element={<Discover lastestNewsDesc={lastestNewsDesc} />} />
              <Route path="/news" element={<News />} />
              <Route path="/about" element={<About />} />
              <Route path="/credits" element={<Credits />} />
              <Route path="/post/:slug" element={<Post />} />
              <Route path="/privacy-policy" element={<PrivacyPolicy />} />
              <Route path="/t&c" element={<TermsAndConditions />} />
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
