const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

// Route ya homepage
app.get("/", (req, res) => {
  res.send("🎉 PesaQuick is live on Cyclic! 🚀");
});

// Route y'ibindi pages
app.get("/about", (req, res) => {
  res.send("📖 About PesaQuick: Simple & Fast Payments");
});

app.listen(PORT, () => {
  console.log(`✅ Server running on port ${PORT}`);
});
