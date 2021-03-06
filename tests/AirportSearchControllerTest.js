var should = require('should'),
    request = require('supertest'),
    app = require('../app');

/**
  Airport search tests
*/
describe('Airport Search', function () {
    
  describe('GET /airportsearch/:code', function () {

      it('get list of airport features', function (done) {
          var geojson = '{"type":"FeatureCollection","features":[{"type":"Feature","geometry":{"type":"Point","coordinates":[122.37488,7.61897]},"properties":{"name":"San Francisco Intl","city":"San Francisco","country":"United States"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[122.35401,7.6138]},"properties":{"name":"Seattle Pier 69 - Victoria Clipper","city":"Seattle","country":"United States"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[122.386666,7.600277]},"properties":{"name":"Millbrae Intermodal Terminal","city":"San Mateo","country":"United States"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[122.35002,7.61124]},"properties":{"name":"Seattle Cruise Terminal","city":"Seattle WA","country":"United States"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[122.3506,7.60917]},"properties":{"name":"Port of Seattle","city":"Seattle","country":"United States"}}]}';
        request(app)
        .get('/airportsearch/SFO')
        .expect('Content-Type', 'application/vnd.geo+json; charset=utf-8')
        .expect(200)
        .expect(geojson)
        .end(done)
      });
      
      it('Invalid FAA Code', function (done) {
        request(app)
        .get('/airportsearch/INVALID')
        .expect('Content-Type', 'application/json; charset=utf-8')
        .expect(404)
        .expect('{"url":"/airportsearch/INVALID","error":"Page Not found"}')
        .end(done)
      });
      
      it('No FAA Code', function (done) {
        request(app)
        .get('/airportsearch/')
        .expect('Content-Type', 'application/json; charset=utf-8')
        .expect(404)
        .expect('{"url":"/airportsearch/","error":"Page Not found"}')
        .end(done)
      });
        
    });
});