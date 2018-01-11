import React from 'react';
import { Link } from 'react-router-dom';

class DropDown extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      menuActive: false
    };
  }

  toggleMenu() {
    return () => {
      this.setState({menuActive: !this.state.menuActive});
    };
  }

  render() {
    console.log(this.state);
    return (
      <div className="btn-menu">
        <i onFocusCapture={this.toggleMenu()} onBlurCapture={this.toggleMenu()} className="fa fa-bars" aria-hidden="true"></i>
        { this.state.menuActive &&
          <div>
            <li onClick={this.toggleMenu()}><Link to="/popular">Popular</Link></li>
            <li onClick={this.toggleMenu()}><Link to="/top_rated">Top Rated</Link></li>
            <li onClick={this.toggleMenu()}><Link to="/upcoming">Upcoming</Link></li>
            <li onClick={this.toggleMenu()}><Link to="/now_playing">Now Playing</Link></li>
          </div>
        }
      </div>
    );
  }
}

export default DropDown;
