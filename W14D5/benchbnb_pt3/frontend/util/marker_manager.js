export default class MarkerManager {
  constructor(map) {
    this.map = map;
    this.markers = {};
  }

  updateMarkers(benches) {
    benches.forEach( bench => {
      if (!this.markers.hasOwnProperty(bench.id)) {
        const marker = this.createMarkerFromBench(bench);
        this.markers[bench.id] = marker;
      };
    });

    const benchesObj = {};
    benches.forEach( bench => {
      benchesObj[bench.id] = bench;
    });

    Object.keys(this.markers).forEach( markerId => {
      if (!benchesObj[markerId]) delete this.markers[markerId];
    });
  }

  createMarkerFromBench(bench) {
    return new google.maps.Marker({
      position: { lat: bench.lat, lng: bench.long },
      map: this.map,
      title: bench.description
    });
  }
}