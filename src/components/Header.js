import { Component } from 'react/cjs/react.production.min';

const React = require('react');

class Header extends Component {
  render() {
    const title = 'Sistema Solar';
    return (
      <header>
        <h1>{title}</h1>
      </header>
    );
  }
}

export default Header;
