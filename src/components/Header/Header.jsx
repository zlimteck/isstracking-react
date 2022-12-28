import { Link, NavLink } from 'react-router-dom';
import './Header.css';

function Header() {
    return (
        <header className="header">
            <Link className="header_link" to="/">
                <h1 className='header_title'>ISS TRACKING</h1>
            </Link>
            <div className="header_navbar">
            <nav className='header_nav'>
                <ul className="navbar_list">
                    <li>
                        <NavLink to="/" className={({isActive}) => {
                            return isActive ? "navbar_link_active" : "navbar_link"; }}
                            >Accueil
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/Tracking" className={({isActive}) => {
                            return isActive ? "navbar_link_active" : "navbar_link"; }}
                            >Map
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/Missions" className={({isActive}) => {
                            return isActive ? "navbar_link_active" : "navbar_link"; }}
                            >Missions
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </div>
        </header>
    );
}

export default Header;

