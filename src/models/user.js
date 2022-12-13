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
