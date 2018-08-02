import React, { Component } from 'react';
import {Map, Marker, GoogleApiWrapper} from 'google-maps-react';

export class MapContainer extends Component {

    render() {
        let quakeMarkers = this.props.quakes.map((element, index) => (
          <Marker
            key={index}
            title={element.properties.place}
            name={element.properties.place} 
            position={{
              lat: element.geometry.coordinates[1],
              lng: element.geometry.coordinates[0]
            }}
          />
        )
      )
      return (
      <div className="mapContainer">
        <Map
        google={this.props.google}
        initialCenter={{
          lat: 39.742043,
          lng: -104.991531
        }}
        style={{width: '40%', height: '35%'}}
        zoom={1}>
        {quakeMarkers}
        </Map>
      </div>
      )
    }
  }

export default GoogleApiWrapper({
  apiKey: ('AIzaSyBHLett8djBo62dDXj0EjCimF8Rd6E8cxg')
})(MapContainer)
