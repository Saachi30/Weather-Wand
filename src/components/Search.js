import React, {useState} from "react";

function Search(props) {
    
    const [cityinput, setCityChange]=useState("");
    let cityinputVal="";
    function handleChange(event){
        cityinputVal=event.target.value
        setCityChange(cityinputVal);
    }
   function checkKey(event){
    if(event.keyCode===13){
        props.sendCity(cityinput)
        setCityChange("");
    }
   }
    
    return (
        <div className="search-container">
            <input type="search" className="search-box" placeholder="Enter city" onChange={handleChange} value={cityinput} onKeyDown={checkKey}></input>
            <div className="btn" onClick={()=>{
                
                props.sendCity(cityinput)
                setCityChange("");
               
                
                }}><i className="fa-solid fa-magnifying-glass" style={{color:"white"}}></i></div>
            
        </div>
    );
}
export default Search;