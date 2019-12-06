"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The Artist model module.
 * @module model/Artist
 * @version 1.0.0
 */
var Artist =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>Artist</code>.
   * @alias module:model/Artist
   * @param username {String} 
   */
  function Artist(username) {
    _classCallCheck(this, Artist);

    Artist.initialize(this, username);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(Artist, null, [{
    key: "initialize",
    value: function initialize(obj, username) {
      obj['username'] = username;
    }
    /**
     * Constructs a <code>Artist</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Artist} obj Optional instance to populate.
     * @return {module:model/Artist} The populated <code>Artist</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new Artist();

        if (data.hasOwnProperty('artist_name')) {
          obj['artist_name'] = _ApiClient["default"].convertToType(data['artist_name'], 'String');
        }

        if (data.hasOwnProperty('artist_genre')) {
          obj['artist_genre'] = _ApiClient["default"].convertToType(data['artist_genre'], 'String');
        }

        if (data.hasOwnProperty('albums_recorded')) {
          obj['albums_recorded'] = _ApiClient["default"].convertToType(data['albums_recorded'], 'Number');
        }

        if (data.hasOwnProperty('username')) {
          obj['username'] = _ApiClient["default"].convertToType(data['username'], 'String');
        }
      }

      return obj;
    }
  }]);

  return Artist;
}();
/**
 * @member {String} artist_name
 */


Artist.prototype['artist_name'] = undefined;
/**
 * @member {String} artist_genre
 */

Artist.prototype['artist_genre'] = undefined;
/**
 * @member {Number} albums_recorded
 */

Artist.prototype['albums_recorded'] = undefined;
/**
 * @member {String} username
 */

Artist.prototype['username'] = undefined;
var _default = Artist;
exports["default"] = _default;