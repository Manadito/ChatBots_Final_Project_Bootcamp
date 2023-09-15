import React from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

const NavBar = (props) => {
  // Destructuring Props
  const { setUser } = props;
  console.log(setUser);

  const navigate = useNavigate();

  // i) Handlers
  const handleLogout = () => {
    logoutUser();
  };

  // ii) API Calls
  const logoutUser = async () => {
    try {
      await axios.get('http://localhost:8080/api/users/logout', {
        withCredentials: true,
      });
      localStorage.removeItem('user');
      setUser(null);
      navigate('/');
    } catch (err) {
      console.log('Error: ', err);
    }
  };

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
                <Link to="/instructors" className="nav-link active">
                  Instructors
                </Link>
              </li>
              <li className="nav-item transform font-serif font-medium transition-transform hover:scale-110 hover:font-bold">
                <Link to="/classroom" className="nav-link active">
                  Classroom
                </Link>
              </li>
              <li>
                <button
                  className="btn nav-link fs-5 text-decoration-underline mx-2 text-black shadow-none"
                  onClick={handleLogout}
                >
                  Logout
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
