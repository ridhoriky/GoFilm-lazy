import React, { useState } from 'react';
import { UserAuth } from '../context/AuthContext';
import { db } from '../sevices/Firebase';
import { arrayUnion, doc, updateDoc } from 'firebase/firestore';
import MovieCardBig from './MovieCardBig';
import MovieCardSmall from './MovieCardSmall';

const MovieCard = ({ item, rowID, type }) => {
  const [like, setLike] = useState(false);
  const [saved, setSaved] = useState(false);
  const { user } = UserAuth();

  const movieID = user?.email ? doc(db, 'users', user.email) : null;

  const saveShow = async () => {
    if (user?.email) {
      setLike(!like);
      setSaved(true);
      await updateDoc(movieID, {
        savedShows: arrayUnion({
          id: item.id,
          title: item.title || item.name,
          img: item.poster_path || item.profile_path,
        }),
      });
    } else {
      alert('Please log in to save a movie');
    }
  };
  return (
    <>
      {rowID === 1 || rowID === 4 ? (
        <MovieCardBig
          item={item}
          rowID={rowID}
          saveShow={saveShow}
          like={like}
          type={type}
        />
      ) : (
        <MovieCardSmall
          item={item}
          rowID={rowID}
          saveShow={saveShow}
          like={like}
          type={type}
        />
      )}
    </>
  );
};

export default MovieCard;
