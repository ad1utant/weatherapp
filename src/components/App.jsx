import React, {useEffect, useState} from "react";
import './App.css'
import Form from "./Form.jsx";

const handleButtonClicked = (inputValue) => {
    console.log(inputValue)

}
function App(props) {
    const KEY = 'f67972513bfe74144ead3e32efb5e00a'
    const CITYNAME = 'Kraków'
    const getCityCoordsLink = `http://api.openweathermap.org/geo/1.0/direct?q=${CITYNAME}&limit=${'1'}&appid=${KEY}`
    console.log(getCityCoordsLink)



    const [data,setData] = useState(null)
    const [inputValue,setInputValue] = useState('')

    useEffect(() => {
        let getWeatherLink;
        //get a coordinates
            fetch(getCityCoordsLink)
                .then(response => response.json())
                .then((data) => {
                    setData(data)
                    const {lat, lon} = data[0]
                    getWeatherLink = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${KEY}`
                    console.info(lat,lon)
                })
                .catch((error) => {
                    console.error(error)
                })


        setData(null)



                console.info('1st fetch done')
                console.info(getWeatherLink)
        //get a weather
            fetch(getWeatherLink)
                .then(response => response.json())
                .then((data) => {
                    setData(data)
                })
                .catch((error) => {
                    console.error(error)
                })
        console.log(data)


    },[])




    console.log(data)



    return (
        <div className="App">
            <Form inputValue = {inputValue} setInputValue = {setInputValue} handleButtonClicked = {handleButtonClicked} />

        </div>
    )}


export default App
