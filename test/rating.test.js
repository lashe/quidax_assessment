const { expect } = require('chai');
const { getRating, rateBook } = require('../src/app/services/rating.service');

describe('book rating functions', ()=> {
    it('return ratings for a particular book', (done) => {
      getRating(1234).then(
          result =>{
              expect(result).to.be.a('object');
              done();
          }
      ).catch(done);
    });
    it('rate a book', (done) => {
        rateBook(1234, 1).then(
            result =>{
                expect(result).to.be.a('boolean');
                done();
            }
        ).catch(done);
      });
  });