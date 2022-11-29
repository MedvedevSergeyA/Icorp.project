const express = require("express");
const router = express.Router({ mergeParams: true });

// /api/signUp
router.post("/signUp", async (req, res) => {});

// /api/signInWithPassword
router.post("/signInWithPassword", async (req, res) => {});

// /api/token
router.post("/token", async (req, res) => {});

module.exports = router;
