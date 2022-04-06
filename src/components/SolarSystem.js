import { Component } from 'react/cjs/react.production.min';
import Title from './Title';

const React = require('react');

class SolarSystem extends Component {
  render() {
    const prop = 'Planetas';
    return (
      <div data-testid="solar-system">
        <Title headline={ prop } />
      </div>
    );
  }
}
export default SolarSystem;
