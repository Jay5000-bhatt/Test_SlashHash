const db = require("../config/db");

const Favourite = {
  add: (quote, callback) => {
    const query = "INSERT INTO favourites SET ?";
    db.query(query, quote, callback);
  },
  getAll: (callback) => {
    const query = "SELECT * FROM favourites";
    db.query(query, callback);
  },
};

module.exports = Favourite;
