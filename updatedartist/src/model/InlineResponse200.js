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

import ApiClient from '../ApiClient';

/**
 * The InlineResponse200 model module.
 * @module model/InlineResponse200
 * @version 1.0.0
 */
class InlineResponse200 {
    /**
     * Constructs a new <code>InlineResponse200</code>.
     * @alias module:model/InlineResponse200
     */
    constructor() { 
        
        InlineResponse200.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>InlineResponse200</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineResponse200} obj Optional instance to populate.
     * @return {module:model/InlineResponse200} The populated <code>InlineResponse200</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new InlineResponse200();

            if (data.hasOwnProperty('artist_name')) {
                obj['artist_name'] = ApiClient.convertToType(data['artist_name'], 'String');
            }
            if (data.hasOwnProperty('artist_genre')) {
                obj['artist_genre'] = ApiClient.convertToType(data['artist_genre'], 'String');
            }
            if (data.hasOwnProperty('albums_recorded')) {
                obj['albums_recorded'] = ApiClient.convertToType(data['albums_recorded'], 'Number');
            }
        }
        return obj;
    }


}

/**
 * @member {String} artist_name
 */
InlineResponse200.prototype['artist_name'] = undefined;

/**
 * @member {String} artist_genre
 */
InlineResponse200.prototype['artist_genre'] = undefined;

/**
 * @member {Number} albums_recorded
 */
InlineResponse200.prototype['albums_recorded'] = undefined;






export default InlineResponse200;

