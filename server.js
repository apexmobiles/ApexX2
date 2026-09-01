const express = require("express");
const cors = require("cors");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());

// Basic APEX OS information
const apexOS = {
  name: "APEX OS",
  version: "1.0.0",
  status: "online"
};

// Health check
app.get("/api/health", (req, res) => {
  res.json({
    success: true,
    message: "APEX OS backend is running",
    status: "online"
  });
});

// APEX OS information
app.get("/api/os", (req, res) => {
  res.json({
    success: true,
    os: apexOS
  });
});

// Serve frontend later
app.use(express.static(path.join(__dirname, "public")));

// Start server
app.listen(PORT, () => {
  console.log(`APEX OS running on port ${PORT}`);
});
