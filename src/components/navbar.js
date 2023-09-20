import React from 'react';
import '../assets/styles/style.css';
import { Link } from 'react-router-dom';
const Navbar1 = () => {
    return (
        <nav class="navbar navbar-expand-lg navbar-light bg-secondary mb-1">
            <div class="container-fluid">
                <a class="navbar-brand text-warning h1" href="#"> Moto_Ride</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                    aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse justify-content-end" id="navbarNav">
                    <ul class="navbar-nav mx-2  ">
                        <li class="nav-item ">
                            <Link class="nav-link active text-white" aria-current="page" to="/">Home</Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link text-white" to="/locations">Locations</Link>
                        </li>
                        <li class="nav-item">
                        <Link class="nav-link text-white" to="/Sports">Sports</Link>
                        </li>
                        <li class="nav-item">
                        <Link class="nav-link text-white" to="/Offers">Offers</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}
export default Navbar1;