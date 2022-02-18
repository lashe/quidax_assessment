const { expect } = require('chai');
const { getCart, addToCart } = require('../src/app/services/cart.service');

describe('cart functions', ()=> {
    it('should return all items in a users cart', (done) => {
      getCart(1).then(
          result =>{
              expect(result).to.be.a('object');
              done();
          }
      ).catch(done);
    });
    it('add a book to users cart', (done) => {
        addToCart(1234, 1, 2).then(
            result =>{
                expect(result).to.be.a('boolean');
                done();
            }
        ).catch(done);
      });
  });
