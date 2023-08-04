import React,{useState}  from "react";
import Search from "./components/Search"
import Tempdata from "./components/Tempdata";
import logo from "./magicwand.png";
function App() {
  const [city, setCity]=useState("");

  function setCityInput(cityinput){
    setCity(cityinput);
   
  }
  function bgchange(){
    let hours=null;
    setInterval(()=>{
        hours=new Date().getHours;
    },10000);
    console.log(hours);
    
    if(hours>=5 && hours<12){
        return('../public/morning.jpg');
    }
    else if(hours>=12 && hours<16){
        return('../public/afternoon1.jpg');
    }
    else if(hours>=16 && hours<20){
        return('../public/evening3.jpg');
    }
    else{
        return('../public/night1.webp');
    }
}

  return (
    <>
      <div className="out-container">
        
        <div className="left-container" id="left-container">
        <div className="logo-container">
        <img src={logo} id="logo"></img>
        <h2 style={{marginBottom:"25px"}}>WeatherWand</h2>
        
        </div>
          <Search sendCity={setCityInput}></Search>
          <Tempdata city={city}></Tempdata>
          <div>
          </div>
        </div>

        <div className="right-container"></div> {/*container for forecast*/}
      </div>



    </>
  );
}

export default App;
