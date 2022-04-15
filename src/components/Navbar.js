import { links } from './data/NavbarLinks';
import {StyleNavbar, NavItem, NavLink} from '../styles/styleNavbar';

export default function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark fixed-top" style={StyleNavbar}>
        <div className="container-fluid">
            <a className="navbar-brand" href="#">Rodrigo García</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav col-md-12 justify-content-end">
                {links.map((link) => {
                    return (
                        <li className="nav-item" style={NavItem}>
                            <a className="nav-link" style={NavLink} href={link.url} key={link.id}>
                                {link.text}
                            </a>
                        </li>
                    )
                })}
            </ul>
            </div>
        </div>
        </nav>
    )
}