import React,{useState}  from "react";
import Search from "./components/Search"
import Tempdata from "./components/Tempdata";
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
        <h2 style={{marginBottom:"25px", color:"white"}}>WeatherWand</h2>
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
