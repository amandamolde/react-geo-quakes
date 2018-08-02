import React, { Component } from 'react';
import QuakesList from './QuakesList';
import MapContainer from './MapContainer';


class App extends Component {
  constructor(){
    super();

    this.state = {
      quakes: []
    }
  }
getQuakes = async () => {
  try {
    const quakes = await fetch('http://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/significant_week.geojson');
    const quakesJson = await quakes.json();
    console.log(quakesJson, ' this is quakes');
    return quakesJson;
  } catch (err) {
    console.log(err, 'error in catch block');
    return err;
  }
}
componentDidMount() {
  this.getQuakes().then((data) => {
    console.log(data, ' this is data');
    this.setState({quakes: data.features});
  })
}
  render() {
    console.log(this.state.quakes, ' this is state.quakes');
    return (
      <div className="app">
        <div className="mapContainer">
          <MapContainer quakes={this.state.quakes} />
        </div>
        <div className="quakeContainer">
          <h1>Earthquakes from the past week: </h1>
          <QuakesList quakes={this.state.quakes} />
        </div>
      </div>
    );
  }
}

export default App;
