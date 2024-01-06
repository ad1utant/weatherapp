import '../styles/navbar.css'
function Navbar(){
    return(
        <nav>
            <a href={'/current'}>Current</a>
            <a href={'/today'}>Today</a>
            <a href={'/week'}>Week</a>
        </nav>
    )
}
export default Navbar