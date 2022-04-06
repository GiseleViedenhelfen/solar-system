import { Component } from 'react/cjs/react.production.min';
import Title from './Title';
import PlanetCard from './PlanetCard';
import Planets from '../data/planets';
import '../App.css';

const React = require('react');

class SolarSystem extends Component {
  render() {
    const planetName = Planets.map((value) => value.name);
    const planetImage = Planets.map((value) => value.image);
    const prop = 'Planetas';
    return (
      <div data-testid="solar-system" className="planet-container">
        <Title headline={ prop } />
        <PlanetCard
          planetName={ planetName }
          planetImage={ planetImage }
        />
      </div>
    );
  }
}
export default SolarSystem;
