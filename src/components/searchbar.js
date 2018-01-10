import React from 'react';
import { connect } from 'react-redux';

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

  keyPress(e) {
    if(e.keyCode === 13) {
    }
  }

  render () {
    console.log(this.state);
    return (
      <div className="search-bar">
        <input
          type="text"
          value={this.state.query}
          onChange={this.handleChange()}
          onKeyDown={this.keyPress}
          placeholder="Search Movie Title...">
        </input>
      </div>
    );
  }
}

const mapStateToProps = state => ({

});

const mapDispatchToProps = dispatch => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);
