var should = require('should'),
    supertest = require('supertest'),
    app = require('../app');

/**
  Airport search tests
*/
describe('Airport Search', function () {
    
  describe('GET /airportsearch/:code', function () {

      it('get list of airport features', function (done) {
          var geojson = '{"type":"FeatureCollection","features":[{"type":"Feature","geometry":{"type":"Point","coordinates":[122.37488,7.61897]},"properties":{"name":"San Francisco Intl","city":"San Francisco","country":"United States"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[122.35401,7.6138]},"properties":{"name":"Seattle Pier 69 - Victoria Clipper","city":"Seattle","country":"United States"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[122.386666,7.600277]},"properties":{"name":"Millbrae Intermodal Terminal","city":"San Mateo","country":"United States"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[122.35002,7.61124]},"properties":{"name":"Seattle Cruise Terminal","city":"Seattle WA","country":"United States"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[122.3506,7.60917]},"properties":{"name":"Port of Seattle","city":"Seattle","country":"United States"}}]}';
        supertest(app)
        .get('/airportsearch/SFO')
        .expect('Content-Type', 'application/vnd.geo+json; charset=utf-8')
        .expect(200)
        .expect(geojson)
        .end(done)
      });
        
    });
});