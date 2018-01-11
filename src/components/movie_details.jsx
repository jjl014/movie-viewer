import React from 'react';
import { connect } from 'react-redux';
import {  } from 'react-router-dom';
import { fetchMovieDetails } from '../actions/movie_actions';

class MovieDetails extends React.Component {
  componentDidMount() {
    const { id } = this.props.match.params;
    this.props.fetchMovieDetails(id);
  }

  render() {
    const {details} = this.props;
    let display = null, style = null, imdb = null;
    const url = "https://image.tmdb.org/t/p/";
    if(details) {
      style = {
        backgroundImage: "url(" + url + "original" + details.backdrop_path + ")"
      };
      imdb = `https://www.imdb.com/title/${details.imdb_id}`;
      display = (
        <div className="movie-details">
          <img className="movie-poster" src={url + "w500" + details.poster_path} alt="movie-poster"></img>
          <div className="detail-content">
            <h2>{details.title.toUpperCase()}</h2>
            {
              details.tagline.length ? <h3>{details.tagline}</h3> : null
            }
            <p>{details.overview}</p>
            <div className="content-details">
              <div className="content-section">
                <h4>Run Time</h4>
                <h2>{details.runtime} minutes</h2>
              </div>
              <div className="content-section">
                <h4>Vote Average</h4>
                <h2>{details.vote_average}/10</h2>
              </div>
              <div className="content-section">
                <h4>Box Office</h4>
                <h2>
                  ${details.revenue.toLocaleString()}
                </h2>
              </div>
              <div className="content-section">
                <h4>Release Date</h4>
                <h2>
                  {details.release_date}
                </h2>
              </div><div className="content-section">
                <h4>IMDb</h4>
                <h2><a href={imdb}>{imdb.slice(8)}</a></h2>
              </div>
            </div>
          </div>
        </div>
      );
    } else {
      display = "Loading...";
    }

    return(
      <div style={style} className="movie-details-container">
        <div className="movie-details-overlay">
          {display}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  details: state.movies.movie_details
});

const mapDispatchToProps = dispatch => ({
  fetchMovieDetails: (id) => dispatch(fetchMovieDetails(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(MovieDetails);
