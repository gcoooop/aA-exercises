import React from "react";
import MarkerManager from "../util/marker_manager"

class BenchMap extends React.Component {

  componentDidMount() {
    // set the map to show SF
    const mapOptions = {
      center: { lat: 37.7758, lng: -122.435 }, // this is SF
      zoom: 13
    };

    // wrap this.mapNode in a Google Map
    this.map = new google.maps.Map(this.mapNode, mapOptions);
    this.MarkerManager = new MarkerManager(this.map);
    this.MarkerManager.updateMarkers(this.props.benches);
    
    this.map.addListener("idle", () => {
      const SWBounds = this.map.getBounds().getSouthWest();
      const NEBounds = this.map.getBounds().getNorthEast();

      const SWCoords = { lat: SWBounds.lat(), lng: SWBounds.lng() }
      const NECoords = { lat: NEBounds.lat(), lng: NEBounds.lng() }

      const bounds = { SouthWest: SWCoords, NorthEast: NECoords };
      this.props.updateBounds(bounds);
    });
  }

  componentDidUpdate() {
    this.MarkerManager.updateMarkers(this.props.benches);
  }

  render() {
    return (
      <div id="map-container" ref={ map => this.mapNode = map }/>
    );
  }
}

export default BenchMap;