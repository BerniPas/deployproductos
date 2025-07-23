
import logo from "../images/items/ampoule/logocs.png";
import { Link } from "react-router-dom";

const Navegacion = () => {
    return (
        <header>
            <div class="logo">
                <img src={logo} alt="CLEAN SKIN"/>
            </div>
            <form class="search-form">
                <input type="text" placeholder="Search here..."/>
                    <button type="submit">Search</button>
            </form>
            <nav class="navbar">
                <ul>
                    <li>
                        <Link to="/">
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link to='/login'>
                            Login
                        </Link>
                    </li>
                    <li>
                        <Link to='/nosotros'>
                            Nosotros
                        </Link>
                    </li>
                    <li>
                        <Link to='/alta'>
                            Alta
                        </Link>
                    </li>
                    <li>
                        <Link to='/contacto'>
                            Contacto
                        </Link>
                    </li>
                    <li>
                        <Link to='/personaje'>
                            Personajes
                        </Link>
                    </li>
                    <li>
                        <Link to='/props'>
                            Props
                        </Link>
                    </li>
                    <li>
                        <Link to='/chat'>
                            Chat
                        </Link>
                    </li>
                    <li>
                        <Link to='/sql'>
                            SQL
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Navegacion;