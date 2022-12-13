const mongoose = require("mongoose");

const paymentSchema = new mongoose.Schema(
  {
    userID: {
      type: mongoose.Schema.Types.ObjectId,
      required: [true, "A payment must have a user"],
      ref: "User",
    },
    amount: {
      type: Number,
      default: 500,
    },
  },
  {
    timestamps: true,
  }
);

// Exporting Model
module.exports = mongoose.model("User", paymentSchema);
