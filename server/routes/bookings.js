const express = require("express");
const router = express.Router();
// const db = require("../db");

// POST /api/bookings  -> حجز جديد
router.post("/", async (req, res) => {
  // TODO
  // const b = req.body;
  // await db.query(
  //   "INSERT INTO bookings (room_id, check_in, check_out, guests, full_name, email, phone, notes, total_price) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)",
  //   [b.room_id, b.check_in, b.check_out, b.guests, b.full_name, b.email, b.phone, b.notes, b.total_price]
  // );
  // res.json({ message: "Booking saved" });
  res.json({ message: "TODO" });
});

module.exports = router;
