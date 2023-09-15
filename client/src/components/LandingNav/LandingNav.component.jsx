import React from 'react';
import { Link } from 'react-router-dom';

const LandingNav = () => {
  return (
    <div>
      <nav className=" bg-cyan-400 py-5">
        <div className="container mx-auto">
          <div>
            <ul className="flex items-center justify-evenly space-x-4">
              <li className="flex items-center">
                <Link to="/">
                  <img
                    className="mb-5 mr-4 w-12"
                    src="/img/Timestructors_Logo_Icon.png"
                    alt="Timestructors Logo Icon"
                  />
                </Link>

                <Link to="/" className=" font-roundbold text-5xl text-white">
                  Timestructors
                </Link>
              </li>
              <li className="nav-item transform font-serif font-medium transition-transform hover:scale-110 hover:font-bold">
                <Link
                  to="/register"
                  className=" font-roundo nav-link active font-bold"
                >
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
