import React from 'react';
import { Link } from 'react-router-dom';

class DropDown extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false
    };
  }

  toggleMenu() {
    return () => {
      this.setState({show: !this.state.show});
    };
  }

  hide() {
    return (e) => {
      if (e && e.relatedTarget) {
        e.relatedTarget.click();
      }
      this.setState({show: false});
    };
  }

  render() {
    return (
      <div
        className="btn-menu"
        onClick={this.toggleMenu()}
        onBlur={this.hide()}
      >
        <button className="menu-btn" type="button">
          <i className="fa fa-3x fa-bars" aria-hidden="true"></i>
        </button>
        {
          this.state.show &&
          (
            <div className="menu-list" onBlur={this.toggleMenu()}>
              <Link to="/popular">Popular</Link>
              <Link to="/top_rated">Top Rated</Link>
              <Link to="/upcoming">Upcoming</Link>
              <Link to="/now_playing">Now Playing</Link>
            </div>
          )
        }
      </div>
    );
  }
}

export default DropDown;
