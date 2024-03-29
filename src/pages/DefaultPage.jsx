import { Link } from "react-router-dom";

export default function LandingPage({ site_name }) {
  return (
    <>
      <main className="mainComponent">
        <div className="text-white text-4xl font-bold">Welcome.</div>
        <div className="mt-5 text-xl text-white">
          This page is still on under construction. <br />
          In the meantime you can navigate to{" "}
          <span className="text-yellow-400">
            {" "}
            <Link to="/home">Home</Link>
          </span>
        </div>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
      </main>
    </>
  );
}
