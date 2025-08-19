import { Link } from 'react-router-dom';

const Menu = () => {
    return (
        <nav>
            <ul>
                <li><Link to="/inicio">Inicio</Link></li>
                <li><Link to="/nosotros">Nosotros</Link></li>
            </ul>
        </nav>
    );
}
export default Menu;