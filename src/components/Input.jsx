import React, {useState} from "react";
function Input() {
    const [inputValue,setInputValue] = useState('')
    const handleInputChange = (event) => {
        const {value} = event.target
        setInputValue(value)
    }

    return(
        <input placeholder={'type a city'} onChange={handleInputChange}/>
    )
}
export default Input