import { Component } from 'react/cjs/react.production.min';
import Title from './Title';

const React = require('react');

class Missions extends Component {
  render() {
    const prop = 'Missões';
    return (
      <div data-testid="missions">
        <Title headline={ prop } />
      </div>
    );
  }
}
export default Missions;
