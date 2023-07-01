import './NavBar.css'
import CartWidget from '../CartWidget/CartWidget'

const Navbar = () => {
    return (
        <header>
            <h1>Tienda Holistica</h1>
            <nav>
                <ul>
                    <li>Sahumerios</li>
                    <li>Velas Aromaticas</li>
                    <li>Aceites Escenciales</li>
                </ul>
            </nav>
            <CartWidget/>

        </header>
    )
}

export default Navbar