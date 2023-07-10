import React from 'react'
import { Link } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";

const Navbar = () => {
  return (
    <>
    <div className="container">
        <nav className="navbar navbar-expand-lg bg-dark navbar-dark">
            <div className="container-fluid">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <Link className="navbar-brand" to= "/">
                            Website
                        </Link>
                        <div className='Collapse navbar=collapse'>
                            <ul className='navbar-nav me-auto'>
                                <li className='nav-item'>
                                    <Link className='nav-link' to = "/">
                                        HOME
                                    </Link>
                                </li>
                                <li className='nav-item'>
                                    <Link className='nav-link' to = "/contact">
                                        CONTACT
                                    </Link>
                                </li>
                                <li className='nav-item'>
                                    <Link className='nav-link' to = "/about">
                                        ABOUT
                                    </Link>
                                </li>
                                
                            </ul>
                        </div>
                    </li>
                </ul>
            </div>
        </nav>
    </div>
    </>
  )
}

export default Navbar