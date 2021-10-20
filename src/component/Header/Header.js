import React from 'react';

import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <nav sticky="top" className="navbar navbar-expand-lg navbar-light bg-light shadow-lg p-2  bg-body rounded fixed-top">
                <div className="container d-flex justify-content-between">

                    <div>
                        <a className="fs-3 fw-bold navbar-brand" href="/"> Medicare</a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        </div>
                    </div>
                    <div>
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li class="nav-item">
                                <Link className="nav-link" aria-current="page" to="/home">Home</Link>
                            </li>
                            <li class="nav-item">
                                <Link className="nav-link" to="/about">About</Link>
                            </li>

                            <li class="nav-item">
                                <Link className="nav-link" to="/specialist">Specialist</Link>
                            </li>
                            <li class="nav-item">
                                <Link className="nav-link" to="/appoinment">Appoinment</Link>
                            </li>
                            <li class="nav-item">
                                <Link className="nav-link" to="/treatment">Treatment</Link>
                            </li>

                            <li class="nav-item">
                                <Link className="nav-link" to="/contact">Contact us</Link>
                            </li>

                            {/* <li class="nav-item">
                                <Link className="nav-link" to="/login">Login</Link>
                            </li> */}

                        </ul>
                    </div>

                </div>
            </nav>


        </div>
    );
};

export default Header;