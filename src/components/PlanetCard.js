import { Component } from 'react/cjs/react.production.min';
import PropTypes from 'prop-types';

const React = require('react');

class PlanetCard extends Component {
  render() {
    const { planetName, planetImage } = this.props;
    return (
      <div data-testid="planet-card">
        <p>{planetName}</p>
        <img src={ planetImage } alt={ `Planeta ${planetName}` } />
      </div>
    );
  }
}
PlanetCard.propTypes = {
  planetImage: PropTypes.arrayOf(PropTypes.string).isRequired,
  planetName: PropTypes.arrayOf(PropTypes.string).isRequired,
};
export default PlanetCard;
