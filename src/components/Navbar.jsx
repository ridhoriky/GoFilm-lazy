import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { UserAuth } from '../context/AuthContext';
import NavLink from '../constant/NavLink';
import { IoPersonCircle } from 'react-icons/io5';

const Navbar = () => {
  const { user, logOut } = UserAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await logOut();
      navigate('/');
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="navbar bg-[#15191e]   md:px-[10%] sticky top-0 z-[99]">
      <div className="navbar-start">
        <div className="dropdown">
          <label
            tabIndex={0}
            className="btn btn-ghost lg:hidden  hover:text-gray-900 hover:bg-white mr-5">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
            {NavLink.navLink.map(({ index, name, path }) => (
              <li key={index}>
                <Link
                  to={path}
                  className="  hover:text-gray-900 ease-in-out duration-500">
                  {name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <Link
          to="/"
          className="btn btn-ghost normal-case font-bold  text-2xl   hover:bg-white hover:text-gray-900 ease-in-out duration-500">
          Go<span className="text-red-500 "> Film</span>
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal text-base font-semibold px-1 gap-4 ">
          {NavLink.navLink.map(({ index, name, path }) => (
            <li key={index}>
              <Link
                to={path}
                className="  hover:text-gray-900  hover:bg-white ease-in-out duration-500">
                {name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      {user?.email ? (
        <div className="navbar-end flex gap-4 ">
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <IoPersonCircle size={40} />
              </div>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
              <li>
                <a className="justify-between">Profile</a>
              </li>
              <li>
                <Link to="/wishlist"> Wishlist</Link>
              </li>
              <li>
                <button onClick={handleLogout}> Logout</button>
              </li>
            </ul>
          </div>
        </div>
      ) : (
        <div className="navbar-end flex gap-4 ">
          <Link
            to="/signup"
            className="menu menu-horizontal px-3 outline outline-2 rounded-md outline-[#15191e] font-semibold cursor-pointer hover:text-gray-900  hover:bg-white hover:outline-white ease-in-out duration-500 ">
            Sign Up
          </Link>
          <Link
            to="/login"
            className="menu menu-horizontal px-3 outline outline-2 rounded-md  font-semibold cursor-pointer  hover:text-gray-900  hover:bg-white hover:outline-white  ease-in-out duration-500">
            Sign In
          </Link>
        </div>
      )}
    </div>
  );
};

export default Navbar;
