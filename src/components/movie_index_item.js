import React from 'react';

const MovieIndexItem = ({movie}) => {
  const { poster_path, title } = movie;
  return (
    <div className="movie-index-item clearfix">
      <div className="movie-img-wrapper">
        {
          poster_path ?
          <img
            className="movie-img"
            src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
            alt={`${title}_poster_placeholder`}/> :
          <img
            className="movie-img"
            src="http://lexingtonvenue.com/media/poster-placeholder.jpg"
            alt="poster_placeholder"/>
        }
      </div>
    </div>
  );
};

export default MovieIndexItem;
