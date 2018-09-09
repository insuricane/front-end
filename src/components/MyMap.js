import React, { Component } from 'react';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import path from './path';
import cone from './cone';

export default class MyMap extends Component {
  componentDidMount() {
    const map = L.map('map', {
      center: [24.8, -81.2],
      zoom: 5,
    });

    function onEachFeature(feature, layer) {
      // does this feature have a property named popupContent?
      if (feature.properties && feature.properties.popupContent) {
        layer.bindPopup(feature.properties.popupContent);
      }
    }

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

    const geojsonMarkerOptions = {
      radius: 2.5,
      fillColor: '#FF5252',
      color: '#000',
      weight: 1,
      opacity: 1,
      fillOpacity: 0.8,
    };

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
        popupContent: 'Chance of damage: 86%',
      },
      geometry: {
        type: 'Point',
        coordinates: [-81.99404, 29.75621],
      },
    };

    const geojsonMarkerOptions2 = {
      radius: 6,
      fillColor: '#000000',
      color: '#000',
      weight: 1,
      opacity: 1,
      fillOpacity: 0.8,
    };

    L.geoJSON(geojsonFeature, {
      onEachFeature,
      pointToLayer(feature, latlng) {
        return L.circleMarker(latlng, geojsonMarkerOptions2);
      },
    }).addTo(map);
  }

  render() {
    return <div id="map" style={{ height: '500px', width: '100%' }} />;
  }
}
