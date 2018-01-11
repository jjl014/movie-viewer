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
    const url = "https://image.tmdb.org/t/p/";
    let display = null;
    let style = null;
    const {details} = this.props;
    if(details) {
      style = {
        backgroundImage: "url(" + url + "original" + details.backdrop_path + ")"
      };
      display = (
        <div className="movie-details-overlay">
          <div className="movie-details">
            <div className="movie-poster-wrapper">
              <img className="movie-poster"src={url + "w500" + details.poster_path}></img>
            </div>
            <div className="detail-content">

            </div>
          </div>
        </div>
      );
    } else {
      display = "Loading...";
    }

    return(
      <div style={style} className="movie-details-container">
        {display}
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
