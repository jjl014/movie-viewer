import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import {
  fetchMovies,
  fetchMovieGenres,
  queryMovies,
  updateLoading
} from '../actions/movie_actions';
import { updateFilter } from '../actions/filter_actions';
import MovieIndexItem from './movie_index_item';
import Loader from './loader';

class MovieIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      page: 1,
      loading: false
    };
  }

  componentDidMount() {
    const { section } = this.props;
    if(section && section !== "search_results") {
      // this.setState({loading: true});
      this.props.updateLoading();
      this.props.fetchMovies(section, this.state.page);
        // .then(() => {
        //   this.setState({loading: false});
        // });
    }
  }

  componentWillUpdate(nextProps, nextState) {
    const { section } = this.props;
    const { query } = nextProps;
    if(nextState.page !== this.state.page) {
      if(this.props.section === "search_results") {
        // this.setState({loading: true});
        this.props.updateLoading();
        this.props.queryMovies(query, nextState.page);
          // .then(() => {
          //   this.setState({loading: false});
          // });
      } else {
        // this.setState({loading: true});
        this.props.updateLoading();
        this.props.fetchMovies(section, nextState.page);
          // .then(() => {
          //   this.setState({loading: false});
          // });
      }
    }
  }

  componentWillReceiveProps(newProps) {
    if(this.props.query !== newProps.query) {
      this.setState({page: 1});
    }
  }

  generateMovieList() {
    const { movies, section } = this.props;
    if(movies) {
      return movies.map((movie, i) => {
        if(movie.poster_path) {
          return <MovieIndexItem
                  key={`movie-${section}-${i}`}
                  scrollToTop={this.scrollToTop}
                  movie={movie} />;
        }
        return null;
      });
    }
  }

  handleButton(type) {
    return (e) => {
      e.preventDefault();
      if(type === "next") {
        if(this.state.page < this.props.totalPages) {
          this.setState((prevState, props) => {
            return {page: prevState.page + 1};
          });
        }
      } else {
        if(this.state.page > 1) {
          this.setState({page: (this.state.page - 1)});
        }
      }
      this.scrollToTop();
    };
  }

  scrollToTop() {
    window.scrollTo(0,0);
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
    let display;
    if(this.props.loading) {
      display = <Loader />;
    } else {
      display = (
        <div className="movie-index-container">
          {this.renderListNav()}
            <div className="movie-index">
              {this.generateMovieList()}
            </div>
          {this.renderListNav()}
        </div>
      );
    }
    return (
      <div className="movie-index-super-container">
        { display }
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    movies: state.movies[ownProps.section].list,
    totalPages: state.movies[ownProps.section].total_pages,
    query: state.filters.query,
    loading: state.movies.loading
  };
};

const mapDispatchToProps = dispatch => ({
  fetchMovies: (section, page) => dispatch(fetchMovies(section, page)),
  fetchMovieGenres: () => dispatch(fetchMovieGenres()),
  updateFilter: (filter, value) => dispatch(updateFilter(filter, value)),
  queryMovies: (query, page) => dispatch(queryMovies(query, page)),
  updateLoading: () => dispatch(updateLoading())
});

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(MovieIndex));
