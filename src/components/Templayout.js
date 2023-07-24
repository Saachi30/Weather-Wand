// icon and data
import React, { useState } from "react";
import Helmet from "react-helmet";
import Bgchange from "../bgchangescript";
function Templayout(props) {
    const temperature = Math.round((props.temp1.temp) - 273);
    const weather = props.weather1.main;
    const weatherdesc = props.weather1.description;
    const city = props.city1;
    const country = props.country1;
    const mintemp = Math.round((props.temp1.temp_min) - 273);
    const maxtemp = Math.round((props.temp1.temp_max) - 273);
    const timestamp = props.timestamp1;
    const timezone = props.timezone1;
    const humidity = props.temp1.humidity;
    const pressure = props.temp1.pressure;
    const windspeed = props.wind1.speed;
    const winddirection = props.wind1.deg;

    let date = new Date();
    setInterval(() => {
        date = new Date();
    }, 6000);

   
    const utc = date.getTime() + (date.getTimezoneOffset() * 60000);
    date = new Date(utc + (1000 * timezone));

    let hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();
    const day = date.getDay();
    const dateofmonth = date.getDate();
    const month = date.getMonth();
    let monthtext = "";
    let weekday = "";
    Bgchange(hours);
    switch (day) {
        case 0: {
            weekday = "Sunday";
            break;
        }
        case 1: {
            weekday = "Monday";
            break;
        }
        case 2: {
            weekday = "Tuesday";
            break;
        }
        case 3: {
            weekday = "Wednesday";
            break;
        }
        case 4: {
            weekday = "Thursday";
            break;
        }
        case 5: {
            weekday = "Friday";
            break;
        }
        case 6: {
            weekday = "Saturday";
            break;
        }

    }



    switch (month) {
        case 0: {
            monthtext = "January";
            break;
        }
        case 1: {
            monthtext = "February";
            break;
        }
        case 2: {
            monthtext = "March";
            break;
        }
        case 3: {
            monthtext = "April";
            break;
        }
        case 4: {
            monthtext = "May";
            break;
        }
        case 5: {
            monthtext = "June";
            break;
        }
        case 6: {
            monthtext = "July";
            break;
        }
        case 7: {
            monthtext = "August";
            break;
        }
        case 8: {
            monthtext = "September";
            break;
        }
        case 9: {
            monthtext = "October";
            break;
        }
        case 10: {
            monthtext = "November";
            break;
        }
        case 11: {
            monthtext = "December";
            break;
        }

    }

    let year = date.getFullYear();



    function minmax() {
        if (mintemp === maxtemp) {
            return;
        }
        else {
            return (
                <div className="minmaxtemp">
                    {mintemp}°C - {maxtemp}°C
                </div>
            )
        }
    }
    function setIcon() {
        if (hours >= 6 || hours < 19) {
            return setIconD();
        }
        else {
            return setIconN();
        }
    }
    function setIconN() {
        switch (weather) {
            case "Thunderstorm": return (<img src="https://openweathermap.org/img/wn/11n@2x.png"></img>);
            case "Drizle": return (<img src="https://openweathermap.org/img/wn/09n@2x.png"></img>);
            case "Rain": {
                switch (weatherdesc) {
                    case "freezing rain": return (<img src="https://openweathermap.org/img/wn/13n@2x.png"></img>);
                    case "light intensity shower rain": return (<img src="https://openweathermap.org/img/wn/09n@2x.png"></img>);
                    case "shower rain": return (<img src="https://openweathermap.org/img/wn/09n@2x.png"></img>);
                    case "heavy intensity shower rain": return (<img src="https://openweathermap.org/img/wn/09n@2x.png"></img>);
                    case "ragged shower rain": return (<img src="https://openweathermap.org/img/wn/09n@2x.png"></img>);
                    default: return (<img src="https://openweathermap.org/img/wn/10n@2x.png"></img>);
                }

            };
            case "Mist": return (<img src="https://openweathermap.org/img/wn/50n@2x.png"></img>);
            case "Smoke": return (<img src="https://openweathermap.org/img/wn/50n@2x.png"></img>);
            case "Haze": return (<img src="https://openweathermap.org/img/wn/50n@2x.png"></img>);
            case "Dust": return (<img src="https://openweathermap.org/img/wn/50n@2x.png"></img>);
            case "Fog": return (<img src="https://openweathermap.org/img/wn/50n@2x.png"></img>);
            case "Sand": return (<img src="https://openweathermap.org/img/wn/50n@2x.png"></img>);
            case "Ash": return (<img src="https://openweathermap.org/img/wn/50n@2x.png"></img>);
            case "Squall": return (<img src="https://openweathermap.org/img/wn/50n@2x.png"></img>);
            case "Tornado": return (<img src="https://openweathermap.org/img/wn/50d@2x.png"></img>);
            case "Clear": return (<img src="https://openweathermap.org/img/wn/01d@2x.png"></img>);
            case "Clouds": {
                switch (weatherdesc) {
                    case "few clouds": return (<img src="https://openweathermap.org/img/wn/02n@2x.png"></img>);
                    case "scattered clouds": return (<img src="https://openweathermap.org/img/wn/03n@2x.png"></img>);
                    default: return (<img src="https://openweathermap.org/img/wn/04n@2x.png"></img>);
                }
            }

        }

    }
    function setIconD() {
        // const dayornight="d";

        switch (weather) {
            case "Thunderstorm": return (<img src="https://openweathermap.org/img/wn/11d@2x.png"></img>);
            case "Drizle": return (<img src="https://openweathermap.org/img/wn/09d@2x.png"></img>);
            case "Rain": {
                switch (weatherdesc) {
                    case "freezing rain": return (<img src="https://openweathermap.org/img/wn/13d@2x.png"></img>);
                    case "light intensity shower rain": return (<img src="https://openweathermap.org/img/wn/09d@2x.png"></img>);
                    case "shower rain": return (<img src="https://openweathermap.org/img/wn/09d@2x.png"></img>);
                    case "heavy intensity shower rain": return (<img src="https://openweathermap.org/img/wn/09d@2x.png"></img>);
                    case "ragged shower rain": return (<img src="https://openweathermap.org/img/wn/09d@2x.png"></img>);
                    default: return (<img src="https://openweathermap.org/img/wn/10d@2x.png"></img>);
                }

            };
            case "Mist": return (<img src="https://openweathermap.org/img/wn/50d@2x.png"></img>);
            case "Smoke": return (<img src="https://openweathermap.org/img/wn/50d@2x.png"></img>);
            case "Haze": return (<img src="https://openweathermap.org/img/wn/50d@2x.png"></img>);
            case "Dust": return (<img src="https://openweathermap.org/img/wn/50d@2x.png"></img>);
            case "Fog": return (<img src="https://openweathermap.org/img/wn/50d@2x.png"></img>);
            case "Sand": return (<img src="https://openweathermap.org/img/wn/50d@2x.png"></img>);
            case "Ash": return (<img src="https://openweathermap.org/img/wn/50d@2x.png"></img>);
            case "Squall": return (<img src="https://openweathermap.org/img/wn/50d@2x.png"></img>);
            case "Tornado": return (<img src="https://openweathermap.org/img/wn/50d@2x.png"></img>);
            case "Clear": return (<img src="https://openweathermap.org/img/wn/01d@2x.png"></img>);
            case "Clouds": {
                switch (weatherdesc) {
                    case "few clouds": return (<img src="https://openweathermap.org/img/wn/02d@2x.png"></img>);
                    case "scattered clouds": return (<img src="https://openweathermap.org/img/wn/03d@2x.png"></img>);
                    default: return (<img src="https://openweathermap.org/img/wn/04d@2x.png"></img>);
                }
            }

        }

    }
    let ampm="";
    function setHours(){
        if(hours>12 && hours<=23){
            hours=hours-12;
            ampm="PM";
        }
        else if(hours===0){
            hours=12;
            ampm="AM";
        }
        else{
            ampm="AM";
        }
    }

    function setMinutes(){
        if(minutes<10){
            return(<span>0{minutes}</span>);
        }
        else{
            return (<span>{minutes}</span>);
        }

    }
    setHours();
    

    return (
        <div>
            <div className="outer-data">
                <div className="icon-desc">
                    <div className="data-icon">
                        {setIcon()}
                    </div>
                    <div className="data-weather">
                        <h2> {weather}</h2>
                        <p>{weatherdesc}</p>
                    </div>
                </div>
                <div className="data">
                    <div className="humidity-pressure">

                        <div className="data-humidity">
                            <i className="fa fa-thermometer-half"></i>
                            <p>Humidity: {humidity}%</p></div>
                        <div className="data-pressure">
                            <i className="fa-solid fa-gauge-high"></i>
                            <p>Pressure: {pressure} hPa</p></div>

                    </div>

                    <div className="data-temp">
                        <div className="temp">
                            {temperature}°C
                        </div>
                        <div className="data-other">
                            <div className="data-location">
                                {city}, {country}
                            </div>
                            <div className="data-minmax">
                                {minmax()}
                            </div>


                        </div>


                    </div>
                    <div className="wind-data">

                        <div className="data-speed">
                            <i className="fa-solid fa-wind"></i>
                            <p>Wind speed: {windspeed} m/s</p>
                        </div>
                        <div className="data-direction">
                            <i className="fa-solid fa-compass"></i>
                            <p>Wind direction: {winddirection} deg</p></div>

                    </div>
                </div>

            </div>
            <div className="date-time">

                <div className="date"> {weekday}, {dateofmonth} {monthtext} {year} </div>
                <div className="time">{hours}:{setMinutes()} {ampm}</div>
            </div>
        </div>
        
    );
}

export default Templayout;