const { expect } = require('chai');
const { getAllBooks, getFeaturedBooks, getBookById, likesCount, likeBook, unLikeBook } = require('../src/app/services/books.service');
const { search } = require('../src/app/services/search.service');
  describe('book functions', ()=> {
    it('should return all books', (done) => {
      getAllBooks(1).then(
          result =>{
              expect(result).to.be.a('object');
              done();
          }
      ).catch(done);
    });
    it('should return featured', (done) => {
        getFeaturedBooks().then(
            result =>{
                expect(result).to.be.a('object');
                done();
            }
        ).catch(done);
      });
      it('should return book details', (done) => {
        getBookById(1234).then(
            result =>{
                expect(result).to.be.a('object');
                done();
            }
        ).catch(done);
      });  
      it('should return number of likes for a book', (done) => {
        likesCount(1234).then(
            result =>{
                expect(result).to.be.a('number');
                done();
            }
        ).catch(done);
      });  
      it('like a book by user', (done) => {
        likeBook(1234, 4321).then(
            result =>{
                expect(result).to.be.a('boolean');
                done();
            }
        ).catch(done);
      });  
      it('unlike a book by user', (done) => {
        unLikeBook(1234, 4321).then(
            result =>{
                expect(result).to.be.a('boolean');
                done();
            }
        ).catch(done);
      });  
      it('book search', (done) => {
        search("random").then(
            result =>{
                expect(result).to.be.a('object');
                done();
            }
        ).catch(done);
      });  
  });
