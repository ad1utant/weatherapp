import React, {useState} from "react";

function Form(props) {
    const {handleButtonClicked, inputValue, setInputValue} = props
    const handleInputChange = (event) => {
        const {value} = event.target
        setInputValue(value)
    }
    const handleKeyPress = (event) => {
        if (event.key === 'Enter'){
            handleButtonClicked(inputValue)
        }
    }


    return(
        <div>
            <input placeholder={'type a city'} onKeyPress={handleKeyPress} onChange={handleInputChange}/>
            <button onClick={() => handleButtonClicked(inputValue)}>
                submit
            </button>
        </div>
    )
}
export default Form

