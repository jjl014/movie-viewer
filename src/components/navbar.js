import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import SearchBar from './searchbar';
import { fetchMovieGenres } from '../actions/movie_actions';


class NavBar extends React.Component {
  componentWillMount() {
    this.props.fetchMovieGenres();
  }

  getGenreList() {
    const { genres } = this.props;
    if(genres) {
      return genres.map((genre,i ) =>
        <li
          className="genre-list-item"
          key={`genre-${i}`}>
            {genre.name}
        </li>);
    }
  }

  render () {
    return (
      <div className="navbar">
        NAVBAR
        <div className="search-container">
          <SearchBar />
          <Link to="/popular">Popular</Link>
          <Link to="/now_playing">Now Playing</Link>
          <Link to="/upcoming">Upcoming</Link>
        </div>
        <div className="dropdown">
          <button className="dropbtn">Genre</button>
          <div className="dropdown-content">
            {this.getGenreList()}
          </div>
        </div>
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
