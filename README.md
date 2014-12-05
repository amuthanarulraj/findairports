FindAirports
============

This is a demo app to search close by airports. 

`
GET /airportsearch/:FAACODE
`

will return 5 closest airport to search `FAACODE`.

For example,

`
GET /airportsearch/SFO
`

```
npm install
npm load_data
npm start
npm test
```

Airports geolocation used is provided by [OpenFlights](http://openflights.org/data.html)
