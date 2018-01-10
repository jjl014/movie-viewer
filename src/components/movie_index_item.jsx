import React from 'react';

const MovieIndexItem = ({movie}) => {
  const {
    vote_count, id, vote_average, title, overview, release_date,
    poster_path, backdrop_path, genre_ids
  } = movie;
  return (
    <div>
      {
        poster_path ?
        <img src={`https://image.tmdb.org/t/p/w500/${poster_path}`}/> :
        <img src="http://lexingtonvenue.com/media/poster-placeholder.jpg"/>
      }
    </div>
  );
};

export default MovieIndexItem;
