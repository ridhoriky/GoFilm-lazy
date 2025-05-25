import React from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import HomePage from "./pages/HomePage.jsx";
import { AuthContextProvider } from "./context/AuthContext.jsx";
import { Footer } from "./components/Footer.jsx";
import { LikeProvider } from "./context/LikeContext.jsx";
import ProtectedRoute from "./components/ProtectedRoute";
const SignUp = React.lazy(() => import("./pages/SignUp.jsx"));
const Login = React.lazy(() => import("./pages/Login.jsx"));
const Wishlist = React.lazy(() => import("./pages/Wishlist.jsx"));
const Movie = React.lazy(() => import("./pages/Movie.jsx"));
const TvShow = React.lazy(() => import("./pages/TvShow.jsx"));
const Search = React.lazy(() => import("./pages/Search.jsx"));
const Detail = React.lazy(() => import("./pages/Detail.jsx"));

const App = () => {
  return (
    <>
      <AuthContextProvider>
        <LikeProvider>
          <Navbar />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
            <Route
              path="/wishlist"
              element={
                <ProtectedRoute>
                  <Wishlist />
                </ProtectedRoute>
              }
            />
            <Route path="/movie/:id" element={<Movie />} />
            <Route path="/tvshow/:id" element={<TvShow />} />
            <Route path="/search" element={<Search />} />
            <Route path="/detail/:id" element={<Detail />} />
          </Routes>
          <Footer />
        </LikeProvider>
      </AuthContextProvider>
    </>
  );
};

export default App;
