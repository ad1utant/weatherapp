import React, {useState} from "react";
import '../styles/form.css'
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
        <div className={'container'}>
        <div className={'inputBox'}>
            <input onKeyPress={handleKeyPress} onChange={handleInputChange} type={"text"} required={"required"}/>
            <span>search for city</span>
            {/*<button onClick={() => handleButtonClicked(inputValue)}>*/}
            {/*    submit*/}
            {/*</button>*/}
        </div>
        </div>
            )
}
export default Form

