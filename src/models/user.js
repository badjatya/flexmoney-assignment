const mongoose = require("mongoose");

// Library
const validator = require("validator");

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "A user must have a name"],
      trim: true,
      lowercase: true,
      maxlength: [50, "Name must be less than 50 characters"],
    },
    email: {
      type: String,
      required: [true, "A user must have a email"],
      trim: true,
      unique: [true, "A user must have a unique email"],
      lowercase: true,
      maxlength: [50, "Email must be less than 50 characters"],
      validate: validator.isEmail,
    },
    batch: {
      type: String,
      required: [true, "A user must have a batch"],
      enum: {
        values: ["6-7 AM", "7-8 AM", "8-9 AM", "5-6 PM"],
        message: "Please select from the batch category",
      },
    },
    age: {
      type: Number,
      min: 18,
      max: 65,
      required: [true, "A user must have a age"],
    },
  },
  {
    timestamps: true,
  }
);

// Exporting Model
module.exports = mongoose.model("User", userSchema);
