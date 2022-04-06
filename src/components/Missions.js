import { Component } from 'react/cjs/react.production.min';
import Title from './Title';
import MissionCard from './MissionCard';
import mission from '../data/missions';

const React = require('react');

class Missions extends Component {
  render() {
    const prop = 'Missões';
    return (
      <div data-testid="missions" className="missions-container">
        <Title headline={ prop } />
        <div className="missions-card-container">
          {mission.map((value, index) => (
            <MissionCard
              key={ index }
              name={ value.name }
              country={ value.country }
              destination={ value.destination }
            />
          ))}
        </div>
      </div>
    );
  }
}
export default Missions;
