import "./App.css";
import { Fragment } from "react";
import Navbar from "./components/Navbar.js";
import ProfileCard from "./components/ProfileCard.js";
function App() {
  return (
    <Fragment>
      <Navbar />
      <div className="background">
        <div className="bg-pattern-top"></div>
        <div className="bg-pattern-bottom"></div>

        <ProfileCard
          name="Rita Correia"
          age="32"
          city="London"
          followers="80K"
          likes="803K"
          photos="1.4K"
        ></ProfileCard>
      </div>
    </Fragment>
  );
}

export default App;
