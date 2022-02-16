// SWITCH TABS

// Make three components: Home, About, Profile.
// Put some text in the components
// Now, create three buttons with same name
// Clicking on the button should show that component
// UNDERSTANDING : this is kind of your own router, unless we get into router implementation.


import "./styles.css";
import { useState } from "react";

export default function App() {
  let [profileclassName, setProfileclassName] = useState("hide");
  let [homeclassName, setHomeclassName] = useState("hide");
  let [aboutclassName, setAboutclassName] = useState("hide");


  const homeHandler = () => {
    setHomeclassName("show")
    setAboutclassName("hide")
    setProfileclassName("hide")
  };

  const aboutHandler = () => {
    setAboutclassName("show")
    setHomeclassName("hide")
    setProfileclassName("hide")
  };

  const profileHandler = () => {
    setAboutclassName("hide")
    setHomeclassName("hide")
    setProfileclassName("show")
  }

  return (
    <div className="App">
      <h1>designer tool (mini figma)</h1>
      <button onClick={homeHandler}>
        Home
      </button>

      <button onClick={aboutHandler}>
        About
      </button>

      <button onClick={profileHandler}>
        Profile
      </button>

      <br/> <br/>

      <div className={homeclassName}>
      This is Home Page
      </div>

      <div className={aboutclassName}>
      This is About Page
      </div>
      
      <div className={profileclassName}>
      This is Profile Page
      </div>
    </div>
  );
  }


// css
// .hide {
//   display: none;
// }

// .show {
//   display: block
// }