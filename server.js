const express = require("express");
const cors = require('cors');
const path = require("path");

const app = express();
app.use(cors());

// Serve static files from the React app in the 'frontend/build' folder
app.use(express.static(path.join(__dirname, "../frontend")));

// Define API routes if needed
// Example:
// app.get('/api/data', (req, res) => {
//   res.json({ message: 'API endpoint reached' });
// });

// app.use("/api/submit", require("./routes/usersDet"));

app.get('/api/submit', (req, res) => {
  res.send("From Server")
});
app.post('/api/submit', (req, res) => {
  const { firstname, lastname, email, paymentPlan, donationAmount } = req.body;
  res.json({ message: "Thank you for your Donation" });
})

app.listen(5000, () => {
  console.log("Server started at port 5000");
});
