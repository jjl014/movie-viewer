import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { queryMovies } from '../actions/movie_actions';

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      query: ""
    };
  }

  handleChange() {
    return (e) => {
      this.setState({query: e.target.value});
    };
  }

  keyPress() {
    return (e) => {
      if(e.keyCode === 13) {
        this.props.queryMovies(this.state.query)
          .then(() => {
            this.props.history.push("/search");
            this.setState({query: ""});
          });
      }
    };
  }

  render () {
    return (
      <div className="search-bar">
        <input
          type="text"
          value={this.state.query}
          onChange={this.handleChange()}
          onKeyDown={this.keyPress()}
          placeholder="Search Movie Title...">
        </input>
      </div>
    );
  }
}

const mapStateToProps = state => ({

});

const mapDispatchToProps = dispatch => ({
  queryMovies: (query) => dispatch(queryMovies(query))
});

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(SearchBar));
