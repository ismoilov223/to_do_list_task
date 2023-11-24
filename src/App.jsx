import { useState } from "react";
import HeroBg from "./components/HeroBg";
import TodoBox from "./components/TodoBox";

function App() {
  return <>
  <div className="container w-full max-[1500px]">
  <HeroBg></HeroBg>
  <TodoBox></TodoBox>
  </div>
  </>;
}

export default App;
