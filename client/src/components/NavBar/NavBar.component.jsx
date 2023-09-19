import React, { useState, useRef, useEffect } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

const NavBar = (props) => {
  // Destructuring Props
  const { user, setUser } = props;
  console.log(setUser);
  const [showLogoutPopup, setShowLogoutPopup] = useState(false);
  const logoutPopupRef = useRef(null);
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

  useEffect(() => {
    function handleClickOutside(event) {
      if (
        logoutPopupRef.current &&
        !logoutPopupRef.current.contains(event.target)
      ) {
        setShowLogoutPopup(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div>
      <nav className="border-b-2 border-cyan-500 bg-cyan-300 py-5">
        <div className="container mx-auto">
          <div>
            <ul className="flex items-center justify-evenly space-x-4">
              <li className="flex items-center">
                <Link to="/instructors">
                  <img
                    className="mb-5 mr-4 w-12"
                    src="/img/Timestructors_Logo_Icon.png"
                    alt="Timestructors Logo Icon"
                  />
                </Link>

                <Link to="/instructors">
                  <img
                    className="mb-2 w-[500px]"
                    src="/img/Timestructors_Logo_Text.svg"
                    alt="Timestructors Logo Text"
                  />
                </Link>
              </li>
              <li className="font-roundo text-lg font-bold text-slate-900 hover:font-bold hover:text-white">
                <Link to="/instructors" className="nav-link active">
                  Instructors
                </Link>
              </li>
              <li className="font-roundo text-lg font-bold text-slate-900 hover:font-bold hover:text-white">
                <Link to="/classroom" className="nav-link active">
                  Classroom
                </Link>
              </li>
              <li style={{ position: 'relative' }}>
                <button
                  className="h-12 w-12 rounded-full border-4 border-white"
                  onClick={() => setShowLogoutPopup(!showLogoutPopup)}
                ></button>
                {showLogoutPopup && (
                  <div
                    ref={logoutPopupRef}
                    className="absolute left-[-180%] top-[110%] h-56 w-56 rounded-lg border-cyan-400 bg-white p-5 shadow-xl"
                    style={{ zIndex: 9999 }}
                  >
                    <p className="mb-2 text-center font-nunito font-bold">
                      Hi, Pepito!{' '}
                    </p>
                    <div className="mb-2 flex justify-center">
                      <div className="h-14 w-14 rounded-full border-4 border-cyan-400"></div>
                    </div>

                    <div className="grid grid-rows-2 ">
                      <button
                        className="rounded-xl border-b-2 bg-cyan-400 p-2 font-nunito font-bold hover:bg-cyan-300"
                        onClick={handleLogout}
                      >
                        Logout
                      </button>
                      <li>
                        <h2>Welcome: {user.name}</h2>
                      </li>
                      <button
                        className=" rounded-xl border-b-2 bg-cyan-400 p-2 font-nunito font-bold hover:bg-cyan-300"
                        onClick={() => setShowLogoutPopup(false)}
                      >
                        Cancel
                      </button>
                    </div>
                  </div>
                )}
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
