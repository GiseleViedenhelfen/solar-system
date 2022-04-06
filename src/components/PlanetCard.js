import { Component } from 'react/cjs/react.production.min';
import PropTypes from 'prop-types';

const React = require('react');

class PlanetCard extends Component {
  render() {
    const { planetName, planetImage } = this.props;
    return (
      planetName.map((name, index) => (
        <div key={ name } data-testid="planet-card" className="planet-card">
          <p data-testid="planet-name">{name}</p>
          <img
            src={ planetImage[index] }
            alt={ `Planeta ${name}` }
            className="planet-image"
          />
        </div>
      ))
    );
  }
}
PlanetCard.propTypes = {
  planetImage: PropTypes.arrayOf(PropTypes.string).isRequired,
  planetName: PropTypes.arrayOf(PropTypes.string).isRequired,
};
export default PlanetCard;
