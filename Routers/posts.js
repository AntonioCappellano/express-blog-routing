const express = require("express");
const posts = require("../data/DataPosts");
const router = express.Router();

// INDEX
router.get("/", (req, res) => {
  const responseData = {
    result: posts,
    success: true,
  };

  res.json(responseData);
});


module.exports = router