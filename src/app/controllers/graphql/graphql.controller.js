const { graphqlHTTP } = require('express-graphql');
const { buildSchema } = require('graphql');
const { getAllBooks, getBookById, likesCount, likeBook, unLikeBook } = require('../../services/books.service');
const { getCart, addToCart } = require('../../services/cart.service');
const { rateBook } = require('../../services/rating.service');
const { search } = require('../../services/search.service');

const schema = buildSchema(`
  type Query {
    book(id: String!): Books,
    books(page: Int): [Books],
    featuredBooks: [Books],
    getLikes(book_id: Sring!): Int,
    getCart(user_id: String): [Cart],
    search(query: String!): [Books]
  }
  type Mutation {
      likeBook(book_id: String!, user_id: String!): Boolean,
      unlikeBook(book_id: String!, user_id: String!): Boolean,
      rateBook(book_id: String!, user_id: String!, star: String!): Boolean,
      addToCart(book_id: String!, user_id: String!): Boolean,
      removeFromCart(book_id: String!, user_id: String!): Cart
  }

  type Books {
    id: Int!,
    uuid: String!,
    title: String!,
    author: String!,
    genre: String,
    about: String,
    tag: String,
    year: String,
    quantity: Int,
    price: Float,
    cover_img: String
  }
  type Ratings {
    id: Int!,
    user_id: String!,
    book_id: String!,
    star: Int
  }
  type Cart {
    id: Int!,
    user_id: String!,
    book_id: String!,
    status: Boolean,
    item_count: Int
  }
  type Likes {
    id: Int!,
    user_id: String!,
    book_id: String!,
    status: Boolean
  }
`);

const rootResolver = {
    book: input => getBookById(input.id),
    books: input => getAllBooks(input.page),
    getLikes: input => likesCount(input.book_id),
    featuredBooks: () => getAllBooks(),
    getCart: input => getCart(input.user_id) ,
    search: input => search(input.query) ,
    likeBook: input => likeBook(input.book_id && input.user_id),
    unlikeBook: input => unLikeBook(input.book_id && input.user_id),
    rateBook: input => rateBook(input.book_id && input.user_id && input.star),
    addToCart: input => addToCart(input.book_id && input.user_id),
  };
  
  const graphql = graphqlHTTP({
    schema,
    rootValue: rootResolver,
    graphiql: true, 
  });
  
  module.exports = graphql;