import React from 'react';
import { Link } from 'react-router-dom';

class SideBar extends React.Component {
  render () {
    return (
      <div>
        SIDEBAR
        <Link to="/popular">Popular</Link>
        <Link to="/now_playing">Now Playing</Link>
        <Link to="/upcoming">Upcoming</Link>
      </div>
    );
  }
}

export default SideBar;
