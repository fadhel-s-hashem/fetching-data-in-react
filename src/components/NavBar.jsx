import { Link } from "react-router"

const NavBar = () => {
    return(
        <nav>
            {/*in react must use link element instead <a href=""></a> */}
            <Link to='/'> Home</Link> {'|'}
            <Link to="/students"> Students </Link>
        </nav>

    )


}

export default NavBar