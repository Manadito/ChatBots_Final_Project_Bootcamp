import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import axios from 'axios';
import _ from 'lodash';

const UserForm = (props) => {
  // --------------------------------------------------
  // I) HOOKS AND VARIABLES
  // --------------------------------------------------

  // Destructuring props
  const { formType, setUser } = props;

  // State Hooks
  const [userCredentials, setUserCredentials] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });
  const [errorMessages, setErrorMessages] = useState({});

  // React Route Hooks  -  Navigate
  const navigate = useNavigate();

  // --------------------------------------------------
  // II) HANDLERS AND AUXILIAR FUNCTIONS
  // --------------------------------------------------

  // i) Handlers

  const handleOnChangeUserFields = (e) => {
    let userCredentialsToUpdate = { ...userCredentials }; // Deep clone
    // let userCredentialsToUpdate = _.cloneDeep(userCredentials); // Same as above
    userCredentialsToUpdate = {
      ...userCredentialsToUpdate,
      [e.target.name]: e.target.value,
    };
    // console.log(userCredentialsToUpdate);
    setUserCredentials(userCredentialsToUpdate);
  };

  const handleOnSubmitRegistration = (e) => {
    e.preventDefault();
    if (formType === 'register') {
      registerUser();
    } else {
      loginUser();
    }
  };

  // ii) API Functions
  const registerUser = async () => {
    try {
      // a) Send POST request to register user
      let res = await axios.post(
        'http://localhost:8080/api/users/register',
        userCredentials,
        // this will force the sending of the credentials / cookies so they can be updated
        //    XMLHttpRequest from a different domain cannot set cookie values for their own domain
        //    unless withCredentials is set to true before making the request
        { withCredentials: true },
      );

      // b) Reset userCredentials state
      setUserCredentials({
        name: '',
        email: '',
        password: '',
        confirmPassword: '',
      });
      // c) Login User
      loginUser();
    } catch (err) {
      console.log('Error: ', err.response.data);
      updateErrorMessages(err);
    }
  };

  const loginUser = async () => {
    try {
      let res = await axios.post(
        'http://localhost:8080/api/users/login',
        userCredentials,
        // this will force the sending of the credentials / cookies so they can be updated
        //    XMLHttpRequest from a different domain cannot set cookie values for their own domain
        //    unless withCredentials is set to true before making the request
        { withCredentials: true },
      );
      console.log(res);
      setUser(res.data.user);
      localStorage.setItem('user', JSON.stringify(res.data.user));
      navigate('/instructors');
    } catch (err) {
      console.log(err);
      console.log('Error: ', err.response.data);
      updateErrorMessages(err);
    }
  };

  // iii) Aux Functions
  const updateErrorMessages = (err) => {
    let errorMessagesToUpdate = {};
    if (formType === 'register') {
      let errors = err.response.data.errors?.errors;
      errorMessagesToUpdate = _.mapValues(errors, (error) => error.message);
    } else {
      errorMessagesToUpdate = { login: 'Invalid Login. Please try again.' };
    }
    setErrorMessages(errorMessagesToUpdate);
  };

  // --------------------------------------------------
  // III) JSX
  // --------------------------------------------------
  return (
    <div className="w-full max-w-xs">
      <form
        onSubmit={handleOnSubmitRegistration}
        className="mb-4 rounded bg-white px-8 pb-8 pt-6 shadow-md"
      >
        {/* I) Name Field */}
        {formType === 'register' && (
          <div className="mb-4">
            <label
              className="mb-2 block text-sm font-bold text-gray-700"
              htmlFor="name"
            >
              Name:
            </label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Name"
              onChange={handleOnChangeUserFields}
              value={userCredentials?.name}
              className="focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none"
            />
            <div className="text-xs italic text-red-500">
              {errorMessages?.name}
            </div>
          </div>
        )}

        {/* II) Email Field */}
        <div className="mb-4">
          <label
            className="mb-2 block text-sm font-bold text-gray-700"
            htmlFor="email"
          >
            Email:
          </label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="email@email.com"
            onChange={handleOnChangeUserFields}
            value={userCredentials?.email}
            className="focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none"
          />
          <div className="text-xs italic text-red-500">
            {errorMessages?.email}
          </div>
        </div>

        {/* III) Password Field */}
        <div className="mb-4">
          <label
            className="mb-2 block text-sm font-bold text-gray-700"
            htmlFor="password"
          >
            Password:
          </label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="********"
            onChange={handleOnChangeUserFields}
            value={userCredentials?.password}
            className="focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none"
          />
          <div className="text-xs italic text-red-500">
            {errorMessages?.password}
          </div>
          <div className="text-xs italic text-red-500">
            {errorMessages?.login}
          </div>
        </div>

        {/* IV) Confirm Password Field */}
        {formType === 'register' && (
          <div className="mb-4">
            <label
              className="mb-2 block text-sm font-bold text-gray-700"
              htmlFor="confirmPassword"
            >
              Confirm Password:
            </label>
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              placeholder="********"
              onChange={handleOnChangeUserFields}
              value={userCredentials?.confirmPassword}
              className="focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none"
            />
            <div className="text-xs italic text-red-500">
              {errorMessages?.confirmPassword}
            </div>
          </div>
        )}

        {/* V) Submit Button */}
        <div className="flex items-center justify-between">
          <button
            type="submit"
            className="focus:shadow-outline rounded bg-red-500 px-4 py-2 font-bold text-white hover:bg-red-700 focus:outline-none"
          >
            {formType === 'register' ? (
              <span>Register</span>
            ) : (
              <span>Login</span>
            )}
          </button>
        </div>
      </form>
      <p className="text-center text-xs text-gray-500">
        &copy;2023 Company. All rights reserved.
      </p>
    </div>
  );
};

export default UserForm;
