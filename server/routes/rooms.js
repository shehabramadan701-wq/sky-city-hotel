const express = require("express");
const router = express.Router();
// const db = require("../db");

// GET /api/rooms  -> كل الغرف
router.get("/", async (req, res) => {
  // TODO
  // const [rooms] = await db.query("SELECT * FROM rooms");
  // res.json(rooms);
  res.json({ message: "TODO" });
});

// GET /api/rooms/3  -> غرفة واحدة
router.get("/:id", async (req, res) => {
  // TODO
  // const [rooms] = await db.query("SELECT * FROM rooms WHERE id = ?", [req.params.id]);
  // res.json(rooms[0]);
  res.json({ message: "TODO" });
});

module.exports = router;
