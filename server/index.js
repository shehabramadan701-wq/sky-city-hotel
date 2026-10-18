const express = require("express");
const cors = require("cors");
require("dotenv").config();

const app = express();

app.use(cors());
app.use(express.json());

// جرّب: http://localhost:5000/api/test
app.get("/api/test", (req, res) => {
  res.json({ message: "Server is working" });
});

app.use("/api/rooms", require("./routes/rooms"));
app.use("/api/bookings", require("./routes/bookings"));

app.listen(5000, () => {
  console.log("Server running on http://localhost:5000");
});
