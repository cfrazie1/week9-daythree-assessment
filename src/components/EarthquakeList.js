import React, { Component } from 'react';
import Earthquakes from '../data/earthquakes.js';
import moment from 'moment';
// import '../styles/EarthquakeList.css';

export default class EarthquakesList extends Component  {
    render() {
      let quakes = Earthquakes.features.map((index) => {
        return (
            <div className="col-sm-6" key={index.id}>
                <div className="card" >
                    <div className="card-block">
                        <h4 className="card-title">{index.properties.place}</h4>
                        <h6 className="card-subtitle mb-2 text-muted">Magnitude: {index.properties.mag}</h6>
                        <h6 className="card-subtitle mb-2 text-muted">Time: {moment(index.time).format('llll')}</h6>
                        <p className="card-text">Coordinates: {index.geometry.coordinates}</p>

                        <a href={index.url} className="card-link">USGS Event Link</a>
              </div>
            </div>
          </div>
          )}
    );
      return (
        <div className="quake-list">
            <div className="row">
            {quakes}
            </div>
        </div>
      );
    }
  }
