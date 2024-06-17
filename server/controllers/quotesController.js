const axios = require("axios");

exports.searchQuotes = async (req, res) => {
  const { query } = req.query;
  try {
    const response = await axios.get(
      `https://api.quotable.io/search/quotes?query=${query}`
    );
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ message: "Error searching for quotes" });
  }
};
