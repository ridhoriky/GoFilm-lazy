import React, { useState } from 'react';
import { UserAuth } from '../context/AuthContext';
import { db } from '../sevices/Firebase';
import { arrayUnion, doc, updateDoc } from 'firebase/firestore';
import MovieCardBig from './MovieCardBig';
import MovieCardSmall from './MovieCardSmall';
import { useLike } from '../context/LikeContext';

const MovieCard = ({ item, rowID, type }) => {
  const { isLiked, toggleLike } = useLike();
  const [saved, setSaved] = useState(false);
  const { user } = UserAuth();

  const movieID = user?.email ? doc(db, 'users', user.email) : null;

  const saveShow = async () => {
    if (user?.email) {
      toggleLike(item.id);
      setSaved(true);
      await updateDoc(movieID, {
        savedShows: arrayUnion({
          id: item.id,
          title: item.title || item.name,
          img: item.poster_path || item.profile_path,
          type: type,
        }),
      });
    } else {
      alert('Please log in to save a movie');
    }
  };

  const deleteShow = async () => {
    if (user?.email && movieID) {
      toggleLike(details.id);
      await updateDoc(movieID, {
        savedShows: (details?.savedShows || []).filter(
          (show) => show.id !== details.id
        ),
      });
    }
  };

  console.log(isLiked);
  return (
    <>
      {rowID === 1 || rowID === 4 ? (
        <MovieCardBig
          item={item}
          rowID={rowID}
          saveShow={saveShow}
          deleteShow={deleteShow}
          type={type}
        />
      ) : (
        <MovieCardSmall
          item={item}
          rowID={rowID}
          saveShow={saveShow}
          deleteShow={deleteShow}
          type={type}
        />
      )}
    </>
  );
};

export default MovieCard;
