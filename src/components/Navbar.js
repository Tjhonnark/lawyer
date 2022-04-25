import React, {useEffect} from 'react';
import Link from 'next/link';
import { links } from './data/NavbarLinks';
import {StyleNavbar, NavItem, NavLink} from '../styles/styleNavbar';

export default function Navbar() {
    useEffect(() => {
        var nav = document.querySelector('nav');

        window.addEventListener('scroll', function () {
            if (window.pageYOffset > 100) {
            nav.classList.add('shadow-lg', 'bg-dark', 'mb-5');
            } else {
            nav.classList.remove('shadow-lg', 'bg-dark', 'mb-5');
            }
        });
    });
    
    return (
        <nav className="navbar navbar-expand-lg navbar-dark  fixed-top" style={StyleNavbar}>
        <div className="container-fluid">
            <a className="navbar-brand fs-2" href="#">Rodrigo García</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">   
            <ul className="navbar-nav col-md-12 justify-content-end">
                {links.map((link) => {
                    return (
                        <li className="nav-item" style={NavItem}>
                            <Link className="nav-link" href={link.url} key={link.id}>
                                <a className='btn btn-outline-light'>{link.text}</a>
                            </Link>
                        </li>
                    )
                })}
            </ul>
            </div>
        </div>
        </nav>
    )
}