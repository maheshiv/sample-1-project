"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _reactRouter = require("react-router");

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _componentsGmap = require("./components/Gmap");

var _componentsGmap2 = _interopRequireDefault(_componentsGmap);

exports["default"] = _react2["default"].createElement(_reactRouter.Route, { handler: _componentsGmap2["default"], path: "/" });
module.exports = exports["default"];