import React, {useEffect, useState} from "react";
import './App.css'
import Form from "./Form.jsx";

const handleButtonClicked = (inputValue) => {
    console.log(inputValue)

}
function App(props) {
    const KEY = 'f67972513bfe74144ead3e32efb5e00a'
    const LONGITUDE = '10.99'
    const LATITUDE = '44.34'
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${LATITUDE}&lon=${LONGITUDE}&appid=${KEY}`
    const [data,setData] = useState(null)
    const [inputValue,setInputValue] = useState('')

    useEffect(() => {
        fetch(apiUrl)
            .then(response => response.json())
            .then((data) => {
                setData(data)
            })
            .catch((error) => {
                console.error(error)
            })
    },[])
    console.log(data)



    return (
        <div className="App">
            <Form inputValue = {inputValue} setInputValue = {setInputValue} handleButtonClicked = {handleButtonClicked} />

        </div>
    )}


export default App
