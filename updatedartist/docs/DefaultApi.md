# SimpleApi.DefaultApi

All URIs are relative to *http://192.168.5.183:5000/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**artistsGet**](DefaultApi.md#artistsGet) | **GET** /artists | 
[**artistsPost**](DefaultApi.md#artistsPost) | **POST** /artists | 
[**artistsUsernameGet**](DefaultApi.md#artistsUsernameGet) | **GET** /artists/{username} | 



## artistsGet

> [Artist] artistsGet(opts)



Returns a list of artists

### Example

```javascript
import SimpleApi from 'simple_api';
let defaultClient = SimpleApi.ApiClient.instance;
// Configure API key authorization: cookieAuth
let cookieAuth = defaultClient.authentications['cookieAuth'];
cookieAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//cookieAuth.apiKeyPrefix = 'Token';

let apiInstance = new SimpleApi.DefaultApi();
let opts = {
  'limit': 56, // Number | Limits the number of items on a page
  'offset': 56 // Number | Specifies the page number of the artists to be displayed
};
apiInstance.artistsGet(opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **limit** | **Number**| Limits the number of items on a page | [optional] 
 **offset** | **Number**| Specifies the page number of the artists to be displayed | [optional] 

### Return type

[**[Artist]**](Artist.md)

### Authorization

[cookieAuth](../README.md#cookieAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## artistsPost

> artistsPost(artist)



Lets a user post a new artist

### Example

```javascript
import SimpleApi from 'simple_api';
let defaultClient = SimpleApi.ApiClient.instance;
// Configure API key authorization: cookieAuth
let cookieAuth = defaultClient.authentications['cookieAuth'];
cookieAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//cookieAuth.apiKeyPrefix = 'Token';

let apiInstance = new SimpleApi.DefaultApi();
let artist = new SimpleApi.Artist(); // Artist | 
apiInstance.artistsPost(artist, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **artist** | [**Artist**](Artist.md)|  | 

### Return type

null (empty response body)

### Authorization

[cookieAuth](../README.md#cookieAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## artistsUsernameGet

> InlineResponse200 artistsUsernameGet(username)



Obtain information about an artist from his or her unique username

### Example

```javascript
import SimpleApi from 'simple_api';
let defaultClient = SimpleApi.ApiClient.instance;
// Configure API key authorization: cookieAuth
let cookieAuth = defaultClient.authentications['cookieAuth'];
cookieAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//cookieAuth.apiKeyPrefix = 'Token';

let apiInstance = new SimpleApi.DefaultApi();
let username = "username_example"; // String | 
apiInstance.artistsUsernameGet(username, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **username** | **String**|  | 

### Return type

[**InlineResponse200**](InlineResponse200.md)

### Authorization

[cookieAuth](../README.md#cookieAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

