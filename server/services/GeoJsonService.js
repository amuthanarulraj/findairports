module.exports = function () {
    
    /**
      Returns geojson of type 'FeatureCollection'.
      
      @param {array} list of airports
      @return geojson
    */
    function airportListGeoJson(airports) {
        var geoJson = {
            type: 'FeatureCollection'
        },
            features = [];
        
        //Build geojson
        if (airports) {
            airports.forEach(function (item) {
                var feature = {
                    type: 'Feature',
                    geometry: {
                        type: 'Point', 'coordinates': item.loc
                    },
                    properties: {
                        name: item.name,
                        city: item.city,
                        country: item.country
                    }
                };
                features.push(feature);
            });
            geoJson.features = features;
        }
        return geoJson;
    }
    
    return {
        airportListGeoJson: airportListGeoJson
    }
}