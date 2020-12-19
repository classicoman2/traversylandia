const mongoose = require("mongoose");

// xtoni Que és Schema?
const CyclistSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
    lowercase: true,
    validate(value) {
      if (value == "") throw new Error("El camp text no pot estar buid");
    },
  },
  birth_date: {
    type: Date,
    required: true,
    trim: true,
    lowercase: true,
    validate(value) {
      if (value == "") throw new Error("El camp text no pot estar buid");
    },
  },
  weight: {
    type: Number,
    required: true,
    trim: true,
    lowercase: true,
    validate(value) {
      if (value == "") throw new Error("El camp text no pot estar buid");
    },
  },
  height: {
    type: Number,
    required: true,
    trim: true,
    lowercase: true,
    validate(value) {
      if (value == "") throw new Error("El camp text no pot estar buid");
    },
  },
});

const Cyclist = mongoose.model("Cyclist", CyclistSchema);

module.exports = Cyclist;
