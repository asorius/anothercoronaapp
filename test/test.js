const expect = require('chai').expect;
const server = require('../server');
const chaiHttp = require('chai-http');
const chai = require('chai');
const mocha = require('mocha');
chai.use(chaiHttp);

describe('/GET api/id', function () {
  it(' is expected to return a valid response', (done) => {
    chai
      .request(server)
      .get('/api/LT')
      .end((error, res) => {
        expect(res).to.have.status(200);
        expect(res).to.be.json;
        expect(res.body.data.country).to.be.equal('Lithuania');
        done();
      });
  });
});
describe('/Get api/history/name', () => {
  it('expected to return history of Lithuania', (done) => {
    chai
      .request(server)
      .get('/api/history/lithuania')
      .end((error, res) => {
        expect(res).to.have.status(200);
        expect(res).to.be.json;
        expect(res.body.data).to.include.all.keys(['country', 'timeline']);
        expect(res.body.data.country).to.be.equal('Lithuania');
        done();
      });
  });
});
describe('/GET api/stats', () => {
  it('exptected to return status of ok', (done) => {
    chai
      .request(server)
      .get('/api/stats')
      .end((error, res) => {
        expect(res).to.have.status(200);
        expect(res.body.data.stat).to.be.equal('ok');
        done();
      });
  });
});
