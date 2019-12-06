"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _Artist = _interopRequireDefault(require("../model/Artist"));

var _InlineResponse = _interopRequireDefault(require("../model/InlineResponse200"));

var _InlineResponse2 = _interopRequireDefault(require("../model/InlineResponse400"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
* Default service.
* @module api/DefaultApi
* @version 1.0.0
*/
var DefaultApi =
/*#__PURE__*/
function () {
  /**
  * Constructs a new DefaultApi. 
  * @alias module:api/DefaultApi
  * @class
  * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
  * default to {@link module:ApiClient#instance} if unspecified.
  */
  function DefaultApi(apiClient) {
    _classCallCheck(this, DefaultApi);

    this.apiClient = apiClient || _ApiClient["default"].instance;
  }
  /**
   * Callback function to receive the result of the artistsGet operation.
   * @callback module:api/DefaultApi~artistsGetCallback
   * @param {String} error Error message, if any.
   * @param {Array.<module:model/Artist>} data The data returned by the service call.
   * @param {String} response The complete HTTP response.
   */

  /**
   * Returns a list of artists
   * @param {Object} opts Optional parameters
   * @param {Number} opts.limit Limits the number of items on a page
   * @param {Number} opts.offset Specifies the page number of the artists to be displayed
   * @param {module:api/DefaultApi~artistsGetCallback} callback The callback function, accepting three arguments: error, data, response
   * data is of type: {@link Array.<module:model/Artist>}
   */


  _createClass(DefaultApi, [{
    key: "artistsGet",
    value: function artistsGet(opts, callback) {
      opts = opts || {};
      var postBody = null;
      var pathParams = {};
      var queryParams = {
        'limit': opts['limit'],
        'offset': opts['offset']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = ['cookieAuth'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = [_Artist["default"]];
      return this.apiClient.callApi('/artists', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the artistsPost operation.
     * @callback module:api/DefaultApi~artistsPostCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Lets a user post a new artist
     * @param {module:model/Artist} artist 
     * @param {module:api/DefaultApi~artistsPostCallback} callback The callback function, accepting three arguments: error, data, response
     */

  }, {
    key: "artistsPost",
    value: function artistsPost(artist, callback) {
      var postBody = artist; // verify the required parameter 'artist' is set

      if (artist === undefined || artist === null) {
        throw new Error("Missing the required parameter 'artist' when calling artistsPost");
      }

      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['cookieAuth'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = null;
      return this.apiClient.callApi('/artists', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the artistsUsernameGet operation.
     * @callback module:api/DefaultApi~artistsUsernameGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse200} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Obtain information about an artist from his or her unique username
     * @param {String} username 
     * @param {module:api/DefaultApi~artistsUsernameGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/InlineResponse200}
     */

  }, {
    key: "artistsUsernameGet",
    value: function artistsUsernameGet(username, callback) {
      var postBody = null; // verify the required parameter 'username' is set

      if (username === undefined || username === null) {
        throw new Error("Missing the required parameter 'username' when calling artistsUsernameGet");
      }

      var pathParams = {
        'username': username
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['cookieAuth'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _InlineResponse["default"];
      return this.apiClient.callApi('/artists/{username}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
  }]);

  return DefaultApi;
}();

exports["default"] = DefaultApi;