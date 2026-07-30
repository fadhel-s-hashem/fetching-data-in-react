import { Link } from "react-router"

const NavBar = () => {
    return(
        <nav>
            <Link to='/'> Home</Link> {'|'}
            <Link to="/students"> Students </Link>
        </nav>

    )


}

export default NavBar