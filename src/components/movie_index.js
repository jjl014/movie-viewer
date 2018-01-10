import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import {
  fetchMovies,
  fetchMovieGenres,
  queryMovies
} from '../actions/movie_actions';
import { updateFilter } from '../actions/filter_actions';
import MovieIndexItem from './movie_index_item';

class MovieIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      page: 1
    };
  }

  componentDidMount() {
    const { section } = this.props;
    const { query } = this.props.match.params;
    if(section && section !== "search_results") {
      this.props.fetchMovies(section, this.state.page);
    } else if(query) {
      this.props.queryMovies(query, this.state.page);
    }
  }

  componentWillUpdate(nextProps, nextState) {
    const { section } = this.props;
    const { query } = this.props.match.params;
    if(nextState.page !== this.state.page) {
      if(this.props.section === "search_results") {
        this.props.queryMovies(query, nextState.page);
      } else {
        this.props.fetchMovies(section, nextState.page);
      }
    }
  }

  componentWillReceiveProps(newProps) {
  }

  generateMovieList() {
    const { movies, section } = this.props;
    if(movies) {
      return movies.map((movie, i) => {
        if(movie.poster_path) {
          return <MovieIndexItem key={`movie-${section}-${i}`} movie={movie} />;
        }
      });
    }
  }

  handleButton(type) {
    return (e) => {
      e.preventDefault();
      if(type === "next") {
        if(this.state.page < this.props.totalPages) {
          this.setState({page: (this.state.page + 1)});
        }
      } else {
        if(this.state.page > 1) {
          this.setState({page: (this.state.page - 1)});
        }
      }
      window.scrollTo(0,0);
    };
  }

  renderListNav() {
    return (
      <div className="list-nav-container">
        <button onClick={this.handleButton("prev")}>
          <i className="fa fa-2x fa-chevron-left" aria-hidden="true"></i>
        </button>
        <p>Page {this.state.page} of {this.props.totalPages}</p>
        <button onClick={this.handleButton("next")}>
          <i className="fa fa-2x fa-chevron-right" aria-hidden="true"></i>
        </button>
      </div>
    );
  }

  render () {
    return (
      <div className="movie-index-container">
        {this.renderListNav()}
        <div className="movie-index">
          {this.generateMovieList()}
        </div>
        {this.renderListNav()}
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    movies: state.movies[ownProps.section].list,
    totalPages: state.movies[ownProps.section].total_pages,
    query: state.filters.query
  };
};

const mapDispatchToProps = dispatch => ({
  fetchMovies: (section, page) => dispatch(fetchMovies(section, page)),
  fetchMovieGenres: () => dispatch(fetchMovieGenres()),
  updateFilter: (filter, value) => dispatch(updateFilter(filter, value)),
  queryMovies: (query, page) => dispatch(queryMovies(query, page))
});

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(MovieIndex));
