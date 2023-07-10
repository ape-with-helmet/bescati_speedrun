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
                            <img src="https://getbootstrap.com/docs/5.3/assets/brand/bootstrap-logo-shadow.png"
                            alt="image not found...."
                            height="40px"
                            className="rounded-pill"
                            />
                        </Link>
                    </li>

                </ul>
            </div>
        </nav>
    </div>
    </>
  )
}

export default Navbar