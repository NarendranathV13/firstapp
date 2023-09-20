import React from 'react';
import '../assets/styles/style.css';

function Footer() {
  return (
    <footer class="mt-2">
      <div class="container-fluid bgcolorF ">
        <div class="row">
          <div class="col-lg-4">
            <h2>Head Office Address</h2>
            <p>#24, 5th Main, 8th Cross, Krishnappa Block,
              RT Nagar Post, Bangalore - 560032. India.</p>
          </div>
          <div class="col-lg-4 list1">
            <h2>Road Trips</h2>
            <li>Ladakh Trip</li>
            <li>Leh Tour (Couples Only)</li>
            <li>Ladakh Road Trip (Women Only)</li>
            <li>Manali - Leh Road Trip </li>
            <li>Rajasthan Motorcycle Tour</li>
          </div>
          <div class="col-lg-4 list1">
            <h2>Site Map</h2>
            <li>Home</li>
            <li>About Us</li>
            <li>Motorcycle Tours</li>
            <li>Blogs</li>
          </div>
        </div>
      </div>

    </footer>
  );
}

export default Footer;