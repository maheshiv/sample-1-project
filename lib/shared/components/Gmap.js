"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

require('./map.less');

var Gmap = (function (_React$Component) {
  _inherits(Gmap, _React$Component);

  function Gmap() {
    _classCallCheck(this, Gmap);

    _get(Object.getPrototypeOf(Gmap.prototype), "constructor", this).apply(this, arguments);
  }

  _createClass(Gmap, [{
    key: "render",
    value: function render() {
      return _react2["default"].createElement("div", { className: "google-map", ref: "map_canvas" });
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
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
  }, {
    key: "createMap",
    value: function createMap() {
      var coords = this.props.coords,
          mapOptions = {
        minZoom: 9,
        zoom: 10,
        center: new google.maps.LatLng(coords.lat, coords.lon)
      };
      return new google.maps.Map(this.refs.map_canvas.getDOMNode(), mapOptions);
    }
  }, {
    key: "createMarker",
    value: function createMarker() {
      var marker = new google.maps.Marker({
        position: new google.maps.LatLng(this.props.coords.lat, this.props.coords.lon),
        map: this.map
      });
      return marker;
    }
  }, {
    key: "createInfoWindow",
    value: function createInfoWindow() {
      var contentString = "<div class='InfoWindow'>I'm a Window that contains Info Yay</div>",
          infoWindow = new google.maps.InfoWindow({
        map: this.map,
        anchor: this.marker,
        content: contentString
      });

      return infoWindow;
    }
  }, {
    key: "handleZoomChange",
    value: function handleZoomChange() {}

    // something happens when the zoom changes
    // this is where it's handled

  }, {
    key: "handleDragEnd",
    value: function handleDragEnd() {}

    // something else happens when the map is dragged somewhere
    // this is where that's handled
  }]);

  return Gmap;
})(_react2["default"].Component);

exports["default"] = Gmap;
module.exports = exports["default"];