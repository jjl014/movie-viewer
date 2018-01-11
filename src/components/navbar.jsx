import React from 'react';
import { Link } from 'react-router-dom';
import SearchBar from './searchbar';
import DropDown from './dropdown';

class NavBar extends React.Component {
  render () {
    return (
      <div className="navbar">
        <div className="btn-container">
          <Link className="btn-primary" to="/popular">Popular</Link>
          <Link className="btn-primary" to="/top_rated">Top Rated</Link>
          <Link className="btn-primary" to="/upcoming">Upcoming</Link>
          <Link className="btn-primary" to="/now_playing">Now Playing</Link>
        </div>
        <DropDown />
        <SearchBar />
      </div>
    );
  }
}

export default NavBar;

// Genre Search for the movie API is broken.
// Commented out dropdown genre list in case it works in the future.

// import { connect } from 'react-redux';
// import { fetchMovieGenres } from '../actions/movie_actions';

// componentWillMount() {
//   this.props.fetchMovieGenres();
// }

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

// <div className="dropdown">
// <button className="dropbtn">Genre</button>
// <div className="dropdown-content">
// {this.getGenreList()}
// </div>
// </div>
//

// const mapStateToProps = state => ({
//   genres: state.movies.genres
// });
//
// const mapDispatchToProps = dispatch => ({
//   fetchMovieGenres: () => dispatch(fetchMovieGenres())
// });
