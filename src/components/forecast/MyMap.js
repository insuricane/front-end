import React, { Component } from 'react';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import path from './path';
import cone from './cone';
import './leaflet-providers';

const mapStyles = {
  height: '500px',
  width: '100%',
  marginBottom: '1rem',
};

const BLACK = '#000';
const RED = '#FF5252';

const geojsonMarkerOptions = {
  radius: 2.5,
  fillColor: RED,
  color: BLACK,
  weight: 1,
  opacity: 1,
  fillOpacity: 0.8,
};

const houseMarkerStyles = {
  radius: 6,
  fillColor: BLACK,
  color: BLACK,
  weight: 1,
  opacity: 1,
  fillOpacity: 0.8,
};

const onEachFeature = (feature, layer) => {
  // does this feature have a property named popupContent?
  if (feature.properties && feature.properties.popupContent) {
    layer.bindPopup(feature.properties.popupContent);
  }
};

class Map extends Component {
  componentDidMount() {
    const {
      location: {
        lng,
        lat,
      },
    } = this.props;

    const map = L.map('map', {
      center: [lat, lng],
      zoom: 5,
    });

    L.tileLayer(
      'https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}',
      {
        attribution:
          'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
        maxZoom: 15,
        id: 'mapbox.streets',
        accessToken:
          'pk.eyJ1IjoiYW5kcmV3Y3VpIiwiYSI6ImNqazNkZWY0bjBodXQzbHRoN3QzdjQ2bGQifQ.B_6mN1CgDJrz2_mSjGGaOQ',
      },
    ).addTo(map);

    L.tileLayer.provider('CartoDB.Voyager').addTo(map);

    // Path
    L.geoJSON(path, {
      style: {
        color: '#FF5252',
        weight: 2,
        opacity: 0.8,
      },
      pointToLayer(feature, latlng) {
        return L.circleMarker(latlng, geojsonMarkerOptions);
      },
    }).addTo(map);

    // Just the cone damage
    L.geoJSON(cone, {
      style: {
        color: '#FF5252',
        weight: 1,
        opacity: 0.75,
      },
    }).addTo(map);

    // Your house
    const geojsonFeature = {
      type: 'Feature',
      properties: {
        name: 'Home',
      },
      geometry: {
        type: 'Point',
        coordinates: [lng, lat],
      },
    };

    L.geoJSON(geojsonFeature, {
      onEachFeature,
      pointToLayer(feature, latlng) {
        return L.circleMarker(latlng, houseMarkerStyles);
      },
    }).addTo(map);
  }

  render() {
    return <div id="map" style={mapStyles} />;
  }
}

const mapStateToProps = ({ userState }) => ({
  location: userState.location,
});

Map.propTypes = {
  location: PropTypes.shape({
    lng: PropTypes.number,
    lat: PropTypes.number,
  }).isRequired,
};

// Redux config
export default connect(
  mapStateToProps,
)(Map);
