import React, {useState} from "react";
function Form(props) {
    const [inputValue,setInputValue] = useState('')
    const handleInputChange = (event) => {
        const {value} = event.target
        setInputValue(value)
    }
    const handleButtonClicked = () => {
        console.log(inputValue)
    }

    return(
        <div>
            <input placeholder={'type a city'} onChange={handleInputChange}/>
            <button onClick={handleButtonClicked}>
                submit
            </button>
        </div>
    )
}
export default Form