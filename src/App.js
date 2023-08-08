import React,{useState}  from "react";
import Search from "./components/Search"
import Tempdata from "./components/Tempdata";
import logo from "./weather-logo.png";
import Footer from "./components/Footer";

function App() {
  const [city, setCity]=useState("");

  function setCityInput(cityinput){
    setCity(cityinput);
   
  }
  return (
    <>
      <div className="out-container">
        
        <div className="main-container" id="main-container">
        <div className="logo-container">
        <img src={logo} id="logo"></img>
        <h2>WeatherWand</h2>
        
        </div>
          <Search sendCity={setCityInput}></Search>
          <Tempdata city={city}></Tempdata>
          <div>
          </div>
        </div>

        <Footer></Footer>
      </div>

    </>
  );
}

export default App;
