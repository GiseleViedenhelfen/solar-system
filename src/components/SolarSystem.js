import { Component } from 'react/cjs/react.production.min';
import Title from './Title';
import PlanetCard from './PlanetCard';
import Planets from '../data/planets';
import '../App.css';

const React = require('react');

class SolarSystem extends Component {
  render() {
    const prop = 'Planetas';
    return (
      <div data-testid="solar-system">
        <Title headline={ prop } />
        <div className="planet-container">
          {
            Planets.map((value, index) => (<PlanetCard
              key={ index }
              planetName={ value.name }
              planetImage={ value.image }
            />))
          }
        </div>
      </div>
    );
  }
}
export default SolarSystem;
