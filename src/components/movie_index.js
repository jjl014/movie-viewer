import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import {
  fetchMovies,
  fetchMovieGenres
} from '../actions/movie_actions';
import { updateFilter } from '../actions/filter_actions';
import MovieIndexItem from './movie_index_item';

class MovieIndex extends React.Component {
  constructor(props) {
    super(props);
    console.log(props);
    this.state = {
      page: 1
    };
  }

  componentDidMount() {
    const { section } = this.props;
    if(section) {
      this.props.fetchMovies(section, this.state.page)
        .then(data => {
          console.log(data);
        });
    }
  }

  // componentWillReceiveProps(newProps) {
  //   console.log(newProps);
  //   if(newProps.location.pathname !== this.props.location.pathname) {
  //     console.log("updated");
  //     this.props.fetchMovies(this.props.section, this.state.page);
  //   }
  // }

  componentWillUpdate(nextProps, nextState) {
    if(nextState.page !== this.state.page) {
      this.props.fetchMovies(this.props.section, nextState.page);
    }
  }

  // componentDidUpdate(prevProps, prevState) {
  //   if(prevState.page !== this.state.page) {
  //     this.props.fetchMovies(this.props.section, this.state.page);
  //   }
  // }

  generateMovieList() {
    const { movies, section } = this.props;
    if(movies) {
      return movies.map((movie, i) =>
        <MovieIndexItem key={`movie-${section}-${i}`} movie={movie} />
      );
    }
  }

  handleButton(type) {
    return (e) => {
      e.preventDefault();
      if(type === "next") {
        this.setState({page: (this.state.page + 1)});
      } else {
        if(this.state.page > 1) {
          this.setState({page: (this.state.page - 1)});
        }
      }
    };
  }

  render () {
    console.log(this.state);
    return (
      <div className="movie-index-container">
        <button onClick={this.handleButton("next")}>Next</button>
        <button onClick={this.handleButton("prev")}>Prev</button>
        <div className="movie-index">
          {this.generateMovieList()}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    movies: state.movies[ownProps.section]
  };
};

const mapDispatchToProps = dispatch => ({
  fetchMovies: (section, page) => dispatch(fetchMovies(section, page)),
  fetchMovieGenres: () => dispatch(fetchMovieGenres()),
  updateFilter: (filter, value) => dispatch(updateFilter(filter, value))
});

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(MovieIndex));
