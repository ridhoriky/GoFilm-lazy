import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { UserAuth } from '../context/AuthContext';

const SignUp = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const { user, signUp } = UserAuth();
  const navigate = useNavigate();

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validatePassword = (password) => {
    const passwordRegex = /^.{8,}$/;
    return passwordRegex.test(password);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    if (!validateEmail(email)) {
      setError('Invalid email format');
      return;
    }

    if (!validatePassword(password)) {
      setError('Password must be at least 8 characters long.');
      return;
    }
    try {
      setLoading(true);
      await signUp(email, password);
      setTimeout(() => {
        navigate('/');
      }, 1000);
    } catch (error) {
      console.error(error);
      setError('Failed to sign up. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full h-screen">
      <img
        className="block absolute w-full h-full object-cover "
        src="https://cdn.pixabay.com/photo/2017/10/26/17/46/film-2891853_1280.jpg"
        alt="/"
      />
      <div className=" fixed top-0 left-0 w-full h-screen"></div>
      <div className="fixed w-full px-4 py-40 z-50">
        <div className="max-w-[450px] h-[600px] mx-auto rounded-md bg-white/95 sm:bg-white/80 text-gray-900">
          <div className="max-w-[320px] mx-auto py-20">
            <h1 className="text-3xl font-bold">Sign Up</h1>
            <form
              onSubmit={handleSubmit}
              className="w-full flex flex-col py-4 text-gray-900">
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="p-3 my-2 bg-gray-400 rounded-md placeholder-gray-500 outline-none"
                type="email"
                placeholder="Email"
                autoComplete="email"
              />
              <input
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="p-3 my-2 bg-gray-400 rounded-md placeholder-gray-500 outline-none"
                type="password"
                placeholder="Password"
                autoComplete="current-password"
              />
              {error && <p className="text-red-500 py-2 ">{error}</p>}
              <button
                disabled={loading}
                className="text-white bg-gray-900 py-3 my-6 rounded-md font-bold  outline-gray-900  cursor-pointer  hover:text-gray-900  hover:bg-white hover:outline-white  ease-in-out duration-500">
                {loading ? '...' : 'Sign Up'}
              </button>
              <div className="flex justify-between items-center text-sm text-gray-400">
                <p>
                  <input className="mr-2" type="checkbox" />
                  Remember me
                </p>
                <p>Need Help?</p>
              </div>
              <p className="py-12">
                <span className="text-gray-400">New to GoFlix</span>{' '}
                <Link to="/login" className="hover:text-white">
                  Sign In
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
