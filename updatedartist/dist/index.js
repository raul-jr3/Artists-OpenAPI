"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "ApiClient", {
  enumerable: true,
  get: function get() {
    return _ApiClient["default"];
  }
});
Object.defineProperty(exports, "Artist", {
  enumerable: true,
  get: function get() {
    return _Artist["default"];
  }
});
Object.defineProperty(exports, "InlineResponse200", {
  enumerable: true,
  get: function get() {
    return _InlineResponse["default"];
  }
});
Object.defineProperty(exports, "InlineResponse400", {
  enumerable: true,
  get: function get() {
    return _InlineResponse2["default"];
  }
});
Object.defineProperty(exports, "DefaultApi", {
  enumerable: true,
  get: function get() {
    return _DefaultApi["default"];
  }
});

var _ApiClient = _interopRequireDefault(require("./ApiClient"));

var _Artist = _interopRequireDefault(require("./model/Artist"));

var _InlineResponse = _interopRequireDefault(require("./model/InlineResponse200"));

var _InlineResponse2 = _interopRequireDefault(require("./model/InlineResponse400"));

var _DefaultApi = _interopRequireDefault(require("./api/DefaultApi"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }