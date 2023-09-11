import React from 'react';
import { Link } from 'react-router-dom';

const LandingNav = () => {
  return (
    <div>
      <nav className="bg-white py-10">
        <div className="container mx-auto">
          <div>
            <ul className="flex items-center justify-evenly space-x-4">
              <li className="nav-item">
                <Link to="/" className="font-serif text-5xl font-semibold">
                  Timestructors
                </Link>
                <button
                  className="navbar-toggler"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#navbarSupportedContent"
                  aria-controls="navbarSupportedContent"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span className="navbar-toggler-icon" />
                </button>
              </li>
              <li className="nav-item transform font-serif font-medium transition-transform hover:scale-110 hover:font-bold">
                <Link to="/" className="nav-link active">
                  Get started
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default LandingNav;
