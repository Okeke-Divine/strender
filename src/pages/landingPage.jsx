// components
import NavBar from "../components/NavBar";
import SocialIconComp1 from "../components/SocialIconComp1";

function __PartialHero() {
  return (
    <>
      <div className="p-5 md:py-8 px-5 md:px-10 bg-cs-dark-light">
        <div>
          <div className="font-bold text-5xl">
            <span className="text-yellow-1">Sports</span>{" "}
            <span className="text-gray-400">articles</span>
          </div>
          <div className="w-[40%] my-7">
            <div className="w-full bg-gray-700 h-[1px]"></div>
          </div>
          <div className="block md:flex justify-between items-center">
            <div className="text-gray-400">
              All types of sport posts in one place
            </div>
            <div className="flex mt-2 md:mt-0 gap-x-2 md:gap-x-3 items-center">
              <SocialIconComp1 />
              <SocialIconComp1 />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default function LandingPage({ site_name }) {
  return (
    <>
      <NavBar site_name={site_name} />
      <__PartialHero />
      <main className="mt-5 px-20">
          <div className="p-2 bg-white"></div>
      </main>
    </>
  );
}
