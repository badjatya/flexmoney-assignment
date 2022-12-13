// Model
const User = require("../models/user");
const Payment = require("../models/payment");

// Utils
const customError = require("../utils/customError");

// User can enroll
exports.enroll = async (req, res) => {
  try {
    res.set("Access-Control-Allow-Origin", "*");
    // Destructuring request body
    const { name, email, batch, age } = req.body;

    // Checking required elements
    if (!name || !email || !batch || !age) {
      return customError(res, 400, "Name, email, batch and age are required");
    }

    // Checking already user
    const isUserExist = await User.findOne({ email });

    // If user already exist checking has he already paid for this month
    if (isUserExist) {
      // Checking already payment made for this month
      const d = new Date();
      const month = d.getMonth();
      const year = d.getFullYear();

      // Finding payment
      const paymentExist = await Payment.findOne({
        userID: isUserExist._id,
        month,
        year,
      });

      //   If payment exist throwing error
      if (paymentExist) {
        return customError(
          res,
          400,
          "Payment already completed for this month",
          "error"
        );
      }

      //   If not exist creating payment
      await Payment.create({ userID: isUserExist._id, month, year });
      return res.json({
        status: "success",
        message: "Payment done successfully",
      });
    }

    // Enrolling new user
    const user = await User.create({ name, email, batch, age });

    // Creating payment
    const d = new Date();
    const month = d.getMonth();
    const year = d.getFullYear();
    await Payment.create({ userID: user._id, month, year });

    // Sending response
    res.json({
      status: "success",
      message: "Payment done successfully",
    });
  } catch (error) {
    console.log(error);
    customError(res, 500, error.message, "error");
  }
};
