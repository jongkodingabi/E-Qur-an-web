// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import "./App.css";
// import Photo from "./assets/Profile.png";
import Hero from "./components/Hero";
import SurahContainer from "./components/surah/SurahContainer";
// import Profile from "./components/Profile";
// import Verse from "./components/Verse";

function App() {
  // const [count, setCount] = useState(0);

  return (
    <>
      <Hero />
      <SurahContainer />
    </>
  );
}

export default App;
