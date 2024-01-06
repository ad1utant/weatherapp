import react from "React";
import Navbar from "./Navbar.jsx";
import Current from "./Current.jsx";
import Week from "./Week.jsx";
import Today from "./Today.jsx";
function App(props){
    let component;
    switch (window.location.pathname){
        case '/':
        case '/current':
            component = <Current/>;
            break;
        case '/today':
            component = <Today/>;
            break;
        case '/week':
            component = <Week/>;
            break;
    }


    return(
        <>
            <Navbar/>
            {component}
        </>
    )
}
export default App