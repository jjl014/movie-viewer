import React from 'react';
import { connect } from 'react-redux';
import { fetchMovies } from '../actions/movie_actions';

class MovieIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      page: 1
    };
  }

  componentDidMount() {
    this.props.fetchMovies(this.props.type, this.state.page);
  }

  render () {
    return (
      <div className="movie-index">
        {this.props.type}
      </div>
    );
  }
}

const mapStateToProps = state => ({

});

const mapDispatchToProps = dispatch => ({
  fetchMovies: (type, page) => dispatch(fetchMovies(type, page))
});

export default connect(mapStateToProps, mapDispatchToProps)(MovieIndex);
