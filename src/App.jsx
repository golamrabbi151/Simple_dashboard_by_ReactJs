import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
// import "./App.css";
import TopBar from "./components/TopBar.jsx";
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <TopBar />
      <h1>Hello world!</h1>
    </>
  );
}

export default App;
