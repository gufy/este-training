import Component from 'react-pure-render/component';
import React, {PropTypes} from 'react';
import {Link} from 'react-router';
import {connect} from 'react-redux';

class Header extends Component {

  static propTypes = {
    msg: PropTypes.object.isRequired,
    pathname: PropTypes.string.isRequired,
    viewer: PropTypes.object
  };

  render() {
    return (
      <header>
        <h1>
          <Link to="/">Vetoapp</Link>
        </h1>
        <nav>
          <Link to="/me">Me</Link>
        </nav>
      </header>
    );
  }

}

export default connect(state => ({
  msg: state.intl.msg.app.links,
  viewer: state.users.viewer
}))(Header);
