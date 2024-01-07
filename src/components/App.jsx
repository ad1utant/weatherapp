import react from "React";
import Navbar from "./Navbar.jsx";
import Current from "./Current.jsx";
import Week from "./Week.jsx";
import Today from "./Today.jsx";
import {Route, Routes} from "react-router-dom";
import '../styles/App.css'
function App(props){

    return(
        <>
            <Navbar/>
            <Routes>
                <Route path={'/'} element={<Current/>} />
                <Route path={'/current'} element={<Current/>}/>
                <Route path={'/today'} element={<Today/>}/>
                <Route path={'/week'} element={<Week/>}/>
            </Routes>
        </>
    )
}
export default App