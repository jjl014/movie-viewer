import React from 'react';
import { Link } from 'react-router-dom';

const MovieIndexItem = ({movie, scrollToTop}) => {
  const { poster_path, title, id } = movie;
  return (
    <div className="movie-index-item clearfix">
      <div className="movie-img-wrapper" onClick={scrollToTop}>
        <Link to={`/movie/${id}`}>
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
        </Link>
      </div>
    </div>
  );
};

export default MovieIndexItem;
