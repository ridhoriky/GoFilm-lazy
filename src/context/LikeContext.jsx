import React, { createContext, useContext, useState } from 'react';

const LikeContext = createContext();

export const LikeProvider = ({ children }) => {
  const [likeState, setLikeState] = useState(false);

  const toggleLike = (movieId) => {
    setLikeState((prevLike) => ({
      ...prevLike,
      [movieId]: !prevLike[movieId],
    }));
  };

  const isLiked = (movieId) => {
    return likeState[movieId] || false;
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
