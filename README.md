FindAirports
============

This is a simple demo app to search close by airports using Node.js, Express.js, GeoJSON, and mongodb.


##Environment Setup

To run the app, mongodb server should be running and db url should be updated on both `app.js` and `./scripts/load_airports.js`. All airport data can be loaded using below command.

```
npm install
npm load_data
```

To start the server run
```
npm start
```

To run test cases run
```
npm test
```


##API Usage

```
GET /airportsearch/:FAACODE
```

will return 5 closest airport to search `FAACODE`. For example,

```
GET /airportsearch/SFO

{
   "type":"FeatureCollection",
   "features":[
      {
         "type":"Feature",
         "geometry":{
            "type":"Point",
            "coordinates":[
               122.37488,
               7.61897
            ]
         },
         "properties":{
            "name":"San Francisco Intl",
            "city":"San Francisco",
            "country":"United States"
         }
      },
      {
         "type":"Feature",
         "geometry":{
            "type":"Point",
            "coordinates":[
               122.35401,
               7.6138
            ]
         },
         "properties":{
            "name":"Seattle Pier 69 - Victoria Clipper",
            "city":"Seattle",
            "country":"United States"
         }
      },
      {
         "type":"Feature",
         "geometry":{
            "type":"Point",
            "coordinates":[
               122.386666,
               7.600277
            ]
         },
         "properties":{
            "name":"Millbrae Intermodal Terminal",
            "city":"San Mateo",
            "country":"United States"
         }
      },
      {
         "type":"Feature",
         "geometry":{
            "type":"Point",
            "coordinates":[
               122.35002,
               7.61124
            ]
         },
         "properties":{
            "name":"Seattle Cruise Terminal",
            "city":"Seattle WA",
            "country":"United States"
         }
      },
      {
         "type":"Feature",
         "geometry":{
            "type":"Point",
            "coordinates":[
               122.3506,
               7.60917
            ]
         },
         "properties":{
            "name":"Port of Seattle",
            "city":"Seattle",
            "country":"United States"
         }
      }
   ]
}
```

If the airport is not found then, below error message JSON is returned.

```
{
   "url":"/airportsearch/INVALID",
   "error":"Page Not found"
}
```

##License

[MIT](http://opensource.org/licenses/MIT)
Airports geolocation used is provided by [OpenFlights](http://openflights.org/data.html)
