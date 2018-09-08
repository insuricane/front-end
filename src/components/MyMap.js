import React, { Component } from 'react';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import path from './path';
import cone from './cone';

// import map from "./jsmap.js";

// let config = {};
// config.params = {
//   center: [24.8, -81.2],
//   zoom: 11
// };
// config.tileLayer = {
//   uri:
//     "https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}",
//   params: {
//     attribution:
//       'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
//     maxZoom: 15,
//     id: "mapbox.streets",
//     accessToken:
//       "pk.eyJ1IjoiYW5kcmV3Y3VpIiwiYSI6ImNqazNkZWY0bjBodXQzbHRoN3QzdjQ2bGQifQ.B_6mN1CgDJrz2_mSjGGaOQ"
//   }
// };

export default class MyMap extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     map: null,
  //     tileLayer: null,
  //     geojsonLayer: null,
  //     geojson: null
  //   };
  //   this._mapNode = null;
  // }
  //
  // componentDidMount() {
  //   this.getData();
  //   if (!this.state.map) this.init(this._mapNode);
  //
  //   const script = document.createElement("script");
  //   script.src = "https://unpkg.com/leaflet@1.3.4/dist/leaflet.js";
  //   script.async = true;
  //
  //   document.body.appendChild(script);
  // }

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

    // L.tileLayer.provider("CartoDB.Positron").addTo(map);
    // L.tileLayer.provider("CartoDB.Voyager").addTo(map);

    const geojsonMarkerOptions = {
      radius: 2.5,
      fillColor: '#FF5252',
      color: '#000',
      weight: 1,
      opacity: 1,
      fillOpacity: 0.8,
    };

    /** just the path * */
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

    /** just the cone damge * */
    L.geoJSON(cone, {
      style: {
        color: '#FF5252',
        weight: 1,
        opacity: 0.75,
      },
    }).addTo(map);

    /** your house * */
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
  //
  // componentDidUpdate(prevProps, prevState) {
  //   if (this.state.geojson && this.state.map && !this.state.geojsonLayer) {
  //     this.addGeoJSONLayer(this.state.geojson);
  //   }
  // }
  //
  // componentWillUnmount() {
  //   this.state.map.remove();
  // }
  //
  // getData() {
  //   this.setState({
  //     geojson
  //   });
  // }
  //
  // addGeoJSONLayer(geojson) {
  //   const geojsonLayer = L.geoJson(geojson);
  //
  //   geojsonLayer.addTo(this.state.map);
  //   this.setState({ geojsonLayer });
  //   this.zoomToFeature(geojsonLayer);
  // }
  //
  // zoomToFeature(target) {
  //   var fitBoundsParams = {
  //     paddingTopLeft: [200, 10],
  //     paddingBottomRight: [10, 10]
  //   };
  //
  //   this.state.map.fitBounds(target.getBounds(), fitBoundsParams);
  // }
  //
  // init(id) {
  //   if (this.state.map) return;
  //   let map = L.map(id, config.params);
  //   L.control.zoom({ position: "bottomleft" }).addTo(map);
  //   L.control.scale({ position: "bottomleft" }).addTo(map);
  //
  //   const tileLayer = L.tileLayer(
  //     config.tileLayer.uri,
  //     config.tileLayer.params
  //   ).addTo(map);
  //
  //   this.setState({ map, tileLayer });
  // }

  render() {
    return <div id="map" style={{ height: '500px', width: '100%' }} />;
  }
}
