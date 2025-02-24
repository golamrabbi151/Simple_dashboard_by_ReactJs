import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
// import "./App.css";
import TopBar from "./components/TopBar.jsx";
import LeftMenu from "./components/LeftMenu.jsx";
import MainBody from "./components/MainBody.jsx";
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <TopBar />
      <div className="flex mt-4">
        <div className="w-32 flex-none">
          <LeftMenu />
        </div>
        <div className="w-64 pl-4 flex-1">
          <MainBody />
        </div>
      </div>
    </>
  );
}

export default App;
