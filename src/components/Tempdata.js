import React, {useEffect, useState} from "react";
import Templayout from "./Templayout";
import axios from "axios";

function Tempdata(props){
    const city1=props.city;
    let baseURL="";
    city1?baseURL=`https://api.openweathermap.org/data/2.5/weather?q=${city1}&appid=1216d18645a8df5b076bb3b7710a5bda`:baseURL=`https://api.openweathermap.org/data/2.5/weather?q=mumbai&appid=1216d18645a8df5b076bb3b7710a5bda`;
    const [temp, setTemp]=useState([]);
    const [weather, setWeather]=useState([]);
    const [city, setCity]=useState([]);
    const [country, setCountry]=useState([]);
    const [timestamp, setTimestamp]=useState();
    const [timezone, setTimezone]=useState();
    const [wind, setWind]=useState([]);
    const fetchData=async()=>{
        try{
       await axios.get(baseURL).then((res)=>{
        setTemp(res.data.main);
        setWeather(res.data.weather[0]);
        setCity(res.data.name);
        setCountry(res.data.sys.country);
        setTimestamp(res.data.dt);
        setTimezone(res.data.timezone);
        setWind(res.data.wind);
       });
    }
    catch(err){
        alert("Please enter valid city name!");
    }

    }
  
    useEffect(()=>{
        fetchData();
    }, [city1]);
    
    return(
        
        <Templayout temp1={temp} weather1={weather} city1={city} country1={country} timestamp1={timestamp} timezone1={timezone} wind1={wind}></Templayout>
    );
}

export default Tempdata;