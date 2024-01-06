import react from "React";
import Navbar from "./Navbar.jsx";
import CurrentWeather from "./CurrentWeather.jsx";
function App(props){
    return(
        <>
            <Navbar/>
            <CurrentWeather/>
        </>
    )
}
export default App