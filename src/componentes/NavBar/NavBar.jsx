import './NavBar.css'
import CartWidget from '../CartWidget/CartWidget.jsx'
import { Link, NavLink } from 'react-router-dom';


const NavBar = () => {
    return (
        <header><Link to="/">
            <h1>Tienda Holistica</h1>
        </Link>
            <nav>
                <ul>
                    <li>
                        <NavLink to="/">Inicio</NavLink>
                        </li>
                    <li>
                        <NavLink to="/Sahumerios">Sahumerios</NavLink>
                    </li>
                    <li>
                        <NavLink to="/Velas Aromaticas">Velas Aromaticas</NavLink>
                    </li>
                    <li>
                        <NavLink to="Aceites Escenciales">Aceites Escenciales</NavLink>
                    </li>
                </ul>
            </nav>
        </header>

    );
};

export default NavBar