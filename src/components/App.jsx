import React,{useState} from 'react'
import './App.css'
import Form from "./Form.jsx";

const handleButtonClicked = (inputValue) => {
    console.log(inputValue)
}

function App(props) {
    const [inputValue,setInputValue] = useState('')
    return (
        <div className="App">
            <Form inputValue = {inputValue} setInputValue = {setInputValue} handleButtonClicked = {handleButtonClicked} />

        </div>
    )}


export default App
