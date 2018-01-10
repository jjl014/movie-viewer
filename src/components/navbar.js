import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import SearchBar from './searchbar';
import { fetchMovieGenres } from '../actions/movie_actions';


class NavBar extends React.Component {
  componentWillMount() {
    this.props.fetchMovieGenres();
  }

  // Genre Search for the movie API is broken.
  // Commented out dropdown genre list in case it works in the future.
  // getGenreList() {
  //   const { genres } = this.props;
  //   if(genres) {
  //     return genres.map((genre,i ) =>
  //       <li
  //         className="genre-list-item"
  //         key={`genre-${i}`}>
  //           {genre.name}
  //       </li>);
  //   }
  // }

  render () {
    return (
      <div className="navbar">
        <div className="btn-container">
          <Link className="btn-primary" to="/popular">Popular</Link>
          <Link className="btn-primary" to="/top_rated">Top Rated</Link>
          <Link className="btn-primary" to="/upcoming">Upcoming</Link>
          <Link className="btn-primary" to="/now_playing">Now Playing</Link>
        </div>
        <SearchBar />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  genres: state.movies.genres
});

const mapDispatchToProps = dispatch => ({
  fetchMovieGenres: () => dispatch(fetchMovieGenres())
});

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);


// Genre Search for the movie API is broken.
// Commented out dropdown genre list in case it works in the future.
// <div className="dropdown">
// <button className="dropbtn">Genre</button>
// <div className="dropdown-content">
// {this.getGenreList()}
// </div>
// </div>
