const Favourite = require("../models/favourite");

exports.addFavourite = (req, res) => {
  const quote = req.body;
  Favourite.add(quote, (err, result) => {
    if (err) return res.status(500).json({ message: "Error saving favourite" });
    res.status(201).json({ message: "Favourite saved" });
  });
};

exports.getFavourites = (req, res) => {
  Favourite.getAll((err, results) => {
    if (err)
      return res.status(500).json({ message: "Error retrieving favourites" });
    res.json(results);
  });
};
