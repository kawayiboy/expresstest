var request = require('supertest');
var expect = require('expect.js');

describe('loading express', function() {
    var server;
    beforeEach(function() {
        server = require('../app');
    });
    // afterEach(function () {
    //   server.close();
    // });
    it('responds to /', function testSlash(done) {
        request(server)
            .get('/status')
            .expect(200, done);
    });

    it("should respond with hello world", function testjson(done) {
        request(server)
            .get('/json')
            .end(function(err, res) {
                var jsonobj = {
                    status: 200,
                    message: 'test'
                };

                data = res.body;
                expect(data['status']).to.equal(200);
                expect(data['message']).to.equal('test');
                done();
            });
    });

    // it('should trim spaces', function () {
    //   expect(trimStr('x y  erwsfds')).toBe('xyerwsfds');
    // });

    it('404 everything else', function testPath(done) {
        request(server)
            .get('/foo/bar')
            .expect(404, done);
    });
});
