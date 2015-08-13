import React from "react";
import './map.less';
export default class Gmap extends React.Component {  
  render() {
    return (
      <div className = "google-map" ref = "map_canvas">

      </div>
    );
  }
  componentDidMount() {
     // create the map, marker and infoWindow after the component has
     // been rendered because we need to manipulate the DOM for Google =(
    this.map = this.createMap();
    this.marker = this.createMarker();
    this.infoWindow = this.createInfoWindow();

     // have to define google maps event listeners here too
     // because we can't add listeners on the map until its created
    google.maps.event.addListener(this.map, 'zoom_changed', this.handleZoomChange);
    google.maps.event.addListener(this.map, 'dragend', this.handleDragEnd);
  }
  createMap() {
    var coords = this.props.coords,
      mapOptions = {
        minZoom: 9,
        zoom: 10,
        center: new google.maps.LatLng(coords.lat, coords.lon)
      };
    return new google.maps.Map(this.refs.map_canvas.getDOMNode(), mapOptions);
  }
  createMarker() {
    var marker = new google.maps.Marker({
      position: new google.maps.LatLng(this.props.coords.lat, this.props.coords.lon),
      map: this.map
    })
    return marker;  
  }

  createInfoWindow() {
    var contentString = "<div class='InfoWindow'>I'm a Window that contains Info Yay</div>",
      infoWindow = new google.maps.InfoWindow({
        map: this.map,
        anchor: this.marker,
        content: contentString
      });

    return infoWindow;
  }

  handleZoomChange() {

  }
     // something happens when the zoom changes
     // this is where it's handled

  handleDragEnd() {

  }
     // something else happens when the map is dragged somewhere
     // this is where that's handled
}