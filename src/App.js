import React from 'react';
import Header from './components/Header';
import SolarSystem from './components/SolarSystem';
import PlanetCard from './components/PlanetCard';
import Planets from './data/planets';

class App extends React.Component {
  render() {
    const planetName = Planets.map((value) => value.name);
    const planetImage = Planets.map((value) => value.image);
    return (
      <>
        <Header />
        <SolarSystem />
        <PlanetCard
          planetName={ planetName }
          planetImage={ planetImage }
        />
      </>
    );
  }
}

export default App;
