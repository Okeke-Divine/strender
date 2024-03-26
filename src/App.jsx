import { useEffect } from "react";
// data files
import applicationConfig from "./data/applicationConfig.json"

function App() {
  useEffect(function(){
    document.title = applicationConfig["site_name"];
  },[])
  return (
    <>
      <div>blog</div>
    </>
  );
}

export default App;