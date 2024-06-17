const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const quotesRoutes = require("./routes/quotes");
const favouritesRoutes = require("./routes/favourites");
const db = require("./config/db");

app.use(cors());
app.use(bodyParser.json());

app.use("/api/quotes", quotesRoutes);
app.use("/api/favourites", favouritesRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
