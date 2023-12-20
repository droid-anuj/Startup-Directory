// routes/api.js

const { Router } = require("express");
const StartupDataModel = require("../model/schema.js");

const router = Router();

router.get("/startups", async (req, res) => {
  try {
    // Pagination parameters
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 20;

    // Calculate the skip value to skip the previous pages
    const skip = (page - 1) * limit;

    // Fetch startups based on pagination parameters
    const startups = await StartupDataModel.find()
      .skip(skip)
      .limit(limit);

    res.set("Content-Type", "application/json");
    res.json(startups);
  } catch (err) {
    console.error("Failed to retrieve startup data", err);
    res.status(500).json({ error: "Failed to retrieve startup data" });
  }
});

module.exports = router;
