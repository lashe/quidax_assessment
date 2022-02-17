const express = require("express");
const bodyParser = require("body-parser");
const helmet = require("helmet");
const cors = require("cors");
const session = require("express-session");
var path = require("path");

const bookRoute = require("./app/routes/books.js");
const searchRoute = require("./app/routes/search.js");
const cartRoute = require("./app/routes/cart.js");
const { GraphqlController } = require("./app/controllers/graphql/index.js");

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(helmet());
var allowedOrigins = [
  "http://localhost:3000"
];

app.use(
  cors({
    origin: function (origin, callback) {
      // allow requests with no origin
      // (like mobile apps or curl requests)

      if (!origin) return callback(null, true);
      if (allowedOrigins.indexOf(origin) === -1) {
        var msg =
          "The CORS policy for this site does not " +
          "allow access from the specified Origin.";
        return callback(new Error(msg), false);
      }
      return callback(null, true);
    },
  })
);

app.use(
  session({ secret: "thisisthesecretpass123456", saveUninitialized: true, resave: true })
);

app.use("/v1/book", bookRoute);
app.use("/v1/search", searchRoute);
app.use("/v1/cart", cartRoute);
app.use("/gql", GraphqlController);

module.exports = app;