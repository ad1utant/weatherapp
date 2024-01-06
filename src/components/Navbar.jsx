import '../styles/navbar.css'
import {Link} from "react-router-dom";

function Navbar(){
    return(
        <nav>
            <Link to={'/current'}>Current</Link>
            <Link to={'/today'}>Today</Link>
            <Link to={'/week'}>Week</Link>
        </nav>
    )
}
export default Navbar