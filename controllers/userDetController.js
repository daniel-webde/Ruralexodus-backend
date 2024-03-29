const userDetails = async (req, res) => {
    res.send("From Server")
  const { firstname, lastname, email, paymentPlan, donationAmount } = req.body;
  res.json({ message: "Thank you for your Donation" });
  console.log("User submited succesfully");
};

module.exports = userDetails;
