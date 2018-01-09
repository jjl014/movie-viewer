import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import {
  fetchMovies,
  fetchMovieGenres
} from '../actions/movie_actions';

class MovieIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      page: 1
    };
  }

  componentDidMount() {
    const { pathname } = this.props.location;
    const section = pathname.slice(1).toLowerCase();
    this.props.fetchMovies(section, this.state.page);
  }

  componentWillUpdate(nextProps, nextState) {
    const { pathname } = nextProps.location;
    const section = pathname.slice(1).toLowerCase();
    this.props.fetchMovies(section, this.state.page);
  }

  render () {
    return (
      <div className="movie-index">
        {this.props.section}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {

  };
};

const mapDispatchToProps = dispatch => ({
  fetchMovies: (section, page) => dispatch(fetchMovies(section, page)),
  fetchMovieGenres: () => dispatch(fetchMovieGenres())
});

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(MovieIndex));
