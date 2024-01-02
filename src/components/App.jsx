import React, {useEffect, useState} from "react";
import './App.css';
import Form from "./Form.jsx";

function App(props) {
    const KEY = '4d6b0e426f410fb2f9af8ffa8ae8112c'
    let getWeatherLink, lat, lon;
    const [data,setData] = useState({})
    const [inputValue,setInputValue] = useState('')
    const [cityName,setCityName] = useState('twoja lokalizacja')
    const getCityCoordsLink = `http://api.openweathermap.org/geo/1.0/direct?q=${cityName}&limit=${'1'}&appid=${KEY}`

    function getCurrentLocation() {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition((position) => {
                lat = position.coords.latitude
                lon = position.coords.longitude

                fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${KEY}`)
                    .then((response) => response.json())
                    .then((data) => {
                        setData(data)
                        console.log(data)
                    })
                    .catch((error) => {
                        console.error(error)

                    })
            })
        }
    }


    function fetches(){
        fetch(getCityCoordsLink)
            .then(response => response.json())
            .then((cityData) => {
                const {lat, lon} = cityData[0]
                getWeatherLink = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${KEY}`
                return getWeatherLink
            })
            .then((link) => {
                return fetch(link)
            })
            .then((response) => response.json())
            .then((data) => {
                setData(data)
                console.log(data)
            })
            .catch((error) => {
            console.error(error)
        })
    }
    const handleButtonClicked = (inputValue) => {
        setCityName(inputValue)
    }
    useEffect(() => {
        if(cityName !== 'twoja lokalizacja') {
            fetches()
        }else{
            getCurrentLocation()
        }
    },[cityName])

    const { visibility, main, weather, wind, sys, name, coord } = data || {};
    const {deg, speed} = wind || {};
    const {description, main: cloudsMain} = (weather && weather.length > 0) ? weather[0] : {};
    let { feels_like, humidity, pressure, temp, temp_max, temp_min } = main || {};
    temp = Math.round(temp - 273)
    temp_max = Math.round(temp_max - 273)
    temp_min = Math.round(temp_min - 273)
    feels_like = Math.round(feels_like - 273)

    return (
        <div className="App">
            <Form inputValue = {inputValue} setInputValue = {setInputValue} handleButtonClicked = {handleButtonClicked} />
            <h1>pogoda dla: {cityName}</h1>
            <div className={'temperatureBox'}>
                <h2>Temperature</h2>
                <p>max temperature: {temp_max}</p>
                <p>temperature: {temp}</p>
                <p>min temperature: {temp_min} </p>
                <p>feels like: {feels_like}</p>
            </div>


            <div className={'windBox'}>
                <h2>Wind</h2>
                <p>speed: {speed}</p>
                <p>deg: {deg}</p>
            </div>

            <div className={'otherBox'}>
                <h2>Other</h2>
                <p>humidity: {humidity}</p>
                <p>pressure: {pressure}</p>

            </div>

            <div>
                <h2>Clouds</h2>
                <p>visibility: {visibility}</p>
                <p>clouds: {cloudsMain}</p>
                <p>description: {description}</p>

            </div>

        </div>
    )
}

export default App
