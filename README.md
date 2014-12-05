FindAirports
============

This is a demo app to searh close by airports. 

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

Airports geolocation used is provide by [OpenFlights](http://openflights.org/data.html)
