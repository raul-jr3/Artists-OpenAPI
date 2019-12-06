/**
 * Simple API
 * A simple API to illustrate OpenAPI concepts
 *
 * The version of the OpenAPI document: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', process.cwd()+'/src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require(process.cwd()+'/src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.SimpleApi);
  }
}(this, function(expect, SimpleApi) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new SimpleApi.InlineResponse200();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('InlineResponse200', function() {
    it('should create an instance of InlineResponse200', function() {
      // uncomment below and update the code to test InlineResponse200
      //var instane = new SimpleApi.InlineResponse200();
      //expect(instance).to.be.a(SimpleApi.InlineResponse200);
    });

    it('should have the property artistName (base name: "artist_name")', function() {
      // uncomment below and update the code to test the property artistName
      //var instane = new SimpleApi.InlineResponse200();
      //expect(instance).to.be();
    });

    it('should have the property artistGenre (base name: "artist_genre")', function() {
      // uncomment below and update the code to test the property artistGenre
      //var instane = new SimpleApi.InlineResponse200();
      //expect(instance).to.be();
    });

    it('should have the property albumsRecorded (base name: "albums_recorded")', function() {
      // uncomment below and update the code to test the property albumsRecorded
      //var instane = new SimpleApi.InlineResponse200();
      //expect(instance).to.be();
    });

  });

}));
