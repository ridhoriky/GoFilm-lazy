import React, { createContext, useContext, useState } from 'react';

const LikeContext = createContext();

export const LikeProvider = ({ children }) => {
  const [like, setLike] = useState(false);

  const toggleLike = (movieId) => {
    setLike((prevLike) => ({
      ...prevLike,
      [movieId]: !prevLike[movieId],
    }));
  };

  const isLiked = (movieId) => {
    return like[movieId] || false;
  };

  return (
    <LikeContext.Provider value={{ isLiked, toggleLike }}>
      {children}
    </LikeContext.Provider>
  );
};

export const useLike = () => {
  return useContext(LikeContext);
};
