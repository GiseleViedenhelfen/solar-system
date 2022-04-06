import { Component } from 'react/cjs/react.production.min';
import PropTypes from 'prop-types';

const React = require('react');

class Title extends Component {
  render() {
    const { headline } = this.props;
    return (
      <h2>
        {headline}
      </h2>
    );
  }
}
Title.propTypes = {
  headline: PropTypes.string.isRequired,
};
export default Title;
