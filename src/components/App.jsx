import React, {useEffect, useState} from "react";
import './App.css'
import Form from "./Form.jsx";

const handleButtonClicked = (inputValue) => {
    console.log(inputValue)

}
function App(props) {
    const KEY = '4d6b0e426f410fb2f9af8ffa8ae8112c'
    const CITYNAME = 'Kraków'
    const getCityCoordsLink = `http://api.openweathermap.org/geo/1.0/direct?q=${CITYNAME}&limit=${'1'}&appid=${KEY}`
    const [cityData,setCityData] = useState(null)
    const [data,setData] = useState(null)
    const [inputValue,setInputValue] = useState('')
    console.log(getCityCoordsLink)
    useEffect(() => {
        let getWeatherLink, weather
            fetch(getCityCoordsLink)
                .then(response => response.json())
                .then((cityData) => {
                    setCityData(cityData)
                    const {lat, lon} = cityData[0]
                    getWeatherLink = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${KEY}`
                    console.info(`getweatherlink: ${getWeatherLink}`)
                    //get a weather
                    return fetch(getWeatherLink)
                })
                .then(response => response.json())
                .then((data) => {
                    setData(data)
                    console.log(getWeatherLink)
                    console.log(data)
                })
                .catch((error) => {
                    console.error(error)
                })
                },[])

                const { main, weather, wind, sys, name, coord } = data || {};
                const {deg, speed} = wind || {};
                const { feels_like, humidity, pressure, temp, temp_max, temp_min } = main || {};


    return (
        <div className="App">
            <Form inputValue = {inputValue} setInputValue = {setInputValue} handleButtonClicked = {handleButtonClicked} />
            <p>{speed}</p>
            {deg}
        </div>
    )}


export default App
