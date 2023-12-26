import React, {useEffect, useState} from "react";
import './App.css';
import Form from "./Form.jsx";

function App(props) {
    const KEY = '4d6b0e426f410fb2f9af8ffa8ae8112c'
    const [cityData,setCityData] = useState(null)
    const [data,setData] = useState(null)
    const [inputValue,setInputValue] = useState('')
    const [cityName,setCityName] = useState('')
    const getCityCoordsLink = `http://api.openweathermap.org/geo/1.0/direct?q=${cityName}&limit=${'1'}&appid=${KEY}`
    console.log(getCityCoordsLink)
    const handleButtonClicked = (inputValue) => {
        setCityName(inputValue)
    }
    const getCurrentLocation = () => {
            if ('geolocation' in navigator){
                navigator.geolocation.getCurrentPosition((position) => {
                    const {longitude, latitude} = position.coords;
                    console.log(longitude,latitude)
                    return {
                        lon: longitude,
                        lat: latitude
                    }
                })
            }
    }
    let getWeatherLink
    useEffect(() => {
        let weather;
        // const { lon, lat } =  getCurrentLocation;
        // console.warn(lon,lat)

        // console.log('Longitude:', lon, 'Latitude:', lat);
        // getWeatherLink = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${KEY}`

        fetch(getCityCoordsLink)
            .then(response => response.json())
            .then((cityData) => {
                setCityData(cityData)
                const {lat, lon} = cityData[0]
                if(cityName !== '') {
                    getWeatherLink = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${KEY}`
                    console.info(`getweatherlink: ${getWeatherLink}`)
                }
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
            })},[])

    const { main, weather, wind, sys, name, coord } = data || {};
    const {deg, speed} = wind || {};
    let { feels_like, humidity, pressure, temp, temp_max, temp_min } = main || {};
    temp = Math.round(temp - 273)
    temp_max = Math.round(temp_max - 273)
    temp_min = Math.round(temp_min - 273)
    feels_like = Math.round(feels_like - 273)
    return (
        <div className="App">
            <Form inputValue = {inputValue} setInputValue = {setInputValue} handleButtonClicked = {handleButtonClicked} />
            <h1>Temperature</h1>
            <p>max temperature: {temp_max}</p>
            <p>temperature: {temp}</p>
            <p>min temperature: {temp_min} </p>
            <p>feels like: {feels_like}</p>
            <h1>Wind</h1>
            <p>speed: {speed}</p>
            <p>deg: {deg}</p>

        </div>
    )
}

export default App
